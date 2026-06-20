// Runtime smoke test (no browser): bundle the app with esbuild, mount <App/>
// into a jsdom document, run effects, fire scroll/resize, and fail on any
// runtime error or React console.error. Catches what an HTTP 200 check can't.
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '.smoke.bundle.cjs');

const entry = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../src/App.jsx';
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
`;

await build({
  stdin: { contents: entry, resolveDir: __dirname, loader: 'jsx' },
  bundle: true,
  format: 'cjs',
  platform: 'node',
  outfile: out,
  jsx: 'automatic',
  logLevel: 'silent',
});

const dom = new JSDOM(
  '<!DOCTYPE html><html data-theme="light"><body><div id="root"></div></body></html>',
  { pretendToBeVisual: true, url: 'http://localhost/' },
);
const { window } = dom;

// wire jsdom globals + the couple of APIs jsdom lacks
global.window = window;
global.document = window.document;
// `navigator` is a read-only global on Node 21+ but absent on Node 20, where
// react-dom's event-system init references it at mount. Define it only when
// missing so this runs on any Node version.
if (typeof globalThis.navigator === 'undefined') {
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
}
global.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);
window.requestAnimationFrame = global.requestAnimationFrame;
window.cancelAnimationFrame = global.cancelAnimationFrame;
window.matchMedia = window.matchMedia || ((q) => ({
  matches: false, media: q, addEventListener() {}, removeEventListener() {},
  addListener() {}, removeListener() {}, onchange: null, dispatchEvent() { return false; },
}));
window.scrollTo = () => {};
// these are window-scoped globals in a real browser; jsdom keeps them on window
global.MutationObserver = window.MutationObserver;
global.Event = window.Event;

const errors = [];
window.addEventListener('error', (e) => errors.push('window.error: ' + (e.error?.stack || e.message)));
process.on('unhandledRejection', (r) => errors.push('unhandledRejection: ' + r));
const origErr = console.error;
console.error = (...a) => { errors.push('console.error: ' + a.map(String).join(' ')); origErr(...a); };

const require = createRequire(import.meta.url);
try {
  require(out);
} catch (e) {
  errors.push('mount threw: ' + (e.stack || e));
}

// let effects flush, then exercise scroll behaviors
await new Promise((r) => setTimeout(r, 300));
window.dispatchEvent(new window.Event('scroll'));
window.dispatchEvent(new window.Event('resize'));
await new Promise((r) => setTimeout(r, 300));

const root = window.document.getElementById('root');
const html = root.innerHTML;

// assertions
function assert(cond, msg) { if (!cond) errors.push('assert failed: ' + msg); }
assert(html.length > 2000, 'rendered HTML looks too small (' + html.length + ' chars)');
assert(/Kom n[æa]rmere/.test(root.textContent), 'hero headline "Kom nærmere" present');
assert(root.textContent.includes('sobremesa'), 'Palabras card word "sobremesa" present');
assert(root.textContent.includes('¿Vienes?'), 'CTA "¿Vienes?" present');
assert(window.document.querySelector('nav.top') !== null, 'fixed nav rendered');
assert(window.document.querySelectorAll('[data-reveal]').length > 0, 'reveal targets present');

console.error = origErr;
fs.rmSync(out, { force: true });

if (errors.length) {
  console.log('SMOKE FAIL\n' + errors.join('\n'));
  process.exit(1);
}
console.log('SMOKE PASS — App mounted, effects ran, scroll/resize fired, ' + html.length + ' chars rendered, no runtime errors.');
