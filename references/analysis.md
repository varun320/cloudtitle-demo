# Reference Analysis — Phase 1 Output

> Real references only. No AI-generated mood boards.
> Companion files per bucket: [`cloudtitle-com/brand-extraction.md`](cloudtitle-com/brand-extraction.md) · [`title-agencies/findings.md`](title-agencies/findings.md) · [`premium-saas/findings.md`](premium-saas/findings.md) · [`florida-premium/findings.md`](florida-premium/findings.md)

---

## 1. cloudtitle.com — the source brand

Full extraction in [`cloudtitle-com/brand-extraction.md`](cloudtitle-com/brand-extraction.md).

### Palette (extracted, filtered)
After stripping out Divi/WordPress editor-palette defaults, the real brand colors are:

| Token | Hex | Role |
|---|---|---|
| Brand navy (primary) | `#133f6d` | Dominant — section grounds, headers, buttons |
| White | `#ffffff` | Surface, hero text on navy |
| Body charcoal | `#333333` | Body copy |
| Muted gray | `#666666` | Secondary text |
| Brand maroon (accent) | `#8B0000` | Set deliberately in chat-widget config — counts as brand |
| Secondary red | `#AE1F24` | Supporting accent |
| Teal (hover) | `#82c0c7` | Optional tertiary |

**Demo design system anchor:** navy `#133f6d` + maroon `#8B0000` accent, expanded to 50–950 OKLCH ramps in `styles/tokens.css`. Teal optional, not core.

### Typography (identified)
- **Raleway** (Google Fonts) is the only font loaded — used for both headings and body. Pure Divi-default setup; no pairing strategy.
- Redesign introduces a deliberate pairing per concept (see direction notes below). All choices Google-Fonts-compatible (Divi-picker compat).

### Brand marks
- Logo: `public/brand/logo.png` (also at `references/cloudtitle-com/logo.png`) — navy wordmark with small cloud glyph.
- Favicon: `public/brand/favicon.ico` — placeholder; replace with SVG in Phase 2.

### What we preserve
1. Brand navy `#133f6d` as primary.
2. Maroon `#8B0000` as accent (intentional — already in chat config).
3. Wordmark logo + cloud glyph.
4. "Florida-serving" positioning.
5. "Cloud" / tech-forward brand thesis.

### What we modernize
1. Replace Raleway-everything with deliberate pairings per concept.
2. Replace icon-and-logo collage with real photography (Florida architecture / waterfront geometry / team).
3. Drop residual Divi-editor rainbow; lock to filtered palette + OKLCH ramps.
4. Use verbatim brief hero copy — lead with specificity, not a tagline.
5. Surface underwriter / ALTA / Florida-bar credentials above the fold.

---

## 2. Title agencies / closing companies (competitor pulse)

Full analysis in [`title-agencies/findings.md`](title-agencies/findings.md).

| Site | URL | What works | What doesn't | Adopt? |
|---|---|---|---|---|
| Qualia | qualia.com | Underwriter/partner logo wall above fold; SOC2/ALTA badges as design; real product screenshots > stock | SaaS chassis (pricing/demo CTA); navy-teal is the modern-fintech default | **Partial** — adopt discipline (real proof > decorative icons, logos above fold); reject palette + SaaS chassis |
| First American | firstam.com | Concrete trust signals (awards, fraud-prevention CTA); modular section cards translate cleanly to Divi | Headline is a paraphrased corporate cliché; default sans + generic blue; dense secondary nav flattens message | **Architecture yes, aesthetic no** — keep the modular-card pattern, reject palette/voice/audience-grid |
| Doma | doma.com | Direct, purpose-driven copy; no stock photos or gradient blobs | "Future of X" is a tired hero formula; reads as a frozen 2021 fintech template; no visual personality | **Partial** — borrow directness; avoid mission abstraction (homebuyers want concrete reassurance about *their* closing) |

### Category insight
Category baseline is *low*: generic blue, stock handshake photos, "trusted since" copy, dense multi-audience nav. Qualia is the visible ceiling — but it's a *SaaS* ceiling, not a *service-brand* ceiling. **There is no title agency website doing distinctive editorial or premium design. That gap is Cloud Title's opening.**

---

## 3. Premium B2B real estate SaaS (modern authoritative)

