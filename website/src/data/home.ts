// Homepage — honest, plain copy for solar installation company owners.
// Real problem: many open jobs + WhatsApp/Excel = no clear status.
// No exaggeration (“sale is easy”). No SaaS fog.

import { brand } from "./brand"

export const hero = {
  eyebrow: "For solar installation companies",
  headline: "See every open solar job — what’s pending and with whom.",
  sub: "HelioLattice is software for solar shops that run many installs at once. Leads, site survey, quotation, DISCOM papers, material, install steps and pending payment — in one place, instead of WhatsApp and Excel.",
  primaryCta: { label: "Book a demo", to: "/demo" },
  secondaryCta: { label: "See the screens", to: "/product" },
  screenLabel: "Install checklist — example job",
}

export const proof = [
  {
    value: "1",
    label: "file per customer job",
    detail: "From first enquiry to install and payment.",
  },
  {
    value: "Your",
    label: "company’s install steps",
    detail: "You decide the checklist. Each job follows it.",
  },
  {
    value: "Same",
    label: "price list for quotes",
    detail: "Quote from the rates your store maintains.",
  },
  {
    value: "Right",
    label: "people see the right screens",
    detail: "Owner, sales, site, store, accounts — by role.",
  },
]

export const problem = {
  eyebrow: "The real problem",
  headline: "When many jobs are open, WhatsApp and Excel stop working.",
  body: "A solar job is not one day’s work. Enquiry, site survey, quotation, customer documents, DISCOM feasibility, material, install, inspection, subsidy and balance collection can stretch for weeks. Sales is hard too — but after the order, the mess is usually status: which job is waiting, for what, and on whose desk.",
  chain: [
    { label: "Enquiry", state: "clean" as const },
    { label: "Survey", state: "clean" as const },
    { label: "Quote", state: "clean" as const },
    { label: "DISCOM papers", state: "broken" as const },
    { label: "Material", state: "broken" as const },
    { label: "Install", state: "broken" as const },
    { label: "Inspection", state: "broken" as const },
    { label: "Payment", state: "broken" as const },
  ],
  quote:
    "With 50–100 jobs open, one missing document can sit for weeks. The owner asks five people and still gets three different answers.",
  fragments: [
    "Leads in Excel, phone notes, or a partner’s WhatsApp forward",
    "Survey photos in a group chat — office types them again later",
    "Quotation made from an old panel / inverter rate sheet",
    "DISCOM or subsidy papers incomplete — nobody owns the chase",
    "Store count and site need don’t match",
    "Pending customer balance found late from the bank statement",
  ],
}

export const solution = {
  eyebrow: "What HelioLattice is",
  headline: "Day-to-day software for how a solar company already works.",
  body: "Put the lead in. Do site survey on the phone. Make the quotation from your price list. Run your install checklist. Issue material from stock. Track what the customer paid. Everyone works on the same job — so status is not a daily phone round.",
  stages: [
    { label: "How many work today", detail: "WhatsApp + Excel + shared folders + memory" },
    { label: brand.name, detail: "One job file. Named person for the next step." },
    { label: "What changes", detail: "Owner can see stuck jobs without calling around" },
  ],
  boundaries: {
    title: "What it does not do",
    body: "So you don’t expect the wrong product.",
    items: [
      "Not roof design / shading / yield calculation software",
      "Not an inverter monitoring / generation app",
      "Not a full replacement for Tally / GST e-invoice",
      "Not a login app for the homeowner customer",
      "Not a Facebook / Google ads tool",
      "Not payroll or HR software",
    ],
  },
}

export const workflow = {
  eyebrow: "How a job usually moves",
  headline: "Enquiry → survey → quote → papers → install → close.",
  body: "These are steps most rooftop solar companies already follow. HelioLattice keeps each step, its documents, and who is responsible — so nothing quietly disappears.",
  stages: [
    { n: "01", label: "Enquiry", detail: "Call, walk-in, or dealer / partner" },
    { n: "02", label: "Site survey", detail: "Roof, meter, photos on phone" },
    { n: "03", label: "Quotation", detail: "From your current price list" },
    { n: "04", label: "DISCOM papers", detail: "Feasibility and required documents" },
    { n: "05", label: "Material + install", detail: "Issue stock and complete fitting" },
    { n: "06", label: "Close", detail: "Inspection, subsidy steps, final payment" },
  ],
}

