# HelioLattice — marketing landing page

A premium marketing landing page for a Solar ERP product, built from
`docs/Solar_ERP_Brief.pdf`. React + TypeScript + Tailwind CSS v4 + Motion.

> **"HelioLattice" is a placeholder brand name.** The product brief confirms
> no product name has been finalized yet. Swap it in `src/data/content.ts`
> (`brand.name`), `index.html` (title/meta), and `src/components/ui/Logo.tsx`
> before this goes live under a real name or domain.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build, output in dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/data/content.ts` — every headline, stat, and body copy on the page.
  This is the single source of truth for content; every figure and claim is
  sourced from the product brief. Edit copy here rather than in components.
- `src/components/sections/` — one file per page section (Hero, Problem,
  Solution, Capabilities, Workflow, Intelligence, RoleValue, Differentiators,
  FinalCTA, Footer, Nav).
- `src/components/mockups/` — the hand-built product UI mockups (delivery
  checklist, pipeline, survey/quotation, workflow template designer, stock
  ledger, finance, dashboard, report library). No screenshots or stock
  imagery — everything is real markup styled to look like product UI.
- `src/components/charts/` — small dependency-free SVG/CSS chart primitives
  (bar, stacked bar, line) used inside the mockups.
- `src/components/ui/` — shared primitives (Button, Container, CornerFrame,
  SectionHeading, StatusPill, CountUp, Reveal/RevealGroup scroll animation
  wrappers, Logo).

## Design system

- **Type:** Space Grotesk (display/headings) + IBM Plex Sans (body) + IBM
  Plex Mono (data labels, stage numbers, KPI figures).
- **Palette:** dark graphite base (`--color-bg`), a solar-amber brand accent
  (`--color-solar`) and a signal-teal interactive accent (`--color-signal`),
  plus a warm "paper" tone used only inside customer-facing document
  mockups (the proposal) to visually separate operational UI from
  customer-facing output. Chart series colors follow a colorblind-validated
  categorical order. All tokens live in `src/index.css` under `@theme`.
- **Motif:** thin corner brackets (`CornerFrame`) on every product mockup
  instead of floating rounded cards with drop shadows — a nod to
  calibration/measurement marks rather than generic SaaS glassmorphism.

## Notes and assumptions

- No customer logos, testimonials, or usage metrics are in the brief, so the
  "trust" section uses honest, sourced figures instead (feature maturity
  count, permission-model depth, report count) rather than fabricated social
  proof.
- Copy avoids every claim the brief explicitly flags as unsupported
  (customer portal, offline mode, e-signature, monitoring/yield modelling,
  automated subsidy/commission, unqualified "enterprise-grade", etc.).
- Pricing has no page/nav entry — the brief only provides internal pricing
  *structure* inputs, not public tiers or numbers to display.
- Respects `prefers-reduced-motion` throughout (`src/index.css` plus a
  `useReducedMotion` check in every animated component).
