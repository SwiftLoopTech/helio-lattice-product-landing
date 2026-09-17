import { CornerFrame } from "../ui/CornerFrame"

const itemTypes: Record<string, { label: string; color: string }> = {
  tick: { label: "Checklist", color: "var(--color-series-1)" },
  doc: { label: "Document", color: "var(--color-solar)" },
  field: { label: "Data field", color: "var(--color-series-3)" },
  action: { label: "Action", color: "var(--color-signal)" },
}

const templateItems = [
  { type: "field", label: "System size confirmed" },
  { type: "doc", label: "DISCOM feasibility approval" },
  { type: "doc", label: "Identity & property documents" },
  { type: "tick", label: "Material delivered on site" },
  { type: "action", label: "Assign installation crew" },
  { type: "doc", label: "Net meter installation record" },
]

export function WorkflowTemplateMockup() {
  return (
    <CornerFrame tone="signal" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">
          Template — on-grid, subsidy in scope
        </span>
        <div className="flex gap-1.5">
          {["Residential", "Commercial"].map((t, i) => (
            <span
              key={t}
              className={
                "rounded-[3px] px-2 py-0.5 font-mono text-[9.5px] " +
                (i === 0 ? "bg-[var(--color-signal)]/15 text-[var(--color-signal)]" : "text-[var(--color-ink-faint)]")
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {templateItems.map((item, i) => {
          const meta = itemTypes[item.type]
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-[5px] border border-[var(--color-line)] bg-[var(--color-inset)] px-3 py-2.5"
            >
              <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">{String(i + 1).padStart(2, "0")}</span>
              <span
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ background: meta.color }}
                aria-hidden
              />
              <span className="flex-1 text-[12.5px] text-[var(--color-ink)]">{item.label}</span>
              <span className="font-mono text-[9.5px] text-[var(--color-ink-muted)]">{meta.label}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--color-line)] pt-3">
        {Object.values(itemTypes).map((m) => (
          <div key={m.label} className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-[2px]" style={{ background: m.color }} aria-hidden />
            {m.label}
          </div>
        ))}
      </div>
    </CornerFrame>
  )
}
