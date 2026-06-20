import React from 'react';

// holaSpansk — Manifesto: word-by-word reveal, staggered by index.
export function Manifesto() {
  const text = [
    { t: 'Lukten av appelsinblomst gjennom et åpent vindu. ' },
    { t: 'Lyden av kopper mot marmor i en bar klokka elleve. ', c: 'var(--hs-naranja)', w: 500 },
    { t: 'Det Spania ingen reiseguide kan gi deg. ' },
    { t: 'Det lever vi i, hver dag.', c: 'var(--hs-rojo)', w: 700 },
  ];
  let i = 0;
  return (
    <section id="manifest" style={{ background: 'var(--surface-sand)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-prose)' }}>
        <div data-reveal style={{ marginBottom: 40 }}>
          <span style={{ font: 'var(--type-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--hs-naranja)', fontWeight: 600 }}>Manifest</span>
        </div>
        <p style={{ font: 'var(--type-quote)', color: 'var(--text-primary)', margin: 0, lineHeight: 1.45 }}>
          {text.map((seg, si) => seg.t.split(' ').filter(Boolean).map((word, wi) => {
            const idx = i++;
            return (
              <span key={si + '-' + wi} className="word-rev" style={{
                color: seg.c || 'inherit', fontWeight: seg.w || 'inherit',
                fontStyle: seg.c ? 'normal' : 'italic',
                transitionDelay: (idx * 0.045) + 's', marginRight: '0.28em',
              }}>{word}</span>
            );
          }))}
        </p>
        <div data-reveal style={{ width: 64, height: 3, borderRadius: 2, background: 'var(--grad-divider)', marginTop: 56 }} />
      </div>
    </section>
  );
}
