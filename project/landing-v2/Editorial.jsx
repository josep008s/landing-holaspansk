// holaSpansk — Manifesto (word-by-word reveal), framed image, pillars.

function ManifestoV2() {
  const text = [
    { t: 'Lukten av appelsinblomst gjennom et åpent vindu. ' },
    { t: 'Lyden av kopper mot marmor i en bar klokka elleve. ', c: 'var(--hs-naranja)', w: 500 },
    { t: 'Det Spania ingen reiseguide kan gi deg. ' },
    { t: 'Det lever vi i, hver dag.', c: 'var(--hs-rojo)', w: 700 },
  ];
  // split into words, each its own reveal span (staggered by index)
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

function FramedImageV2() {
  return (
    <section style={{ background: 'var(--surface-page)', padding: 'clamp(60px,9vh,130px) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-max)', width: '100%', position: 'relative' }}>
        <div data-reveal style={{ position: 'relative' }}>
          {/* the marco: a frame offset behind the image */}
          <div aria-hidden="true" style={{
            position: 'absolute', inset: '-18px -18px 18px 18px', borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-subtle)',
            background: 'linear-gradient(135deg, var(--surface-raised), transparent)',
          }} />
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-frame)' }}>
            <img src="../assets/img/sorolla-sobremesa.jpg" alt="Et dekket bord etter en lang sobremesa" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(31,41,55,0.6), transparent 46%)' }} />
            <div style={{ position: 'absolute', left: 'clamp(22px,3vw,44px)', bottom: 'clamp(22px,3vw,40px)', right: 'clamp(22px,3vw,44px)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(20px,2.4vw,34px)', lineHeight: 1.3, color: '#fffbee', margin: 0, textShadow: '0 2px 30px rgba(0,0,0,.6)' }}>
                Å leve læres ikke i en bok.<br />Det leves. Sakte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsV2() {
  const { Pillar, SectionLabel } = window.HolaSpanskDesignSystem_9649fd;
  return (
    <section id="kultur" style={{ background: 'var(--surface-page)', padding: 'clamp(80px,12vh,170px) var(--section-pad-x) var(--section-pad-y)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-wide)', width: '100%' }}>
        <div data-reveal style={{ marginBottom: 8 }}>
          <SectionLabel tone="naranja" divider>Hva du finner</SectionLabel>
        </div>
        <div data-reveal data-reveal-delay="1">
          <Pillar numeral="i." word="Kultur" color="var(--hs-amarillo)">Skikkene, festene, maten og alt det ingen forteller deg.</Pillar>
        </div>
        <div data-reveal data-reveal-delay="1">
          <Pillar numeral="ii." word="Liv" color="var(--hs-azul)">Hvordan det egentlig er å leve i Spania. Det vakre og det kaotiske.</Pillar>
        </div>
        <div data-reveal data-reveal-delay="1">
          <Pillar numeral="iii." word="Språk" color="var(--hs-rojo)" style={{ borderBottom: 'none' }}>Spansk som faktisk brukes. På gata, i baren, mellom venner.</Pillar>
        </div>
      </div>
    </section>
  );
}

Object.assign(window.LV2 = window.LV2 || {}, { Manifesto: ManifestoV2, FramedImage: FramedImageV2, Pillars: PillarsV2 });
