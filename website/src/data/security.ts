// Security / trust content — Assumed Draft Spec §2.5-2.6.
// Hard rule: never claim SOC 2, ISO 27001, HIPAA, PCI DSS, pen-test badges,
// "bank-grade," or government empanelment. RBAC + TLS + dedicated instance
// are the honest, verifiable-today story.

export const securityHero = {
  eyebrow: "Trust center",
  headline: "Access control, encryption, and a dedicated instance — explained plainly.",
  sub: "HelioLattice holds operational and financial records for every customer it serves. Here is what controls access today — and what we do not claim.",
}

export const controls: { title: string; body: string }[] = [
  {
    title: "Role-based access control",
    body: "~24 predefined roles and ~300 distinct permission rights, checked on the server for every action — not just hidden in the interface.",
  },
  {
    title: "Server-side permission enforcement",
    body: "Every read, write, and export is checked against the acting user's permissions on the server, independent of what the client sends.",
  },
  {
    title: "Encryption in transit",
    body: "All traffic between clients and HelioLattice is encrypted over TLS.",
  },
  {
    title: "Encryption at rest",
    // [ASSUMED — rework later] confirm provider & key-management story
    body: "Data at rest uses the managed cloud provider's volume-level encryption.",
  },
  {
    title: "Audit-friendly activity model",
    body: "Actions are tied to a named user and role, supporting after-the-fact review of who did what on a job or claim.",
  },
  {
    title: "Customer data isolation",
    body: "Each customer runs on a dedicated instance under the current commercial model — isolation by deployment, not by row-level multi-tenancy.",
  },
]

export const deploymentModel = {
  title: "Deployment model",
  body: "HelioLattice is delivered as managed cloud, with a dedicated instance per customer organization. That is a deliberate near-term choice for isolation and predictability while a shared-control SaaS option sits on the roadmap.",
  // [ASSUMED — rework later] hosting class pending infra confirmation
  hosting: "Managed cloud (GCP/AWS-class infrastructure), dedicated customer instance option.",
}

export const slaTable: { item: string; value: string }[] = [
  { item: "Uptime SLA", value: "99.9% monthly (Enterprise); best-effort (Starter/Growth)" },
  { item: "Backups", value: "Daily automated; 30-day restore window" },
  { item: "RPO / RTO", value: "RPO \u2264 24h; RTO \u2264 8h (Enterprise targets)" },
  { item: "Support", value: "Email (Starter); email + chat, business hours IST (Growth); named CSM + priority (Enterprise)" },
  { item: "Business hours", value: "Mon\u2013Sat 09:30\u201319:00 IST" },
  { item: "Sandbox", value: "Available on Enterprise / paid pilot" },
]
// [ASSUMED — rework later] entire SLA table pending real infra/ops sign-off.

export type IntegrationStatus = "Available" | "Beta" | "Roadmap"

export const integrations: { name: string; status: IntegrationStatus }[] = [
  { name: "CSV / spreadsheet lead import", status: "Available" },
  { name: "Accounting export (generic CSV / package handoff)", status: "Available" },
  { name: "Click-to-call / telephony assist (device-side)", status: "Available" },
  { name: "WhatsApp Business API (proposal send / reminders)", status: "Beta" },
  { name: "Tally / Zoho Books deep sync", status: "Roadmap" },
  { name: "SSO (Google / Microsoft)", status: "Roadmap" },
  { name: "Design tools (OpenSolar / local design apps)", status: "Roadmap" },
  { name: "Payment gateways", status: "Roadmap" },
  { name: "IndiaMART / JustDial lead ingest", status: "Roadmap" },
]

export const nonClaims = {
  title: "What we don't claim",
  body: "We would rather state this plainly than let a badge imply something unverified.",
  items: [
    "No SOC 2, ISO 27001, HIPAA, or PCI DSS certification claimed",
    "No third-party penetration-test badge claimed",
    "No \u201cbank-grade\u201d or government-empaneled security language",
    "No public multi-tenant SaaS claimed while the deployment model is dedicated-instance",
  ],
}

export const securityFaq: { q: string; a: string }[] = [
  {
    q: "Is HelioLattice SOC 2 or ISO 27001 certified?",
    a: "Not currently. We will not claim a certification we do not hold. If procurement requires one, talk to sales about the roadmap and interim controls.",
  },
  {
    q: "Is our data shared with other customers?",
    a: "No. Each customer runs on a dedicated instance under the current commercial model.",
  },
  {
    q: "Who on HelioLattice's team can see our data?",
    a: "Access is limited to authorized support and engineering staff, gated by role-based permissions. Broader access-logging transparency for customer review is on the roadmap.",
  },
  {
    q: "Can we run HelioLattice in our own cloud?",
    a: "Not today. HelioLattice is delivered as managed cloud. Self-hosted or private-cloud deployment is an Enterprise conversation, not a shipped option.",
  },
  {
    q: "How do permissions work day to day?",
    a: "Administrators assign roles from a fine-grained rights model (~300 distinct permissions). Sensitive actions — exports, finance claims, role changes — are server-checked, not client-trusted.",
  },
]