export const intelligence = {
  eyebrow: "For the owner / manager",
  headline: "Status you shouldn’t have to collect by phone.",
  body: "Which enquiries went cold? Which jobs are waiting on papers or material? Whose balance is pending? Which dealer is sending real work?",
  reportGroups: [
    { name: "Sales", items: ["Lead status", "Old leads", "Source", "Salesperson"] },
    { name: "Jobs", items: ["Surveys", "Project status", "Stuck steps"] },
    { name: "Money", items: ["Claims", "Pending payments"] },
    { name: "Partners", items: ["Partner leads", "Commission"] },
  ],
  reportCount: 21,
}

export type Role = {
  persona: string
  does: string
  benefit: string
}

export const roles: Role[] = [
  {
    persona: "Owner / director",
    does: "Checks open jobs, stuck steps, and pending money.",
    benefit: "Less time chasing status calls.",
  },
  {
    persona: "Sales head",
    does: "Assigns enquiries, follows up, approves quotations.",
    benefit: "Sees which leads need attention.",
  },
  {
    persona: "Project / site",
    does: "Runs the install checklist and chases papers / material.",
    benefit: "Knows which job is blocked and why.",
  },
  {
    persona: "Store",
    does: "Keeps price list and stock; issues material to site.",
    benefit: "Quotes and installs use counted stock.",
  },
  {
    persona: "Accounts",
    does: "Records payments and expenses; exports to accounting software.",
    benefit: "Same job numbers as sales and site.",
  },
  {
    persona: "Dealer / partner",
    does: "Sends enquiries and checks status / commission.",
    benefit: "Fewer “did you get my lead?” messages.",
  },
]

export const differentiators = [
  {
    title: "Your install checklist — not a fixed foreign CRM pipeline",
    body: "You define what each type of job must complete. Live jobs are checked against that list.",
  },
  {
    title: "Quotation from your own price list",
    body: "Panels, inverter, structure and BOS priced from rates your store maintains.",
  },
  {
    title: "DISCOM and subsidy work as clear steps",
    body: "Each step has an owner and a done / not-done status — not only PDFs in a folder.",
  },
  {
    title: "Dealers work in the same system",
    body: "They can send enquiries and see progress, instead of a separate Excel sheet.",
  },
]

export const finalCta = {
  eyebrow: "Next step",
  headline: "Bring a few of your real open jobs. We’ll walk the screens on those.",
  body: "A short demo covers enquiry → survey → quotation → install checklist → stock → pending payment — on the same kind of work your team does.",
  primaryCta: { label: "Book a demo", to: "/demo" },
  secondaryCta: { label: "Contact us", to: "/contact" },
}

export const modulesStrip = {
  eyebrow: "What’s inside",
  headline: "The work your team already does — in one software.",
  body: "Each area below uses the same customer and same job.",
  items: [
    {
      id: "sales",
      label: "Enquiries & sales",
      oneLiner: "Take the lead, assign it, follow up, mark won or lost.",
      to: "/product/sales",
    },
    {
      id: "survey-quotation",
      label: "Site survey & quotation",
      oneLiner: "Survey on phone, then quotation from your price list.",
      to: "/product/survey-quotation",
    },
    {
      id: "delivery",
      label: "Install checklist",
      oneLiner: "Your steps. See which job is waiting and with whom.",
      to: "/product/delivery",
    },
    {
      id: "materials",
      label: "Material & stock",
      oneLiner: "Panels, inverter, BOS — stock in and issue to site.",
      to: "/product/materials",
    },
    {
      id: "finance",
      label: "Payments & expenses",
      oneLiner: "What was collected, what is pending, job expenses.",
      to: "/product/finance",
    },
    {
      id: "reporting",
      label: "Reports",
      oneLiner: "Leads, jobs and money views for the owner / manager.",
      to: "/product/reporting",
    },
    {
      id: "partners",
      label: "Dealer / partner access",
      oneLiner: "Partners send leads and track their own status.",
      to: "/product/partners",
    },
  ],
  cta: { label: "See all screens", to: "/product" },
}

export const homeSeo = {
  title: "Software for solar installation companies",
  description:
    "HelioLattice helps solar installation companies track enquiries, site survey, quotation, DISCOM papers, stock, install steps and pending payment in one place — instead of WhatsApp and Excel.",
}
