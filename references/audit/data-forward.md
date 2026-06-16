# Concept B — Data-forward · Audit

## TL;DR

Concept B nails the trust-trio brief (underwriter strip + quantified hero + comparison table) and reads as the most conversion-ready of the three on desktop, but its bento hero collapses to a stacked 1-column at ≤560px which kneecaps the wow-stat for ~50% of Realtor traffic. Three claims violate the project's "Based on internal averages" label rule (Section 1 "Avg. days to close 10d", Section 8 KPIs `48h` / `4.9★` / `67/67`, Section 2 `$2.1M`/`Day 28`/`3` cards), and the doc-comment promises Geist Sans/Mono while the tokens still ship Raleway + JetBrains Mono — so the "Stripe energy" the concept sells is undelivered. Biggest conversion risk is the final form (Section 12) shipping five plain `<input type="text">` fields with no `name`, no `type=email/tel`, no required, no inline validation — it looks like a placeholder and will read that way to Thomas.

## Top 5 issues to fix (impact × effort)

1. **Missing "Based on internal averages" on quantified claims** (impact: high — CLAUDE.md rule #3 violation; effort: trivial). `DataForwardPage.tsx:49` (`10d` stat), `:227-237` (proofKpi tiles), `:80-90` (`$2.1M` / `Day 28` / `3` data cards). Add the mono label or remove the numerics.
2. **Hero bento collapses to one column at ≤560px** (`data-forward.module.css:217-220`). The four stat tiles + underwriter strip stack into a 6-deep tower below the H1; the `$127M+` brand-toned hero stat that should anchor mobile loses its position. Reorder grid so brand stat sits *between* hero copy and other tiles in the mobile DOM order, or `display: contents` + explicit `order:` per tile.
3. **`<input type="text">` form is non-conversion-grade** (`DataForwardPage.tsx:317`). Phone field should be `type="tel"`, email `type="email"`, address `type="text" autocomplete="street-address"`, no `name=` attributes at all — form would not submit usable data even as a demo. Also no `required`, no error state styles in the CSS module.
4. **Fake-Stripe typography promise** (`DataForwardPage.tsx:14` comment says Geist Sans + Geist Mono; tokens.css ships Raleway + JetBrains Mono). Either load Geist via `next/font` for the `.concept-data-forward` body class or update the doc-comment to match reality. Right now reviewer will diff promise vs ship.
5. **`<details>` FAQ has no aria-expanded state, no keyboard focus ring, no border-color change on `:focus-visible`** (`.faqItem`, css:521-538). Summary uses `list-style: none` which kills the native disclosure marker in Safari without compensating ARIA. Add `:focus-visible` outline using `--color-focus-ring`.

## Section-by-section walk

1. **Hero bento** — strong on desktop (1.4fr + 3×1fr + underwriter strip), but the `$127M+` brand-toned tile fights the H1 for first-look attention.
2. **Pattern interrupt (dark)** — three red-bordered data cards land emotionally; the `body.slice(-3)` truncation drops the human framing ("agent lost the commission / seller lost their next purchase / buyer walked away") into the body and works.
3. **Safe Listing benefits** — 2-col `<ul>` of cards; flat, no hierarchy among the five benefits, "Zero cost if your listing doesn't sell" deserves visual weight.
4. **How it works comparison `<table>`** — best section. Semantic `<thead>`/`<tbody>`/`scope="col"`/`scope="row"`, accent left-border on the Safe column, mono day labels. Conversion gold.
5. **AI difference split** — works; muted-vs-accent panels carry the contrast. "The infrastructure" eyebrow leaks Stripe-voice (see §4 below).
6. **Unfair advantage quote** — display-font blockquote with accent left-border; tonally fine but visually identical to Concept A's likely treatment, no data-forward-specific design hook.
7. **Included grid** — 3 cards with differentiated `border-top` colors (navy / maroon / teal) — rare use of the teal tertiary; works. The `investRow` 3-cell navy panel with `$0` highlighted in maroon is the conversion punch.
8. **Social proof bento** — 6-col grid with 2 testimonial cards (span 3) + 3 KPI tiles (span 2). At 900px collapses to 2-col with everything span 2, which means a *single* KPI gets a full row — wasteful.
9. **Case studies** — `<dl>` with 8rem fixed dt column; tight and scannable. CASE-001 mono ID is a nice anti-template move.
10. **FAQ** — `<details>` with `+`/`−` toggle via mono pseudo. A11y gaps noted above.
11. **Limited onboarding** — 82% capacity bar is good urgency hardware; the "9 spots" number is invented and may not match Thomas's actual capacity.
12. **Final CTA** — form + 3 alt links column. Form quality issues noted above; alt links pattern is clean.
13. **Guarantees (dark)** — 4-card grid, maroon top border, numbered `01-04`. Closes the page with confidence.

## Anti-AI-slop scorecard (7 / 10)

- **(1) Hierarchy through scale contrast** ✓ — `--text-display` H1 against `--text-xs` mono labels; investCell `data-hero` doubles font-size of the `$0` cell.
- **(2) Intentional rhythm** ✓ — section padding is fluid, but eyebrow→h2→sub→content rhythm is uniform across all 13 sections (slight ding).
- **(3) Depth / layering** ✓ — raised surface vs bone-100 vs navy-900 alternation; shadow-md on hero copy card.
- **(4) Typography with character** ✗ — promised Geist pairing, shipped Raleway. Without the mono/sans contrast the data-forward thesis is just "more numbers in default font."
- **(5) Color used semantically** ✓ — maroon = accent/risk, navy = brand authority, teal cameo on the middle Included card. Disciplined.
- **(6) Designed hover/focus/active states** ⚠ — buttons have `translateY(-1px)`; `.finalAltLink` hover is good; `<details>` and `<input>` focus states are weak.
- **(7) Grid-breaking / bento** ✓ — heroBento (1.4fr 1fr 1fr 1fr) and proofBento (6-col, span 3 / span 2) qualify.
- **(8) Texture / atmosphere** ✗ — no grain, no gradients beyond one radial in hero; "data-forward" might justify a subtle dot-grid or scanline on dark sections.
- **(9) Motion that clarifies flow** ✗ — concept opens with "subtle counter-style number reveals" in the doc-comment; not shipped. Stats are static.
- **(10) Data viz as design system citizen** ⚠ — capacity bar is the only chart-like element. Florida-county map called for in `analysis.md` ("Florida service-county map as a content tile") is missing entirely.

## Divi-replicability risks

- **Hero bento** (`heroBento`, css:80-87) — 4-column CSS Grid with a `grid-column: 1/2; grid-row: 1/3` spanning copy card is exactly what `lib/divi-safe.md` flags as **disallowed** ("Bento grids with overlapping cards" / "CSS Grid `grid-template-areas`"). Will need re-architecture to 2-col with row-height variation. **Flag this to Thomas before he picks B.**
- **Proof bento** (`proofBento`, css:435-441) — 6-col grid with `span 3` / `span 2` children. Same disallow. Divi 5 rows are flex-based — closest Divi equivalent is a 1/3-1/3-1/3 row of Blurbs, which loses the testimonial-vs-KPI hierarchy.
- **Compare `<table>`** (Section 4) — Divi 5 has no Table module; would need raw HTML in a Code Module or rebuilt as a Blurb grid. Note in `divi-safe.md` per-concept log.
- **`<details>` FAQ** — replace with Divi Toggle/Accordion module (allowlist confirms; lose the custom `+`/`−` mono treatment).
- **`statValue` with `<sup>`-style prefix/suffix spans** (css:170-177) — fine as raw HTML in Divi Text module, but Divi Number Counter module (the natural choice per `divi-safe.md` row 4) doesn't support inline prefix/suffix tokens. Either lose the animation or lose the typographic treatment.

## What works

- Comparison `<table>` is genuinely well-built: semantic, scoped, accent-bordered Safe column, mono day labels, distinct `tdResultWin` row.
- Trust trio appears above the fold (underwriter strip + 3 stats + Florida-rating) — meets the non-negotiable cross-concept rule in `analysis.md`.
- Case study cards with `CASE-001` mono IDs and `<dl>` structure are a smart anti-template move that earns the data-forward label.
- `investRow` final-value-vs-`$0` framing is the strongest single conversion moment on the page.

## What to kill or rework

- Kill the bento overlap in hero — re-architect as 2-col stat strip above a single-column copy block (Divi-safe and mobile-safe).
- Rework Section 6 (Unfair Advantage quote) — make it data-forward by overlaying the quote on a tiled `before/after` micro-comparison instead of a generic display blockquote.
- Kill the static stats — ship the promised "counter-style number reveals" (Divi Number Counter maps) on `$127M+`, `10d`, `48h`, `82%` or drop the doc-comment claim.
- Rework the final form — proper input types, `autocomplete`, `required`, inline validation styling; otherwise it reads as scaffold.

## Conversion-readiness rating: **7.0 / 10**

Strong information architecture and the best comparison-table moment of any concept here, dragged down by the unbuilt mobile bento, label-rule violations, and a placeholder-grade final form — all fixable in under a day.
