// Product pages — plain language for solar installation companies.

export const productOverview = {
  eyebrow: "What’s in the software",
  headline: "Seven work areas. One customer job through all of them.",
  body: "Enquiry → survey → quotation → install checklist → stock → payments → reports. Each screen uses the same job. You don’t re-enter the customer in five places.",
}

export type ModuleId =
  | "sales"
  | "survey-quotation"
  | "delivery"
  | "materials"
  | "finance"
  | "reporting"
  | "partners"

export type ModulePage = {
  id: ModuleId
  path: string
  tag: string
  shortTitle: string
  title: string
  subhead: string
  description: string
  problem: string
  capabilities: string[]
  metric?: { value: string; label: string }
  mockup: ModuleId
  related: ModuleId[]
}

export const modules: ModulePage[] = [
  {
    id: "sales",
    path: "/product/sales",
    tag: "Enquiries & sales",
    shortTitle: "Enquiries & sales",
    title: "Leads with stages that match solar work",
    subhead: "Not only new / won / lost.",
    description:
      "Stages fit how solar teams actually talk: discussion, documents, survey, feasibility, proposal — and clear outcomes like not feasible or already has solar. Import leads from Excel, assign to salespeople, log calls, and keep follow-ups on the lead itself.",
    problem:
      "When leads sit in Excel or WhatsApp, follow-up depends on memory. The owner cannot see which enquiry is ageing or who owns it.",
    capabilities: [
      "Excel import with row preview and duplicate check",
      "Call from the user’s phone, then save the outcome",
      "Follow-up notes on the lead — not only in a private chat",
      "Dealer / partner can send and track their own leads",
      "Views for ageing leads and salesperson work",
    ],
    metric: { value: "24", label: "ready roles across sales, site, store, accounts & admin" },
    mockup: "sales",
    related: ["survey-quotation", "reporting"],
  },
  {
    id: "survey-quotation",
    path: "/product/survey-quotation",
    tag: "Survey & quotation",
    shortTitle: "Survey & quotation",
    title: "Site survey on phone → quotation from your price list",
    subhead: "Less re-typing from WhatsApp photos.",
    description:
      "Surveyor fills roof, electrical and structure notes on the phone, with tagged photos. Quotation starts from that survey and prices parts from the live price list your store maintains.",
    problem:
      "Survey in a chat group and quoting from an old rate sheet means slow, wrong quotations — and arguments later about what was promised.",
    capabilities: [
      "Parts list priced from your current catalogue",
      "Draft → sent → customer response, with manager approval when needed",
      "New revision keeps history (does not silently overwrite)",
      "Printable quotation with savings / payback figures you enter",
    ],
    metric: { value: "1", label: "price list used for every new quotation" },
    mockup: "survey-quotation",
    related: ["sales", "delivery", "materials"],
  },
  {
    id: "delivery",
    path: "/product/delivery",
    tag: "Install checklist",
    shortTitle: "Install checklist",
    title: "Your install process as a clear checklist",
    subhead: "You decide the steps. Every live job is checked against them.",
    description:
      "Admin sets what each job type must complete — documents, DISCOM steps, site work, data fields. Each live job shows what is done, what is pending, and who owns the next step. This is how you stop jobs vanishing into a folder.",
    problem:
      "Most companies already have an install process — it lives in someone’s head and in WhatsApp. When 50+ jobs are open, nobody has one true status list.",
    capabilities: [
      "Checklist items: tick, document, data field, or action",
      "Different templates for different project types",
      "Named owner on each stage",
      "Stuck jobs stay visible until someone closes the step",
    ],
    metric: { value: "Open", label: "jobs — answer: stuck where, whose follow-up" },
    mockup: "delivery",
    related: ["survey-quotation", "materials", "reporting"],
  },
  {
    id: "materials",
    path: "/product/materials",
    tag: "Material & stock",
    shortTitle: "Material & stock",
    title: "Price list and stock for quoting and site issue",
    subhead: "Count what you have. Issue what the job needs.",
    description:
      "Catalogue for panels, inverters, batteries, cable, structure, earthing, BOS and kits. Stock movements across store, branch, vehicle and site — connected to quotation and job issue.",
    problem:
      "Without a real stock book, quotations guess rates and sites wait for material that was never confirmed.",
    capabilities: [
      "Price history — old quotations keep their old rates",
      "Stock in, transfer, issue, return, adjustment",
      "Vendor and purchase invoice with attachment",
      "Stock by location (main store, branch, site, vehicle)",
    ],
    mockup: "materials",
    related: ["survey-quotation", "delivery", "finance"],
  },
  {
    id: "finance",
    path: "/product/finance",
    tag: "Payments & expenses",
    shortTitle: "Payments & expenses",
    title: "Job money with approval — then export to your books",
    subhead: "Operational money first. Statutory filing stays in Tally (etc.).",
    description:
      "Record collections, expenses and payment requests against the job, with proof and approval. Export structured data to your accounting software. This is not a full Tally replacement.",
    problem:
      "Pending balances and site expenses often live in chat. Accounts finds out late, and sales / site argue over what was paid.",
    capabilities: [
      "Receivables / payables style views with ageing",
      "Link stock movement to valuation entries where used",
      "Bank import / opening balances where configured",
      "Export history to your accounting package",
    ],
    mockup: "finance",
    related: ["materials", "reporting"],
  },
  {
    id: "reporting",
    path: "/product/reporting",
    tag: "Reports",
    shortTitle: "Reports",
    title: "Owner and manager views — with role limits",
    subhead: "About 21 reports. Not everyone sees everything.",
    description:
      "Reports for lead status, ageing, sources, salesperson work, quotation progress, project / survey status, claims and partner work. Access is controlled by role so sensitive data is not open to all staff.",
    problem:
      "Without reports, the owner collects status by calling people — late, incomplete, and sometimes sugar-coated.",
    capabilities: [
      "Reports across sales, quotation, operations, finance and partners",
      "Fine-grained rights checked on the server",
      "Ready-made roles you can adjust",
      "Personal work lists for what each person must do",
    ],
    metric: { value: "21", label: "reports you can open by permission" },
    mockup: "reporting",
    related: ["sales", "delivery", "finance"],
  },
  {
    id: "partners",
    path: "/product/partners",
    tag: "Dealer / partner",
    shortTitle: "Dealer / partner",
    title: "Dealers send leads and see status in one place",
    subhead: "Less phone chasing on “did you get my lead?”",
    description:
      "Partners can register, submit enquiries, track progress, and see commission status as the deal moves — instead of a side Excel maintained by one person in the office.",
    problem:
      "Partner leads that arrive only by call or forward get lost, mis-credited, or disputed at commission time.",
    capabilities: [
      "Partner self-registration and lead submit",
      "Partner can track their own enquiries",
      "Commission status visible as work progresses",
      "Partner leads included in the same reports as other sources",
    ],
    mockup: "partners",
    related: ["sales", "reporting"],
  },
]

export function getModule(id: string | undefined) {
  return modules.find((m) => m.id === id)
}
