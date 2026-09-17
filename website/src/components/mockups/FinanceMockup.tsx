import { CornerFrame } from "../ui/CornerFrame"
import { StackedBar } from "../charts/StackedBar"

const claimSteps = ["Submitted", "Verified", "Approved", "Posted"]

export function FinanceMockup() {
  return (
    <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Expense claim — R. Kumar</span>

      <div className="mt-4 flex items-center gap-1.5">
        {claimSteps.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-1.5">
            <div
              className={
                "h-1.5 flex-1 rounded-full " +
                (i < 3 ? "bg-[var(--color-good)]" : "bg-[var(--color-inset)]")
              }
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[9.5px] text-[var(--color-ink-muted)]">
        {claimSteps.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      <div className="mt-6 border-t border-[var(--color-line)] pt-5">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Receivables ageing</span>
        <div className="mt-3">
          <StackedBar
            ariaLabel="Receivables ageing by bucket"
            unit="k"
            segments={[
              { label: "0–30 days", value: 42, color: "var(--color-good)" },
              { label: "31–60 days", value: 18, color: "var(--color-warning)" },
              { label: "61+ days", value: 9, color: "var(--color-critical)" },
            ]}
          />
        </div>
      </div>
    </CornerFrame>
  )
}
