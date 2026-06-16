# Concept A — Editorial · Audit

## TL;DR

Concept A nails the editorial register on desktop — Fraunces italic accents, asymmetric narrow/wide column splits, and the "EST. MMXXIV" heritage stamp deliver the ONE Sotheby's × Boca Raton brief. But the hero fails the 5-second Krug test (no underwriter wall above the fold, no Florida-county specificity, hero H1 is decorative rather than diagnostic), and the strict 2-column `sectionGrid` collapses to a single column at 900px which kills the editorial asymmetry on every tablet and phone. The trust trio from `analysis.md` (underwriter wall + ALTA badge + quantified stat) is partially present as a thin `trustRow` strip — it needs more weight above the fold to clear conversion.

## Top 5 issues to fix (impact × effort)

1. **Trust trio is under-built above the fold.** `EditorialPage.tsx:40-44` renders three plain `<li>` items as a single bottom border line. `analysis.md:152` calls this "non-negotiable." Fix: replace `trustRow` with a 3-tile horizontal block (underwriter wordmarks as real SVGs in `public/brand/underwriters/`, the 4.9 rating as display type, the $127M number as `text-3xl` Fraunces italic). ~30 min.
2. **Testimonials hardcoded in JSX, not in `homepage-copy.ts`.** `EditorialPage.tsx:221-225` inlines 3 testimonials that violate the verbatim-copy rule (CLAUDE.md hard rule #1). Also contains a bug: `&rsquo;` literal in the JSX string (line 223) renders as `&rsquo;` not `'`. Fix: move to `copy.socialProof.testimonials`, replace HTML entities with real apostrophes (strings, not JSX text). ~10 min.
3. **`.colNarrow` is `position: sticky` at `top: 100px` (editorial.module.css:208) but Nav is sticky too.** Stacking is fine, but the 100px offset is a magic number unrelated to actual nav height (`Nav.module.css` uses `padding-block: var(--space-3)` ≈ 56px). On scroll the sticky eyebrow visibly overlaps the blurred nav. Fix: `top: calc(var(--space-3) * 2 + 42px + var(--space-4))` or move nav height to a CSS var `--nav-height`. ~5 min.
4. **Pattern interrupt loses the verbatim "The truth?" beat.** `homepage-copy.ts:46` includes it; `EditorialPage.tsx:69-71` collapses it into "Most title companies only look for problems _after_…". Verbatim rule violated. Fix: restore as a separate `<p className={s.interruptQ}>The truth?</p>` before the coda. ~3 min.
5. **`.heroH1` hardcodes copy in JSX (`EditorialPage.tsx:32-34`) instead of consuming `copy.hero.h1`.** Adds the manual `<em>` around "Top Agents Use" and `<span>` around "2026" — fine for typographic styling, but the copy string is duplicated and now drifts from the source of truth. Fix: store as structured fragments in `homepage-copy.ts` (`h1Parts: [{text, emphasis}]`) or render H1 from `copy.hero.h1` with a small token-replace helper. ~15 min.

## Section-by-section walk

1. **Hero** — Asymmetric grid + Fraunces italic "Top Agents Use" + EST. MMXXIV aside is genuinely on-brand; sub headline ratio is too tight (max-width 36ch + leading-relaxed makes the sub feel rushed against an 8.5rem H1).
2. **Pattern interrupt** — Dark navy section with maroon kicker reads well; the `interruptQ` Fraunces italic single-line "The reason?" is the strongest typographic moment on the page.
3. **Safe Listing™** — Narrow/wide split works; `.benefitList` rule with `border-bottom` per row is editorial-correct, but checkmark column at `1.5rem` is tight on small screens.
4. **How It Works** — Side-by-side compare cards lose visual asymmetry — `1fr 1fr` is the most generic grid in the file. Make the "Safe Way" card visually dominant (wider, longer, or offset).
5. **AI Difference** — Two-column list-of-bullets inside the narrow/wide chassis works structurally; the `aiList[data-tone="accent"]` uses `--color-brand` (navy) not maroon, breaking the accent rule.
6. **Unfair Advantage (pull quote)** — `bigQuote` at `--text-display` in maroon is the page's best moment; matches the brief.
7. **Everything Included** — Three uniform-width cards with identical padding and a 2nd-card border accent — verges on "uniform radius/spacing" banned pattern. Break one card out as the dominant tile.
8. **Social Proof** — Dark testimonial section with `oklch(100% 0 0 / 0.03)` cards is too quiet; testimonials need higher contrast and a named photo/initial avatar.
9. **Case Studies** — `<dl>` with `7rem` label column + dashed `dd` border is the cleanest section semantically; only 2 cases — feels thin.
10. **FAQ** — `<dl>` two-column layout (1fr 2fr) is editorial-correct.
11. **Limited Onboarding** — Centered text on brand-navy with maroon button is the only centered moment on the page; works as a pattern interrupt.
12. **Final CTA** — Form is the right length (5 fields), but choice paralysis: form + 3 alt CTAs as `btnGhost` is too loud. Demote alts to plain links.
13. **Guarantees** — Four uniform tiles with italic display type on dark navy; lands well but the `guaranteeList` items are 4 nouns without any inline definition — the user can't tell what each guarantee actually is.

## Anti-AI-slop scorecard — 7 / 10

Present with evidence:
1. **Hierarchy via scale contrast** — `--text-hero` (8.5rem) vs `--text-base` is real (`editorial.module.css:57-65`).
2. **Intentional spacing rhythm** — `clamp(2rem, 4vw, 6rem)` column gap + per-section padding (`editorial.module.css:204`).
3. **Depth/layering** — sticky narrow column + dark interrupt + bone compare section give surface change.
4. **Typography with character** — Fraunces italic for emphasis, Raleway for body, Fraunces italic for `compareLabel` etc.
5. **Color used semantically** — maroon = accent/alarm only (interrupt kicker, accent button, pull-quote border), navy = trust/ground. Clean.
6. **Designed hover/focus states** — `:focus` outline on inputs (line 509), `btnPrimary:hover translateY(-1px)`, ghost-button border swap to maroon.
7. **Grid-breaking editorial composition** — narrow/wide `22rem 1fr` is genuinely editorial, not just card grids.

Missing:
8. ❌ Texture/atmosphere — no grain, no rule lines beyond borders, no editorial flourish like drop caps or marginalia.
9. ❌ Motion that clarifies flow — no scroll-triggered reveals or progressive disclosure; the only motion is button hover.
10. ❌ Data-visualization-as-design — the `investGrid` 3-tile values are styled as plain text; should treat the "$0" as a typographic hero moment.

Banned patterns: **none triggered** (no centered-hero-with-blob, no default shadcn, radii non-uniform — `--radius-sm` on buttons, `--radius-md` on testimonial cards, sharp corners on cards).

## What works

- Real editorial asymmetry on desktop (`22rem 1fr` narrow/wide split is the strongest layout decision in the file).
- Fraunces italic used surgically — emphasis word in H1, "The reason?", `compareLabel`, `quoteH2`, `caseProperty`, `investValue`. This is the pairing strategy the brief asked for.
- Pull-quote section (Section 6) is the most distinctive moment on the page and lands the "premium service" thesis without lifestyle photography.
- Token discipline — almost zero hardcoded hex values; everything routes through `tokens.css`. One leak: `oklch(60% 0.008 270 / 0.3)` literal at line 270.

## What to kill or rework

- Hardcoded testimonials in JSX (violates verbatim rule + has the `&rsquo;` rendering bug).
- The uniform 3-card `includedGrid` — break the symmetry, oversize the middle card.
- The `1fr 1fr` `compareGrid` — make the "Safe Way" card visibly dominant.
- The thin `trustRow` above the fold — promote to a real trust trio with underwriter wordmarks.

## Conversion-readiness rating: **6 / 10**

The aesthetic ceiling is the highest of the three concepts, but the hero under-builds trust signals and the verbatim copy rule has slipped in two places — both block client sign-off as-is.
