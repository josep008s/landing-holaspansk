import React from 'react';

/**
 * Card — warm surface container. Soft radius, gentle elevation,
 * optional Sorolla-style image header. Never a hard grey box.
 */
export function Card({ children, image, imageAlt = '', eyebrow, title, hoverable = true, style, ...props }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-sans)',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hoverable && hover ? 'var(--shadow-raised)' : 'var(--shadow-soft)',
        transform: hoverable && hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...style,
      }}
      {...props}
    >
      {image && (
        <div style={{ width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.7s var(--ease-soft)',
            }}
          />
        </div>
      )}
      <div style={{ padding: '24px' }}>
        {eyebrow && (
          <div style={{
            font: 'var(--type-overline)', textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-overline)', color: 'var(--hs-naranja)',
            marginBottom: '10px',
          }}>{eyebrow}</div>
        )}
        {title && (
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 600,
            color: 'var(--text-primary)', margin: '0 0 10px', lineHeight: 1.15,
          }}>{title}</h3>
        )}
        {children && (
          <div style={{ font: 'var(--type-body)', color: 'var(--text-secondary)' }}>{children}</div>
        )}
      </div>
    </div>
  );
}
