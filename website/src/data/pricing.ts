// Pricing content — sourced entirely from Assumed Draft Spec §2.3-2.4 of
// local-drafts/MULTI_AGENT_WEBSITE_MASTER_PROMPT.md.
// [ASSUMED — rework later] every number and package boundary on this page is
// a draft for site completeness, not a confirmed commercial decision.

export const pricingHero = {
  eyebrow: "Pricing",
  headline: "Managed cloud, priced by platform and seats.",
  // Numbers below are Assumed Spec — do not surface assumption flags in the UI.
  sub: "Annual contracts preferred. Pricing is shown in INR, with an indicative USD conversion for teams evaluating globally.",
}

export type Plan = {
  id: "starter" | "growth" | "enterprise"
  name: string
  who: string
  priceInr: string
  priceUsd: string
  billing: string
  hero?: boolean
  cta: { label: string; to: string }
  includes: string[]
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    who: "5\u201312 seat installers",
    priceInr: "\u20b935,000",
    priceUsd: "~$420",
    billing: "per month, billed annually",
    cta: { label: "Book a demo", to: "/demo" },
    includes: [
      "Core CRM: leads, customers, pipeline",
      "Site surveys + quotations engine",
      "1 configurable workflow template pack",
      "1 warehouse / stock location",
      "Standard report set",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    who: "13\u201340 seats, multi-crew",
    priceInr: "\u20b965,000",
    priceUsd: "~$780",
    billing: "per month, billed annually",
    hero: true,
    cta: { label: "Book a demo", to: "/demo" },
    includes: [
      "Everything in Starter",
      "Materials ledger (multi-location stock)",
      "Finance claims + receivables/payables",
      "Partner portal + commission tracking",
      "Custom workflow templates",
      "Priority support + onboarding hours",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    who: "Multi-branch / high volume",
    priceInr: "Custom",
    priceUsd: "Custom",
    billing: "annual contract",
    cta: { label: "Talk to sales", to: "/contact" },
    includes: [
      "Dedicated (single-tenant) instance",
      "SSO — roadmap, Enterprise-scoped",
      "Custom roles & permission sets",
      "SLA + named solution engineer",
      "Region / utility pack configuration",
      "Sandbox, UAT environment, quarterly business reviews",
    ],
  },
]

export const pricingDetails = {
  seatOverage: {
    title: "Seat overage",
    body: "Growth plan seats above the plan band are billed at \u20b91,800 per user / month.",
  },
  onboarding: {
    title: "Onboarding & implementation",
    body: "A one-time fee of \u20b91.5L\u2013\u20b94L covers data migration, region/utility pack configuration and training, scoped to each engagement.",
  },
  packaging: {
    title: "How the packs stack up",
    body: "Growth = Core + Ops + Materials + Finance + Partner. Starter = Core + Ops (light) + limited Materials. Enterprise = every pack, plus services.",
    packs: [
      { name: "Core Platform", detail: "Leads, surveys, quotations, projects/jobs, users/roles, a subset of reports — always on." },
      { name: "Ops Pack", detail: "Configurable workflows and document checklists." },
      { name: "Materials Pack", detail: "Catalogue, stock ledger, purchases, BOM link." },
      { name: "Finance Pack", detail: "Claims, AR/AP ageing, ledger, export." },
      { name: "Partner Pack", detail: "Partner portal and commission views." },
      { name: "India Rooftop Pack", detail: "Terminology, document types, utility/subsidy checklist templates — Kerala-origin, generalized." },
    ],
  },
  howCompaniesBuy: {
    title: "How companies buy HelioLattice",
    steps: [
      { label: "Pilot", body: "Start on Starter or a scoped Growth pilot; prove delivery workflow and quotation on live jobs." },
      { label: "Growth", body: "Move to the full Growth pack once materials, finance, and partners are needed across the team — where most multi-crew operators land." },
      { label: "Enterprise", body: "Scale to a dedicated instance with SLA, custom roles, and region-pack configuration at multi-branch or high volume." },
    ],
  },
}

// FAQ answers use Assumed Spec commercial facts — rework later in this file only.
export const pricingFaq: { q: string; a: string }[] = [
  {
    q: "How does billing work?",
    a: "Annual contracts are preferred. Monthly figures shown are for comparison; monthly billing may be available on request. Enterprise is quoted and contracted directly.",
  },
  {
    q: "What happens at renewal?",
    a: "Plans renew annually at the then-current rate unless otherwise contracted. Seat counts and packs can be adjusted at renewal.",
  },
  {
    q: "Can we export our data?",
    a: "Yes. Leads, jobs, quotations, stock, and finance ledger export; finance is designed to hand off to a conventional accounting package.",
  },
  {
    q: "Who owns the data?",
    a: "You do. HelioLattice operates as the system of record on your behalf; your organization retains ownership of every record in it, at every plan tier.",
  },
  {
    q: "Is there a minimum seat count?",
    a: "Starter is scoped for 5\u201312 seats and Growth for 13\u201340. Smaller teams should talk to sales about fit. Enterprise is sized to the engagement.",
  },
  {
    q: "Is this a public multi-tenant SaaS?",
    a: "HelioLattice is deployed as a managed cloud instance per customer organization today, with a shared-control SaaS roadmap.",
  },
  {
    q: "What does Growth seat overage cost?",
    a: "\u20b91,800 per user / month above the plan band.",
  },
  {
    q: "What if we outgrow a plan mid-year?",
    a: "You can move up a plan at any time; the new plan's pricing applies from the next billing cycle, prorated for the switch.",
  },
]
