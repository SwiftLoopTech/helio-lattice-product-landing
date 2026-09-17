import { brand } from "./brand"

export const about = {
  eyebrow: "About",
  headline: "We build software for solar installation companies.",
  body: "HelioLattice is for shops and EPCs that run many rooftop jobs at once. The hard part is not only getting the order — it is keeping clear status across survey, quotation, DISCOM papers, material, install and payment when everything lives in WhatsApp and Excel.",
  mission: {
    title: "What we aim for",
    body: "Give the owner and the team one shared place for each job — without forcing them to become software experts.",
  },
  approach: [
    {
      title: "Built from real install work",
      body: "Screens follow how solar teams already work: enquiry, survey, quote, papers, stock, install checklist, money.",
    },
    {
      title: "India rooftop practice first",
      body: "Document types, DISCOM-related steps and subsidy-related checklist items are treated as normal work — not exotic add-ons.",
    },
    {
      title: "Honest about limits",
      body: "We do not claim design software, inverter monitoring, full Tally replacement, or a homeowner customer app.",
    },
  ],
  hq: brand.hq,
  status: brand.status,
}

export const contact = {
  eyebrow: "Contact",
  headline: "Talk to sales or support.",
  sub: "Tell us about your team and we'll route you to the right person. This form is a front-end draft — submissions aren't sent anywhere yet.",
  channels: [
    { label: "Sales", value: brand.emails.sales },
    { label: "Support", value: brand.emails.support },
    { label: "Security", value: brand.emails.security },
  ],
  officeNote: `${brand.hq}. ${brand.supportRegions}.`,
}

export const demo = {
  eyebrow: "Book a demo",
  headline: "See the screens on work like yours.",
  sub: "Tell us roughly how many installs you run and how you work today (Excel, WhatsApp, other software). We’ll walk enquiry → survey → quotation → install checklist → stock → pending payment.",
}

export const customers = {
  eyebrow: "Customers",
  headline: "Used with a solar installation company in India.",
  body: "We work closely with a small number of companies rather than showing a fake logo wall. Until partners agree to be named, we describe what is live without inventing customer brands.",
  stories: [
    {
      role: "Owner, mid-size rooftop EPC",
      quote: "We stopped finding out a job was stuck from the customer. Now it shows up on the delivery board before that call ever happens.",
      metric: { value: "200+", label: "live jobs visible in one delivery board" },
    },
    {
      role: "Sales manager, residential installer",
      quote: "Bulk assignment and the follow-up queue alone changed how fast we work leads. Ageing used to be a guess.",
      metric: { value: "24", label: "roles composed by permission across the team" },
    },
  ],
  logosNote: "Partner logos on request — we don't publish customer names without sign-off.",
}

export const resources = {
  eyebrow: "Resources",
  headline: "Guides, changelog and insights — early days.",
  body: "This hub is a placeholder for the content program: deal-lifecycle guides, workflow design patterns, and a running changelog. Cornerstone content is planned, not yet published.",
  stubs: [
    { title: "Designing a delivery workflow template", tag: "Guide", status: "Coming soon" },
    { title: "The 90-day post-sale chaos, quantified", tag: "Insight", status: "Coming soon" },
    { title: "Reading your lead-ageing report", tag: "Guide", status: "Coming soon" },
    { title: "Product changelog", tag: "Changelog", status: "Coming soon" },
    { title: "Partner portal: a buyer's checklist", tag: "Guide", status: "Coming soon" },
  ],
}
