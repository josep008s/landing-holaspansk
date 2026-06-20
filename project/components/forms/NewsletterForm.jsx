import React from 'react';

/**
 * NewsletterForm — the signature "¿Vienes?" email capture.
 * A pill that focuses to the sea-blue, with the Rojo submit button.
 * Shows a warm Spanish success state ("¡Bienvenido a la terraza!").
 */
export function NewsletterForm({
  placeholder = 'din e-post',
  buttonLabel = 'Kom nærmere',
  successTitle = '¡Bienvenido a la terraza!',
  successBody = 'Stolen ved siden av er din. Vi sees i innboksen.',
  onSubmit,
  ...props
}) {
  const [value, setValue] = React.useState('');
  const [done, setDone] = React.useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (value.includes('@') && value.includes('.')) {
      onSubmit && onSubmit(value);
      setDone(true);
    }
  };

  if (done) {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', ...props.style }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(36px,6vw,56px)', color: 'var(--hs-naranja)', margin: 0, lineHeight: 1.05,
        }}>{successTitle}</h2>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', marginTop: '14px' }}>{successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handle}
      style={{
        display: 'flex', maxWidth: '500px', margin: '0 auto', width: '100%',
        borderRadius: 'var(--radius-pill)', overflow: 'hidden',
        border: '2px solid var(--border-form)', background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-soft)',
        transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
        ...props.style,
      }}
      onFocusCapture={(e) => { e.currentTarget.style.borderColor = 'var(--brand-sea)'; }}
      onBlurCapture={(e) => { e.currentTarget.style.borderColor = 'var(--border-form)'; }}
    >
      <input
        type="email"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1, border: 'none', outline: 'none', minWidth: 0,
          padding: '18px 26px', fontSize: '17px',
          fontFamily: 'var(--font-sans)', background: 'transparent', color: 'var(--text-primary)',
        }}
      />
      <button
        type="submit"
        style={{
          background: 'var(--brand-primary)', color: '#fff', border: 'none',
          borderRadius: 'var(--radius-pill)', padding: '0 30px', margin: '6px',
          fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)',
          whiteSpace: 'nowrap', transition: 'transform var(--dur-fast), background var(--dur-fast)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.background = 'var(--brand-primary-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'var(--brand-primary)'; }}
      >{buttonLabel}</button>
    </form>
  );
}
