# holaSpansk — Design System

> **Spansk lært slik du faktisk lever det i Spania — på en terrasse, ikke i en lærebok.**
> Español como se vive en España — en una terraza, no en un libro de texto.

holaSpansk is a **cultural platform** that shows authentic Spain to Norwegians and, along the way, teaches Spanish. It is **not a language academy**. The product isn't "learning a language" — it's *enjoying Spain for real*; Spanish is the key that unlocks it. Founder **Josep** is a Spaniard in Norway and a Norwegian in Spain — he made the journey in reverse, so he sees Spain with Norwegian eyes. The brand *is* that bridge: the uniqueness is shown through symmetry, never proclaimed.

**Audience:** Norwegians 35–65 who already love Spain "from the sun-lounger" but live it in English, behind glass. We don't convince them — we hand them the key to cross through. Hooks: the social warmth Norway rations (the terrace, the *sobremesa*, the waiter who recognises you), "live more, not do more," and seeing themselves reflected with affection (Norge vs Spania, with humour).

**The enemy:** *lærebok-spansk* (textbook Spanish) — grammar, drills, streaks, exams; the method that passes a test and goes mute ordering a beer. We attack the method, never the person, and never shame the learner.

---

## Sources

This system was built from the brand brief plus the real product code:

- **Landing page repo:** [github.com/josep008s/landing-holaspansk](https://github.com/josep008s/landing-holaspansk) — the live `holaSpansk | Kom nærmere Spania` landing (a single `public/index.html`, GSAP + Lenis scroll). The colour theme system, section structure (hero → manifesto → pillars → Palabras con Alma → terraza → CTA), and the painted hero/sobremesa imagery were lifted directly from it. **Explore this repo to build higher-fidelity landing variants.**
- Related founder repos worth a look: `josep008s/landing-heinorsk`, `josep008s/heinorsk-online` (sister Norwegian-learning product), `josep008s/holaSpansk`.

Imported assets live in `assets/` (the painted azulejo logo and two Sorolla-lineage oil paintings).

> **⚠️ Font substitution flagged for review.** The brand brief specifies **Fraunces** (serif) + **Poppins** (sans). The *live landing currently ships Playfair Display* for the serif voice. This system follows the **brief (Fraunces)** and lists Playfair Display as the fallback. If the brief is authoritative, no change needed; if the landing is the source of truth, tell me and I'll swap the serif to Playfair Display. Both load from Google Fonts (no self-hosted binaries) — say the word if you want them self-hosted.

---

## CONTENT FUNDAMENTALS

**Voice = Profesor Amigo + Storyteller Cultural.** Norwegian base, Spanish accent. Observational humour, never clowning. Warm, never condescending about mistakes. The test for any line: *does it sound like Josep talking to a friend over coffee? Does it make you feel Spain, not just inform you?*

**Two registers:**
1. **Teaching** — *Historia → Moraleja → Propuesta* (story → lesson → invitation). Clear, useful, structured.
2. **Poetic — "se queda en la terraza"** — sensory image, no moral, no CTA. *If you explain the magic, you kill it.* (e.g. the manifesto, the *Palabras con Alma* close.)

**Language & casing:**
- Bilingual by design: **Norwegian (bokmål) is the body/bridge**, **Spanish is the soul** — the headline word, the *frase con alma*, the warm sign-off (`¿Vienes?`, `¡Bienvenido a la terraza!`).
- Spanish is **Castilian (Spain)**, never Latin-American. **Never the formal *usted* register.**
- Sentence case for body. Display can be expressive. Tracked UPPERCASE only for small overlines (`PALABRAS CON ALMA`).
- I/you: speaks **to "you" (deg)** warmly and inclusively; "we" = the holaSpansk terrace community.

**Emoji:** sparing — **2–3 max**, only when it genuinely warms a line. Never as decoration or bullet replacement.

**Signature lines:** «Bienvenido a la terraza» · «Eso no se traduce» (Palabras con Alma) · «Versión turista vs vecino» · «Nos vemos en la terraza» · «Poco a poco se anda lejos» · «No vendemos cursos. Abrimos ventanas.»

**The metaphor arc (the spine of all content):** **Ventana** (seeing real Spain for the first time) → **Terraza** (sitting down and staying) → **Sobremesa** (the soul: time that stops — *vivir más, no hacer más*) → **Vecino** (belonging; the waiter who knows your name).

**NEVER:** grammar without culture · "fluent in 30 days" promises · hype ("brutal", "hacks", "tricks") · cold/corporate tone · criticising Spain · the words *"expat"* / *"digital nomad"* · clickbait · opening with "Hei alle!" or "¡Hola chicos!" · postcard clichés · fear as a motivator.

---

## VISUAL FOUNDATIONS

**Mother style — *mundo pintado*.** holaSpansk **doesn't use stock photos of Spain: it paints it.** Impressionist oil, Sorolla lineage — Valencian *luminismo*. Visible brushstroke (impasto), Mediterranean sun, white linen. All imagery is original in this style — **never copy real Sorolla canvases.** (In video/Reels, Josep is *real*, filmed in Spain — the oil is the still-image layer only.)

**Regla de luz (non-negotiable):** warm golden sun **+ shadow ALWAYS violet-blue, NEVER grey.** High-key. *If the shadow is grey, it isn't holaSpansk.* The token `--hs-sombra: #A7A6C8` exists precisely so shadows stay violet.

**Composition — "mirar a través del marco":** a framing foreground (grapevine, bougainvillea, whitewashed wall) → a luminous opening beyond (sea, village). You're on the terrace looking out = the *ventana→terraza* metaphor made paint. Figures in white linen, often seen from behind (the viewer steps in). Lush and full; the sea/sky is the breath of space.

**Colour** — three layers (see `tokens/colors.css`):
- **Núcleo** (the loud, recognisable trio): Rojo Pasión `#E11D48`, Amarillo Sol `#F59E0B`, Azul Mediterráneo `#0EA5E9` (+ Naranja `#EA580C`).
- **Mundo pintado** (the painting's palette): Buganvilla `#C42A6B` *(firma)*, Violeta parra `#8E3A86`, Cal al sol `#F6ECDC`, Sombra violeta `#A7A6C8`, Terracota `#C2703F`, Mar profundo `#1B7E96`, Verde parra `#5C8A4A`, Cielo melocotón `#F4A86E`, Cobalto azulejo `#1E3A8A`.
- **Neutro/texto:** Tinta `#1F2937`, Lino `#F2EDE2`, Arena `#F5F0E8`.

**Type — two voices:** **Fraunces** (serif) = *el alma española* — display, titulares, *Palabras con Alma*, quotes, thesis lines. **Poppins** (sans) = *la claridad noruega* — body, captions, CTAs, text-over-image, data. Display is big and tightly tracked (−0.05em); body is calm Poppins 400 at line-height 1.6.

**Backgrounds:** warm off-white (`--surface-page #FFFBF5`) and sand (`--surface-sand`) for light; deep ink (`--surface-ink #0F1117`) for the *Palabras con Alma* / footer sections. Full-bleed painted imagery for hero & feature reveals, with a soft luminous **veil gradient** (never a black bar) so text stays legible. A subtle SVG **grain** sits over dark sections. A full **light/dark theme** ("Dagmodus/Nattmodus") is built in — dark keeps the same warm accents on near-black.

**Text over paint:** the painting rules; text lives in one calm place (a "whitewashed" band, or a corner block). In *Palabras con Alma*, the word sits on a soft veil of light — never a black bar. Maximum legibility, minimum coverage. **Never place text over the focal point of the image.**

**Motion:** calm and confident — Apple-ish `cubic-bezier(0.16,1,0.3,1)` eases, slow scroll-driven reveals (image scale + fade), word-by-word manifesto reveal, gentle parallax. No bounces, no springy overshoot on content, no infinite decorative loops (the marquee of words is the one quiet exception). `prefers-reduced-motion` is respected.

**Hover / press:** primary buttons **scale 1.04** and deepen Rojo → Rojo-oscuro with a soft rojo glow (`--shadow-cta`); cards **lift 4px** and the painted image inside **zooms ~1.05** over 0.7s; pillar words are outlined and **fill with colour** on hover. No grey hover states.

**Corner radii:** soft throughout — `md 14px`/`lg 20px` for cards, `xl 28px` for image frames, **`pill 100px` for every CTA** (a CTA is never square). 

**Shadows / elevation:** warm and diffuse — `--shadow-soft` (resting), `--shadow-raised` (hover), `--shadow-frame` (big image frames). Never a hard grey box; glassmorphism (`blur(20px) saturate(180%)`) only on the fixed nav and the theme toggle.

**Imagery colour vibe:** warm, sun-saturated, high-key, violet shadows, visible brushwork. Never cool, never grey, never desaturated, never literal photo-stock.

**AI-generation guardrails (vetar):** invented labels, fake signatures, deformed hands/text, "obvious AI look." **Never:** flat vector / 3D · grey shadow · cold light · photorealistic · stock · the "expat on the Costa" cliché.

---

## ICONOGRAPHY

holaSpansk is **almost icon-free by design** — the brand leans on **painted imagery and type**, not UI glyphs. What exists in the product:

- **The logo** (`assets/logo.png`) is a **painted azulejo tile** — a hand-painted ceramic-tile illustration of a smiling sun, sea, oranges, olives and a Spanish fan, with the wordmark *hola* (Rojo) / *Spansk* (Amarillo). It is the single most important brand asset; treat it as imagery (give it air, never recolour or flatten it). A typographic wordmark fallback (Poppins 900, `hola` amarillo + `Spansk` rojo) is used in nav/footer.
- **Functional UI icons** in the landing are **inline stroke SVGs** drawn ad-hoc (a sun and a moon for the theme toggle, a thin scroll indicator). Stroke weight ~1.8px, rounded caps/joins — i.e. a **Heroicons / Lucide-outline** visual register.
- **The → arrow** is a recurring brand glyph on CTAs ("¿Vienes? →"). Built into the `Button` component via the `arrow` prop.
- **Decorative "icons"** are the small **dots** between marquee words (a 6px rojo circle) — punctuation, not iconography.

**Guidance:** if you need a small functional icon, use **[Lucide](https://lucide.dev)** (outline, ~1.8px stroke, rounded) from CDN to match the existing toggle SVGs — *flagged as the closest match*, since the repo ships no icon font/sprite. **Emoji:** only the sparing 2–3 content rule above; never in UI chrome. Never hand-draw decorative SVG illustrations — that's the painted layer's job; use a placeholder and request real painted art.

---

## Index — what's in this system

**Foundations**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` — all design tokens & `@font-face`/font imports.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.HolaSpanskDesignSystem_9649fd.*`)
- `components/core/` — **Button**, **Badge**, **Card**, **SectionLabel**
- `components/forms/` — **NewsletterForm** (the "¿Vienes?" capture)
- `components/editorial/` — **PalabraCard** (the *Palabras con Alma* star unit), **Pillar**

Each component ships `<Name>.jsx`, `<Name>.d.ts` (props contract), `<Name>.prompt.md` (usage), and a directory `*.card.html` showcase.

**UI kits**
- `ui_kits/landing/` — full interactive recreation of the holaSpansk landing (hero, manifesto, framed image reveal, pillars, *Palabras con Alma*, terraza, CTA, footer), with working light/dark toggle and newsletter success state.

**Assets** (`assets/`)
- `logo.png` (azulejo wordmark), `img/sorolla-pergola.jpg`, `img/sorolla-sobremesa.jpg`, favicons.

**Meta**
- `SKILL.md` — Agent-Skill front-matter so this can be used directly in Claude Code.
