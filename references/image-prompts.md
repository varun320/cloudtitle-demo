# Higgsfield Image Prompt Brief

> Source of truth for every imagery slot across the three concept demos.
> Update both this file AND the inline `prompt` prop on each `<ImageSlot>`
> when iterating. When Higgsfield output lands, swap the slot for
> `next/image` with explicit width / height.

## Florida-regional rules (apply to every image)

Per `references/florida-premium/findings.md`:

- **Florida = water geometry + architecture, never flora.** Coastlines, causeways, mid-century Miami modernism, Sarasota School lines. No palms, no hibiscus, no flamingos — not even ironically.
- **Light, not heat.** High-key, hard-edged, slightly bleached. Avoid orange/coral "warmth."
- **Stats over adjectives.** People shots = real-feeling specificity, not generic stock.
- **Banned outright:** sunset gradients, palm silhouettes, drone Miami-skyline B-roll, gold-on-navy without a reason, generic handshake/laptop stock.

## Concept-specific tone

| Concept | Image quantity | Tone | Avoid |
|---|---|---|---|
| Editorial (A) | 3–4 | Magazine, real photography, environmental | Stock-style headshots, gradients |
| Data-forward (B) | 1–2 | Abstract / process-oriented, minimal photo | Lifestyle, beach |
| Premium (C) | 1 hero photo, 1 supporting max | Cinematic, dark luxury, single subject | More than 2 images |

---

## Concept A — Editorial

### A1 · Hero supporting image
- **Slot:** right-rail aside in hero (after the heritage stamp)
- **Aspect:** 3 / 4
- **Caption:** Florida architecture detail — concrete + glass, hard noon light
- **Higgsfield prompt:**
  ```
  Architectural detail photograph of a mid-century Sarasota School
  modernist home in coastal Florida — concrete soffit and floor-to-ceiling
  glass meeting, hard noon light casting sharp diagonal shadows, slightly
  bleached high-key colour palette, no people, no foliage, no palms, no
  beach. Editorial magazine photography style, Hasselblad medium format,
  shot at f/8, natural daylight only, real-feeling — not CGI.
  ```

### A2 · Section break between Safe Listing™ and How It Works
- **Slot:** full-bleed band image, 21:9
- **Caption:** Florida coastline geometry — causeway from above, no boats
- **Higgsfield prompt:**
  ```
  Aerial straight-down photograph of a Florida coastal causeway and the
  geometric line where land meets ocean — pure geometry, no boats, no
  people, no palms. High-key bleached light, blue-grey water, white
  concrete causeway, sandbars visible. Editorial aerial photography, shot
  with a phase-one IQ4 from low altitude, real, no people, no decoration.
  ```

### A3 · Proof section — team portrait band
- **Slot:** above the testimonials grid, 16:9
- **Caption:** Real Cloud Title team members — environmental portrait at a Florida title office
- **Higgsfield prompt:**
  ```
  Editorial environmental portrait of a small Florida title agency team
  of 3 — two women, one man, mixed ages 35–55, business casual real
  Florida professionals (not stock-photo types), standing inside a modern
  glass-fronted Tampa office, mid-morning light streaming in sideways,
  documents and a laptop visible on a wood table, neutral expressions,
  looking off-camera. Photographed on a Leica Q with natural daylight,
  shallow depth of field, no posed handshakes, no fake smiles.
  ```

### A4 · Case-study section accent
- **Slot:** between the two case-study cards, 4:3
- **Caption:** Real Florida home, exterior, no people
- **Higgsfield prompt:**
  ```
  Twilight architectural photograph of a $1M+ waterfront Florida home in
  Naples — modern coastal architecture, white stucco and dark wood,
  windows lit from within, calm sky just after sunset (cool blue, NOT
  orange), no people, no palms in foreground, clean water in the
  background. Architectural Digest style, tripod-stable, real-feeling.
  ```

---

## Concept B — Data-forward

### B1 · Hero process visualization
- **Slot:** replaces one of the bento stat tiles, 1:1 square
- **Caption:** AI-powered title search abstract — data flow visualization
- **Higgsfield prompt:**
  ```
  Abstract data-visualization graphic on a deep navy background — a
  network of fine pale-grey lines connecting circular nodes labelled
  with county names (Miami-Dade, Broward, Palm Beach, Collier), one
  highlighted pathway in maroon showing a parallel search trace. Minimal,
  flat, no 3D, no glow, no AI-hype neon. Stripe-style data graphic,
  technical illustration, monochrome navy palette with one maroon accent.
  ```

### B2 · Florida service-county map tile
- **Slot:** inside the proof bento, replacing one KPI tile, 1:1
- **Caption:** Florida county map — all 67 counties licensed (subtle highlights on top-5)
- **Higgsfield prompt:**
  ```
  Flat vector-style choropleth map of the state of Florida — all 67
  counties outlined in fine pale-grey lines on a bone-white background,
  the top 5 most-active counties (Miami-Dade, Broward, Palm Beach,
  Hillsborough, Pinellas) filled in solid navy, others left in white.
  Print-quality, no labels, no compass, no decoration, no shadows.
  Functional infographic, not decorative.
  ```

---

## Concept C — Premium Minimal

### C1 · Hero background photograph (single, oversized)
- **Slot:** full-bleed background of the dark hero, behind the H1 type
- **Caption:** Single signature image — Florida architectural icon, cinematic
- **Higgsfield prompt:**
  ```
  Cinematic ultra-wide architectural photograph of a Florida concrete
  causeway disappearing into the Gulf of Mexico at the blue hour just
  after sunset — sky deep navy with a single hint of indigo, water dark
  and still, no boats, no people, no palms. Shot on Arri Alexa LF with a
  master prime lens, anamorphic flare allowed once, cinematic colour
  grade leaning cool. Will be overlaid with white display type — leave
  the upper-left third negative-space-clean for typography.
  ```

### C2 · Optional inline architectural detail
- **Slot:** between the "What you get" block and the proof section, 2:1
- **Caption:** Quiet architectural detail, real building, no people
- **Higgsfield prompt:**
  ```
  Architectural detail of a modernist Florida bank-or-courthouse
  interior — polished concrete floor meeting a wood-panel wall, raking
  sidelight from a tall narrow window, a single bronze-finish door
  handle in focus, no people, no signage, no decoration. Slow,
  contemplative, premium-real-estate magazine style. Shot on Fuji GFX
  with available light, no flash.
  ```
