---
name: holaspansk-design
description: Use this skill to generate well-branded interfaces and assets for holaSpansk, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

holaSpansk is a cultural platform showing authentic Spain to Norwegians (Spanish is the key, not the product). Brand voice = Profesor Amigo + Storyteller Cultural: warm, observational, Norwegian base with a Spanish accent. The look is *mundo pintado* — original impressionist oil (Sorolla lineage), warm golden sun with **violet-blue shadows, never grey**. Two type voices: **Fraunces** (serif = el alma española) for display, **Poppins** (sans = la claridad noruega) for body.

Key files:
- `styles.css` + `tokens/*.css` — all colour, type, spacing, effect tokens and font imports.
- `guidelines/*.card.html` — foundation specimens.
- `components/{core,forms,editorial}/` — React primitives (Button, Badge, Card, SectionLabel, NewsletterForm, PalabraCard, Pillar).
- `ui_kits/landing/` — full landing-page recreation.
- `assets/` — the painted azulejo logo and Sorolla-style oil paintings.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Non-negotiables: shadows are violet, never grey · CTAs are pill-shaped, never square · paint, don't stock · Castilian Spanish, never *usted*, never "expat" · sparing emoji (2–3 max) · never grammar-without-culture or "fluent in 30 days" hype.
