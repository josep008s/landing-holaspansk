/* @ds-bundle: {"format":3,"namespace":"HolaSpanskDesignSystem_9649fd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"PalabraCard","sourcePath":"components/editorial/PalabraCard.jsx"},{"name":"Pillar","sourcePath":"components/editorial/Pillar.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3c8930d7163c","components/core/Button.jsx":"c6082272eef4","components/core/Card.jsx":"48b5a9c96ce5","components/core/SectionLabel.jsx":"c65fc11759d2","components/editorial/PalabraCard.jsx":"e499d57b58ef","components/editorial/Pillar.jsx":"db9ca12237ee","components/forms/NewsletterForm.jsx":"7ba93b464e78","landing-v2/Closing.jsx":"cb58c0ce06f9","landing-v2/Editorial.jsx":"5f583e7a74e3","landing-v2/HeroV2.jsx":"ae85c6d90f9d","landing-v2/Palabras.jsx":"7114c05b85c2","ui_kits/landing/CTA.jsx":"bacace9549a9","ui_kits/landing/Hero.jsx":"e47969dccf7a","ui_kits/landing/Manifesto.jsx":"dc86270ab1a0","ui_kits/landing/Story.jsx":"df484e8b0ac2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HolaSpanskDesignSystem_9649fd = window.HolaSpanskDesignSystem_9649fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — small pill label. Used for the marquee words,
 * brand phrases, and "turista vs vecino" style chips.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style,
  ...props
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-secondary)',
      bg: 'rgba(0,0,0,0.05)',
      solidBg: 'var(--hs-tinta)'
    },
    rojo: {
      fg: 'var(--hs-rojo)',
      bg: 'rgba(225,29,72,0.10)',
      solidBg: 'var(--hs-rojo)'
    },
    sun: {
      fg: '#92400e',
      bg: 'rgba(245,158,11,0.16)',
      solidBg: 'var(--hs-amarillo)'
    },
    sea: {
      fg: 'var(--hs-mar-profundo)',
      bg: 'rgba(14,165,233,0.12)',
      solidBg: 'var(--hs-azul)'
    },
    firma: {
      fg: 'var(--hs-buganvilla)',
      bg: 'rgba(196,42,107,0.12)',
      solidBg: 'var(--hs-buganvilla)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * holaSpansk Button — pill-shaped, warm, confident.
 * Variants: primary (Rojo), secondary (outline), ghost, sun (Amarillo).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  as = 'button',
  ...props
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '13px'
    },
    md: {
      padding: '12px 26px',
      fontSize: '15px'
    },
    lg: {
      padding: '18px 38px',
      fontSize: '17px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff',
      border: '2px solid transparent'
    },
    sun: {
      background: 'var(--brand-sun)',
      color: '#7c2d12',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '2px solid var(--border-form)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '2px solid transparent'
    }
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
    ...props.style
  };
  const Tag = as;
  const {
    style: _s,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.04)';
      if (variant === 'primary') {
        e.currentTarget.style.boxShadow = 'var(--shadow-cta)';
        e.currentTarget.style.background = 'var(--brand-primary-hover)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-primary)';
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm surface container. Soft radius, gentle elevation,
 * optional Sorolla-style image header. Never a hard grey box.
 */
function Card({
  children,
  image,
  imageAlt = '',
  eyebrow,
  title,
  hoverable = true,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hoverable && hover ? 'var(--shadow-raised)' : 'var(--shadow-soft)',
      transform: hoverable && hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...style
    }
  }, props), image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.7s var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-overline)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-overline)',
      color: 'var(--hs-naranja)',
      marginBottom: '10px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 10px',
      lineHeight: 1.15
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the uppercase tracked overline used to title
 * sections ("PALABRAS CON ALMA"). Optional gradient divider.
 */
