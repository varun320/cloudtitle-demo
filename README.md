# Cloud Title — Homepage Concept Demos

Next.js demo app delivering **3 homepage direction concepts** for the Cloud Title redesign. The client picks a direction from this app, then the actual site is built on WordPress + Divi 5.

> **Internal preview.** This is not the production site. The final site is built in WordPress + Divi 5 at cloudtitle.com.

## What's here

Three homepage directions, one shared design system, side-tab switcher between them:

- `/editorial` — Concept A: magazine feel, intentional asymmetry
- `/data-forward` — Concept B: dashboard energy, stat-tile heavy
- `/premium` — Concept C: restrained luxury, monochromatic

All 3 use the same color palette (extracted from cloudtitle.com), the same spacing scale, and the same homepage copy (verbatim from the client brief). They differ in layout, typography pairing, and motion personality.

## Stack

- Next.js 15 App Router
- Tailwind v4 (consumes `styles/tokens.css`)
- shadcn/ui primitives (customized)
- Framer Motion (sparingly, Divi-replicable transitions only)
- Deployed to Vercel with password protection

## Local dev

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project context

The full project context (briefs, scope, hard rules) lives in the sibling docs repo:

```
..\cloud-title-website\
```

Start with `..\cloud-title-website\CLAUDE.md`. The build spec for *this* repo is in `..\cloud-title-website\tooling\cloud-title-demos-setup.md`.
