# HelioLattice site rewrite â€” handoff (11 Oct 2026)

Paste-and-continue context for a new chat or a new model. Read this first, then `site-inputs.md`, then `site-blueprint.md`.

## Where we are

| Step | State |
|------|-------|
| Owner questionnaire | **Answered** â€” see Decisions in `site-inputs.md` |
| Research pass (product code + competitor + live site) | **Done** â€” findings below |
| `site-blueprint.md` | **v2 written** (11 Oct) â€” page map, URL continuity, tech spec, verification checklist. Awaiting owner answers on the 4 items in its Â§10 |
| `website-static/` design system | **Done**: `site.css` (single stylesheet), self-hosted fonts, layout, header, footer, JS, `_headers`, sitemap, `scripts/verify.cjs` |
| Home `/` | **Built and verified** (build passes, `verify.cjs` PASS, checked at desktop and 390 px, menu works). Awaiting owner review |
| `/product/` | **Built and verified** (hero diagram, 9 module cards, connection flow, tool tiles, 5 FAQs) |
| `/demo/` | **Built and verified.** Native form (fields in `src/_data/demoForm.json`) posting into the Google Form; see `google-form-setup.md` |
| Shared partials | `partials/breadcrumb.njk`, `faq.njk` (visible FAQ + FAQPage schema), `cta.njk`. Set `crumbs` in front matter, `{% set faqItems = ... %}` and `{% set cta = {...} %}` before including |
| Data-driven template | `layouts/module.njk`: a page is pure YAML front matter (hero, mock, signs, cards, steps, features, table, splits, tiles, related, faq, cta). Quote any value containing a colon. `layouts/legal.njk` for prose pages |
| Built and verified (64 pages, `verify.cjs` all PASS incl. link and anchor checks) | Home, Demo, Product hub; 9 modules (sales, survey-quotation, delivery, materials, finance, service-amc, partners, reporting, access-control) plus notifications-whatsapp; 4 solutions; Problems hub + 9; Roles hub + 7; Integrations hub, Tally, WhatsApp; Pricing, Customers, Security, About, Contact, FAQ, Glossary, Resources; Compare hub + Excel comparison; 3 buyer-intent landers; Guides hub + 10 guides; Privacy, Terms |
| SEO pass | **Done** (11 Oct): generated sitemap and `llms.txt`, 1200x630 OG image, canonical/meta/schema checks, heading order, orphan and anchor checks. Run `node scripts/seo-audit.cjs` after adding pages |
| Not built | Named competitor comparisons (need evidence sheets); P3 regional and scheme guides (need sourced research). P1e cutover rehearsal skipped by owner |
| Pending owner input | legal text review by counsel, owner review of all copy, Cloudflare Pages cutover |

**Run it:** `cd website-static`, then `node ./node_modules/@11ty/eleventy/cmd.cjs --serve` (or `npm run dev` where node is on PATH). Verify with `node scripts/verify.cjs`.

**Next action:** owner reviews all pages, supplies Form URL and GA4 ID. Then: visual pass on mobile for the newer pages, `seo-bulk` pass (alt, schema, sitemap, llms.txt), curated guides, evidence-based named comparisons, cutover. After every page run `scripts/verify.cjs` and a browser check after every page. `verify.cjs` also fails any page containing negative phrasing ("not a", "we don't"), competitor names, stack names or "coming soon".

**Analytics:** Microsoft Clarity is wired in `layouts/base.njk` via `site.clarityId` (`yw0wg6sifl`), loaded on window load. The privacy page (`/legal/privacy/`) must disclose Clarity session analytics and cookies. GA4 (`G-KZ63LNXQ6J`) is wired the same way via `site.gaId`, deferred on load.

**Deploy:** see `cloudflare-deploy-guide.md` (same Worker, new `wrangler.jsonc`, `.node-version`, `_redirects`, 404). Full URL list: `urls.md`.`n`n**Open owner items (defaults applied meanwhile):** (resolved: old `/guides/*` dropped, never indexed, no redirects); exact WhatsApp/bot scope wording; Google Form URL and GA4 ID; which named competitor comparisons to research first.

## Verified product facts (use these; do not re-guess)

Source: `fge-solar-crm` â€” `solar-erp-backend`, `solar-erp-frontend`, `docs/brief/PRODUCT_BRIEF.md`, `.cursor/skills/fge-erp-modules/modules-inventory.md`. **Read-only.**