function SectionLabel({
  children,
  tone = 'naranja',
  divider = false,
  align = 'left',
  style,
  ...props
}) {
  const colors = {
    naranja: 'var(--hs-naranja)',
    rojo: 'var(--hs-rojo)',
    sea: 'var(--hs-azul)',
    soft: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-overline)',
      color: colors[tone] || colors.naranja,
      fontWeight: 500
    }
  }, children), divider && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60px',
      height: '3px',
      borderRadius: '2px',
      background: 'var(--grad-divider)',
      marginTop: '16px',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PalabraCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PalabraCard — the star "Palabras con Alma" unit.
 * An untranslatable Spanish word in Fraunces italic on the sun-warm
 * gradient, the emotional Spanish definition (the jewel), the Norwegian
 * bridge, and a poetic close. Lives on the dark ink surface.
 */
function PalabraCard({
  word = 'sobremesa',
  meaning,
  bridge,
  close,
  label = 'Palabras con Alma',
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-ink)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 56px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30%',
      right: '-15%',
      width: '60%',
      height: '160%',
      borderRadius: '50%',
      pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-overline)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-overline)',
      color: 'rgba(255,255,255,0.3)',
      marginBottom: 'clamp(24px,4vw,40px)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'clamp(56px, 11vw, 120px)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      background: 'var(--grad-luz)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      padding: '0.1em 0',
      wordBreak: 'break-word'
    }
  }, word), meaning && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(18px,2.2vw,24px)',
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: '560px',
      margin: 'clamp(28px,4vw,44px) auto 0'
    }
  }, meaning), bridge && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'rgba(255,255,255,0.5)',
      maxWidth: '520px',
      margin: '20px auto 0'
    }
  }, bridge), close && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '18px',
      color: 'var(--hs-melocoton)',
      marginTop: '28px'
    }
  }, close)));
}
Object.assign(__ds_scope, { PalabraCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PalabraCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Pillar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pillar — a big outline-stroke word with a roman numeral and description.
 * The "Kultur / Liv / Språk" rows. Hover fills the outlined word.
 */
function Pillar({
  numeral,
  word,
  color = 'var(--hs-amarillo)',
  children,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'clamp(24px,4vw,56px)',
      padding: 'clamp(28px,4vh,48px) 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, props), numeral && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '18px',
      fontWeight: 500,
      color: 'var(--hs-naranja)',
      opacity: 0.75,
      flexShrink: 0,
      minWidth: '42px'
    }
  }, numeral), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(44px,7vw,84px)',
      fontWeight: 900,
      lineHeight: 0.9,
      letterSpacing: '-0.05em',
      flexShrink: 0,
      minWidth: 'clamp(110px,20vw,240px)',
      color,
      WebkitTextStroke: hover ? '0' : '2px ' + (color.startsWith('var') ? 'currentColor' : color),
      WebkitTextFillColor: hover ? color : 'transparent',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, word), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, children));
}
Object.assign(__ds_scope, { Pillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Pillar.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
/**
 * NewsletterForm — the signature "¿Vienes?" email capture.
 * A pill that focuses to the sea-blue, with the Rojo submit button.
 * Shows a warm Spanish success state ("¡Bienvenido a la terraza!").
 */
function NewsletterForm({
  placeholder = 'din e-post',
  buttonLabel = 'Kom nærmere',
  successTitle = '¡Bienvenido a la terraza!',
  successBody = 'Stolen ved siden av er din. Vi sees i innboksen.',
  onSubmit,
  ...props
}) {
  const [value, setValue] = React.useState('');
  const [done, setDone] = React.useState(false);
  const handle = e => {
    e.preventDefault();
    if (value.includes('@') && value.includes('.')) {
      onSubmit && onSubmit(value);
      setDone(true);
    }
  };
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontFamily: 'var(--font-sans)',
        ...props.style
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 'clamp(36px,6vw,56px)',
        color: 'var(--hs-naranja)',
        margin: 0,
        lineHeight: 1.05
      }
    }, successTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: 'var(--text-secondary)',
        marginTop: '14px'
      }
    }, successBody));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handle,
    style: {
      display: 'flex',
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      border: '2px solid var(--border-form)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-soft)',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...props.style
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--brand-sea)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = 'var(--border-form)';
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      minWidth: 0,
      padding: '18px 26px',
      fontSize: '17px',
      fontFamily: 'var(--font-sans)',
      background: 'transparent',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: 'var(--brand-primary)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '0 30px',
      margin: '6px',
      fontSize: '16px',
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast), background var(--dur-fast)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.03)';
      e.currentTarget.style.background = 'var(--brand-primary-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.background = 'var(--brand-primary)';
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// landing-v2/Closing.jsx
try { (() => {
// holaSpansk — CTA «¿Vienes?» newsletter + footer.

function CTASectionV2() {
  const {
    NewsletterForm
  } = window.HolaSpanskDesignSystem_9649fd;
  return /*#__PURE__*/React.createElement("section", {
    id: "vienes",
    style: {
      background: 'var(--surface-card)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-1)',
      fontStyle: 'italic',
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "\xBFVienes?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      margin: '20px 0 44px',
      lineHeight: 1.6
    }
  }, "Et brev fra terrassen, hver uke. Historier, ord og smaker du ikke finner i en reiseguide."), /*#__PURE__*/React.createElement(NewsletterForm, null)));
}
function FooterV2() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      padding: '64px 24px 76px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 11,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo.png",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: '-0.03em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-amarillo)',
      opacity: 0.55
    }
  }, "hola"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-rojo)',
      opacity: 0.55
    }
  }, "Spansk"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Skrevet mellom Norge og Spania, med hjerte i begge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      justifyContent: 'center',
      marginTop: 26
    }
  }, ['Instagram', 'TikTok', 'Nyhetsbrev'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.45)',
      fontWeight: 500,
      transition: 'color .2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
  }, l))));
}
Object.assign(window.LV2 = window.LV2 || {}, {
  CTASection: CTASectionV2,
  Footer: FooterV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing-v2/Closing.jsx", error: String((e && e.message) || e) }); }

// landing-v2/Editorial.jsx
try { (() => {
// holaSpansk — Manifesto (word-by-word reveal), framed image, pillars.

function ManifestoV2() {
  const text = [{
    t: 'Lukten av appelsinblomst gjennom et åpent vindu. '
  }, {
    t: 'Lyden av kopper mot marmor i en bar klokka elleve. ',
    c: 'var(--hs-naranja)',
    w: 500
  }, {
    t: 'Det Spania ingen reiseguide kan gi deg. '
  }, {
    t: 'Det lever vi i, hver dag.',
    c: 'var(--hs-rojo)',
    w: 700
  }];
  // split into words, each its own reveal span (staggered by index)
  let i = 0;
  return /*#__PURE__*/React.createElement("section", {
    id: "manifest",
    style: {
      background: 'var(--surface-sand)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-prose)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--hs-naranja)',
      fontWeight: 600
    }
  }, "Manifest")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-quote)',
      color: 'var(--text-primary)',
      margin: 0,
      lineHeight: 1.45
    }
  }, text.map((seg, si) => seg.t.split(' ').filter(Boolean).map((word, wi) => {
    const idx = i++;
    return /*#__PURE__*/React.createElement("span", {
      key: si + '-' + wi,
      className: "word-rev",
      style: {
        color: seg.c || 'inherit',
        fontWeight: seg.w || 'inherit',
        fontStyle: seg.c ? 'normal' : 'italic',
        transitionDelay: idx * 0.045 + 's',
        marginRight: '0.28em'
      }
    }, word);
  }))), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      width: 64,
      height: 3,
      borderRadius: 2,
      background: 'var(--grad-divider)',
      marginTop: 56
    }
  })));
}
function FramedImageV2() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'clamp(60px,9vh,130px) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-18px -18px 18px 18px',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      background: 'linear-gradient(135deg, var(--surface-raised), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-frame)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/img/sorolla-sobremesa.jpg",
    alt: "Et dekket bord etter en lang sobremesa",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(31,41,55,0.6), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'clamp(22px,3vw,44px)',
      bottom: 'clamp(22px,3vw,40px)',
      right: 'clamp(22px,3vw,44px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(20px,2.4vw,34px)',
      lineHeight: 1.3,
      color: '#fffbee',
      margin: 0,
      textShadow: '0 2px 30px rgba(0,0,0,.6)'
    }
  }, "\xC5 leve l\xE6res ikke i en bok.", /*#__PURE__*/React.createElement("br", null), "Det leves. Sakte."))))));
}
function PillarsV2() {
  const {
    Pillar,
    SectionLabel
  } = window.HolaSpanskDesignSystem_9649fd;
  return /*#__PURE__*/React.createElement("section", {
    id: "kultur",
    style: {
      background: 'var(--surface-page)',
      padding: 'clamp(80px,12vh,170px) var(--section-pad-x) var(--section-pad-y)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "naranja",
    divider: true
  }, "Hva du finner")), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(Pillar, {
    numeral: "i.",
    word: "Kultur",
    color: "var(--hs-amarillo)"
  }, "Skikkene, festene, maten og alt det ingen forteller deg.")), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(Pillar, {
    numeral: "ii.",
    word: "Liv",
    color: "var(--hs-azul)"
  }, "Hvordan det egentlig er \xE5 leve i Spania. Det vakre og det kaotiske.")), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement(Pillar, {
    numeral: "iii.",
    word: "Spr\xE5k",
    color: "var(--hs-rojo)",
    style: {
      borderBottom: 'none'
    }
  }, "Spansk som faktisk brukes. P\xE5 gata, i baren, mellom venner."))));
}
Object.assign(window.LV2 = window.LV2 || {}, {
  Manifesto: ManifestoV2,
  FramedImage: FramedImageV2,
  Pillars: PillarsV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing-v2/Editorial.jsx", error: String((e && e.message) || e) }); }

// landing-v2/HeroV2.jsx
try { (() => {
// holaSpansk — Hero. Cinematic painted pergola, parallax, framed "marco" overlay.
function HeroV2() {
  const bgRef = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current && y < window.innerHeight * 1.2) {
          bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const {
    Button
  } = window.HolaSpanskDesignSystem_9649fd;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(96px,12vh,160px) var(--section-pad-x) clamp(64px,9vh,110px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: bgRef,
    style: {
      position: 'absolute',
      inset: '-4%',
      zIndex: 0,
      backgroundImage: "url('../assets/img/sorolla-pergola.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 32%',
      transform: 'scale(1.08)',
      transformOrigin: 'center',
      willChange: 'transform'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(2deg, rgba(255,251,245,0.94) 2%, rgba(255,251,245,0.55) 26%, rgba(255,251,245,0.06) 52%, rgba(255,251,245,0) 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'radial-gradient(120% 80% at 18% 100%, rgba(255,251,245,0.5), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 'clamp(14px,1.6vw,26px)',
      zIndex: 2,
      border: '1px solid rgba(255,251,245,0.55)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'inset 0 0 0 1px rgba(31,41,55,0.04)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 2,
      background: 'var(--grad-divider)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--hs-naranja)',
      fontWeight: 600
    }
  }, "Norge\xA0\u2194\xA0Spania")), /*#__PURE__*/React.createElement("h1", {
    "data-reveal": true,
    "data-reveal-delay": "1",
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 900,
      lineHeight: 0.98,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      margin: 0,
      fontSize: 'clamp(46px, 7vw, 92px)'
    }
  }, "Kom n\xE6rmere", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-rojo)',
      fontStyle: 'italic'
    }
  }, "Spania")), /*#__PURE__*/React.createElement("p", {
    "data-reveal": true,
    "data-reveal-delay": "2",
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-primary)',
      marginTop: 30,
      maxWidth: 460,
      fontSize: 'clamp(17px,1.8vw,21px)',
      fontWeight: 500
    }
  }, "Spania fortalt innenfra \u2014 p\xE5 en terrasse, ikke i en l\xE6rebok. For deg som vil mer enn \xE5 v\xE6re turist."), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "3",
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#vienes",
    variant: "primary",
    size: "lg",
    arrow: true
  }, "\xBFVienes?"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#manifest",
    variant: "ghost",
    size: "lg"
  }, "Se hva vi mener"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 22,
      zIndex: 3,
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-secondary)',
      font: 'var(--type-caption)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "scroll"), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "26",
    viewBox: "0 0 16 26",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "14",
    height: "24",
    rx: "7",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "7",
    x2: "8",
    y2: "12"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "y1",
    values: "7;13;7",
    dur: "1.8s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y2",
    values: "12;18;12",
    dur: "1.8s",
    repeatCount: "indefinite"
  })))));
}
(window.LV2 = window.LV2 || {}).Hero = HeroV2;
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing-v2/HeroV2.jsx", error: String((e && e.message) || e) }); }

