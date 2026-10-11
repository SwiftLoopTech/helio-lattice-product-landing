# HelioLattice website — site blueprint

**Version:** 2 (rewrite, 11 Oct 2026) · supersedes the earlier greenfield draft  
**Status:** Awaiting owner approval of §3 page map and §5 URL continuity before P1 pages ship  
**Inputs:** `site-inputs.md`, `HANDOFF.md`, product brief + module inventory (read-only), competitor extract (structure only), live `heliolattice.com` index snapshot (11 Oct 2026)  
**Build:** `website-static/` (Eleventy → `dist/`) on Cloudflare Pages, same domain cutover

---

## 1. Positioning, ICP, USPs

**Category:** Operations software for rooftop solar installers and EPCs — enquiry, survey, quotation, delivery, stock, money and after-sales service on one job record, with an access model built for companies that have many departments.

**One-line definition (used verbatim as the AEO definition on key pages):**
"HelioLattice is operations software for solar installation and EPC companies. It runs enquiries, site surveys, quotations, delivery checklists, material stock, payments and after-sales service on one job record, with role-based access for every team."

**ICP (India first):** Owner, sales head or operations head of a rooftop solar installer/EPC with roughly 5–200 live jobs, mixed residential and commercial, channel-partner leads, a store, an accounts person, and field crews. Secondary: dealer networks and growing multi-crew operators.

**Core pain:** After the customer says yes, jobs stall in documents, utility steps and stock. Status lives in WhatsApp, Excel and memory; the owner finds out a job is stuck from the customer.

### Five USPs, each tied to shipped code

| # | USP | Evidence (read-only) |
|---|-----|----------------------|
| 1 | **Access control built for real companies** — 269 permission keys across 26 module groups, ~24 ready roles, data scopes (all / assigned / managed), stage-level access, a separately authenticated partner portal. | `solar-erp-backend/src/shared/constants/permissions.ts`, `stage-access.policy.ts`, `roles/`, FE `/roles`, `/partner/**` |
| 2 | **Survey on phone → priced proposal** from a maintained catalogue, with approval queue, revisions and a permission-gated internal-costing view. | `site-surveys`, `quotations` modules; permissions `quotation:view_internal_costing`, `quotation:approve` |
| 3 | **Your own delivery checklist** — administrator-defined stages including DISCOM and subsidy paperwork, each assigned to a named owner and measured per live job. | `flows`, `workflow-jobs`, `documents`; FE `/flows/settings`, `/jobs` |
| 4 | **Materials ledger tied to quoting and projects** — brands, price history, multiple warehouses, movement ledger, issue to project, inventory valuation events. | `materials`; accounts `InventoryValuationEventType` (PURCHASE, PROJECT_ISSUE, PROJECT_RETURN, DAMAGE_LOSS, ADJUSTMENT, TRANSFER) |
| 5 | **Money and service on the same job** — receipts, expenses, payment requests with proof and approval; AMC invoices and receipts, service expenses, warranty replacement and vendor recovery; Tally XML/JSON and Excel export. | `accounts` module; `AccountServiceFinanceType`; reports dimensions `SERVICE`, `WARRANTY` |

**Supporting capabilities** (used as proof, not as separate headline claims): partner portal with commissions · 21 operational reports · personal work queue · reminders · documents and templates (HTML/PDF/DOCX) · dialer/phonebook and call logging · attendance · tasks · support tickets linked to projects · Kerala KSEB lookup helpers.

**Messaging and bots:** WhatsApp integration, internal user-notification bot and customer-facing bots are part of the HelioLattice SaaS offering and are configured during implementation (owner decision, 11 Oct). Page copy states this as an offering. Flagged in §9 for owner confirmation of exact scope before copy goes live.

### Proof strategy (we do not have competitor-style counts)
- Lead with **product depth** as evidence: capability coverage, 21 reports, 269 permissions, the delivery checklist and the service-finance model.
- One **anonymous case study**: "mid-size Indian EPC". Qualitative outcomes only unless the owner supplies real numbers. No client name, logo or data.
- No "X customers / Y states" counters until real and approved.

