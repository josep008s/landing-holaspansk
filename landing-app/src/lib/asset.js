// Resolve a public asset path against Vite's configured base URL so the app
// works both at the domain root (local dev: base "/") and under a GitHub
// Pages project subpath (e.g. "/landing-holaspansk/"). The optional chaining
// keeps it safe under the jsdom smoke test, where import.meta.env is absent.
const base = (import.meta?.env?.BASE_URL) || '/';

export const asset = (p) => base + String(p).replace(/^\/+/, '');
