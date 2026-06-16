# cloudtitle.com — Brand Extraction

Source: `homepage.html` (live scrape of https://cloudtitle.com on 2026-06-16).
Method: raw HTML + CSS hex/font extraction, then filter out Divi/WordPress core editor palette defaults.

---

## Palette (extracted, filtered)

The current site is built on the Divi WordPress theme. Many hex codes in the markup are **Divi/WordPress editor palette defaults** (e.g., `#2ea3f2`, `#0c71c3`, `#cf2e2e`, `#00d084`, `#ff6900`, `#ab1dfe`, `#8ed1fc`, `#fcb900`) — these are *not* brand colors. After filtering, the actual Cloud Title brand palette is:

| Token | Hex | Role | Evidence |
|---|---|---|---|
| **Brand navy (primary)** | `#133f6d` | Primary brand color — section backgrounds, headers, button fills | 29 uses in stylesheet — dominant brand color |
| **White** | `#ffffff` | Surface, hero copy on navy | 34 uses |
| **Body charcoal** | `#333333` | Body text | 17 uses |
| **Muted gray** | `#666666` | Secondary text, widget links | 11 uses |
| **Brand maroon** | `#8B0000` | Chat widget accent (configured in embed script) | `data-color="#8B0000"` on cloudtitle-chat embed |
| **Secondary red** | `#AE1F24` | Used as supporting accent | 2 uses (in Divi modules) |
| **Brand teal (hover)** | `#82c0c7` | Widget link hover state | 1 explicit use |
| **Deep navy variant** | `#003388` | Dark accent | 3 uses (`#038` shorthand) |

**Inferred brand DNA:** navy-led with a quiet maroon/red secondary, neutral grays, and a hint of teal. No blues outside of navy. No greens. No oranges.

**For the demo design system:** anchor on navy `#133f6d`. The maroon `#8B0000` is the legitimate brand accent — it's been deliberately set in the chat config. Expand both to 50–950 OKLCH ramps in `tokens.css`. Treat teal `#82c0c7` as optional tertiary, not core.

---

## Typography (extracted)

Only one Google Font is loaded across the entire site:

- **Raleway** — loaded with weights 100–900 (italic + roman), via Google Fonts. Used for both headings and body.
- Fallback chain: `'Raleway', Helvetica, Arial, Lucida, sans-serif`.
- Open Sans appears as a Divi-internal fallback only.

**Verdict:** Raleway-everything is a Divi-default setup. It's a clean, geometric sans — works, but offers no pairing strategy. The redesign should introduce a deliberate pairing:
- **Concept A — Editorial:** serif display (e.g., Fraunces / Newsreader / Source Serif) + Raleway carry-over for continuity in body.
- **Concept B — Data-forward:** Inter or Geist Sans for tighter UI rhythm + a mono accent (JetBrains Mono / Geist Mono) for stats.
- **Concept C — Premium minimal:** retain Raleway for body, use a confident display sans at large scale (e.g., Söhne / Inter Display / Geist Display) to keep visual ties to the existing brand.

All choices must be Google Fonts–compatible (Divi font-picker compat).

---

## Brand marks

- **Primary logo:** `https://cloudtitle.com/wp-content/uploads/2024/02/New-Cloud-TItle-Logo-R.png` — saved as `references/cloudtitle-com/logo.png` (PNG, transparent, navy mark).
- **Secondary logo (older):** `https://cloudtitle.com/wp-content/uploads/2022/09/Main-logo-file-TM-2-01-300x274.png` — not downloaded; legacy.
- **Favicon:** `references/cloudtitle-com/favicon.ico` — 8.6 KB; will be replaced with a proper SVG mark in Phase 2.

The logo is a wordmark with a small cloud glyph. Treat it as the only sacred asset that crosses all 3 concepts. Crop/lockup variants TBD in Phase 2.

---

## Imagery

The current site uses:
- WordPress media uploads (partner logos, notary icons).
- No photography of the team, office, or Florida.
- No illustration system.

**Implication:** Phase 4–6 needs a real Florida-team / architecture photo plan — even if it's licensed stock for the demo (clearly noted), the *direction* must use specificity (real waterfront geometry, real Florida courthouse architecture) rather than the current site's icon-and-logo collage.

---

## Hero copy (verbatim from current site)

- **Hero headline:** "A next-gen, technology driven and cloud based Title Agency serving the entire State of Florida"
- **Primary CTA:** "SUBMIT AN ORDER"

**Note:** This is the *current* site's copy — not the redesign copy. The redesign uses the verbatim copy from `briefs-from-thomas/Complete Homepage Copy – Divi Implementation Version.docx`, which lives in `content/homepage-copy.ts`.

---

## Nav structure (current)

Home · Services · Safe Listing Program · Submit Title Order · Safe Listing · Order · Marketing Tools · Privacy Notice · Contact · Make Escrow Deposit

This nav is overloaded and partly duplicated ("Safe Listing Program" + "Safe Listing"; "Submit Title Order" + "Order"). The redesign should consolidate, but that's a Gate 3 (Divi build) concern — for the demos, mirror the brief's IA.

---

## What we preserve

1. **Brand navy `#133f6d`** as the primary color anchor.
2. **Maroon `#8B0000`** as the secondary accent (it's intentional — set in the chat config).
3. **Wordmark logo** with its small cloud glyph.
4. **"Florida-serving"** positioning (not national).
5. **"Cloud" / "tech-forward"** brand thesis from the existing hero.

## What we modernize

1. Typography — replace Raleway-everything with a deliberate pairing per concept.
2. Imagery — replace icon collage with real photography (Florida architecture / waterfront geometry / team).
3. Color discipline — drop the residual Divi-editor rainbow; lock to the filtered palette + ramps.
4. Hero — replace the long compound sentence with the verbatim brief headline; lead with specificity, not a tagline.
5. Trust signals — surface underwriter / ALTA / Florida-bar credentials above the fold (currently only in footer).
6. Nav — flag for consolidation in Gate 3 (don't fix here; demos mirror the brief's IA).
