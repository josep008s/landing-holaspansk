import React from 'react';
import { asset } from '../lib/asset.js';

// holaSpansk — Footer on the dark ink surface.
export function Footer() {
  return (
    <footer style={{ background: 'var(--surface-ink)', padding: '64px 24px 76px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11, marginBottom: 14 }}>
        <img src={asset('assets/logo.png')} alt="" style={{ width: 36, height: 36, borderRadius: 8, opacity: 0.85 }} />
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
