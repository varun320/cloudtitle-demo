# Divi 5 — Replicability Allowlist

> Every pattern shipped in any of the 3 concepts MUST be listed here with a verified Divi 5 mapping. Patterns not on this list are auto-rejected.

This file is the bridge between the Next.js demos (Gate 2) and the Divi 5 build (Gate 3). When Thomas picks a direction, this list becomes the spec for which Divi modules + global settings to use.

---

## Global tokens → Divi 5 globals

| Demo token (`tokens.css`) | Divi 5 mapping | Notes |
|---|---|---|
| `--navy-700` (`#133f6d`) | Theme Builder → Global Colors → "Brand Navy" | Primary brand color (extracted from current cloudtitle.com — 29 stylesheet uses) |
| `--maroon-700` (`#8B0000`) | Theme Builder → Global Colors → "Brand Accent" | Already in current chat-widget config; promote to a real global |
| `--bone-50` | Theme Builder → Global Colors → "Surface" | Replace pure white grounds |
| `--neutral-800` | Theme Builder → Global Colors → "Body Text" | Replaces `#333` default |
| `--font-display` (per concept) | Theme Builder → Typography → Heading Font | Google Fonts, Divi font-picker compatible |
| `--font-body` (per concept) | Theme Builder → Typography → Body Font | Google Fonts, Divi font-picker compatible |
| `--space-section-y` | Section padding (Top/Bottom) | Convert `clamp()` → set min via mobile, default via desktop |
| `--radius-md`, `--radius-lg`, etc. | Module Design → Border → Rounded Corners | Per-module, restrained |
| `--shadow-md`, `--shadow-lg` | Module Design → Box Shadow | Custom values matching token RGBA |

---

## Section patterns

### Allowed (verified Divi-replicable)

| Pattern | Divi module(s) | Notes / constraints |
|---|---|---|
| **Single-column hero (eyebrow + H1 + sub + CTA pair)** | Section → Row (1 col) → Text + Button × 2 | Trivial. Use Theme Builder header for sticky nav. |
| **Two-column hero (copy + image)** | Section → Row (1/2 1/2) → Text \| Image | Mobile stack via Divi default. |
| **Trust strip (logos in a row)** | Section → Row (1 col) → Blurb / Image row OR Image Gallery | Use grayscale filter on hover via Design > Filters. |
| **Stat tile grid (2×2, 3×1, 2×3)** | Section → Row (multi-col) → Number Counter or Blurb | Use Number Counter for animated counts. Cap motion via duration. |
| **Two-column comparison ("Old way" vs "Safe Listing way")** | Section → Row (1/2 1/2) → Blurb stack | Mobile stacks naturally. |
| **Benefit checklist** | Section → Row → Blurb (icon = check) × N | Use icon-font checkmark, not emoji, for Divi consistency. |
| **Large pull-quote (Editorial concept)** | Section → Row (1 col) → Blurb with custom CSS for quote treatment | Verify Divi blurb supports oversized inline type — yes via Design > Heading Text. |
| **3-step process (vertical timeline)** | Section → Row → Blurb × 3 with connecting divider | Avoid scroll-bound animations — fade-in on view only. |
| **Testimonial card grid** | Section → Row → Testimonial module × N (or Blurb) | Use Testimonial module if avatar + name fields are present. |
| **FAQ accordion** | Section → Row → Toggle (one per question) or Accordion | Accordion preferred for multi-item; one toggle per Q is the Divi 5 default. |
| **CTA section (banner with single button)** | Section (dark bg) → Row → Text + Button | Trivial. |
| **Sticky header CTA button** | Theme Builder → Global Header → sticky scroll option | Required per copy brief ("Sticky header with persistent 'Start Safe Listing' button"). |
| **Sticky footer CTA bar (mobile)** | Theme Builder → Global Footer custom code OR a fixed-position section | Verified Divi-friendly via Section visibility settings. |

### Disallowed (cannot be replicated in Divi 5 without custom dev)

| Pattern | Why excluded | If concept uses it |
|---|---|---|
| **Scroll-bound timelines** (GSAP ScrollTrigger, sticky-scrub) | Divi 5 has no native equivalent; would require custom JS | Replace with fade-in-on-view (Divi Design > Animation > Fade). |
| **Bento grids with overlapping cards** | Divi's row/column model is strictly grid-aligned; overlap requires negative margins + custom CSS that breaks on tablet | Re-architect as a 2-col grid with deliberate row-height variation. Document the simplification. |
| **CSS Grid `grid-template-areas`** | Divi 5 rows are flex-based; no native grid-area support | Use Divi's column-width presets (1/3, 2/3, 1/4, etc.). |
| **3D transforms / perspective** | Not in Divi 5 module Design tab | Replace with simpler shadow + scale on hover. |
| **Custom SVG icon systems with state** | Divi expects icon-font icons or static images | Use Lucide via icon font conversion OR ship as static SVG image. |
| **Mix-blend-mode treatments** | No Divi 5 module exposes blend modes | Replace with a darker/lighter color overlay. |
| **Container queries** | Divi 5 still relies on viewport breakpoints | Use Divi's per-breakpoint (phone/tablet/desktop) settings. |
| **Variable font axes beyond weight** | Divi font picker passes weight + italic only | Use only standard weight + italic. No optical-size or width axes. |

---

## Motion allowlist (Divi 5 Design > Animation)

| Animation | Divi field | Use case |
|---|---|---|
| Fade in | Animation Style = Fade | Hero text, section reveals |
| Fade up / slide-up | Animation Style = Slide → Direction Up | Cards, list items |
| Number counter | Number Counter module | Stats tiles ("Based on internal averages") |
| Underline-on-hover (links) | Custom CSS — `transition: text-decoration` | Inline links |
| Button hover (scale + shadow) | Module Design > Hover state | All CTAs |

**Banned in all 3 concepts:** parallax, scroll-jacking, scroll-bound timelines, marquee tickers, infinite scrolling galleries.

---

## Per-concept replicability log

> Updated during Phases 4–6 as each concept is built. Every section in every concept references this allowlist by name.

### Concept A — Editorial
- [ ] Section list pending Phase 4.

### Concept B — Data-forward
- [ ] Section list pending Phase 5.

### Concept C — Premium minimal
- [ ] Section list pending Phase 6.

---

## Export workflow (when Thomas picks a direction)

1. Walk `styles/tokens.css` → set Divi Theme Builder Global Colors + Global Fonts.
2. Walk the chosen concept's section list above → confirm each row has a Divi module mapping.
3. Build sections in Divi using the modules called out per pattern.
4. Re-test at the 8 QA target widths from `lib/breakpoints.ts`.
5. Cross-reference `references/cloudtitle-com/brand-extraction.md` for assets to migrate.