- **Maturity:** 89 capabilities inventoried â€” 78 live end to end, 8 partial, 3 not built. 21 operational reports. ~24 seeded roles.
- **Access control (headline USP):** 269 permission keys across 26 module groups (`solar-erp-backend/src/shared/constants/permissions.ts`); data scopes all / assigned / managed; `stage-access.policy.ts`; separately authenticated partner portal (`/partner/**`).
- **Lifecycle spine:** Lead â†’ SiteSurvey â†’ Quotation â†’ Customer/Project â†’ Flows â†’ WorkflowJobs â†’ Documents/Tasks, with Materials/BOM and Accounts attached.
- **Quotations:** catalogue-driven BOM, approval queue, revisions, internal-costing permission (`quotation:view_internal_costing`), PDF proposal.
- **Materials:** catalogue, brands, price history, multiple warehouses, movement ledger; purchasing partial.
- **Accounts (operational, not statutory GL):** claims workflow, AR/AP, inventory valuation events, Tally XML/JSON + Excel export, bank statement import.
- **Service / AMC (shipped):** `AMC_INVOICE`, `AMC_RECEIPT`, `SERVICE_EXPENSE`, `WARRANTY_REPLACEMENT`, `VENDOR_RECOVERY` service-finance entries linked to customer / project / service ticket / warranty claim / vendor; `SERVICE` and `WARRANTY` report dimensions; project-linked support tickets with priority, assignment, resolution. **No AMC contract model / renewal schedule yet** (near-term).
- **WhatsApp today in code:** contact channel and logged activity across leads, reminders, reports, company settings. Automated messaging bots are part of the SaaS offering, delivered/configured during implementation (owner decision).
- **Not built â€” keep off the site:** homeowner/customer portal, consumer financing, array design / shading / yield, generation monitoring, payroll.

## Competitor: suryahub.com (structure only, never copy text)

Extract: `competitor analysis/suryahub/suryahub_content.md` â€” 593 pages, 9 Oct 2026.

Structure: 11 platform/module pages Â· 5 solutions Â· 5 roles Â· 6 "for" audiences Â· 4 integrations (Tally, WhatsApp, IndiaMART) Â· 12 compare Â· 7 alternatives Â· 18 country pages Â· ~500-page scheme/blog hub (PM Surya Ghar ~70, net metering, PM-KUSUM, ALMM) Â· glossary Â· FAQ Â· 5 long-form guides.

- Home proof: "63 customers, 17 states, 3 countries" + two named EPC logos. We do **not** match this with counts; we use product depth.
- Pricing: one yearly plan, no tiers, one-time implementation, 2â€“4 week go-live, quote after demo; WhatsApp / chatbot / HRMS / custom work are paid add-ons.
- Their strengths: GTM breadth, scheme SEO, AMC narrative, social proof.
- Our credible edges: permission/role depth, configurable flows, materials ledger tied to quoting, partner portal with commissions, service/warranty finance with vendor recovery.

## Live-site reality (affects SEO plan)

Indexed on `heliolattice.com` (first seen ~24 Sep 2026): `/`, `/about`, `/pricing`, `/security`, `/product/finance`, `/solutions/residential`, `/solutions/channel`, `/legal/privacy`, plus the generated `/guides/*` cluster.

- Redeploy is on the **same domain** â†’ keep or redirect these URLs; do not orphan them.
- `/pricing` currently says "Starter, Growth and Enterprise â€¦ priced by platform and seats" â€” contradicts the agreed one-plan model; must change at cutover.
- Tenant app subdomains are indexed and should not be: `iazotech.heliolattice.com`, `test-20260927.heliolattice.com` â†’ `noindex` / robots block.

## Agreed decisions

1. Stack: Eleventy static in `website-static/` â†’ `dist/`, Cloudflare Pages, same domain cutover.
2. Pricing: one yearly plan + scope-based one-time implementation fee; numbers only after demo.
3. Comparisons: named competitors allowed **only** with real researched substance; never expose our customer names or data.
4. Proof: anonymous "mid-size Indian EPC", qualitative outcomes; product depth as the real proof.
5. Contact: `support@heliolattice.com`.
6. Content rules: positive capability only; no roadmap, repo, stack or cloud names; no FGE / fgesolar.in.
7. Quality over volume: ~20 strong P1 pages, curated P2 guides â€” not 500 thin pages.

## Prompt to continue

> Read `docs/site-rewrite/HANDOFF.md`, then `site-inputs.md`. Rewrite `docs/site-rewrite/site-blueprint.md` using the verified facts in the handoff â€” positioning, 5 USPs tied to real code, competitor structure study, P1/P2/P3 page map with goal + visitor + CTA + 3 keywords each, SEO/AEO plan including a URL continuity plan for the already-indexed pages, phasing, Eleventy technical spec, brand voice, audit of the current React site, and facts needing verification. No page code or copy. Summarize in 15 lines and stop for approval.
