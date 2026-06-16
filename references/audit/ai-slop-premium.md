# Concept C — Premium Minimal · AI-Slop Audit

Scope: does this page read as intentional human design or generic LLM UI?
Sources: `PremiumPage.tsx`, `premium.module.css`, `tokens.css`, `globals.css`, `Nav.tsx`, `florida-premium/findings.md`.

---

## A. 10 Required Qualities

1. **Hierarchy through scale contrast** — ✓ Hero `clamp(2.25,…,5rem)` against `--text-xs` eyebrow + mono meta strip is a real 5-step jump; `investVHero` (~3.25rem) plays against `investK` xs caps in the same block.
2. **Intentional rhythm in spacing** — ✓ `interrupt` uses `clamp(2rem,5vw,7rem)` between columns, sections use `space-section-y` fluid 3.5→8rem, trustBand uses tile padding ≠ section padding. Not uniform.
3. **Depth / layering** — ✓ `heroBgImage` (op 0.45) under `heroLayer` (two radial gradients + linear) under `heroInner`. Trust band sits on bone breaking the dark hero edge. Not a "blob" — diagonally opposed radials at 20/80 and 80/20 read as light planes, not a centered orb.
4. **Typography with character** — ⚠ Pairing is **Inter + Raleway**, not "Inter Display" (globals.css L108 uses `--font-inter`). Two humanist sans serifs are close in voice — the spec called for Inter *Display* which would have given real contrast. Currently borderline default-feeling; saved only by aggressive `letter-spacing: -0.035em` and weight 500 on display.
5. **Color semantic** — ✓ Maroon appears only at: hero CTA, accent eyebrows, `caseResult`, `investVHero`, `processColAccent`, divider dots. Bone/navy carry structure. Disciplined.
6. **Hover / focus / active states** — ✓ `btnPrimary` bg→accent, `btnText` color→accent with currentColor underline, `processList li:hover` accent shift, `field input:hover` border-bottom darken, restored visible `:focus-visible` outline with offset on borderless inputs.
7. **Grid-breaking composition** — ✓ `heroBottom` 1fr 1fr with CTAs right-aligned; `split` 22rem fixed + 1fr with sticky narrow column; `trustBand` 1.4fr 1fr 1fr asymmetric; `interrupt` 1fr 1.4fr. Not a card grid.
8. **Motion clarifying flow** — ✓ Restrained to 150ms color/bg transitions; no scroll-jacking. Matches "almost no motion" brief. Could be slightly more — but absence is intentional.
9. **Texture / atmosphere** — ✓ The `heroBgImage` prompt is specific and good (causeway / blue hour / negative-space upper-left). Placeholder ImageSlot in dev gives shape-not-feel, but the prompt would land cinematic. Bone-50 (not pure white) at 98.5% oklch with 0.004 chroma adds warm grain at the surface level.
10. **Data viz in system** — ⚠ The "data viz" surface here is the trustBand + investBlock + caseDl `<dl>`. They're typographic-only, no charts/sparklines — which is fine for premium minimal, but it means this quality is a pass-by-omission rather than a positive demonstration.

**Total: 8/10 ✓, 2 ⚠ — well above passing (≥4).**

## B. Banned patterns

- Default Tailwind palette — ✓ absent (OKLCH custom ramps).
- Inter + default serif pairing — ⚠ *partial risk*: Inter + Raleway, both humanist sans. Not a "default serif," but the pairing lacks the contrast a serif/sans or Inter-Display/Raleway split would create.
- Centered hero with gradient blob — ✓ absent (left-aligned, off-axis dual radials, not centered).
- Default shadcn styling — ✓ absent (no shadcn primitives in this file).
- Uniform radius / spacing / shadow — ✓ absent: `btnPrimary` is `border-radius: 0`, `placeholderBadge` is `--radius-sm`, `finalForm` is square; shadows used only on hero CTA.
- Flat gray-on-white + one accent — ✓ absent: bone (not gray), navy-900 dark sections, semantic maroon.
- "Generic-fintech-luxe" risk — ⚠ Without the actual Florida photo behind the hero, the dark + bone + maroon + Inter could read Stripe/Linear. The hero photo is what *prevents* this — but in the demo it's an `ImageSlot` placeholder. **Slop risk lives or dies on whether reviewers see past the placeholder.**

## C. Florida-regional check

Code-level Florida signals:
- `heroMeta` enumerates counties: "Miami-Dade · Broward · Palm Beach · Collier · Hillsborough · Pinellas · +61" — matches findings.md rule #3 (name the place).
- Image prompts call out "Florida causeway, Gulf of Mexico, blue hour, no palms, no people" — directly executes findings.md rule #1 (water geometry + architecture, no flora).
- No palms, no sunset gradients, no script fonts, no gold-on-navy in CSS. ✓
- "Florida-agent rating" trust tile labels the region in the type system.

**Strong Florida** — execution matches the findings.md playbook line for line, including the negative space (no flora, no sunset). The only weakness is that the visible Florida-ness depends on the hero photo loading; without it, the page is a *placeless* premium-minimal layout rescued by the county strip.

## D. Smell test

**No** — does not smell like generic LLM UI. The asymmetric trust band, square buttons, sticky narrow column in `split`, italic accent line in interrupt story (`p[data-line="2"]`), and the discipline of one accent color all read as designer choices.

## E. Top 3 slop risks

1. **`globals.css:108`** — `--font-display: var(--font-inter)` is plain Inter, not Inter Display as the brief says. Fix: load Inter Display (or Inter Tight) via `next/font` and update the variable, or commit to Raleway display + Inter body to widen the pairing contrast.
2. **`PremiumPage.tsx:30-38` / `premium.module.css:95-101`** — At 0.45 opacity the hero photo will read as a tonal wash, not a place. Risk: in the placeholder state it's just gradients = generic luxe. Fix: bump to 0.6 once a real Florida causeway frame is in, or add a subtle grain overlay so the placeholder communicates atmosphere now.
3. **`premium.module.css:78-80`** — Hero radials sit at oklch 35% 0.158 28 (maroon) + 40% 0.100 251 (navy). The maroon ellipse at 20/80 risks reading as a warm blob behind the type column. Fix: drop maroon radial to 0.18 alpha (from 0.32) so the dark hero stays cool-dominant per "Light, not heat" (findings.md rule #2).

## F. AI-slop score: **8 / 10**

Disciplined accent use, asymmetric grids, specific Florida architecture in the image prompts, and restored a11y focus states clear it of slop. Held back from 9-10 by the Inter/Raleway pairing being closer than the brief promised and by Florida-ness leaning hard on a placeholder image.
