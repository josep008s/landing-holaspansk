import { useEffect } from 'react';

/**
 * Scroll reveal — ported from the landing-v2 prototype.
 * Reveals any [data-reveal] / .word-rev element when it enters the
 * viewport (rect-based, robust in any embed), then forces the final
 * state shortly after in case time-based transitions are throttled.
 */
export function useScrollReveal() {
  useEffect(() => {
    let ticking = false;

    function reveal(el) {
      el.classList.add('in');
      // fallback: pin the final state in case transitions are throttled offscreen
      const wait = el.classList.contains('word-rev') ? 1600 : 1100;
      setTimeout(() => {
        el.style.transition = 'none';
        el.style.opacity = '1';
        el.style.transform = 'none';
      }, wait);
    }

    function checkReveal() {
      ticking = false;
      const vh = window.innerHeight;
      document.querySelectorAll('[data-reveal]:not(.in), .word-rev:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) reveal(el);
      });
    }

    function requestCheck() {
      if (!ticking) { ticking = true; requestAnimationFrame(checkReveal); }
    }

    window.addEventListener('scroll', requestCheck, { passive: true });
    window.addEventListener('resize', requestCheck, { passive: true });

    const root = document.getElementById('root');
    const mo = root ? new MutationObserver(requestCheck) : null;
    if (mo) mo.observe(root, { childList: true, subtree: true });

    const timers = [80, 300, 800].map((t) => setTimeout(checkReveal, t));
    // safety net: never leave anything permanently hidden
    const safety = setTimeout(
      () => document.querySelectorAll('[data-reveal]:not(.in), .word-rev:not(.in)').forEach(reveal),
      4000,
    );

    return () => {
      window.removeEventListener('scroll', requestCheck);
      window.removeEventListener('resize', requestCheck);
      if (mo) mo.disconnect();
      timers.forEach(clearTimeout);
      clearTimeout(safety);
    };
  }, []);
}
