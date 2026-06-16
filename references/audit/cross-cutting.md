# Cross-Cutting Audit · Concepts A / B / C

## TL;DR
The three concepts share a clean, well-tokenized design system and ship parallel anchor IDs / CTAs — the system-level work is solid. The blockers are all in the shell: fonts loaded in `app/layout.tsx` are never actually wired to the concept CSS (so Concept C's "Inter Display" silently falls back, Concept B's Geist Mono never reaches stats), there's no skip-link or per-route OG metadata, and form inputs use `type="text"` for Email/Phone. Fix the font-variable wiring and the a11y baseline and the demo is shippable to Thomas.

## Critical (blocks shipping)

1. **Font variables loaded but never consumed.** `app/layout.tsx:12-45` loads Raleway/Fraunces/Inter/Geist/GeistMono with `next/font` and exposes `--font-raleway` etc. via `className` on `<html>`. But `styles/globals.css:76-93` uses raw quoted family names (`"Fraunces"`, `"Geist"`, `"Inter Display"`) — the next/font CSS variables are never referenced. Result: every concept relies on browser-side Google Fonts fetches that next/font was supposed to eliminate, FOUT on slow connections, and **"Inter Display" (Concept C, globals.css:91) does not exist as a Google Font and is not loaded** → Concept C silently degrades to Inter or Helvetica. Fix: change `--font-display` to `var(--font-fraunces), Georgia, serif` etc. Drop "Inter Display" — use `Inter` or load `Manrope`/`Geist` for Concept C.
2. **No skip-to-content link.** Nothing in `app/layout.tsx`, `globals.css`, or any concept matches `skip|sr-only`. WCAG 2.4.1 Level A fail across all three concepts.
3. **Email/Phone inputs typed as text.** `EditorialPage.tsx:303`, `DataForwardPage.tsx:317`, `PremiumPage.tsx:262` — every form field is `<input type="text">` regardless of `f` value ("Email", "Phone"). Breaks mobile keyboards, autofill, and WCAG 1.3.5 (Identify Input Purpose).
4. **Editorial hero violates verbatim-copy rule.** `EditorialPage.tsx:31-34` hand-authors the H1 ("The Secret Weapon …") with manual `<em>` and `<span class={heroYear}>` wrapping instead of `{copy.hero.h1}`. CLAUDE.md hard rule #1. The other two concepts correctly use `copy.hero.h1`.

## High (visible quality issue)

