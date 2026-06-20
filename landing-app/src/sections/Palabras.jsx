import React from 'react';
import { PalabraCard } from '../components/ds/index.js';

// holaSpansk — Palabras con Alma: the "sobremesa" card + the word marquee.
export function Palabras() {
  const words = ['duende', 'sobremesa', 'madrugada', 'tertulia', 'morriña', 'chiringuito', 'siesta', 'merienda', 'paseo', 'apapachar'];
  const Word = ({ w }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', flex: 'none' }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 300, color: 'rgba(255,255,255,0.34)', padding: '0 28px' }}>{w}</span>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--hs-rojo)', opacity: 0.7 }} />
    </span>
  );
  return (
    <div id="palabras">
      <PalabraCard
        word="sobremesa"
        meaning="Den lange stunden etter maten der ingen reiser seg. Kaffe, en historie til, solen som flytter seg langsomt over bordet."
        close="Tid uten klokke."
        style={{ borderRadius: 0, padding: 'clamp(120px,18vh,240px) var(--section-pad-x)' }}
      />
      <div className="marquee" style={{ background: 'var(--surface-ink)', padding: '34px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="marquee-track">
          {[...words, ...words].map((w, n) => <Word key={n} w={w} />)}
        </div>
      </div>
    </div>
  );
}