---

## 2. Competitor study (structure and coverage only)

Source: `competitor analysis/suryahub/suryahub_content.md`, 593 pages, extracted 9 Oct 2026. Nothing below reuses their text.

| Page type | Their count | What it does for them | Our response |
|---|---|---|---|
| Home + demo + pricing | 3 | Lifecycle story, counters, logos, one-plan pricing | Same shape; proof via depth; one-plan pricing |
| Platform / module pages | 11 (CRM, quotation, PM, govt workflows, AMC, inventory, finance, field app, analytics, automation) | One keyword-targeted page per module | One page per module, plus **access control**, which they lack |
| Solutions | 5 | Business-type landing pages | 4 existing slugs kept, rewritten |
| Role pages | 5 | Owner / sales / ops / accounts / field | **7 roles**, richer because our role model is deeper |
| "For" audience pages | 6 | Residential, C&I, dealer, franchise, distributor | Folded into solutions + channel (avoid thin duplicates) |
| Integrations | 4 | Tally, WhatsApp, IndiaMART | Tally export, WhatsApp, calling/phonebook, partner portal |
| Compare + alternatives | 19 | High-intent vendor-name SEO | Named comparisons **only with documented evidence** (see §3 P2) |
| Country pages | 18 | Programmatic expansion | **Not planned.** Thin, off-ICP for India launch |
| Content hub / blog | ~500 | Scheme and DISCOM SEO | Curated guides, ~25, each unique; no 500-page template farm |
| Glossary, FAQ | 2 | AEO surface | Both planned |

**Their strengths:** GTM breadth, scheme SEO, a clear single-plan story, AMC narrative, social proof.
**Credible gaps we fill:** role and permission depth; configurable delivery checklist; materials ledger linked to quoting; partner portal with commission events; service and warranty finance with vendor recovery.

---

## 3. Page map

Primary CTA everywhere: **Book a demo** (`/demo/`). Secondary: **See the product** (`/product/`) or page-specific.  
Every page carries: goal, visitor, CTA, three keywords, parent hub, minimum three internal links.

### P1 — launch set (18 URLs, rewritten; existing live URLs preserved)

| URL | Goal | Visitor | Keywords |
|---|---|---|---|
| `/` | Position, show lifecycle, route to modules | Owner | solar erp india · solar epc software · solar installer software |
| `/product/` | Module map | Owner, ops head | solar business management software · solar operations software · solar epc erp |
| `/product/sales/` (kept) | Enquiries, assignment, call logging, partner referrals | Sales head | solar crm india · solar lead management · solar enquiry tracking |
| `/product/survey-quotation/` (kept) | Phone survey → priced proposal | Sales, surveyor | solar quotation software · solar site survey app · solar proposal software |
| `/product/delivery/` (kept) | Configurable checklist, DISCOM steps, named owners | Ops head | solar project management software india · discom application tracking · solar installation checklist |
| `/product/materials/` (kept) | Catalogue, warehouses, ledger, project issue | Storekeeper | solar inventory management · solar bom software · solar stock management |
| `/product/finance/` (kept) | Receipts, expenses, approvals, Tally export | Accounts | solar accounting software india · solar project collections · tally export solar |
| `/product/service-amc/` (new) | AMC billing, service tickets, warranty recovery | Owner, service head | solar amc software · solar warranty tracking · solar service management |
| `/product/access-control/` (new, flagship) | Roles, permissions, data scopes, audit | Owner, IT-minded buyer | role based access solar erp · erp user permissions · solar erp security |
| `/product/reporting/` (kept) | 21 reports, work queue | Owner | solar business reports · solar sales report · solar project status report |
| `/product/partners/` (kept) | Partner portal, referrals, commissions | Owner of channel-heavy shop | solar dealer portal · solar channel partner software · partner commission tracking |
| `/solutions/residential/` (kept) | Residential story | Owner | residential solar installer software · rooftop solar crm · home solar installation software |
| `/solutions/epc/` (kept) | Commercial / larger jobs | Owner | commercial solar epc software · solar project tracking · c&i solar erp |
| `/solutions/channel/` (kept) | Partner-led shops | Owner | solar channel sales software · solar dealer management · solar partner crm |
| `/pricing/` (kept, rewritten) | One-plan narrative | Owner | solar erp pricing india · solar software cost · solar crm pricing |
| `/demo/` (kept) | Convert | All | book solar software demo · solar erp demo · solar crm demo |
| `/security/` (kept, rewritten) | Trust | Buyer, IT | solar erp security · crm data security india · role based access |
| `/about/` · `/contact/` · `/legal/privacy/` · `/legal/terms/` | Trust, compliance | All | brand terms |

