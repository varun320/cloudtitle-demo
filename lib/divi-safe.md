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

**Layout patterns in use** (each Divi-replicable):

| Pattern | Used in | Divi mapping |
|---|---|---|
| Two-column hero (copy + aside image) | Section 1 | Section → Row (1/2 1/2) → Text \| Image |
| Editorial credits masthead (typographic band) | Section 1 | Section → Row (1 col) → Text + Divider |
| Inverted dark pattern interrupt | Section 2 | Section (dark bg) → Row → Text |
| Drop-cap on lead paragraph | Sections 2, 3 | Text module + custom CSS `::first-letter` on the first paragraph |
| **Running head** (rule + section # + name) | Sections 3, 5, 7, 9, 10 | Section → Row → Divider \| Text (3 inline cells) |
| **Marginalia layout** (sidebar meta + main body) | Section 3 (Safe Listing) | Section → Row (1/4 3/4) → Text \| Text |
| Two-column side-by-side comparison | Section 4 (How It Works) | Section → Row (1/2 1/2) → Blurb stack each |
| Single-column prose with **stacked ledger comparison** | Section 5 (AI Difference) | Section → Row (1 col) → Text + Text + Divider + Text sequence |
| **Two-column prose flow** (CSS `column-count`) | Section 5 supporting body | Divi Text module with custom CSS `column-count: 2` on a single block |
| Large pull-quote | Section 6 (Unfair Advantage) | Section → Row → Blurb with custom heading CSS |
| Asymmetric 3-up benefit cards (middle dominant) | Section 7 (Everything Included) | Section → Row (3-col uneven) → Blurb × 3 |
| 3-up investment value strip | Section 7 | Section → Row (3-col) → Text × 3 |
| Editorial proof rebuild (feature quote + 2-col supporting) | Section 8 | Section (dark bg) → Row → Blurb + Row 1/2 1/2 |
| **Index ledger** (numbered rows, not cards) | Section 9 (Case Studies) | Section → Row (1 col) → repeated Row (1/12 7/12 4/12) → Text \| Text \| Text |
| **Footnote-style FAQ** (numbered sup + Q + A) | Section 10 | Section → Row → repeated Row (1/12 11/12) → Text \| Text |
| **Full-bleed dark marginalia band** | Section 11 (Limited Onboarding) | Section (dark bg) → Row (1/4 3/4) → Text \| Text + Button |
| 1.6/1/1 + 2/2 asymmetric guarantee ledger | Section 13 | Section (dark bg) → Row (multi-col) → Text × 4 with custom column widths |

**Notes for Divi build:**
- All marginalia sidebars use the 1/4 + 3/4 column split (`grid-template-columns: 14rem 1fr` → roughly `1/4 + 3/4` in Divi).
- Running head is three inline cells — implement as a single Divi row with three text blocks and a custom 1px divider on the leftmost cell.
- Drop-cap uses `::first-letter` — wrap the lead paragraph in a custom CSS class and add the rule to the Divi page Custom CSS box.
- CSS multi-column (`column-count: 2`) is supported by all modern browsers; in Divi, apply via custom CSS class on a single Text module containing both paragraphs.
- Stacked AI ledger replaces the original side-by-side `aiGrid` — sequential rows are easier in Divi than a side-by-side custom grid.

### Concept A — Coastal Editorial (revised)

Reworked direction: photography-led Florida boutique magazine. Confident classical typography (Fraunces + Raleway), full-bleed coastal imagery (A1 / A2 / A3 / A4 plates), single maroon accent, two surfaces (bone-50 + cream) plus one quiet ink band for the Offer. **13 sections → 6 spreads** (Cover, Reality, Method, Proof, Offer, Begin). No section-separator hairlines — surface alone divides.

Stripped from prior Editorial rework: marginalia sidebars, drop-cap openers, numbered ledger rows, footnote-style FAQ, full-bleed dark Capacity band, Roman-numeral running heads, CSS two-column prose, stacked italic AI ledger.

| Pattern | Used in | Divi mapping |
|---|---|---|
| **Magazine masthead strip** (mark / hairline / meta in mono-cap row) | Cover spread | Section → Row (1-col) → Text module with custom CSS `display: flex; border-bottom: 1px solid` for the hairline cell |
| **Image-beside-headline cover** (5/12 + 7/12 grid, image carries the larger column, type bottom-aligned) | Cover spread | Section → Row (5/12 + 7/12) → Text \| Image. Image is the visual anchor; mobile reverses order so image leads |
| **Classical plate caption** (small italic Fraunces, maroon "Plate 01" mark + italic descriptor) | Every image (cover + 4 spreads) | Single Text module beneath each Image module; use custom CSS class `.plate-caption` with `font-style: italic` and inline `<span>` for the maroon mark. Trivial Divi pattern |
| **Colophon credits strip** (4-col typographic credits beneath cover — replaces the symmetric trust block) | Cover spread foot | Section → Row (1/4 × 4) → 4 Text modules with eyebrow + italic-accent value. Mobile stacks to 1-col automatically |
| **Spread eyebrow** (single maroon mono-cap label that introduces each spread by its working title — "Spread I — The Reality") | Spreads I–V | Single Text module per spread, no module work needed |
| **Photography-led half-bleed plate** (image occupies right column at 4/5 ratio beside prose) | Spread I, Spread II | Section → Row (7/12 + 5/12) → Text \| Image. Same as cover, different ratio |
| **Pull-quote with maroon accent rule** (oversized italic Fraunces, 2px maroon left border) | Spreads I, IV | Text module with custom CSS `border-left: 2px solid var(--brand-accent); padding-left: 1.5rem` |
| **Ruled 2-column comparison table** (single row of two columns with top + bottom border + inter-column hairline; "Old way" / "Safe Listing way") | Spread II | Section → Row (1/2 + 1/2) → Text stack per column. Custom CSS adds the border-top + border-bottom on the row and `border-left` on the second column. Highlighted accent column uses a 2.5% maroon tint |
| **Embedded figure-with-prose pair** (smaller image at 4/3 with classical caption, beside a single column of prose + paired list) | Spread II (AI Difference) | Section → Row (5/12 + 7/12) → Image+Text-caption \| Text stack |
| **Near-full-bleed proof portrait at 21/9** (team photograph at large scale, caption sitting inside the standard content width below) | Spread III (Proof) | Section → Row (1-col, no horizontal padding) → Image module at 21:9. Caption is a Text module in a following Row with normal content padding |
| **Oversized italic feature testimonial** (Fraunces italic at display scale, max 24ch, cite stacked below in mono-cap) | Spread III | Single Text module with heading-text styling = italic + display size |
| **Restrained "Case 01 / Case 02" entries** (mono-cap mark + serif property line + 4-row dl with eyebrow keys) | Spread III | Section → Row (1/2 + 1/2) → 2 Text modules each containing the dl. Avoid Divi's Blurb module — its default chrome competes with the restraint we want |
| **Ink-band Offer spread** (single deep editorial navy / navy-900 surface for one whole spread — NOT a full-bleed maroon banner) | Spread IV | Section background = `var(--navy-900)`. All text reverts to bone-50 / maroon-300 for the accent. Used once on the page |
| **Inverted button on ink** (bone-50 surface button with ink text — inversion for dark-band CTAs) | Spread IV | Button module with Design > Background = `var(--bone-50)`, Text Color = `var(--navy-900)` |
| **3-up offer table** (eyebrow + value triple — total / if-sells / if-doesn't, with maroon emphasis on the "$0") | Spread IV | Section → Row (1/3 × 3) → 3 Text modules. Top + bottom border on the row; inter-column hairlines |
| **Inline capacity note** (small typographic moment folded into the same spread — italic Fraunces label + 2 body lines, NOT a full-bleed dark band) | Spread IV foot | Single Text module inside the same Section, sharing the spread surface |
| **Subscribe card** (classical magazine subscription card — mono-cap "Subscription Card" mark + italic label + minimal field stack with bottom-border-only inputs) | Spread V | Section → Row (7/12 + 5/12) → Code module (GHL form embed) \| Text. Inputs styled `border: 0; border-bottom: 1px solid` via Code-module CSS |
| **Quiet end-matter appendix layout** (1.4 / 1 grid; FAQ as a definition list with hairline separators; Guarantees as italic em-dashed list) | Spread V foot | Section → Row (1.4/12 weighted? — closest Divi preset is 2/3 + 1/3) → Toggle modules (FAQ) \| Text module (guarantee list with custom CSS) |

**Notes for Divi build:**

- Photography is now the load-bearing visual element; every plate gets a real Image module. The Higgsfield prompt-visible placeholder UI is hidden whenever `src` is supplied — same `ImageSlot` contract as Folio.
- The single ink band (Spread IV) is the only dark surface in the whole concept. In Divi: set Section background color, then `text-color: var(--bone-50)` at Section level; individual modules inherit.
- No CSS `column-count`, no `::first-letter` drop-cap, no Roman-numeral running heads, no marginalia sidebars in this revised direction. All previously logged patterns above that depended on those are deprecated for Editorial.
- Hairline separators only appear inside compositional structures (comparison tables, dl rows, plate captions). Between spreads, only the surface color (bone / cream / ink) divides.
- Image ratios used: Cover = 4/5, Spread I plate = 4/5, Spread II figure = 4/3, Spread III portrait = 21/9, Spread IV = no image (typographic spread).

### Concept A — Concierge (active direction)

Reworked Concept A as a **modern luxury real-estate brand** — Compass × Pacaso × Side × Aman digital × modern Sotheby's. DM Sans display (geometric humanist sans) + Inter body, warm cream surface + sand atmospheric break, forest-green accent (`oklch(35% 0.07 155)` — distinct from Editorial/Data-forward maroon and Folio ink-blue), 8px rounded soft-shadow cards, image-led storytelling. **6 sections**: Hero, Reality + Safe Listing benefits, How it works comparison, Proof, Included offer + invest strip, Begin (intake + reassurance).

All previous Coastal Editorial patterns (plate captions, colophon, marginalia, drop caps, ledger numbers, footnote-style FAQ, ink-band Offer, Roman-numeral running heads) are deprecated for this concept.

| Pattern | Used in | Divi mapping |
|---|---|---|
| **Two-column hero** (copy + framed cover image at 4/5) | Hero | Section → Row (6/12 + 5/12) → Text \| Image. Image inside a wrapper with custom CSS `border-radius: 8px; box-shadow` |
| **Service strip** (3 small cards beneath hero: Underwritten by / 4.9 rating / $127M+) | Hero foot | Section → Row (1/3 × 3) → 3 Blurb modules with custom CSS `background: var(--surface-raised); border: 1px solid; border-radius: 8px; box-shadow` |
| **Two-column reality** (prose + framed atmospheric image, with embedded pull-quote in the prose) | Reality | Section → Row (6/12 + 5/12) → Text \| Image. Pull-quote = inline blockquote with custom CSS `border-left: 2px solid var(--concierge-accent)` |
| **Benefit card grid** (2-col grid of 5 small cards, each with a forest-green check mark + verbatim benefit text) | Reality foot (Safe Listing) | Section → Row (1/2 + 1/2) → Blurb × 5 with custom check-icon font and card border + shadow |
| **How comparison cards** (2 side-by-side cards — quiet "Old Way" + accent "Safe Listing Way" with top accent border + soft drop shadow + step lists with dots / checks) | How it works | Section → Row (1/2 + 1/2) → 2 Blurb stacks. Accent column gets `border-top: 3px solid var(--concierge-accent)` + slightly raised shadow |
| **Inline check mark** (small filled green circle with hairline tick) | Benefits, How, Included, Reassurance | Icon font check rendered at small size; or inline CSS-only mark with `border-width: 0 1.5px 1.5px 0; transform: rotate(45deg)` |
| **Image-anchored proof section** (16/9 framed team portrait + caption above a 2-col prose/testimonial grid) | Proof | Section → Row (1 col) → Image \| Caption. Following Section → Row (5/12 + 6/12) → Text \| Blurb (testimonial card with custom border + shadow) |
| **Testimonial card** (rounded soft-shadow card with display-weight quote + small name + role) | Proof | Blurb module styled with card chrome via Design > Border + Box Shadow |
| **Case mini cards** (2-up grid of small cards, each with property line + result line in accent) | Proof foot | Section → Row (1/2 + 1/2) → Blurb × 2 |
| **3-up included card columns** (3 elegant cards, one per group, each with first 4 benefits + check marks) | Included | Section → Row (1/3 × 3) → Blurb × 3 with check-icon lists |
| **Invest strip** (single bordered/shadowed row card divided into 3 cells: Total value / If sells / If not sells — accent cell highlighted with tint background + display-weight green "$0") | Included | Section → Row (1/3 × 3) inside a custom-CSS card wrapper. Cell 3 gets `data-accent`-style tint background |
| **Intake card** (concierge form: framed soft-shadow card with display-weight label + 2-col field grid + accent primary submit + supporting line beneath button) | Begin | Section → Row (7/12 + 5/12). Form column = Code module (GHL form embed) styled with card chrome; rounded 4px inputs with hairline border and green focus ring |
| **Reassurance card** (lighter outlined card: small accent eyebrow + 3 check items, used as a sidebar to the intake) | Begin | Blurb with custom CSS `background: transparent; border: 1px solid; border-radius: 8px` |

**Notes for Divi build:**

- Forest-green accent (`oklch(35% 0.07 155)` ≈ `#3a7048`) gets promoted to a 4th Global Color "Concierge Accent" in the Theme Builder if Concept A is picked. Used sparingly: primary CTA fill, link hover, status dots, check marks, accent column highlights, "$0" emphasis.
- DM Sans is in the Divi font picker (Google Fonts). Set Theme Builder Heading Font = DM Sans, Body Font = Inter. Both load via `next/font` in this demo.
- 8px corner radius lives on every card (`border-radius: 8px`). 4px lives on inputs and buttons. Set per-module via Design > Border > Rounded Corners.
- Warm card shadow uses the existing `--shadow-md` / a custom token; in Divi, set Box Shadow via Module Design > Box Shadow > custom RGBA.
- The sand surface (`oklch(94% 0.012 80)`) alternates with bone-50 to divide sections. NO section-separator hairlines.
- Image plates are framed (border + radius + shadow), NOT full-bleed. Each plate has a small DM Sans medium caption beneath in `--color-ink-muted`.
- ZERO emoji, ZERO drop caps, ZERO marginalia, ZERO Roman numerals, ZERO "Plate 01" labels. Those identify the prior Coastal Editorial — must not appear.

### Concept B — Data-forward
- [ ] Section list pending Phase 5.

### Concept C — Folio

The Premium slot was repositioned as **Folio** — an archival dossier aesthetic. Disciplined Swiss typography, Newsreader italic display, ruled comparison tables, numbered exhibits, marginalia, archival image plates. One scoped accent (ink-blue `oklch(35% 0.06 230)`) — NOT maroon — to keep visual distance from Editorial + Data-forward. No section-separator hairlines between sections; surface alone divides.

Patterns introduced:

| Pattern | Used in | Divi mapping |
|---|---|---|
| **Folio head** (3-column running head: folio number / section title / meta + hairline below) | Every folio (I–V) | Section → Row (3-col 1/3 each) → Text × 3 with custom CSS `border-bottom: 1px solid` on the row container; mono font, uppercase |
| **Frontispiece cover** (typography-only, 3-row grid: meta strip / centered title / colophon) | COVER | Section (no padding override) → Row (1-col) → Text + Text + Text + Text stacked; cover sigil = circular Blurb with icon set to text "CT"; colophon = 4-col Text grid |
| **Cover sigil** (circular CT mark + EST. MMXXIV stamp) | Cover, footer | Blurb with circular border via Design > Border > 50% radius, inner text via Title Text |
| **Italic pull-quote with accent rule** | Folio I lead, Folio III testimony | Text module with custom CSS `border-left: 1px solid var(--folio-accent)` + Newsreader italic via Heading Text |
| **Marginalia gutter** (mono note in 18ch sidebar) | Folios I, II | Section → Row (1/4 + 3/4) → Text \| Text. Sidebar text styled in mono via Module Design > Text |
| **Ruled comparison table** (`<table>` with thead/tbody/tfoot, accent column highlighted) | Folios II.a, II.b, IV.a | Custom HTML inside a Code module — Divi 5 has no native table builder. Confirmed: Divi 5 Code module accepts arbitrary HTML + scoped CSS. Alternative: 3-col Row stack with Blurb-per-cell, but loses table semantics. **Code module preferred.** |
| **Numbered EXHIBIT row** (mono label "Exhibit A · Role/Property" → italic quote → mono attribution) | Folio III testimonials + cases | Section → Row → repeated Blurb modules with custom CSS; OR a 3-col Row with one Blurb per exhibit |
| **Archival image plate** (hairline-bordered image + mono plate caption "Pl. 01 · ...", sepia/gray filter) | Folio III (Pl. 01), Folio IV (Pl. 02) | Image module → Design > Filter > Grayscale 40% + Sepia 10% + Brightness -5% + Border 1px solid ink. Caption = Blurb below with mono font |
| **Subscription card** (legal-instrument framed form, bordered, with form header strip "Subscription Card / Form S-01") | Folio V | Section → Row (1-col, max-width 36rem) → Code module containing the form (Divi's contact form lacks the border-grammar; Code module + custom HTML preferred for the demo, GHL form embed for production) |
| **Capacity stamp** (2px border block with tilted "Enrollment closed E.O.M." stamp ribbon) | Folio IV | Blurb wrapped in a Section with 2px solid border; stamp = inline Text with `transform: rotate(-1.5deg)` and `border: 1px solid var(--folio-accent)` |
| **Schedule terms table** (small ruled table for total value / if sells / if not) | Folio IV.a | Same Code-module table pattern as II.a |
| **Footnote-style appendix** (ledger of numbered Q + indented A under "Appendix A/B" mark) | Folio V FAQ + guarantees | Section → Row → Toggle modules with custom CSS, or 2-col Row split (Appendix A / Appendix B) of Text stacks |
| **Colophon foot** (mono publication credit + sigil at folio close) | Folio V footer | Row (2-col) → Blurb (sigil) + Text (publication credit) with border-top hairline |
| **Roman numeral folio numbering** | Folio heads, cover title block | Plain Geist Mono text — no module work needed |

**Notes for Divi build:**
- The two big comparison tables (II.a, II.b) and the terms schedule (IV.a) all use `<table>` markup. In Divi 5 the cleanest path is a **Code module** containing the table HTML + a tiny scoped `<style>` block — Divi's native row/column model cannot express thead/tbody/tfoot/colspan. This is documented as the supported escape hatch; the same approach is already used in the build for forms.
- Sepia/gray image filter is per-image via Image module > Design > Filters (grayscale 40, sepia 10). Hairline border via Border options.
- Newsreader font: add via Divi Theme Builder > Typography > Heading Font picker. Newsreader is in Google Fonts and supported by the Divi picker. Italic is the strongest face — set heading default Style = Italic in modules where italic display is desired (e.g. all `.folioH2` equivalents).
- Cover sigil (circular CT + stamp) is a Blurb with a circular border. No SVG required.
- Accent color (`oklch(35% 0.06 230)`) is concept-scoped — promote to a 4th Global Color "Folio Accent" in the Theme Builder when this concept is picked. Convert OKLCH → hex via the export step (≈ `#2c4d63`).
- No section-separator hairlines: in Divi, set section border = none everywhere except inside the folio head row and inside ruled tables.

---

### Concept C — Premium minimal (legacy, superseded by Folio)

The patterns below were drafted for the prior Premium-minimal direction. Retained for reference only; not in active use after the Folio rework.

| Pattern | Used in | Divi mapping |
|---|---|---|
| **Chapter marker (running meta strip)** | All major sections | Section → Row (1 col) → Text module with custom CSS `border-top: 1px solid`, inline mono number + label + dashed divider + meta |
| **Quiet credentials strip on dark hero ground** | Trust band (between Hero and Pattern Interrupt) | Same dark Section as hero → Row (3-col) → Text modules with right border, no card fill |
| **Asymmetric process grid (recommendation-weighted)** | Section 4 (How It Works) | Section → Row with custom column widths (~40/60) → Blurb stacks; accent column gets left border via Design > Border |
| **Asymmetric included grid (1.4 / 1 / 1)** | Section 7 (Included) | Section → Row with custom column widths (Row Settings > Sizing) → 3 Blurb modules |
| **Compressed dark FAQ list** | Section 10 (FAQ) | Section (dark) → Row → Toggle modules with hairline border-bottom, no card fill |
| **Capacity card (stamp-like centered)** | Section 11 (Limited) | Section (dark) → Row (1 col, max-width 44rem, centered) → Blurb with 1px border on all sides; decorative maroon ticks via short Divider modules above and below |
| **3-level section rhythm tokens** | Page-wide | Section padding presets at movement boundaries (`major`) vs in-movement (`minor`) vs nested (`tight`) |
| **3-movement light/dark structure** | Page-wide | Movement A (Hero + Trust + Pattern Interrupt): dark. Movement B (Safe Listing → How It Works → AI Difference → Quote → Included + Image Band): light. Movement C (Proof → Cases → FAQ → Limited → Final → Guarantees): dark, with Final (S12) as a deliberate light "commit" moment |
| **Three-tier headline hierarchy** | Page-wide | `.h2Hero` (used 3× max — Pattern Interrupt, Safe Listing, Final CTA), `.h2Lead` (supporting sections), `.h2Quiet` (FAQ, Guarantees fine print). Replaces uniform-size `.h2Hero` everywhere |

---

## Export workflow (when Thomas picks a direction)

1. Walk `styles/tokens.css` → set Divi Theme Builder Global Colors + Global Fonts.
2. Walk the chosen concept's section list above → confirm each row has a Divi module mapping.
3. Build sections in Divi using the modules called out per pattern.
4. Re-test at the 8 QA target widths from `lib/breakpoints.ts`.
5. Cross-reference `references/cloudtitle-com/brand-extraction.md` for assets to migrate.
