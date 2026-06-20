// holaSpansk landing — Hero. Painted pergola bg, warm veil, logo + serif headline.
function Hero({ onTheme, theme }) {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', position: 'relative',
      overflow: 'hidden', padding: '80px 24px 60px', textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('../../assets/img/sorolla-pergola.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 35%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: theme === 'dark'
          ? 'linear-gradient(180deg, rgba(15,17,23,0.45), rgba(15,17,23,0.2) 40%, rgba(15,17,23,0.85))'
          : 'linear-gradient(180deg, rgba(255,251,245,0.3), rgba(255,251,245,0.08) 38%, rgba(255,251,245,0.7))',
      }} />
      <button onClick={onTheme} style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 20, height: 46,
        padding: '0 18px', borderRadius: 100, border: '1.5px solid var(--border-form)',
        background: 'var(--nav-bg)', backdropFilter: 'blur(16px) saturate(180%)',
        cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13,
        color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8,
      }}>{theme === 'light' ? '☾ Nattmodus' : '☀ Dagmodus'}</button>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <img src="../../assets/logo.png" alt="holaSpansk" style={{
          width: 'clamp(150px,20vw,230px)', borderRadius: 'var(--radius-lg)',
          marginBottom: 40, boxShadow: 'var(--shadow-raised)',
        }} />
        <h1 style={{
          font: 'var(--type-display-1)', fontFamily: 'var(--font-serif)',
          letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 0,
          textShadow: theme === 'dark' ? '0 2px 40px rgba(0,0,0,.5)' : '0 2px 40px rgba(255,251,245,.7)',
        }}>
          Kom nærmere<br /><span style={{ color: 'var(--hs-rojo)' }}>Spania</span>
        </h1>
        <p style={{
          font: 'var(--type-body-lg)', color: 'var(--text-primary)', marginTop: 24,
          maxWidth: 520, marginLeft: 'auto', marginRight: 'auto',
        }}>Spania fortalt innenfra. For deg som vil mer enn å være turist.</p>
      </div>
    </section>
  );
}
window.Hero = Hero;