`/solutions/growing/`, `/customers/`, `/resources/`, `/integrations/`, `/compare/` exist on the live site; handled in P2 below, and redirected or kept per §5.

### P2 — depth (after P1 verified)

| Cluster | URLs | Notes |
|---|---|---|
| Role pages | 7: owner, sales head, operations head, accounts, store, field/surveyor, channel partner | Tied to real permission sets and screens |
| Solutions | `/solutions/growing/` (kept), `/solutions/dealer-network/` | Only if distinct from channel; otherwise skip |
| Integrations | `/integrations/`, `/integrations/tally/`, `/integrations/whatsapp/` | Tally = export. WhatsApp = per owner scope in §9 |
| Messaging | `/product/notifications-whatsapp/` | Gated on §9 confirmation |
| Customers | `/customers/` | Anonymous case study |
| Compare | `/compare/` hub + `excel-and-whatsapp-vs-heliolattice/` | Safe, no vendor names |
| Named compare | Candidates: SuryaHub, Solar Ladder, Sunbase, Zoho, ERPNext, Odoo. OpenSolar/ARKA360 positioned as design tools that complement | **Each requires an evidence sheet** (`docs/site-rewrite/compare-evidence/<vendor>.md`) listing every claim with a public source and our code reference. No evidence, no page |
| Guides | `/guides/` index + 4 pillars + ~20 articles | Curated, 800–1,200 words, fact-checked (§9) |
| Glossary, FAQ | `/glossary/`, `/faq/` | AEO surface, DISCOM / EPC / net metering terms |
| Resources | `/resources/` | Hub for the above |

### Full inventory — 55 core URLs (owner target: 50+, 11 Oct)

Every page is hand-written from verified product facts. No templated farm. Guides come on top of this count.

| Cluster | Count | URLs |
|---|---|---|
| Home + product hub | 2 | `/`, `/product/` |
| Modules | 9 | `/product/{sales, survey-quotation, delivery, materials, finance, service-amc, access-control, reporting, partners}/` |
| Solutions | 4 | `/solutions/{residential, epc, channel, growing}/` |
| **Problems we solve** | 10 | `/problems/` hub + `/problems/{lead-leakage, channel-partner-management, quotation-delays-and-errors, discom-and-subsidy-delays, stock-mismatch, pending-collections, amc-and-service-follow-up, staff-accountability, excel-and-whatsapp-chaos}/` |
| Roles | 8 | `/roles/` hub + `/roles/{owner, sales-head, operations-head, accounts, store, field-team, channel-partner}/` |
| Integrations and messaging | 4 | `/integrations/`, `/integrations/tally/`, `/integrations/whatsapp/`, `/product/notifications-whatsapp/` |
| Commercial | 4 | `/pricing/`, `/demo/`, `/customers/`, `/compare/` |
| Compare | 2 | `/compare/excel-and-whatsapp-vs-heliolattice/`, plus first evidence-backed vendor page |
| Trust and company | 7 | `/security/`, `/about/`, `/contact/`, `/legal/privacy/`, `/legal/terms/`, `/faq/`, `/glossary/` |
| Resources | 1 | `/resources/` (hub for guides, glossary, FAQ) |
| Guides hub | 1 | `/guides/` (new, curated; articles added on top of 55) |
| Buyer-intent landing | 3 | `/solar-erp-software-india/`, `/solar-crm-software-india/`, `/solar-installer-software/` |
| **Total** | **55** | |

