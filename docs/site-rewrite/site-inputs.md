# HelioLattice website rewrite - inputs

## Project
- Website folder (current React reference): `./website`
- **New marketing build:** `./website-static` (Eleventy → `dist/`) — approved; deploy branch TBD (e.g. `site/static-marketing`)
- Target stack: static HTML + shared CSS design system + minimal vanilla JS + Eleventy includes
- Deploy: **Cloudflare Pages** — point build to `website-static` (`npm run build`, output `dist/`); update zone config when branch is ready

## Product source code (READ-ONLY, never edit)
- `C:\Users\Home\Downloads\mybis.site\custom-works\fge-solar-crm\solar-erp-frontend`
- `C:\Users\Home\Downloads\mybis.site\custom-works\fge-solar-crm\solar-erp-backend`
- Product narrative: `...\fge-solar-crm\docs\brief\PRODUCT_BRIEF.md`
- Module map: `...\fge-solar-crm\.cursor\skills\fge-erp-modules\modules-inventory.md`

## Competitor
- Main competitor: suryahub.com
- Analysis: `.\competitor analysis\suryahub\suryahub_content.md` (593 public URLs, Oct 2026 extract)

## Markets and audience
- Launch: India first, English primary; global-ready structure later
- ICP: rooftop solar installers and EPC companies (5–200 live jobs), owner + sales + site + store + accounts

## Brand assets
- Logo / mark: `website/public/brand/` (keep existing HelioLattice mark and favicon)
- Colors / type: evolve from current site (`website/src/index.css` tokens); full rebrand TBD

## Facts that can be public
- One anonymous live deployment: “mid-size Indian EPC” (no client name on site)
- Case study tone: **professional outcomes only** (faster status, fewer stock mismatches, clearer partner handoffs) — no invented metrics
- Capability proof: modules, roles, reports from product (no fake customer totals)
- Contact: **support@heliolattice.com**
- Regional: DISCOM / utility workflow packs (existing + expandable); guide pages later for ICP search bottlenecks

## Demo / lead capture
- Pricing: **one yearly plan + one-time implementation fee** (no Starter/Growth/Enterprise tiers). Implementation fee is **scope-based** — depends on data to be pre-entered, business study and configuration. Numbers quoted after demo, in writing.
- Google Form for demo requests: **wire in P1 `/demo` page** when form URL is ready; until then CTA → `/demo/` + mailto fallback

## Decisions — 11 Oct 2026 (owner-confirmed)
- **Current site is live and indexed** (~1 week old, first indexed ~24 Sep 2026) and we **redeploy on the same domain** → blueprint needs a URL continuity / cutover plan, not a greenfield launch.
- **Competitor comparison pages allowed**, including named vendors, **only with real researched substance** (no generic AI filler). Never expose our customer names or customer data.
- **AMC / service: market it.** Shipped today in Accounts service finance: `AMC_INVOICE`, `AMC_RECEIPT`, `SERVICE_EXPENSE`, `WARRANTY_REPLACEMENT`, `VENDOR_RECOVERY`, linked to customer / project / service ticket / warranty claim / vendor, plus `SERVICE` and `WARRANTY` report dimensions and project-linked support tickets. AMC *contract records / renewal schedules* are near-term.
- **WhatsApp + bots are part of the SaaS offering**: WhatsApp integration, internal user-notification bot, and custom customer bots — provided with the platform, configured during implementation.
- **Roles / permissions are a headline USP** (we are deliberately stronger than the competitor here): **269 permission keys across 26 module groups**, ~24 seeded roles, data scopes (all / assigned / managed), stage-level access policy, separately authenticated partner portal.
- Proof style: product depth (78 of 89 capabilities live, 21 reports, role model) — no invented customer counts.

## Known issues to fix at cutover
- Tenant app subdomains are publicly indexed: `iazotech.heliolattice.com`, `test-20260927.heliolattice.com` → should be `noindex` / robots-blocked.
- Live `/pricing` still advertises “Starter, Growth and Enterprise … priced by platform and seats” — contradicts the one-plan model; must change at cutover.

## Later
- GA4 Measurement ID:
- Google Form embed URL:
