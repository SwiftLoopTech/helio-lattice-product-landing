import { CornerFrame } from "../ui/CornerFrame"
import { StatusPill, type Status } from "../ui/StatusPill"

const rows: { name: string; stage: string; commission: string; status: Status; statusLabel: string }[] = [
  { name: "K. Menon — residential enquiry", stage: "Survey scheduled", commission: "\u20b94,200 est.", status: "warning", statusLabel: "In progress" },
  { name: "Sunrise Apartments — C&I lead", stage: "Quotation sent", commission: "\u20b918,000 est.", status: "warning", statusLabel: "In progress" },
  { name: "R. Iyer — residential enquiry", stage: "Commissioned", commission: "\u20b93,600 paid", status: "good", statusLabel: "Paid" },
  { name: "T. Nair — referral", stage: "Not feasible", commission: "\u2014", status: "neutral", statusLabel: "Closed" },
]

export function PartnerPortalMockup() {
  return (
    <CornerFrame tone="signal" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Partner portal — Coastal Solar Referrals</span>
        <span className="font-mono text-[10.5px] text-[var(--color-signal)]">₹25,800 lifetime</span>
      </div>

      <div className="mt-4 space-y-2.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-inset)] px-3.5 py-3"
          >
            <div className="min-w-0">
              <div className="truncate text-[12.5px] font-medium text-[var(--color-ink)]">{row.name}</div>
              <div className="mt-0.5 font-mono text-[10.5px] text-[var(--color-ink-muted)]">{row.stage}</div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-[11px] text-[var(--color-ink-secondary)]">{row.commission}</span>
              <StatusPill status={row.status} label={row.statusLabel} />
            </div>
          </div>
        ))}
      </div>
    </CornerFrame>
  )
}
