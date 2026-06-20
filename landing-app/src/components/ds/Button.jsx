import React from 'react';

/**
 * holaSpansk Button — pill-shaped, warm, confident.
 * Variants: primary (Rojo), secondary (outline), ghost, sun (Amarillo).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  as = 'button',
  style: styleProp,
  ...props
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: '13px' },
    md: { padding: '12px 26px', fontSize: '15px' },
    lg: { padding: '18px 38px', fontSize: '17px' },
  };

  const variants = {
    primary: { background: 'var(--brand-primary)', color: '#fff', border: '2px solid transparent' },
    sun: { background: 'var(--brand-sun)', color: '#7c2d12', border: '2px solid transparent' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', border: '2px solid var(--border-form)' },
    ghost: { background: 'transparent', color: 'var(--brand-primary)', border: '2px solid transparent' },
  };

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast)',
    ...sizes[size],
    ...variants[variant],
    ...styleProp,
  };

  const Tag = as;
  return (
    <Tag
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.04)';
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = 'var(--shadow-cta)';
          e.currentTarget.style.background = 'var(--brand-primary-hover)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-primary)';
      }}
      {...props}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </Tag>
  );
}
