import React from 'react';

/**
 * Badge / Tag — small pill label. Used for the marquee words,
 * brand phrases, and "turista vs vecino" style chips.
 */
export function Badge({ children, tone = 'neutral', solid = false, style, ...props }) {
  const tones = {
    neutral: { fg: 'var(--text-secondary)', bg: 'rgba(0,0,0,0.05)', solidBg: 'var(--hs-tinta)' },
    rojo: { fg: 'var(--hs-rojo)', bg: 'rgba(225,29,72,0.10)', solidBg: 'var(--hs-rojo)' },
    sun: { fg: '#92400e', bg: 'rgba(245,158,11,0.16)', solidBg: 'var(--hs-amarillo)' },
    sea: { fg: 'var(--hs-mar-profundo)', bg: 'rgba(14,165,233,0.12)', solidBg: 'var(--hs-azul)' },
    firma: { fg: 'var(--hs-buganvilla)', bg: 'rgba(196,42,107,0.12)', solidBg: 'var(--hs-buganvilla)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-sans)',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: 1,
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        color: solid ? '#fff' : t.fg,
        background: solid ? t.solidBg : t.bg,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
