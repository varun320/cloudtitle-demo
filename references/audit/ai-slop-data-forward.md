# AI-Slop Audit — Concept B (Data-forward)

## A. 10 Required Qualities

1. **Hierarchy through scale contrast** — ✓ `heroH1` clamp(2.25→4rem) vs `text-base` body; mono stat values clamp(1.875→2.75rem). Real contrast, not uniform. (`data-forward.module.css:110-117, 153-161`)
2. **Intentional rhythm in spacing** — ✓ Hero `space-7` (40px) inner pad vs stats `space-6`, table cells `space-4/5`, eyebrow `space-1/3` capsule. Not uniform. (`:91, 130, 362`)
3. **Depth / layering** — ✓ Bento with raised surfaces over bone-50 ground, dark `interrupt` and `guaranteeSection` cut into the page, `shadow-md` on hero copy + quote. (`:73-97, 277-282, 695-700`)
4. **Typography with character + real pairing** — ⚠ Geist Sans + Geist Mono is genuinely loaded (`globals.css:99-104`) and mono is doing real work on stats/eyebrows/labels. But Geist sans-on-sans is the *most generic* "AI-startup" pairing on the internet right now. Strategy is real; choice is timid.
5. **Color used semantically** — ✓ Maroon = accent/warning/win; navy = brand/depth; bone = ground. `tdNew`/`tdResultWin` reserve accent for the winning column. (`:374, 377, 384`)
6. **Designed hover/focus/active** — ✓ `btnPrimary:hover` swaps navy→maroon + translateY; `finalAltLink:hover` border + lift; `faqItem` open-state +/− toggle; `:focus-visible` ring globally. (`:56, 687, 599, globals.css:62`)
7. **Grid-breaking / bento** — ✓ Hero 1.4fr/1fr/1fr/1fr with brand-toned `$127M+` tile breaking the rhythm; proof `repeat(6,1fr)` with span-3 testimonials, span-2 KPIs, span-2 map. Real composition. (`:84, 491-498`)
8. **Motion that clarifies flow** — ⚠ Only button lift + faq toggle. Functional, but no scroll/reveal motion makes the page feel static for a "data-forward" direction. Acceptable (Divi-safe) but minimal.
9. **Texture / grain / atmosphere** — ⚠ One faint radial-gradient on hero top-right (`:77`), dashed `heroLogos` border, dashed dividers in aiCard/caseCard. Restrained — borderline thin. No grain, no noise.
10. **Data viz as design citizen** — ✓ Comparison table has typed thead (mono uppercase), accent-tinted winning column, result row treatment. Stat tiles use tabular-nums + `statPrefix`/`statSuffix` superscript. Capacity bar has real fill + maroon stat numbers. The two ImageSlots (`proofMap`, `aiVisualSlot`) are *prompts for future renders*, not filler — captions and constraints read as briefs, not lorem.

**Total: 7 / 10 clean ✓, 3 ⚠. Passes (≥4).**

## B. Banned Patterns

- Default Tailwind palette — ✓ absent. OKLCH navy/maroon/bone ramps anchored on real brand hex. (`tokens.css:24-49`)
- Inter + default serif pairing — ✓ absent. Geist + Geist Mono.
- Centered hero with gradient blob + generic CTA — ✓ absent. Left-aligned bento, 4-col grid, stat tiles as the visual.
- Default shadcn styling — ✓ absent. No shadcn primitives used on this page.
- Uniform radius / spacing / shadow — ✓ absent. `radius-md` buttons / `radius-lg` cards / `radius-xl` hero copy / `radius-pill` capacity bar.
- Flat gray-on-white + one accent — ✓ absent. Bone ground, navy-900 dark sections, maroon accent semantically placed.
- **Stripe gradient-clone risk — ⚠ present-ish.** The radial-gradient hero (`:77`), bento-with-stat-tiles, mono superscripts, and underwriter strip *do* read Stripe-ish. Saved by the dark `interrupt` section, the table, and the maroon accent — but a Stripe-fluent client will recognize the silhouette.
- Fortune-100 logo wall without logos — ✓ absent. Underwriter strip is labelled `Underwritten by` (factually true claim) and uses wordmarks-as-text, not fake logos.

## C. Smell Test

**No, with one Stripe-shaped caveat.** Reads as a deliberately-built data-forward listing-agent page; the mono treatment, bento, comparison table, and case-card `dl` structure are too specific to be LLM autopilot.

## D. Top 3 Slop Risks

1. `data-forward.module.css:77` — Hero radial-gradient on top-right is the single most Stripe-coded element. **Fix:** replace with a subtle navy hairline grid (`background-image: linear-gradient(...)` 32px) or remove entirely — let the bento do the depth work.
2. `globals.css:100-101` — Geist Sans for both display and body is the most generic 2025 AI-startup pairing. **Fix:** keep Geist Mono, swap `--font-display` to a sharper sans with character (Space Grotesk, General Sans, or even Raleway-Bold to tie back to the parent brand).
3. `DataForwardPage.tsx:60-65` — Underwriter strip renders carrier names as plain text. Reads honest *but* visually flat next to the heavy bento. **Fix:** SVG wordmarks (with permission) OR commit to the typographic treatment with mono-set names, dividers, and an `as of` date — make the constraint look intentional.

## E. AI-Slop Score: **7.5 / 10**

Intentional structure, real semantic color, mono doing genuine work, banned patterns mostly avoided — but the Geist-on-Geist pairing plus the hero gradient give it a faint Stripe-template echo that a sharper display font and one less gradient would erase.