Full analysis in [`premium-saas/findings.md`](premium-saas/findings.md).

| Site | URL | What works | What doesn't translate | Adopt? |
|---|---|---|---|---|
| Qualia | qualia.com | Underwriter wall as primary trust mechanism; in-line compliance badges; quantified hero (named software version, 80% number) | Product-led / SaaS dashboard; tone too cold; illustrated landscape motifs are startup-y | **Partial** — palette discipline, underwriter wall, quantified claims as "Based on internal averages" |
| Side | side.com | Editorial + data-tile hybrid; real agent photography (named partners); single declarative hero line; US-map for geographic reach | Video-hero is heavy in Divi; aspirational founder pitch too emotional for a transaction; agent-only audience misses buyer register | **Yes** — editorial + data-tile hybrid, real Florida-team photos, single-line hero, Florida-county map |
| Stripe | stripe.com | Bento grid; massive trust numerics; restraint *is* the luxury | "Developer-tool" gradient aesthetic; cool engineer voice; minimalism earned by Fortune-100 scale | **Partial** — bento structure, quantified-trust pattern, restraint discipline. Skip gradients + "infrastructure" vocabulary |

### Category insight
Borrow the visual confidence of premium proptech without becoming a tech startup. The pattern with the most leverage is the **underwriter-logo / compliance-badge / quantified-stat** trio — appears across Qualia, Side, and Stripe, and Cloud Title has the raw material for all three.

---

## 4. Florida / Gulf-Coast premium services (regional flavor)

Full analysis in [`florida-premium/findings.md`](florida-premium/findings.md).

| Site | URL | What works | Cliché trap to avoid | Adopt? |
|---|---|---|---|---|
| ONE Sotheby's Intl Realty | onesothebysrealty.com | Serif headline + sans body editorial pairing; dark hero treats the listing like a luxury good; place-naming (Brickell, Coconut Grove) | Palm-tree silhouettes + sunset gradients; drone South Beach neon; cursive "signature" fonts | **Partial** — dark/serif/waterfront-geometry register + neighborhood naming. Skip aspirational lifestyle photography |
| Greenberg Traurig | gtlaw.com | Stats-as-design (51 locations, 860+ Chambers rankings); architecture photography > people; whitespace discipline | Handshake/team-around-laptop stock; generic "professional" blue gradient; globe icons for a Florida-only op | **Yes** — closest analog to Cloud Title's B2B authority lane |
| The Boca Raton | thebocaraton.com | Heritage as design element ("Since 1926" set in display type); named sub-brands; Forbes rating with typographic weight | Sunset-over-water hero loops; cursive "paradise" script; gold-on-navy luxury cliché | **Partial** — borrow heritage-as-type. Skip hospitality warmth (Cloud Title sells transactional trust, not leisure) |

### Regional flavor playbook (the rules Cloud Title follows)
1. **Florida = water geometry + architecture, never flora.** No palms, no hibiscus, no flamingos.
2. **Light, not heat.** High-key bright whites + cool blues. No orange/coral "warmth."
3. **Name the place.** "Miami-Dade, Broward, Palm Beach, Collier" > "serving all of Florida."
4. **Heritage as type, not ornament.** Founding year set in the display face, not a footer badge.
5. **Stats over adjectives.** "94% on-time close rate" > "trusted Florida partner."
6. **Banned outright:** sunset gradients, palm silhouettes, script "elegant" fonts, drone Miami-skyline B-roll, gold-on-navy without a reason, handshake/laptop stock.
7. **Color discipline:** one cool anchor + one Florida-light neutral + one restrained accent — all extracted from cloudtitle.com, never invented.
8. **If in doubt, do less** (Greenberg Traurig proves Miami authority works by showing almost no Florida).

---

## Cross-cutting takeaways

### Patterns to adopt (all 3 concepts)

