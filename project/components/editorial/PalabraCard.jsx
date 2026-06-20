import React from 'react';

/**
 * PalabraCard — the star "Palabras con Alma" unit.
 * An untranslatable Spanish word in Fraunces italic on the sun-warm
 * gradient, the emotional Spanish definition (the jewel), the Norwegian
 * bridge, and a poetic close. Lives on the dark ink surface.
 */
export function PalabraCard({
  word = 'sobremesa',
  meaning,
  bridge,
  close,
  label = 'Palabras con Alma',
  style,
  ...props
}) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        background: 'var(--surface-ink)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 56px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      <div style={{
        position: 'absolute', top: '-30%', right: '-15%', width: '60%', height: '160%',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 60%)',
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{
          font: 'var(--type-overline)', textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-overline)', color: 'rgba(255,255,255,0.3)',
          marginBottom: 'clamp(24px,4vw,40px)',
        }}>{label}</div>
        <div style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(56px, 11vw, 120px)', lineHeight: 1.05, letterSpacing: '-0.03em',
          background: 'var(--grad-luz)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', padding: '0.1em 0', wordBreak: 'break-word',
        }}>{word}</div>
        {meaning && (
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(18px,2.2vw,24px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.78)',
            maxWidth: '560px', margin: 'clamp(28px,4vw,44px) auto 0',
          }}>{meaning}</p>
        )}
        {bridge && (
          <p style={{
            font: 'var(--type-body)', color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px', margin: '20px auto 0',
          }}>{bridge}</p>
        )}
        {close && (
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: '18px', color: 'var(--hs-melocoton)', marginTop: '28px',
          }}>{close}</p>
        )}
      </div>
    </div>
  );
}
