// Legal stub content. [ASSUMED — rework later] Not reviewed legal copy —
// placeholders so routes exist and read coherently until counsel drafts real text.

import { brand } from "./brand"

export const privacy = {
  title: "Privacy Policy",
  updated: "Draft — not yet published",
  intro: `This is a placeholder privacy policy for ${brand.name} (${brand.legalName}), a working draft pending legal review. [ASSUMED — rework later]`,
  sections: [
    {
      title: "What we collect",
      body: "Account and contact details you provide to us, operational data your organization enters into the product (leads, surveys, quotations, projects, stock, finance records), and standard technical logs needed to operate the service.",
    },
    {
      title: "How we use it",
      body: "To provide and support the HelioLattice platform for your organization, to communicate with you about your account, and to improve the product. We do not sell customer data.",
    },
    {
      title: "Data isolation",
      body: "Each customer organization's operational data is isolated on a dedicated instance under the current deployment model.",
    },
    {
      title: "Data retention & export",
      body: "Your organization can export its data at any time. Retention terms are set out in your commercial agreement.",
    },
    {
      title: "Contact",
      body: `Questions about this draft policy can be sent to ${brand.emails.support}.`,
    },
  ],
}

export const terms = {
  title: "Terms of Service",
  updated: "Draft — not yet published",
  intro: `This is a placeholder terms of service for ${brand.name} (${brand.legalName}), a working draft pending legal review. [ASSUMED — rework later]`,
  sections: [
    {
      title: "Service description",
      body: "HelioLattice provides operations software for solar installation and EPC companies, delivered as managed cloud on a subscription basis, as described on the Pricing page.",
    },
    {
      title: "Accounts & seats",
      body: "Access is provisioned by seat under the plan your organization has subscribed to. Your organization is responsible for the conduct of users it authorizes.",
    },
    {
      title: "Data ownership",
      body: "Your organization owns the data it enters into the platform. HelioLattice acts as a processor operating the system of record on your behalf.",
    },
    {
      title: "Term & termination",
      body: "Subscriptions run for the contracted term set out in your order form and renew as described on the Pricing page unless either party gives notice.",
    },
    {
      title: "Contact",
      body: `Questions about this draft can be sent to ${brand.emails.support}.`,
    },
  ],
}
