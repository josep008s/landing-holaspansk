import React from 'react';
import { Button } from '../components/ds/index.js';
import { asset } from '../lib/asset.js';

/**
 * Fixed top nav — glass background, brand wordmark, anchor links,
 * theme toggle, and the "¿Vienes?" CTA. Hides on scroll-down, shows
 * on scroll-up (ported from the prototype).
 */
export function Nav({ theme, onToggleTheme }) {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;
      if (y > 120 && y > lastY) nav.style.transform = 'translateY(-110%)';
      else nav.style.transform = 'translateY(0)';
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="top" ref={navRef}>
      <a href="#top" className="brand">
        <img src={asset('assets/logo.png')} alt="holaSpansk" />
        <span className="word"><span className="h">hola</span><span className="s">Spansk</span></span>
      </a>
      <div className="links">
        <a href="#manifest" className="navlink">Manifest</a>
        <a href="#kultur" className="navlink">Hva du finner</a>
        <a href="#palabras" className="navlink">Palabras con alma</a>
        <button className="themebtn" onClick={onToggleTheme}>
          {theme === 'light' ? '☾ Nattmodus' : '☀ Dagmodus'}
        </button>
        <Button as="a" href="#vienes" variant="primary" size="sm" arrow>¿Vienes?</Button>
      </div>
    </nav>
  );
}
