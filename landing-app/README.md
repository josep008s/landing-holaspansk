# holaSpansk — Landing (React + Vite)

Production implementation of the `landing-v2` design from the holaSpansk Design System
handoff (`../project/landing-v2/index.html`). The original was a browser-Babel prototype
that depended on a compiler-generated `_ds_bundle.js`; this is a real, buildable React app.

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## What's here

- **`src/styles/`** — the design tokens, ported verbatim from the design system
  (`tokens/*.css`) plus the page-level CSS (`index.css`). The only intentional change from
  the prototype: `--font-sans` is **Hanken Grotesk** (the agreed brand type decision),
  replacing Poppins. Fraunces is unchanged for display/serif.
- **`src/components/ds/`** — the reusable design-system primitives used by the page:
  `Button`, `Badge`, `SectionLabel`, `Pillar`, `PalabraCard`, `NewsletterForm`.
- **`src/sections/`** — one component per page section: `Nav`, `Hero`, `Manifesto`,
  `FramedImage`, `Pillars`, `TuristaVecino`, `Palabras`, `Terraza`, `CTASection`, `Footer`.
- **`src/hooks/useScrollReveal.js`** — the scroll-reveal behavior ported from the prototype.
- **`public/assets/`** — the painted imagery and logo (copied from the design system).

## Behaviors preserved

Parallax painted hero, word-by-word manifesto reveal, scroll-reveal on every section,
nav hide-on-scroll-down / show-on-scroll-up, light/dark ("Nattmodus") theme toggle,
the Palabras word marquee (pause on hover), and the newsletter success state — all with
`prefers-reduced-motion` honored.
