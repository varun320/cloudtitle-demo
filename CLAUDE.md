# Cloud Title — Homepage Concept Demos (Gate 2 deliverable)

This is the **demo Next.js app** for the Cloud Title website redesign. It exists for one purpose: deliver **3 homepage direction concepts** to the client, deployed to Vercel with a side-tab switcher, so they can pick a direction before the Divi 5 build begins.

## Where this repo fits

This is the **sibling** of the docs/scope repo:

```
D:\projects\prodigy-ai\projects\
├── cloud-title-website\   ← docs, briefs, scope, project rules (read first)
└── cloud-title-demos\     ← you are here (the demo app)
```

**Before writing any code in this repo, read these files in the website repo:**

1. `cloud-title-website\CLAUDE.md` — project hard rules + folder map
2. `cloud-title-website\CONTEXT-HANDOVER.md` — bridges docs ↔ demo, what to load
3. `cloud-title-website\AGREED-SCOPE.md` — what we're building (Section: *Design process*)
4. `cloud-title-website\tooling\cloud-title-demos-setup.md` — **the spec for this repo** (repo structure, stack, anti-AI-slop rules, design system, deploy)
5. `cloud-title-website\briefs-from-thomas\Complete Homepage Copy – Divi Implementation Version.docx` — verbatim homepage copy
6. `cloud-title-website\briefs-from-thomas\Website Redesign Executive Brief.docx` — brand tone, audience
7. `cloud-title-website\TEAM-ONBOARDING.md` — full team walkthrough

The full pipeline spec lives in `cloud-title-website\tooling\cloud-title-demos-setup.md`. If a question about *what* to build comes up, that file answers it.

## What this repo will contain (per the spec)

```
cloud-title-demos/
├── app/                            ← Next.js 15 App Router
│   ├── layout.tsx                  ← side-tab switcher persists across concepts
│   ├── page.tsx                    ← redirect → /editorial
│   ├── editorial/page.tsx          ← Concept A: editorial direction
│   ├── data-forward/page.tsx       ← Concept B: data-forward direction
│   └── premium/page.tsx            ← Concept C: premium minimal direction
├── components/
│   ├── shell/                      ← SideTabSwitcher, ConceptBadge, DirectionPanel
│   ├── shared/                     ← Nav, Footer, StickyCTA, Section (all 3 concepts)
│   ├── editorial/
│   ├── data-forward/
│   └── premium/
├── content/
│   └── homepage-copy.ts            ← verbatim copy from the brief
├── lib/
│   ├── divi-safe.md                ← allowlist of patterns verified Divi-5-replicable
│   └── breakpoints.ts
├── references/                     ← Phase 1 output (already scaffolded)
│   ├── cloudtitle-com/             ← palette + font + asset extraction
│   ├── title-agencies/             ← competitor pulse-check
│   ├── premium-saas/               ← Compass, Side, Pacaso etc.
│   ├── florida-premium/            ← regional flavor
│   └── analysis.md                 ← what we adopt, what we avoid
├── styles/
│   ├── tokens.css                  ← single shared design system
│   └── globals.css
└── public/brand/                   ← cloudtitle.com logo, favicon, brand marks
```

## Stack

- **Next.js 15** App Router (static export OK)
- **Tailwind v4** consuming `tokens.css` via `@theme`
- **shadcn/ui** primitives (button, accordion, dialog only — never default-styled)
- **Framer Motion** sparingly; Divi-replicable transitions only
- **next/font** Google Fonts (must be in Divi font picker)

## Hard rules (carryover — do not break)

1. **Verbatim homepage copy.** Don't paraphrase. Source the brief.
2. **Legal / guarantee language locked.** Don't author it; if it appears in copy, mirror exactly.
3. **Statistics shown as "Based on internal averages"** where applicable.
4. **CTAs are placeholder anchors only** in the demo (no live forms — that's the Divi phase).
5. **Concept-preview badge visible at all times** so the client knows it's not the final site.
6. **Color palette extracted from cloudtitle.com** — never invented.
7. **Every section verified Divi-replicable before shipping** — log in `lib/divi-safe.md`.
8. **Never use an LLM for fee/price math.**
9. **Don't add scope.** Three concepts, one shared design system, one Vercel deploy.
10. **Don't propose platform changes** — final build is locked to WordPress + Divi 5.

## Anti-AI-slop rules

Pulled from the global `web/design-quality.md`. Every concept must demonstrate ≥4 required qualities; banned patterns are auto-rejects.

✅ Required (≥4 per concept):
- Clear hierarchy through scale contrast
- Intentional rhythm in spacing (not uniform padding everywhere)
- Depth or layering through overlap, shadows, surfaces, motion
- Typography with character and a real pairing strategy
- Color used semantically, not just decoratively
- Designed hover / focus / active states
- Grid-breaking editorial or bento composition where appropriate
- Motion that clarifies flow (not distraction)

❌ Banned:
- Default Tailwind palette
- Inter + default serif pairing
- Centered hero with gradient blob + generic CTA
- Default shadcn styling
- Uniform radius / spacing / shadow everywhere
- Flat gray-on-white with one decorative accent
- AI-generated mood-board imagery

## Mobile + tablet are first-class

Test at: **375 / 414 / 768 / 834 / 1024 / 1280 / 1440 / 1920**. Touch targets ≥ 44px. Reduced-motion respected. **Tablet (portrait 768 + landscape 834) gets its own QA pass.**

## Current state

Phase 0 (docs) ✅
Phase 1 (references) — **next**
Phase 2 (design system) — pending
Phase 3 (scaffold) — pending
Phases 4–6 (concepts) — pending
Phase 7 (QA) — pending
Phase 8 (deploy) — pending

## When the client picks a direction

1. Export `styles/tokens.css` → Divi 5 globals
2. Walk `lib/divi-safe.md` → confirm every chosen pattern has a Divi module mapping
3. Move to `cloud-title-website\tooling\divi-mcp-setup.md` for the real build
4. This repo stays online (password-protected) as a reference during the Divi build

## Who's who

- **Client:** Thomas Heimann, Cloud Title LLC (Florida title insurance agency)
- **Project owner:** Mohammad — runs the engagement, signs off on direction
- **Build team:** that's us, working in this repo

## Hard escalation rule

**Scope changes from the client go to Mohammad first** — never accepted directly.
