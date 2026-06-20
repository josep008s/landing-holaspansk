// holaSpansk — CTA «¿Vienes?» newsletter + footer.

function CTASectionV2() {
  const { NewsletterForm } = window.HolaSpanskDesignSystem_9649fd;
  return (
    <section id="vienes" style={{ background: 'var(--surface-card)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div data-reveal style={{ maxWidth: 600 }}>
        <p style={{ font: 'var(--type-display-1)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', margin: 0, letterSpacing: 'var(--tracking-tight)' }}>¿Vienes?</p>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', margin: '20px 0 44px', lineHeight: 1.6 }}>
          Et brev fra terrassen, hver uke. Historier, ord og smaker du ikke finner i en reiseguide.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer style={{ background: 'var(--surface-ink)', padding: '64px 24px 76px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11, marginBottom: 14 }}>
        <img src="../assets/logo.png" alt="" style={{ width: 36, height: 36, borderRadius: 8, opacity: 0.85 }} />
        <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.03em' }}>
          <span style={{ color: 'var(--hs-amarillo)', opacity: 0.55 }}>hola</span><span style={{ color: 'var(--hs-rojo)', opacity: 0.55 }}>Spansk</span>
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.55)' }}>
        Skrevet mellom Norge og Spania, med hjerte i begge.
      </div>
      <div style={{ display: 'flex', gap: 26, justifyContent: 'center', marginTop: 26 }}>
        {['Instagram', 'TikTok', 'Nyhetsbrev'].map((l) => (
          <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, transition: 'color .2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

Object.assign(window.LV2 = window.LV2 || {}, { CTASection: CTASectionV2, Footer: FooterV2 });
