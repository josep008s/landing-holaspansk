import React from 'react';
import { NewsletterForm } from '../components/ds/index.js';

// holaSpansk — CTA «¿Vienes?» newsletter capture.
export function CTASection() {
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
