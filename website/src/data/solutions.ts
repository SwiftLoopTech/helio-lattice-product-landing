// Solutions pages — plain language for different solar company shapes.

export type SolutionId = "residential" | "epc" | "growing" | "channel"

export type SolutionPage = {
  id: SolutionId
  path: string
  navLabel: string
  eyebrow: string
  title: string
  sub: string
  pains: string[]
  capabilities: { title: string; body: string; moduleId: string }[]
  proofNote: string
}

export const solutions: SolutionPage[] = [
  {
    id: "residential",
    path: "/solutions/residential",
    navLabel: "Home / residential installs",
    eyebrow: "For companies doing mostly home rooftop",
    title: "Many small jobs open at once — keep status clear",
    sub: "Home installs are often many at a time, with thin margin per job. HelioLattice helps you track enquiry, survey, quote, papers, material and install without depending only on WhatsApp groups.",
    pains: [
      "Many enquiries — follow-up depends on who remembers",
      "Survey to quotation takes longer than it should",
      "DISCOM / subsidy papers stall jobs for weeks",
      "Owner learns a job is stuck when the customer complains",
    ],
    capabilities: [
      { title: "Enquiry handling", body: "Import and assign leads; keep follow-ups on the lead itself.", moduleId: "sales" },
      { title: "Survey → quotation", body: "Survey on phone, then quote from your price list.", moduleId: "survey-quotation" },
      { title: "Install checklist", body: "Papers and install steps with a named owner on each stage.", moduleId: "delivery" },
    ],
    proofNote: "Used with a solar installation company doing residential work in India.",
  },
  {
    id: "epc",
    path: "/solutions/epc",
    navLabel: "Commercial / larger projects",
    eyebrow: "For commercial and larger project work",
    title: "Longer jobs need clearer history — quotes, papers, money",
    sub: "Bigger projects take longer and involve more people. HelioLattice keeps quotation revisions, DISCOM steps, material and payments on the same job file.",
    pains: [
      "Several quotation versions — hard to know which one is final",
      "Utility / load work stretches for months",
      "Material must match that project’s quotation, not a guess",
      "Accounts needs pending money per project, not only company totals",
    ],
    capabilities: [
      { title: "Quotation versions", body: "Each revision is kept in history — less argument about which quote was given.", moduleId: "survey-quotation" },
      { title: "Checklist by project type", body: "Different steps when financing or utility approval applies.", moduleId: "delivery" },
      { title: "Money per job", body: "See pending and collected against the project.", moduleId: "finance" },
    ],
    proofNote: "Same core screens — configured for longer commercial-style jobs.",
  },
  {
    id: "growing",
    path: "/solutions/growing",
    navLabel: "Growing teams",
    eyebrow: "When one Excel sheet is no longer enough",
    title: "More people and more sites — still one process",
    sub: "When you add staff, vehicles or a second store, WhatsApp status falls apart. HelioLattice uses roles and multi-location stock so the owner still sees what is happening.",
    pains: [
      "One spreadsheet cannot cover every crew",
      "Several people touch the same job with no clear owner",
      "Stock split across store, site and vehicle",
      "More staff means more access than the owner is comfortable giving",
    ],
    capabilities: [
      { title: "Roles", body: "Give each person only the screens they need.", moduleId: "reporting" },
      { title: "Stock by location", body: "Main store, branch, site, vehicle — one stock book.", moduleId: "materials" },
      { title: "Same checklist for every crew", body: "New teams follow the same install steps you define.", moduleId: "delivery" },
    ],
    proofNote: "Useful when a small solar shop starts running multiple crews.",
  },
  {
    id: "channel",
    path: "/solutions/channel",
    navLabel: "Dealer / partner sales",
    eyebrow: "When dealers send a large share of leads",
    title: "Partner leads and commission in the same system",
    sub: "If many enquiries come from dealers or referrers, status and commission should not live only in one person’s Excel.",
    pains: [
      "Partner leads arrive by call or forward and get lost",
      "Commission arguments with no shared record",
      "Hard to see which partners actually convert",
      "Partner work not compared with direct enquiries",
    ],
    capabilities: [
      { title: "Partner login", body: "Partners can submit and track their own enquiries.", moduleId: "partners" },
      { title: "Commission status", body: "Partners see progress instead of chasing the office.", moduleId: "partners" },
      { title: "Same reports", body: "Partner leads appear next to other lead sources.", moduleId: "sales" },
    ],
    proofNote: "Partner access sits next to the main sales screens.",
  },
]

export function getSolution(id: string | undefined) {
  return solutions.find((s) => s.id === id)
}
