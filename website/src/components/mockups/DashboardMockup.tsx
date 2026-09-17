import { CornerFrame } from "../ui/CornerFrame"
import { BarChart } from "../charts/BarChart"
import { LineChart } from "../charts/LineChart"

const tiles = [
  { label: "Active enquiries", value: "182", delta: "+12 this week", tone: "good" as const },
  { label: "Live installations", value: "64", delta: "6 blocked", tone: "critical" as const },
  { label: "Pending documents", value: "37", delta: "9 overdue", tone: "warning" as const },
  { label: "Amount overdue", value: "₹4.1L", delta: "11 invoices", tone: "warning" as const },
]

const toneColor: Record<string, string> = {
  good: "var(--color-good)",
  warning: "var(--color-warning)",
  critical: "var(--color-critical)",
}

const jobsByStage = [
  { label: "Feasibility", value: 18 },
  { label: "Pre-exec", value: 22 },
  { label: "Material", value: 15 },
  { label: "Install", value: 27 },
  { label: "Commission", value: 9 },
]

export function DashboardMockup() {
  return (
    <CornerFrame tone="solar" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Operating dashboard</span>
        <span className="font-mono text-[10.5px] text-[var(--color-ink-faint)]">Current</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-[6px] border border-[var(--color-line)] bg-[var(--color-inset)] p-3.5">
            <div className="font-display text-[22px] font-medium text-[var(--color-ink)]">{t.value}</div>
            <div className="mt-1 text-[11px] text-[var(--color-ink-muted)]">{t.label}</div>
            <div className="mt-1.5 font-mono text-[10px]" style={{ color: toneColor[t.tone] }}>
              {t.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <span className="font-mono text-[10px] tracking-wide text-[var(--color-ink-muted)] uppercase">Live jobs by stage</span>
          <div className="mt-3">
            <BarChart data={jobsByStage} height={100} ariaLabel="Live jobs by delivery stage" />
          </div>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-wide text-[var(--color-ink-muted)] uppercase">Quotation cycle time — weeks</span>
          <div className="mt-3">
            <LineChart values={[6.8, 6.2, 6.5, 5.4, 5.1, 4.6, 4.4, 3.9]} height={100} color="var(--color-signal)" ariaLabel="Quotation cycle time over the last 8 weeks, trending down" />
          </div>
        </div>
      </div>
    </CornerFrame>
  )
}
