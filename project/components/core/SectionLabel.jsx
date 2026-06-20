import React from 'react';

/**
 * SectionLabel — the uppercase tracked overline used to title
 * sections ("PALABRAS CON ALMA"). Optional gradient divider.
 */
export function SectionLabel({ children, tone = 'naranja', divider = false, align = 'left', style, ...props }) {
  const colors = {
    naranja: 'var(--hs-naranja)',
    rojo: 'var(--hs-rojo)',
    sea: 'var(--hs-azul)',
    soft: 'var(--text-muted)',
  };
  return (
    <div style={{ textAlign: align, ...style }} {...props}>
      <span style={{
        font: 'var(--type-overline)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-overline)',
        color: colors[tone] || colors.naranja,
        fontWeight: 500,
      }}>{children}</span>
      {divider && (
        <div style={{
          width: '60px', height: '3px', borderRadius: '2px',
          background: 'var(--grad-divider)',
          marginTop: '16px',
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
        }} />
      )}
    </div>
  );
}
