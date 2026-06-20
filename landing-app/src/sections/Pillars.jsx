import React from 'react';
import { Pillar, SectionLabel } from '../components/ds/index.js';

// holaSpansk — "Hva du finner": Kultur / Liv / Språk outline-stroke pillars.
export function Pillars() {
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
