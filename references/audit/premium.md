# Concept C — Premium Minimal · Audit

## TL;DR (3 sentences)
The restraint reads as intentional and the dark hero earns its weight — typography hierarchy, the maroon accent discipline, and the editorial process/case-study sections deliver real "premium-not-template" energy. But the concept under-converts: the primary CTA is the same weight as a body button, there are zero above-the-fold trust-trio logos (the non-negotiable from `analysis.md`), and "Florida" lives in a single mono county strip that reads more like a server room than a place. Restrained mobile typography and visible focus states need a second pass before this can ship to client review.

## Top 5 issues to fix (ranked by impact × effort)

1. **No underwriter logo wall above the fold** — `analysis.md:151` calls the trust-trio "non-negotiable" across all 3 concepts. Hero only shows a maroon dot + 3 mono stats (`PremiumPage.tsx:41-45`). Qualia/Fidelity/First American marks must appear before scroll. **High impact / low effort.**
2. **Primary CTA has no visual weight** — `.btnPrimary` (`premium.module.css:37-49`) is a flat black rectangle, same scale as the body buttons, and the hero variant is *inverted to bone-on-bone* (`:149`) which dilutes the hero's only conversion action. Give the hero CTA accent-maroon background or a clear scale bump. **High / low.**
3. **Florida cue is one mono line** — `heroMeta` "Est. MMXXIV · Miami-Dade · Broward..." (`PremiumPage.tsx:31`) is the only place-naming and it reads like a sysadmin footer. The florida-premium playbook (`analysis.md:91-99`) demands "name the place" visibly. No waterfront geometry, no architecture cue anywhere in CSS. **High / medium.**
4. **`composes:` in CSS Modules + Tailwind v4 / Turbopack** — `.eyebrowDark { composes: eyebrow; }` (`premium.module.css:21`). CSS Modules `composes` works in Next 15 with the default webpack config but is **not supported under Turbopack** and Tailwind v4 PostCSS pipelines have shipped reports of silent drops. Refactor to a shared selector list or a base utility class. **Med / low.**
5. **Borderless input focus states are too quiet on a light card** — `.field input` has `border: none; border-bottom: 1px solid` and on focus only the bottom border swaps color (`premium.module.css:557-565`). Combined with `outline: none`, this fails keyboard-only users on the only form on the page. Add a visible focus ring (the global `:focus-visible` from `globals.css:62` is overridden here). **High / low.**

## Section-by-section walk

- **Hero** — Type discipline lands; trust strip is too quiet and CTA is under-weighted.
- **Pattern Interrupt** — `data-line="2"` italic accent on "The reason?" is a great editorial touch; works.
- **Safe Listing** — Numbered benefit column with maroon mono numerals is the strongest single component.
- **How It Works** — Two-column dark process grid reads well but the dashed `oklch(100% 0 0 / 0.10)` dividers may be invisible on lower-gamut laptop screens.
- **AI Difference** — Sticky narrow column + wide list is a sophisticated layout move; nothing to fix.
- **Unfair Advantage** — Massive quote (`clamp(2rem, 1rem + 4vw, 4.5rem)`) is the editorial high point.
- **Included** — 3-col grid with mono numerals + bone investBlock works; `investVHero` at 5rem maroon "$0" is the page's best single design moment.
- **Proof** — Single big testimonial earns the dark surface, but only one quote on a "hundreds of agents" claim feels thin.
- **Case Studies** — `<dl>` semantics are correct; this is a model section.
- **FAQ** — Clean `<dl>` definition list; passes.
- **Limited Onboarding** — Identical bone surface to neighboring sections; the "scarcity" beat reads flat.
- **Final CTA** — 1.6fr/1fr form-plus-alt-links grid is good. Form needs focus rings.
- **Guarantees** — 2-col bordered grid on navy with maroon nums is excellent.

## Anti-AI-slop scorecard (8 / 10)

1. **Scale contrast** ✓ — H1 `clamp(3rem, …, 9.5rem)` vs `text-xs` eyebrow.
2. **Spacing rhythm** ✓ — Bone sections are airier than dark sections by design.
3. **Depth/layering** ✓ — Dark hero radial gradients give real depth (without becoming a "blob").
4. **Typographic character** ✓ — Inter Display + Raleway + JetBrains Mono is a real pairing, not a default.
5. **Semantic color** ✓ — Maroon only on accent moments (dot, numerals, hover, "$0").
6. **Designed hover/focus** ✗ — Hovers are present; focus states on inputs are broken.
7. **Grid-breaking comp** ✓ — `processGrid`, `investBlock`, sticky `colNarrow` all break uniform grids.
8. **Texture/atmosphere** ✗ — No grain, no architecture photo — the "single hero photograph" promised in `analysis.md:145` is missing.
9. **Motion clarifying flow** ~ — Almost no motion (intentional); not penalized but not credited.
10. **Data-vis in system** ✓ — `investBlock` and `caseDl` treat data as design.

Banned patterns check: no gradient blob (radials are restrained), no uniform radius (`border-radius: 0` everywhere is a deliberate choice that fits the direction), no default Tailwind palette.

## Florida-regional grade: **C+**
The county list is mono-typed in an ASCII strip and there's zero architectural / water-geometry visual cue. Reads placeless until the case studies (Naples / St. Petersburg). One Sotheby's restraint without One Sotheby's "place."

## What works
- Inverted maroon "$0" in `investBlock` (`premium.module.css:417-422`) — single most persuasive moment on the page.
- The pattern-interrupt italic-line trick via `data-line` selectors — editorial without ornament.
- `<dl>` usage in case studies and FAQ — semantically correct and visually distinctive.
- Dark/light section rhythm (hero→bone→bone→dark→bone→bone→dark→bone→bone→bone→bone→dark) creates a real cadence.

## What to kill or rework
- The bone-on-bone hero CTA — give it maroon weight.
- The MMXXIV / mono-county strip — replace with a real underwriter logo row + 2 named counties.
- The borderless-input focus state — restore `:focus-visible` outline.
- Remove `composes:` and inline the eyebrow styles to dodge the Turbopack/Tailwind v4 risk.

## Conversion-readiness rating: **6 / 10**
Premium feel is there; the page asks the visitor to scroll 13 sections to find proof while withholding the trust signals competitors put above the fold. Fix the trust trio + hero CTA weight and this jumps to 8.
