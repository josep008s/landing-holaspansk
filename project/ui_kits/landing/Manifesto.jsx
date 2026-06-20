// Manifesto + the framed sobremesa image reveal.
function Manifesto() {
  return (
    <section style={{ background: 'var(--surface-sand)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 'var(--content-prose)' }}>
        <p style={{ font: 'var(--type-quote)', color: 'var(--text-primary)', margin: 0, lineHeight: 1.4 }}>
          Lukten av appelsinblomst gjennom et åpent vindu.{' '}
          <span style={{ color: 'var(--hs-naranja)', fontWeight: 500 }}>Lyden av kopper mot marmor i en bar klokka elleve.</span>{' '}
          Det Spania ingen reiseguide kan gi deg.{' '}
          <span style={{ color: 'var(--hs-rojo)', fontWeight: 700 }}>Det lever vi i, hver dag.</span>
        </p>
        <div style={{ width: 60, height: 3, borderRadius: 2, background: 'var(--grad-divider)', marginTop: 56 }} />
      </div>
    </section>
  );
}

function ImageReveal() {
  return (
    <section style={{ background: 'var(--surface-page)', padding: 'clamp(60px,10vh,140px) var(--section-pad-x)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', position: 'relative' }}>
        <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-frame)', position: 'relative' }}>
          <img src="../../assets/img/sorolla-sobremesa.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <p style={{
            position: 'absolute', bottom: 'clamp(20px,3vw,40px)', left: 'clamp(20px,3vw,40px)', right: 'clamp(20px,3vw,40px)',
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(16px,1.6vw,24px)',
            color: '#fffbee', textShadow: '0 2px 24px rgba(0,0,0,.7)', margin: 0,
          }}>Å leve læres ikke i en bok. Det leves. Sakte.</p>
        </div>
      </div>
    </section>
  );
}
window.Manifesto = Manifesto;
window.ImageReveal = ImageReveal;
