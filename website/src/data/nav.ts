// Minimal primary nav for ICP marketing surface.
// Deep module links live on /product — not in a mega-menu.

export type NavLink = {
  label: string
  to: string
  description?: string
}

export const productLinks: NavLink[] = [
  { label: "Overview", to: "/product", description: "What the software covers" },
  { label: "Leads & sales", to: "/product/sales" },
  { label: "Survey & quotation", to: "/product/survey-quotation" },
  { label: "Install checklist", to: "/product/delivery" },
  { label: "Material & stock", to: "/product/materials" },
  { label: "Money & payments", to: "/product/finance" },
  { label: "Reports", to: "/product/reporting" },
  { label: "Dealer / partner", to: "/product/partners" },
]

export type NavGroup =
  | { kind: "link"; label: string; to: string }
  | { kind: "group"; label: string; links: NavLink[] }

/** Slim top nav — ICP minimal surface */
export const primaryNav: NavGroup[] = [
  { kind: "group", label: "Product", links: productLinks },
  { kind: "link", label: "Pricing", to: "/pricing" },
  { kind: "link", label: "Security", to: "/security" },
  { kind: "link", label: "About", to: "/about" },
  { kind: "link", label: "Contact", to: "/contact" },
]

export const navCta = {
  primary: { label: "Book a demo", to: "/demo" },
  secondary: { label: "See the screens", href: "/product" },
}

// Kept for footer / older pages that still import these.
export const solutionLinks: NavLink[] = [
  { label: "Residential installers", to: "/solutions/residential" },
  { label: "Commercial & industrial EPC", to: "/solutions/epc" },
  { label: "Multi-crew / growing operators", to: "/solutions/growing" },
  { label: "Channel-led businesses", to: "/solutions/channel" },
]

export const resourceLinks: NavLink[] = [
  { label: "Resources hub", to: "/resources" },
  { label: "Security", to: "/security" },
  { label: "Customers", to: "/customers" },
]

export const companyLinks: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]
