import { CornerFrame } from "../ui/CornerFrame"
import { StatusPill } from "../ui/StatusPill"

const surveyFields = [
  { label: "Roof type", value: "RCC · flat, parapet" },
  { label: "Usable area", value: "620 sq ft" },
  { label: "Sanctioned load", value: "6 kW" },
  { label: "Shading", value: "Minor — east corner" },
]

const lineItems = [
  { name: "Panels — 545 Wp × 8", price: "₹1,84,000" },
  { name: "Inverter — 4 kW hybrid", price: "₹62,500" },
  { name: "Mounting structure & BOS", price: "₹41,200" },
  { name: "Installation & commissioning", price: "₹28,000" },
]

export function SurveyQuoteMockup() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Site survey</span>
          <StatusPill status="good" label="Feasible · 4.2 kW" />
        </div>
        <dl className="mt-4 space-y-3">
          {surveyFields.map((f) => (
            <div key={f.label} className="flex items-center justify-between border-b border-[var(--color-line)] pb-2.5 text-[12.5px] last:border-0">
              <dt className="text-[var(--color-ink-muted)]">{f.label}</dt>
              <dd className="font-medium text-[var(--color-ink)]">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {["Roof", "Meter box", "Shading"].map((tag) => (
            <div
              key={tag}
              className="flex aspect-square items-center justify-center rounded-[4px] border border-dashed border-[var(--color-line-strong)] font-mono text-[9px] text-[var(--color-ink-faint)]"
            >
              {tag}
            </div>
          ))}
        </div>
      </CornerFrame>

      <CornerFrame tone="solar" className="rounded-[var(--radius-lg)] bg-[var(--color-paper)] p-5 text-[var(--color-paper-ink)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-paper-muted)] uppercase">Customer proposal</span>
          <span className="rounded-[3px] bg-[var(--color-paper-ink)]/8 px-2 py-0.5 font-mono text-[10px] text-[var(--color-paper-ink)]">Draft</span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {lineItems.map((li) => (
            <li key={li.name} className="flex items-center justify-between text-[12px]">
              <span className="text-[var(--color-paper-muted)]">{li.name}</span>
              <span className="font-mono font-medium">{li.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-paper-ink)]/15 pt-3">
          <span className="text-[12.5px] font-medium">System price</span>
          <span className="font-mono text-[15px] font-semibold">₹3,15,700</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-[var(--color-paper-muted)]">
          <span>Est. payback</span>
          <span className="font-mono">4.8 years</span>
        </div>
      </CornerFrame>
    </div>
  )
}