// landing-v2/Palabras.jsx
try { (() => {
// holaSpansk — Versión turista vs vecino · Palabras con Alma + marquee · La Terraza.

function TuristaVecinoV2() {
  const {
    Badge
  } = window.HolaSpanskDesignSystem_9649fd;
  const rows = [['Bestiller på engelsk og peker på menyen.', '«Ponme una caña, porfa» — og servitøren smiler.'], ['Ser Spania gjennom et hotellvindu.', 'Sitter på terrassen til solen forsvinner.'], ['Drar hjem med bilder.', 'Drar hjem med venner.']];
  const col = variant => ({
    flex: '1 1 320px',
    minWidth: 0,
    background: variant === 'vecino' ? 'var(--surface-card)' : 'transparent',
    border: variant === 'vecino' ? '1px solid var(--border-subtle)' : '1px dashed var(--border-form)',
    borderRadius: 'var(--radius-lg)',
    padding: 'clamp(28px,3vw,40px)',
    boxShadow: variant === 'vecino' ? 'var(--shadow-soft)' : 'none'
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sand)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      textAlign: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--hs-naranja)',
      fontWeight: 600
    }
  }, "Versi\xF3n turista vs vecino")), /*#__PURE__*/React.createElement("h2", {
    "data-reveal": true,
    style: {
      font: 'var(--type-display-2)',
      fontFamily: 'var(--font-serif)',
      textAlign: 'center',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-snug)',
      margin: '0 auto 50px',
      maxWidth: 720
    }
  }, "Samme by. To helt ulike Spania."), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1",
    style: {
      display: 'flex',
      gap: 'clamp(16px,2vw,28px)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col('turista')
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      marginBottom: 22
    }
  }, "Turista"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, rows.map((r, n) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      fontSize: 'clamp(16px,1.6vw,19px)',
      lineHeight: 1.5
    }
  }, r[0])))), /*#__PURE__*/React.createElement("div", {
    style: col('vecino')
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rojo",
    solid: true,
    style: {
      marginBottom: 22
    }
  }, "Vecino"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, rows.map((r, n) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-primary)',
      fontSize: 'clamp(16px,1.6vw,19px)',
      lineHeight: 1.5,
      fontWeight: 500
    }
  }, r[1])))))));
}
function PalabrasV2() {
  const {
    PalabraCard
  } = window.HolaSpanskDesignSystem_9649fd;
  const words = ['duende', 'sobremesa', 'madrugada', 'tertulia', 'morriña', 'chiringuito', 'siesta', 'merienda', 'paseo', 'apapachar'];
  const Word = ({
    w
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(18px,2vw,26px)',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.34)',
      padding: '0 28px'
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--hs-rojo)',
      opacity: 0.7
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    id: "palabras"
  }, /*#__PURE__*/React.createElement(PalabraCard, {
    word: "sobremesa",
    meaning: "Den lange stunden etter maten der ingen reiser seg. Kaffe, en historie til, solen som flytter seg langsomt over bordet.",
    close: "Tid uten klokke.",
    style: {
      borderRadius: 0,
      padding: 'clamp(120px,18vh,240px) var(--section-pad-x)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    style: {
      background: 'var(--surface-ink)',
      padding: '34px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [...words, ...words].map((w, n) => /*#__PURE__*/React.createElement(Word, {
    key: n,
    w: w
  })))));
}
function TerrazaV2() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--surface-page), var(--surface-raised))',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 'var(--content-narrow)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-2)',
      fontStyle: 'italic',
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--tracking-snug)'
    }
  }, "La Terraza"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      marginTop: 28,
      lineHeight: 1.7
    }
  }, "Et fellesskap av nordmenn som elsker Spania. Stedet der nysgjerrige blir naboer.", ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--hs-rojo)',
      fontWeight: 600,
      fontStyle: 'italic'
    }
  }, "Fra hola til vecino."))));
}
Object.assign(window.LV2 = window.LV2 || {}, {
  TuristaVecino: TuristaVecinoV2,
  Palabras: PalabrasV2,
  Terraza: TerrazaV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing-v2/Palabras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CTA.jsx
try { (() => {
// CTA newsletter section + footer.
function CTASection() {
  const {
    NewsletterForm
  } = window.HolaSpanskDesignSystem_9649fd;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-1)',
      fontStyle: 'italic',
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "\xBFVienes?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      margin: '20px 0 44px',
      lineHeight: 1.6
    }
  }, "Et brev fra terrassen, hver uke. Historier, ord og smaker du ikke finner i en reiseguide."), /*#__PURE__*/React.createElement(NewsletterForm, null)));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      padding: '60px 24px 72px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: '-0.03em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-amarillo)',
      opacity: 0.45
    }
  }, "hola"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-rojo)',
      opacity: 0.45
    }
  }, "Spansk")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'rgba(255,255,255,0.5)',
      marginTop: 14
    }
  }, "Skrevet mellom Norge og Spania, med hjerte i begge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      marginTop: 24
    }
  }, ['Instagram', 'TikTok', 'Nyhetsbrev'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.4)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, l))));
}
window.CTASection = CTASection;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
// holaSpansk landing — Hero. Painted pergola bg, warm veil, logo + serif headline.
function Hero({
  onTheme,
  theme
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 24px 60px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('../../assets/img/sorolla-pergola.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 35%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15,17,23,0.45), rgba(15,17,23,0.2) 40%, rgba(15,17,23,0.85))' : 'linear-gradient(180deg, rgba(255,251,245,0.3), rgba(255,251,245,0.08) 38%, rgba(255,251,245,0.7))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onTheme,
    style: {
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 20,
      height: 46,
      padding: '0 18px',
      borderRadius: 100,
      border: '1.5px solid var(--border-form)',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(16px) saturate(180%)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, theme === 'light' ? '☾ Nattmodus' : '☀ Dagmodus'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "holaSpansk",
    style: {
      width: 'clamp(150px,20vw,230px)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: 40,
      boxShadow: 'var(--shadow-raised)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-1)',
      fontFamily: 'var(--font-serif)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      margin: 0,
      textShadow: theme === 'dark' ? '0 2px 40px rgba(0,0,0,.5)' : '0 2px 40px rgba(255,251,245,.7)'
    }
  }, "Kom n\xE6rmere", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-rojo)'
    }
  }, "Spania")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-primary)',
      marginTop: 24,
      maxWidth: 520,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Spania fortalt innenfra. For deg som vil mer enn \xE5 v\xE6re turist.")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Manifesto.jsx
