import React from 'react';

// holaSpansk — La Terraza: the community block. "Fra hola til vecino."
export function Terraza() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--surface-page), var(--surface-raised))', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div data-reveal style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
        <p style={{ font: 'var(--type-display-2)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', margin: 0, letterSpacing: 'var(--tracking-snug)' }}>La Terraza</p>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', marginTop: 28, lineHeight: 1.7 }}>
          Et fellesskap av nordmenn som elsker Spania. Stedet der nysgjerrige blir naboer.{' '}
          <em style={{ color: 'var(--hs-rojo)', fontWeight: 600, fontStyle: 'italic' }}>Fra hola til vecino.</em>
        </p>
      </div>
    </section>
  );
}