1. **Trust-trio above the fold:** underwriter logo wall (Qualia), inline compliance/ALTA badges (Qualia), and one quantified stat ("Based on internal averages" — internal label required) (Side, Stripe, Greenberg Traurig).
2. **Specificity over generality:** name Florida counties served (Side's geographic map, ONE Sotheby's neighborhood naming); show real Florida team / architecture photography, never stock handshakes.
3. **Modular section cards as the layout chassis** — First American proves they survive at every breakpoint and Divi 5 maps to them cleanly.
4. **Heritage as a type-system element** (The Boca Raton) — Cloud Title's founding year + closings-to-date sized like a section header, not a footer line.
5. **Restraint as positioning** — Greenberg Traurig and Stripe both prove that disciplined whitespace reads premium; the entire title-agency category fails at this.

### Patterns to avoid (auto-reject)

1. Generic blue gradient "professional" header — the entire title-agency category default.
2. Stock handshake / keys / diverse-team-around-laptop photography.
3. "Trusted since YYYY" headline, "open doors / open possibilities" headline, "The future of X" headline.
4. Default Tailwind palette, Inter + default serif, default shadcn primitives.
5. Florida cliché stack: sunset gradients, palm silhouettes, drone skyline B-roll, cursive script fonts, gold-on-navy without reason.
6. Centered hero with gradient blob + generic CTA.
7. Dense multi-audience nav that flattens the message (First American's failure mode).
8. SaaS chassis (pricing link, demo CTA, webinar grid) — Cloud Title is a service, not a platform.

### Direction-specific inspiration

#### Concept A — Editorial
- **North star:** ONE Sotheby's editorial register × Side's single declarative hero × The Boca Raton's heritage-as-type.
- **Typography:** serif display (Fraunces / Newsreader / Source Serif) + Raleway carry-over for body.
- **Layout:** asymmetric, magazine-style pull quotes, generous whitespace.
- **Imagery:** real Florida-team photography + waterfront architecture.
- **Trust trio:** Underwriter logo wall from Qualia; founding year set as a display element.
- **Skip:** Stripe entirely. No bento grid here.

#### Concept B — Data-forward
- **North star:** Stripe bento × Qualia underwriter wall × Greenberg Traurig stats-as-design.
- **Typography:** Inter or Geist Sans + a mono accent (JetBrains Mono / Geist Mono) for stats.
- **Layout:** bento grid; stat tiles (closings, avg days-to-close, repeat-Realtor %, counties served) labeled "Based on internal averages."
- **Imagery:** Florida service-county map as a content tile, not decoration.
- **Trust trio:** ALTA / Florida-bar / SOC-equivalent badges in-line; underwriter wall; quantified hero number.
- **Skip:** editorial flourishes; no pull quotes.

#### Concept C — Premium minimal
- **North star:** Side's restraint × Stripe's whitespace × ONE Sotheby's dark luxury.
- **Typography:** confident large-scale sans (Söhne / Inter Display / Geist Display) + Raleway body for brand continuity.
- **Layout:** maximum whitespace, one hero photograph, oversized type, one accent (maroon `#8B0000`) used sparingly on a navy + bone-white ground.
- **Imagery:** a single hero photograph (Florida architecture, not lifestyle).
- **Trust trio:** one stat above the fold; underwriter wall in a quiet horizontal strip; ALTA badge inline near the headline.
- **Skip:** all decorative chrome; almost no motion.

### Cross-concept rule (non-negotiable)

The **trust trio** (underwriter wall + ALTA/compliance badges + one quantified "Based on internal averages" stat) must appear above the fold in **all three concepts**. Qualia proves it works in this exact category; Side and Greenberg Traurig prove it works at the premium ceiling. Without it, the concepts compete only on aesthetic — and an aesthetic without trust signals is what every title agency website already does.

---

## Methodology

- **Direct HTML scrape** via curl → cloudtitle.com palette + Google Font + brand-mark extraction. Output: `cloudtitle-com/homepage.html`, `logo.png`, `favicon.ico`.
- **WebFetch + WebSearch + parallel research agents** → discovery and analysis of 9 reference sites across 3 buckets.
- **Playwright screenshots deferred** — Chromium not installed in this environment. Run `npx playwright install chrome` before Phase 2 if visual comparisons across 375/768/1440 are needed; the textual analysis above stands without them.

### What's missing vs. spec

- Per-site screenshots at 375/768/1440 — deferred (Playwright install required).
- Apify deep-scrape of reference sites — not run; the WebFetch + agent analysis covers what we'd extract.

Neither blocks Phase 2 (design-system / `tokens.css`), which is the next dependency.
