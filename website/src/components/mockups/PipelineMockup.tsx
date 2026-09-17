import { CornerFrame } from "../ui/CornerFrame"
import { BarChart } from "../charts/BarChart"

const stages = [
  { label: "Discuss", value: 58 },
  { label: "Survey", value: 41 },
  { label: "Feasible", value: 33 },
  { label: "Proposal", value: 27 },
  { label: "Won", value: 14 },
]

const queue = [
  { name: "S. Reddy — follow-up", due: "Today, 2 calls overdue" },
  { name: "Aadhaar mismatch — flag", due: "Due tomorrow" },
  { name: "Site survey request", due: "Awaiting scheduling" },
]

export function PipelineMockup() {
  return (
    <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Enquiries by stage</span>
        <span className="font-mono text-[10.5px] text-[var(--color-ink-faint)]">This month</span>
      </div>
      <div className="mt-5">
        <BarChart data={stages} color="var(--color-series-1)" ariaLabel="Enquiries by pipeline stage this month" />
      </div>

      <div className="mt-6 border-t border-[var(--color-line)] pt-4">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">My work queue</span>
        <ul className="mt-3 space-y-2.5">
          {queue.map((q) => (
            <li key={q.name} className="flex items-center justify-between gap-3 text-[12.5px]">
              <span className="text-[var(--color-ink-secondary)]">{q.name}</span>
              <span className="shrink-0 font-mono text-[10.5px] text-[var(--color-solar)]">{q.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </CornerFrame>
  )
}
