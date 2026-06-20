// Three pillars + Palabras con Alma + marquee + La Terraza, using DS components.
function Pillars() {
  const { Pillar, SectionLabel } = window.HolaSpanskDesignSystem_9649fd;
  return (
    <section style={{ background: 'var(--surface-page)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-wide)', width: '100%' }}>
        <SectionLabel tone="naranja" divider style={{ marginBottom: 40 }}>Hva du finner</SectionLabel>
        <Pillar numeral="i." word="Kultur" color="var(--hs-amarillo)">Skikkene, festene, maten og alt det ingen forteller deg.</Pillar>
        <Pillar numeral="ii." word="Liv" color="var(--hs-azul)">Hvordan det egentlig er å leve i Spania. Det vakre og det kaotiske.</Pillar>
        <Pillar numeral="iii." word="Språk" color="var(--hs-rojo)" style={{ borderBottom: 'none' }}>Spansk som faktisk brukes. På gata, i baren, mellom venner.</Pillar>
      </div>
    </section>
  );
}

function Palabras() {
  const { PalabraCard } = window.HolaSpanskDesignSystem_9649fd;
  const words = ['duende', 'sobremesa', 'madrugada', 'tertulia', 'morriña', 'chiringuito', 'siesta', 'merienda', 'paseo'];
  return (
    <div>
      <PalabraCard
        word="sobremesa"
        meaning="Den lange stunden etter maten der ingen reiser seg. Kaffe, en historie til, solen som flytter seg langsomt over bordet."
        close="Tid uten klokke."
        style={{ borderRadius: 0, padding: 'clamp(120px,18vh,240px) var(--section-pad-x)' }}
      />
      <div style={{ background: 'var(--surface-ink)', padding: '36px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap', padding: '0 24px' }}>
          {words.map((w) => (
            <span key={w} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 300, color: 'rgba(255,255,255,0.2)' }}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Terraza() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--surface-page), var(--surface-raised))', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
        <p style={{ font: 'var(--type-display-2)', fontStyle: 'italic', color: 'var(--text-primary)', margin: 0 }}>La Terraza</p>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', marginTop: 28, lineHeight: 1.7 }}>
          Et fellesskap av nordmenn som elsker Spania. Stedet der nysgjerrige blir naboer.{' '}
          <em style={{ color: 'var(--hs-rojo)', fontWeight: 600 }}>Fra hola til vecino.</em>
        </p>
      </div>
    </section>
  );
}
window.Pillars = Pillars;
window.Palabras = Palabras;
window.Terraza = Terraza;
