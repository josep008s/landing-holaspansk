import React from 'react';

// holaSpansk — Framed painted image with an offset "marco" and an inset quote.
export function FramedImage() {
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
            <img src="/assets/img/sorolla-sobremesa.jpg" alt="Et dekket bord etter en lang sobremesa" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
