// holaSpansk — Hero. Cinematic painted pergola, parallax, framed "marco" overlay.
function HeroV2() {
  const bgRef = React.useRef(null);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current && y < window.innerHeight * 1.2) {
          bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { Button } = window.HolaSpanskDesignSystem_9649fd;

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: 'clamp(96px,12vh,160px) var(--section-pad-x) clamp(64px,9vh,110px)',
    }}>
      {/* painted background */}
      <div ref={bgRef} style={{
        position: 'absolute', inset: '-4%', zIndex: 0,
        backgroundImage: "url('../assets/img/sorolla-pergola.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 32%',
        transform: 'scale(1.08)', transformOrigin: 'center',
        willChange: 'transform',
      }} />
      {/* luminous veil — light at the figures, denser toward the text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(2deg, rgba(255,251,245,0.94) 2%, rgba(255,251,245,0.55) 26%, rgba(255,251,245,0.06) 52%, rgba(255,251,245,0) 72%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(120% 80% at 18% 100%, rgba(255,251,245,0.5), transparent 55%)',
      }} />

      {/* thin inset "marco" frame */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 'clamp(14px,1.6vw,26px)', zIndex: 2,
        border: '1px solid rgba(255,251,245,0.55)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'inset 0 0 0 1px rgba(31,41,55,0.04)', pointerEvents: 'none',
      }} />

      {/* content block — lower-left, off the painting's focal point */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 840 }}>
        <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
          <span style={{ width: 30, height: 2, background: 'var(--grad-divider)', borderRadius: 2 }} />
          <span style={{
            font: 'var(--type-overline)', letterSpacing: 'var(--tracking-overline)',
            textTransform: 'uppercase', color: 'var(--hs-naranja)', fontWeight: 600,
          }}>Norge&nbsp;&harr;&nbsp;Spania</span>
        </div>

        <h1 data-reveal data-reveal-delay="1" style={{
          fontFamily: 'var(--font-serif)', fontWeight: 900, lineHeight: 0.98,
          letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 0,
          fontSize: 'clamp(46px, 7vw, 92px)',
        }}>
          Kom nærmere<br /><span style={{ color: 'var(--hs-rojo)', fontStyle: 'italic' }}>Spania</span>
        </h1>

        <p data-reveal data-reveal-delay="2" style={{
          font: 'var(--type-body-lg)', color: 'var(--text-primary)', marginTop: 30,
          maxWidth: 460, fontSize: 'clamp(17px,1.8vw,21px)', fontWeight: 500,
        }}>
          Spania fortalt innenfra — på en terrasse, ikke i en lærebok.
          For deg som vil mer enn å være turist.
        </p>

        <div data-reveal data-reveal-delay="3" style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
          <Button as="a" href="#vienes" variant="primary" size="lg" arrow>¿Vienes?</Button>
          <Button as="a" href="#manifest" variant="ghost" size="lg">Se hva vi mener</Button>
        </div>
      </div>

      {/* scroll cue */}
      <div style={{
        position: 'absolute', left: '50%', bottom: 22, zIndex: 3, transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--text-secondary)', font: 'var(--type-caption)', letterSpacing: '0.04em',
      }}>
        <span>scroll</span>
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <rect x="1" y="1" width="14" height="24" rx="7" opacity="0.5" />
          <line x1="8" y1="7" x2="8" y2="12">
            <animate attributeName="y1" values="7;13;7" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="y2" values="12;18;12" dur="1.8s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </section>
  );
}
(window.LV2 = window.LV2 || {}).Hero = HeroV2;
