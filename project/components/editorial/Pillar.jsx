import React from 'react';

/**
 * Pillar — a big outline-stroke word with a roman numeral and description.
 * The "Kultur / Liv / Språk" rows. Hover fills the outlined word.
 */
export function Pillar({ numeral, word, color = 'var(--hs-amarillo)', children, style, ...props }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'baseline', gap: 'clamp(24px,4vw,56px)',
        padding: 'clamp(28px,4vh,48px) 0',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...props}
    >
      {numeral && (
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px', fontWeight: 500,
          color: 'var(--hs-naranja)', opacity: 0.75, flexShrink: 0, minWidth: '42px',
        }}>{numeral}</span>
      )}
      <span style={{
        fontSize: 'clamp(44px,7vw,84px)', fontWeight: 900, lineHeight: 0.9,
        letterSpacing: '-0.05em', flexShrink: 0, minWidth: 'clamp(110px,20vw,240px)',
        color,
        WebkitTextStroke: hover ? '0' : '2px ' + (color.startsWith('var') ? 'currentColor' : color),
        WebkitTextFillColor: hover ? color : 'transparent',
        transition: 'all var(--dur-base) var(--ease-out)',
      }}>{word}</span>
      <span style={{
        font: 'var(--type-body-lg)', color: 'var(--text-secondary)', lineHeight: 1.6,
      }}>{children}</span>
    </div>
  );
}
