// holaSpansk — Versión turista vs vecino · Palabras con Alma + marquee · La Terraza.

function TuristaVecinoV2() {
  const { Badge } = window.HolaSpanskDesignSystem_9649fd;
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

function PalabrasV2() {
  const { PalabraCard } = window.HolaSpanskDesignSystem_9649fd;
  const words = ['duende', 'sobremesa', 'madrugada', 'tertulia', 'morriña', 'chiringuito', 'siesta', 'merienda', 'paseo', 'apapachar'];
  const Word = ({ w }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', flex: 'none' }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 300, color: 'rgba(255,255,255,0.34)', padding: '0 28px' }}>{w}</span>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--hs-rojo)', opacity: 0.7 }} />
    </span>
  );
  return (
    <div id="palabras">
      <PalabraCard
        word="sobremesa"
        meaning="Den lange stunden etter maten der ingen reiser seg. Kaffe, en historie til, solen som flytter seg langsomt over bordet."
        close="Tid uten klokke."
        style={{ borderRadius: 0, padding: 'clamp(120px,18vh,240px) var(--section-pad-x)' }}
      />
      <div className="marquee" style={{ background: 'var(--surface-ink)', padding: '34px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="marquee-track">
          {[...words, ...words].map((w, n) => <Word key={n} w={w} />)}
        </div>
      </div>
    </div>
  );
}

function TerrazaV2() {
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

Object.assign(window.LV2 = window.LV2 || {}, { TuristaVecino: TuristaVecinoV2, Palabras: PalabrasV2, Terraza: TerrazaV2 });