5. **No per-route OG / Twitter / canonical metadata.** Only `app/layout.tsx:47-53` sets a global title/description (and `robots: noindex` — correct). Per-route files (`app/editorial/page.tsx:4`, `data-forward/page.tsx:4`, `premium/page.tsx:4`) set only `title`. Sharing the demo link with Thomas gets a blank preview card. Add `openGraph`, `twitter` per route.
6. **`motion` package installed but unused.** `package.json:17` ships `motion@^11.15.0` (~50 KB gzip); zero imports across `app/` and `components/`. Remove or use.
7. **Scroll listeners not throttled / IO not used.** `Nav.tsx:17-21` and `StickyCTA.tsx:11-15` attach raw `scroll` listeners and call `setState` on every event. On mobile this churns React. Use IntersectionObserver against a sentinel, per `web/performance.md`.
8. **Side-tab toggle button is missing an accessible name when closed.** `SideTabSwitcher.tsx:34-45` — when `open=false` the button shows only `<ChevronRight aria-hidden />` + visible text "Compare concepts" inside `.toggleLabel`. The label exists but if CSS hides `.toggleLabel` on narrow viewports (likely — it's a side rail), the icon-only button has no accessible name. Add `aria-label="Compare homepage concepts"` on the `<button>` itself.
9. **Concept switcher loses scroll position.** Each `<Link href="/${slug}">` is a full route change — the client lands at top of every concept. For a comparison demo, scroll restoration to the same section anchor would be a huge polish win. At minimum, append `#${currentHash}` when switching.
10. **`<style jsx>`-style style tag inside ConceptBadge.** `ConceptBadge.tsx:13-48` injects a `<style>` element into every render. Works, but moves CSS off the design system and prevents Tailwind/PostCSS from seeing the tokens. Move to `globals.css`.

## Medium (polish)

- **Footer copyright re-evaluates `new Date().getFullYear()` per render** (`Footer.tsx:62`) — harmless but signals hydration drift on Jan 1; pin to a constant or compute server-side.
- `Inter` is loaded with weights 400–700 but never referenced by family name in CSS (only `--font-inter` exists). It exists only as a fallback inside `Inter Display` which isn't loaded. Drop it once Concept C font is fixed.
- `lib/divi-safe.md` referenced in CLAUDE.md does **not exist** in the repo. Required by hard rule #7.
- Footer anchor links (`#about`, `#contact`, `#privacy`, `#escrow`) point to **sections that don't exist** in any concept. Dead links on all three pages.
- `<html lang="en">` is set (layout.tsx:62) ✓.

## Performance scorecard
| Area | State | Notes |
|---|---|---|
| Fonts | **FAIL** | 5 families loaded, only the fallback names actually reach CSS. Inter Display referenced but not loaded. Estimated 80–120 KB of font payload that browsers fetch independently of next/font. |
| Images | OK | `Nav.tsx:33` uses `next/image` + `priority` + explicit `width`/`height`. Footer logo (`Footer.tsx:12`) is `next/image` without priority — correct. |
| Bundle | WARN | `motion` dead weight; `lucide-react` imports are individual named imports so tree-shaken ✓. |
| CSS | OK | Tokens centralized; CSS Modules per concept = good scoping; minor `<style>`-in-JSX in ConceptBadge. |
| Render-blocking | OK | next/font handles preloads (but for fonts that aren't used). |

## A11y scorecard (top 5)
1. **2.4.1 Bypass Blocks (A)** — No skip-link anywhere.
2. **1.3.5 Identify Input Purpose (AA)** — `<input type="text">` for Email/Phone in all three forms.
3. **4.1.2 Name, Role, Value (A)** — Side-tab toggle button risks being icon-only on collapsed states.
4. **2.4.6 Headings (AA)** — Only one h1 per page ✓. But editorial H1 contains decorative `<em>` and inline `<span class={heroYear})>` for visual styling; screen readers read fine, but verify italics emphasis is intentional (currently styled inline).
5. **2.3.3 / 2.2.2 Motion** — `tokens.css:199-206` collapses durations under `prefers-reduced-motion` ✓; `ConceptBadge.tsx:45-47` disables pulse ✓. Good.

Color contrast spot-checks (computed): navy-700 on bone-50 ≈ 9.2:1 ✓, maroon-700 on white ≈ 9.8:1 ✓, neutral-600 on bone-50 ≈ 5.5:1 ✓ (AA body), pure-white on navy-900 ≈ 14:1 ✓.

## SEO checklist
- [x] `<html lang>` set
- [x] Global `robots: noindex, nofollow`
- [x] Per-route `title`
- [ ] Per-route `description`
- [ ] OpenGraph / Twitter card per route
- [ ] Canonical URL
- [ ] Organization / LocalBusiness JSON-LD (Cloud Title is FL LocalBusiness)
- [x] Favicon wired
- [ ] `robots.txt` / `sitemap.ts` — not present

## Cross-concept parity table
| # | Section | Editorial | Data-forward | Premium | Notes |
|---|---|---|---|---|---|
| 1 | Hero | ✓ | ✓ | ✓ | Editorial H1 hand-authored vs `copy.hero.h1` (Critical #4) |
| 2 | Pattern interrupt | ✓ (`id=why`) | ✓ (no id) | ✓ (no id) | Anchor `#why` only on editorial |
| 3 | Safe Listing | `#safe-listing` ✓ | `#safe-listing` ✓ | `#safe-listing` ✓ | |
| 4 | How it works | `#how-it-works` ✓ | `#how-it-works` ✓ | `#how-it-works` ✓ | |
| 5 | AI difference | ✓ | ✓ | ✓ | |
| 6 | Unfair advantage | ✓ | ✓ | ✓ | |
| 7 | Everything included | ✓ | ✓ | ✓ | |
| 8 | Social proof | `#proof` ✓ | `#proof` ✓ | `#proof` ✓ | |
| 9 | Case studies | ✓ | ✓ | ✓ | |
| 10 | FAQ | `#faq` ✓ | `#faq` ✓ | `#faq` ✓ | |
| 11 | Limited onboarding | ✓ | ✓ | ✓ | |
| 12 | Final CTA | `#start` ✓ | `#start` ✓ | `#start` ✓ | |
| 13 | Guarantees | ✓ | ✓ | ✓ | |

CTA parity: primary "Get My Free Listing Advantage" sourced from `copy.hero.primaryCta` in all three ✓. Trust row (4.9, Fidelity & First American, $127M+) present in all three ✓. Nav links identical via shared `Nav.tsx` ✓.

## Production-readiness gate

**PASS WITH FIXES.** Resolve the 4 Critical items (font wiring, skip-link, input types, editorial hero copy) and items #5 (OG metadata) and #11 (footer dead anchors) before sending the link to Thomas. Everything else is fine for an internal-concept review and can land in the same PR. No `console.log`, no `any`, no hardcoded secrets, no Tailwind defaults in concept CSS. `next build` was not executed here — run it on Windows before sharing the Vercel URL given the prior worker-crash history.