**Lifecycle headline (owner direction, 11 Oct):** the story does not stop at final payment. It runs *first enquiry → survey → quotation → delivery → final payment → AMC → service → the customer for years*. Use this wording on Home, Product and Solutions.

**Messaging terms to use naturally:** solar ERP, solar CRM, solar EPC software, solar installer software, rooftop solar software India, solar project management, solar lead management, channel partner management, dealer portal, partner commission tracking, solar quotation software, site survey app, DISCOM and net metering tracking, subsidy application tracking, solar inventory and stock, solar accounting and Tally export, collections and pending payments, AMC management, annual maintenance contract billing, service ticket and warranty tracking, role-based access, customer lifetime, after-sales service, repeat business.

**Bottlenecks we solve (each becomes a `/problems/` page, written around the real workflow):**
1. Leads lost between calls, WhatsApp and Excel → `lead-leakage`
2. Channel partners sending enquiries nobody tracks, commissions disputed → `channel-partner-management`
3. Quotes that take days, mistakes in BOM and pricing, no approval trail → `quotation-delays-and-errors`
4. Jobs stuck on DISCOM and subsidy paperwork with no owner → `discom-and-subsidy-delays`
5. Stock that does not match what is on site → `stock-mismatch`
6. Money pending per job unknown until month end → `pending-collections`
7. AMC and service calls forgotten, warranty cost not recovered → `amc-and-service-follow-up`
8. Nobody sure who owns the next step, staff seeing too much → `staff-accountability`
9. Business run on spreadsheets and chat groups → `excel-and-whatsapp-chaos`

**Verified corrections that bind all copy (from the 11 Oct code research):** reports in code = 24 registered (use "more than twenty"); stock is **not** auto-issued from the quotation BOM; AMC and service-ticket links on finance entries are references (no AMC contract or renewal model yet, keep as roadmap-internal); warranty is a finance entry, not a claims module; partner commission is manual status and amount, no auto-calculation; attendance is IP-based, no GPS; Tally export is claim-level vouchers; GL, GST and bank reconciliation are flag-controlled and default off, so do not headline them; "mobile" means responsive web, not a native app.

### P3 — only where evidence exists
State/DISCOM deep guides where we hold verified facts or product support. Never templated.

**Thin-content risk flagged:** the existing 560 `/guides/*` pages are generator output and were judged templated by the owner. They must not carry over as-is. See §5.

---

## 4. SEO and AEO plan

**Clusters:** (1) Platform/modules, (2) Solutions by business shape, (3) Roles, (4) Money and service (finance, AMC, warranty), (5) Access control and security, (6) India operations guides, (7) Comparisons.

**Internal linking rules**
- Every module page links to its two nearest siblings, one solution page, `/demo/`, and `/product/`.
- Every guide links to one module page and `/demo/`.
- Every role page links to the modules that role uses and to `/product/access-control/`.
- Breadcrumbs on every non-home page.

**Schema by template**
| Template | JSON-LD |
|---|---|
| Home | `Organization`, `WebSite`, `SoftwareApplication` |
| Module / solution / role | `SoftwareApplication` or `WebPage`, `BreadcrumbList`, `FAQPage` (real FAQs only) |
| Pricing | `WebPage`, `BreadcrumbList`; no invented `Offer` prices |
| Guide | `Article`, `BreadcrumbList` |
| Compare | `WebPage`, `BreadcrumbList` |

**AEO blocks on every core page:** a 2–3 sentence definition near the top; three to five real Q&As phrased the way buyers ask; one comparison-style table where it fits; entity names consistent (HelioLattice, one spelling, one casing).

**Sitemap / robots / llms.txt**
- `sitemap.xml` generated at build with `lastmod`.
- `robots.txt` allows marketing paths. Tenant subdomains (`*.heliolattice.com` app hosts) must return `X-Robots-Tag: noindex` from the app layer; flagged for the ERP side.
- `llms.txt`: **yes** — short product summary and canonical links, no internal paths.

