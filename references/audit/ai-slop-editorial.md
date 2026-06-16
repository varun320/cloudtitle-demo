# AI-Slop Audit — Concept A (Editorial)

Scope: `components/editorial/EditorialPage.tsx` + `editorial.module.css` + shared tokens/Nav.

## A. 10 Required Qualities

1. **Hierarchy through scale contrast** — ✓ Fraunces display clamp `2rem→4rem` for H1 (`editorial.module.css:61`) vs `--text-xs` eyebrows; `bigQuote` jumps to `--text-display` (`:404`). Real top-to-bottom step.
2. **Intentional rhythm in spacing** — ✓ Asymmetric narrow/wide grid `22rem 1fr` with `clamp(2rem,4vw,6rem)` gutter (`:289-291`); sticky narrow column (`:294`); chapter-break image bands break uniform vertical drumbeat.
3. **Depth / layering** — ⚠ Some: dark `interrupt`, light `compareOld` vs dark `compareNew` (`:345-346`), `box-shadow: --shadow-sm` on includedCard. But no overlap, no z-stacking, no figure bleeding past column. Mostly flat stacked sections.
4. **Typography with character & pairing** — ✓ Fraunces serif + Raleway sans set explicitly (`globals.css:92`); italic emphasis on `heroEm`, `quoteH2`, `aiLabel`, `caseList dt`, `finalAltLink` — italic as a real device, not decoration.
5. **Color used semantically** — ✓ Maroon = accent only (eyebrow, tick, case borders, focus ring); navy = brand surface; bone surfaces vs `surface-dark` carry meaning (problem section dark, capacity section maroon-brand). Not decorative.
6. **Designed hover/focus/active** — ✓ `btnGhost` border-color swap to accent (`:108`), `btnLink` underline color shift, Nav link `scaleX` underline reveal (`Nav.module.css:56-66`), focus-visible ring in `globals.css:62`. Real states.
7. **Grid-breaking / editorial composition** — ⚠ Hero has the EST./MMXXIV stamp aside + narrow/wide split section grid + 1fr/2fr FAQ split. But sections 7/8/13 default to symmetric 3/3/4-col grids — editorial intent fades mid-page.
8. **Motion that clarifies flow** — ⚠ Minimal: nav backdrop-blur on scroll, button translateY, link underline reveal. Reduced-motion respected. Nothing that *guides* — but Divi-replicable constraint justifies restraint.
9. **Texture / grain / atmosphere** — ✗ No grain, no paper texture, no noise overlay, no bleed. Bone-50 warmth helps but it's still a clean digital surface. For an "editorial / magazine" register this is the weakest leg.
10. **Data viz as part of the system** — ⚠ `investGrid` numerics styled with display italic + `investHero` accent at `--text-4xl` (`:455`); trust trio with starred rating and `$127M+` italic hero figure. Treated, but it's number-as-typography, not real viz.

**Total: 6 ✓ / 4 ⚠ / 1 ✗ → passes the ≥4 floor.**

## B. Banned Patterns

- Default Tailwind palette — ✓ absent (OKLCH navy/maroon/bone ramps in `tokens.css:25-69`)
- Inter + default serif pairing — ✓ absent (Fraunces+Raleway on editorial; Inter only on Concept C)
- Centered hero w/ gradient blob + generic CTA — ✓ absent (left-aligned asymmetric hero, EST. stamp aside, no gradient)
- Default shadcn styling — ✓ absent (no shadcn primitives in this file)
- Uniform radius / spacing / shadow — ✓ absent (radius mixed: `sm` buttons, `md` testimonial cards, pill nav CTA, square compare/included cards; borders carry weight instead of shadows)
- Flat gray-on-white + one accent — ✓ absent (bone surface + navy dark + maroon brand + accent — semantic surfaces, not decorative)
- AI mood-board imagery — ✓ N/A (ImageSlot placeholders with explicit photo briefs)

## C. Smell Test

**Maybe — a few moments betray AI templating.** The hero aside, pattern-interrupt, and pull-quote sections read like a designed magazine. The included/proof/guarantee/case grids in the back half flatten into generic three-up/four-up cards a senior designer would push back on.

## D. Top 3 Slop Risks

1. **`guaranteeList` 4-up card grid (`editorial.module.css:633-645`)** — four identical bordered tiles with italic display text. Reads like AI default "value props" grid. *Fix:* render as a numbered editorial list (`01 / 04` + display line) or a single 2-column prose block with hanging numerals.
2. **`includedGrid` 3-up symmetric cards (`:420-423`)** — uniform padding, uniform white surface, only differentiator is a 1-color top border. The middle-card `:nth-child(2)` accent swap is the tell. *Fix:* break to bento — one wide left card holding totals + two stacked right cards, or asymmetric col widths `1.4fr 1fr 1fr`.
3. **`testimonialCard` 3-up dark grid (`:472-487`)** — three same-sized translucent cards on navy. Quintessential SaaS testimonial row. *Fix:* one large featured pull-quote with attribution + two smaller text-only quotes beneath, or a single editorial portrait+quote spread.

## E. AI-Slop Score

**6.5 / 10.** Strong tokens, strong typography pairing, hero/interrupt/quote sections clearly designed; back-half symmetric card grids and absent texture pull it back from "intentional editorial" into "competent template."