try { (() => {
// Manifesto + the framed sobremesa image reveal.
function Manifesto() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sand)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-quote)',
      color: 'var(--text-primary)',
      margin: 0,
      lineHeight: 1.4
    }
  }, "Lukten av appelsinblomst gjennom et \xE5pent vindu.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-naranja)',
      fontWeight: 500
    }
  }, "Lyden av kopper mot marmor i en bar klokka elleve."), ' ', "Det Spania ingen reiseguide kan gi deg.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hs-rojo)',
      fontWeight: 700
    }
  }, "Det lever vi i, hver dag.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 3,
      borderRadius: 2,
      background: 'var(--grad-divider)',
      marginTop: 56
    }
  })));
}
function ImageReveal() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'clamp(60px,10vh,140px) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16/10',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-frame)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/sorolla-sobremesa.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      bottom: 'clamp(20px,3vw,40px)',
      left: 'clamp(20px,3vw,40px)',
      right: 'clamp(20px,3vw,40px)',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(16px,1.6vw,24px)',
      color: '#fffbee',
      textShadow: '0 2px 24px rgba(0,0,0,.7)',
      margin: 0
    }
  }, "\xC5 leve l\xE6res ikke i en bok. Det leves. Sakte."))));
}
window.Manifesto = Manifesto;
window.ImageReveal = ImageReveal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Story.jsx
try { (() => {
// Three pillars + Palabras con Alma + marquee + La Terraza, using DS components.
function Pillars() {
  const {
    Pillar,
    SectionLabel
  } = window.HolaSpanskDesignSystem_9649fd;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "naranja",
    divider: true,
    style: {
      marginBottom: 40
    }
  }, "Hva du finner"), /*#__PURE__*/React.createElement(Pillar, {
    numeral: "i.",
    word: "Kultur",
    color: "var(--hs-amarillo)"
  }, "Skikkene, festene, maten og alt det ingen forteller deg."), /*#__PURE__*/React.createElement(Pillar, {
    numeral: "ii.",
    word: "Liv",
    color: "var(--hs-azul)"
  }, "Hvordan det egentlig er \xE5 leve i Spania. Det vakre og det kaotiske."), /*#__PURE__*/React.createElement(Pillar, {
    numeral: "iii.",
    word: "Spr\xE5k",
    color: "var(--hs-rojo)",
    style: {
      borderBottom: 'none'
    }
  }, "Spansk som faktisk brukes. P\xE5 gata, i baren, mellom venner.")));
}
function Palabras() {
  const {
    PalabraCard
  } = window.HolaSpanskDesignSystem_9649fd;
  const words = ['duende', 'sobremesa', 'madrugada', 'tertulia', 'morriña', 'chiringuito', 'siesta', 'merienda', 'paseo'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PalabraCard, {
    word: "sobremesa",
    meaning: "Den lange stunden etter maten der ingen reiser seg. Kaffe, en historie til, solen som flytter seg langsomt over bordet.",
    close: "Tid uten klokke.",
    style: {
      borderRadius: 0,
      padding: 'clamp(120px,18vh,240px) var(--section-pad-x)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)',
      padding: '36px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '0 24px'
    }
  }, words.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(16px,2vw,22px)',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.2)'
    }
  }, w)))));
}
function Terraza() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--surface-page), var(--surface-raised))',
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-narrow)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-2)',
      fontStyle: 'italic',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "La Terraza"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      marginTop: 28,
      lineHeight: 1.7
    }
  }, "Et fellesskap av nordmenn som elsker Spania. Stedet der nysgjerrige blir naboer.", ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--hs-rojo)',
      fontWeight: 600
    }
  }, "Fra hola til vecino."))));
}
window.Pillars = Pillars;
window.Palabras = Palabras;
window.Terraza = Terraza;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Story.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.PalabraCard = __ds_scope.PalabraCard;

__ds_ns.Pillar = __ds_scope.Pillar;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

})();