**Core Web Vitals budget (mobile):** LCP < 2.0 s · CLS < 0.1 · INP < 200 ms · initial HTML+CSS < 60 KB gzip · JS < 10 KB · no framework on marketing pages · fonts self-hosted, WOFF2, `font-display: swap`, preloaded for the display face only.

---

## 5. URL continuity plan (the site is already indexed)

**Facts:** first indexed ~24 Sep 2026 (about 2.5 weeks old). Indexed today: `/`, `/about`, `/pricing`, `/security`, `/product/finance`, `/solutions/residential`, `/solutions/channel`, `/legal/privacy`, (the old `/guides/*` pages were never indexed).

**Rules**
1. **Preserve every path that exists today and is in P1** (same slug, same trailing-slash form via 301 from the no-slash variant). Authority is small but real; do not break it.
2. **Rewrite content in place** on preserved URLs. Update `<title>` and meta; keep canonical stable.
3. **Retired URLs → 301 to the closest equivalent** using a `_redirects` file in `website-static/public/`.
4. **Old `/guides/*` generated cluster: dropped (owner decision 11 Oct).** Not migrated, not indexed, no redirects. Nothing in `website-static` references it. After cutover, those paths simply return 404. A curated `/guides/` hub may be built later in P2 from scratch.
5. `/pricing` content changes from Starter/Growth/Enterprise to the one-plan model at cutover. Title and snippet are re-requested via Search Console.
6. Submit new sitemap and request indexing for P1 URLs on cutover day.
7. Tenant subdomains (`iazotech.`, `test-20260927.`) are outside this site; flagged for noindex.

**Cutover:** build on a branch, preview on a Cloudflare Pages preview URL, run the verification checklist (§8), then switch the production branch to `website-static` on the same domain. Keep the old React build tagged in git for rollback.

---

## 6. Technical spec

| Item | Decision |
|---|---|
| Generator | Eleventy 3 + Nunjucks, one build step: `npm run build` → `dist/` |
| Templates | `src/_includes/layouts/base.njk`, `partials/header.njk`, `partials/footer.njk`, page-type layouts |
| CSS | `tokens.css` (variables) + `components.css`; one stylesheet in production (minified, hashed) |
| JS | `main.js` only: mobile nav, reveal-on-scroll with `prefers-reduced-motion` respect. Deferred |
| Fonts | Space Grotesk + IBM Plex Sans, **self-hosted WOFF2** (current CSS points at remote font URLs — must change in P1) |
| Images | WebP/AVIF with `width`/`height`; hero product visuals are **built in HTML/CSS** from real screen structure, not stock photos |
| Forms | `/demo/`: Google Form embed or styled link when URL supplied; `mailto:support@heliolattice.com` fallback; no tracking until GA4 ID supplied |
| Analytics | Deferred GA4 snippet with TODO for measurement ID |
| Deploy | Cloudflare Pages, root `website-static`, build `npm run build`, output `dist` |
| Redirects | `public/_redirects` |
| Headers | `public/_headers`: security headers, long cache for hashed assets |

Not used: React, client-side routing, runtime data fetching on marketing pages.

---

## 7. Brand voice and design direction

**Voice:** An experienced solar operations person explaining the job, not a SaaS brochure. Short sentences. Installer vocabulary (DISCOM, sanctioned load, net meter, BOM, commissioning). Concrete workflows and outcomes. No filler adjectives, no "seamless/powerful/revolutionary". Positive capability only: never "we don't…", "not a…", "coming soon", "beta".

**Design:**
- Keep the HelioLattice mark and favicon (`website/public/brand/`).
- Palette from current tokens: warm paper `#f7f5f1`, graphite ink `#14161a`, signal teal `#1f6b63`, solar amber `#d4891a` for primary CTAs only. Optional dark band for the access-control and finance sections.
- Type: Space Grotesk (display, 500) + IBM Plex Sans (body) + IBM Plex Mono for small labels.
- Layout: 1120 px container, 8-pt spacing scale, generous section rhythm, product UI shown as framed HTML/CSS mockups built from real screen structure.
- Motion: subtle fade/slide on reveal, hover lift on cards; everything disabled under `prefers-reduced-motion`.
- Enterprise-trust cues: security page, role matrix visual, audit trail, structured footer, consistent CTA placement.

