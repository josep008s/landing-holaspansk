// CTA newsletter section + footer.
function CTASection() {
  const { NewsletterForm } = window.HolaSpanskDesignSystem_9649fd;
  return (
    <section style={{ background: 'var(--surface-card)', padding: 'var(--section-pad-y) var(--section-pad-x)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ maxWidth: 600 }}>
        <p style={{ font: 'var(--type-display-1)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', margin: 0, letterSpacing: 'var(--tracking-tight)' }}>¿Vienes?</p>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', margin: '20px 0 44px', lineHeight: 1.6 }}>
          Et brev fra terrassen, hver uke. Historier, ord og smaker du ikke finner i en reiseguide.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--surface-ink)', padding: '60px 24px 72px', textAlign: 'center' }}>
      <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.03em' }}>
        <span style={{ color: 'var(--hs-amarillo)', opacity: 0.45 }}>hola</span><span style={{ color: 'var(--hs-rojo)', opacity: 0.45 }}>Spansk</span>
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.5)', marginTop: 14 }}>
        Skrevet mellom Norge og Spania, med hjerte i begge.
      </div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 24 }}>
        {['Instagram', 'TikTok', 'Nyhetsbrev'].map((l) => (
          <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
        ))}
      </div>
    </footer>
  );
}
window.CTASection = CTASection;
window.Footer = Footer;
