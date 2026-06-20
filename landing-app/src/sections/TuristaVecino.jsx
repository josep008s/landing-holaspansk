import React from 'react';
import { Badge } from '../components/ds/index.js';

// holaSpansk — Versión turista vs vecino. Two columns, same city.
export function TuristaVecino() {
  const rows = [
    ['Bestiller på engelsk og peker på menyen.', '«Ponme una caña, porfa» — og servitøren smiler.'],
    ['Ser Spania gjennom et hotellvindu.', 'Sitter på terrassen til solen forsvinner.'],
    ['Drar hjem med bilder.', 'Drar hjem med venner.'],
  ];
  const col = (variant) => ({
    flex: '1 1 320px', minWidth: 0,
    background: variant === 'vecino' ? 'var(--surface-card)' : 'transparent',
    border: variant === 'vecino' ? '1px solid var(--border-subtle)' : '1px dashed var(--border-form)',
    borderRadius: 'var(--radius-lg)', padding: 'clamp(28px,3vw,40px)',
    boxShadow: variant === 'vecino' ? 'var(--shadow-soft)' : 'none',
  });
  return (
    <section style={{ background: 'var(--surface-sand)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-wide)', width: '100%' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: 14 }}>
          <span style={{ font: 'var(--type-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--hs-naranja)', fontWeight: 600 }}>Versión turista vs vecino</span>
        </div>
        <h2 data-reveal style={{ font: 'var(--type-display-2)', fontFamily: 'var(--font-serif)', textAlign: 'center', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-snug)', margin: '0 auto 50px', maxWidth: 720 }}>
          Samme by. To helt ulike Spania.
        </h2>

        <div data-reveal data-reveal-delay="1" style={{ display: 'flex', gap: 'clamp(16px,2vw,28px)', flexWrap: 'wrap' }}>
          <div style={col('turista')}>
            <Badge tone="neutral" style={{ marginBottom: 22 }}>Turista</Badge>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {rows.map((r, n) => (
                <li key={n} style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.5 }}>{r[0]}</li>
              ))}
            </ul>
          </div>
          <div style={col('vecino')}>
            <Badge tone="rojo" solid style={{ marginBottom: 22 }}>Vecino</Badge>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {rows.map((r, n) => (
                <li key={n} style={{ font: 'var(--type-body-lg)', color: 'var(--text-primary)', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.5, fontWeight: 500 }}>{r[1]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