---

## 8. Audit of the current React site and verification checklist

**Reuse:** module wording in `website/src/data/product.ts`, `home.ts`, `solutions.ts` as raw material for tone and facts, after re-verification.

**Rewrite or remove**
| Item | Problem | Action |
|---|---|---|
| `home.ts` "What it does not do" list | Publishes negatives and absences | Delete; replace with capability statements |
| `/pricing` | Starter/Growth/Enterprise tiers, seat pricing | Replace with one-plan narrative |
| 560 `/guides/*` generated pages | Templated, derived from competitor extract structure, low trust | Retire per §5 |
| `/compare`, `/integrations` React pages | Generic | Rebuild in P2 with evidence |
| Remote font URLs, React/Motion bundle | Payload, CWV | Replace with self-hosted fonts and static HTML |
| Mockups with example data | Check for any customer-specific data | Review each before reuse |

**Per-page verification checklist (run after every page)**
1. `npm run build` succeeds; page renders at 360, 768, 1280 px.
2. One H1, ordered headings; title ≤ 60 chars; description ≤ 155 chars; canonical, OG present.
3. JSON-LD validates; FAQPage only for real FAQs.
4. Every capability stated maps to a code reference in this blueprint or the handoff.
5. No negatives, roadmap, stack names, cloud names, client names, FGE, fgesolar.
6. Internal links resolve; `/demo/` CTA present twice.
7. Lighthouse mobile ≥ 95 performance, 100 accessibility/SEO target.

---

## 9. Facts needing verification before publish

Marked **[VERIFY]** in copy; do not state as universal fact until confirmed.

| # | Claim | Who confirms |
|---|---|---|
| 1 | WhatsApp integration and internal/customer bots: exact scope, channels, what is delivered at implementation vs optional | Owner |
| 2 | AMC: shipped today = service-finance entries, tickets, warranty recovery. AMC **contract and renewal schedule** is near-term; copy must not describe screens that do not exist yet | Owner (go-live date) |
| 3 | Typical go-live duration (competitor says 2–4 weeks); we state none until owner confirms | Owner |
| 4 | Implementation fee drivers (data pre-entry volume, business study, configuration) — wording only; no amounts | Owner |
| 5 | Hosting and deployment options (cloud, on-premise) | Owner |
| 6 | Data migration from Excel/Tally during onboarding | Owner |
| 7 | "~24 roles", "21 reports", "269 permissions" — re-count at time of build; numbers may drift with releases | Builder re-checks code |
| 8 | PM Surya Ghar, net metering, DISCOM process, subsidy rates, ALMM/DCR rules in guides | Cite official sources; date each guide |
| 9 | Kerala KSEB helper scope | Builder reads `kseb` module |
| 10 | Named competitor claims | Evidence sheet per vendor |

---

## 10. Owner decisions still open

1. ~~Retired `/guides/*` handling~~ **Resolved:** old guides dropped, no redirects (see §5).
2. **Named comparisons:** start with SuryaHub and one general-purpose tool (Zoho or ERPNext)? *Recommended: begin with Excel/WhatsApp page in P2a; add named pages one at a time after evidence sheets.*
3. **Messaging scope wording** (§9 #1).
4. **Google Form URL** for `/demo/`, and **GA4 measurement ID**.

---

## 11. Phasing and build order

| Phase | Deliverable | Order |
|---|---|---|
| **P1a** | Design system, layouts, fonts, redirects/headers, sitemap generator | first |
| **P1b** | `/`, `/product/`, `/demo/` | then verify |
| **P1c** | Seven module pages + service-amc + access-control | one per run |
| **P1d** | Solutions (3), pricing, security, about, contact, legal | one per run |
| **P1e** | Cutover rehearsal on preview URL, checklist, redirect test | |
| **P2** | Roles, integrations, customers, compare, glossary, FAQ, 20 guides | after cutover |
| **P3** | Evidence-backed regional guides | ongoing |

Quality over volume: P1 is 18 pages, each unique, each verified.
