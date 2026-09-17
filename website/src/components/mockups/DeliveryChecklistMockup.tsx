import { motion, useReducedMotion } from "motion/react"
import { CornerFrame } from "../ui/CornerFrame"
import { StatusPill, type Status } from "../ui/StatusPill"

type Row = {
  n: string
  stage: string
  owner: string
  meta: string
  status: Status
  statusLabel: string
  note?: string
}

const rows: Row[] = [
  { n: "01", stage: "Utility feasibility application", owner: "Ravi K.", meta: "2 documents · verified", status: "good", statusLabel: "Done" },
  { n: "02", stage: "Identity & property documents", owner: "Ravi K.", meta: "4 documents · verified", status: "good", statusLabel: "Done" },
  { n: "03", stage: "Load enhancement application", owner: "Priya S.", meta: "1 document · verified", status: "good", statusLabel: "Done" },
  { n: "04", stage: "Material delivery", owner: "Warehouse B", meta: "Panels, inverter, BOS issued", status: "good", statusLabel: "Done" },
  { n: "05", stage: "Installation", owner: "Arun · field", meta: "Mounting, wiring, earthing logged", status: "good", statusLabel: "Done" },
  {
    n: "06",
    stage: "Utility inspection & meter change",
    owner: "Priya S.",
    meta: "1 of 2 documents rejected",
    status: "critical",
    statusLabel: "Blocked · 11d",
    note: "Bank proof name mismatch — resubmitted, awaiting DISCOM confirmation.",
  },
  { n: "07", stage: "Commissioning & certification", owner: "Unassigned", meta: "Waiting on stage 06", status: "neutral", statusLabel: "Pending" },
  { n: "08", stage: "Subsidy submission & closure", owner: "Unassigned", meta: "Waiting on stage 07", status: "neutral", statusLabel: "Pending" },
]

export function DeliveryChecklistMockup() {
  const reduce = useReducedMotion()

  return (
    <CornerFrame tone="solar" className="rounded-[var(--radius-lg)] bg-[var(--color-panel)] p-px shadow-product">
      <div className="rounded-[calc(var(--radius-lg)-1px)] border border-[var(--color-line)] bg-[var(--color-panel)]">
        {/* header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] px-5 py-4">
          <div>
            <div className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)]">JOB #KA-1148</div>
            <div className="mt-0.5 text-[13.5px] font-medium text-[var(--color-ink)]">
              Nandini R. <span className="text-[var(--color-ink-muted)] font-normal">· 4.2 kW · On-grid · Residential</span>
            </div>
          </div>
          <StatusPill status="critical" label="Blocked · 11 days" />
        </div>

        {/* checklist */}
        <div className="px-5 py-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.n}
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-3.5 pb-4 last:pb-0"
            >
              {!row.n.endsWith("08") && (
                <span
                  aria-hidden
                  className="absolute top-6 left-[13px] h-[calc(100%-8px)] w-px bg-[var(--color-line)]"
                />
              )}
              <div
                className={
                  "z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border font-mono text-[10px] " +
                  (row.status === "good"
                    ? "border-[var(--color-good)]/40 bg-[var(--color-good)]/10 text-[var(--color-good)]"
                    : row.status === "critical"
                      ? "border-[var(--color-critical)]/50 bg-[var(--color-critical)]/10 text-[var(--color-critical)]"
                      : "border-[var(--color-line-strong)] bg-[var(--color-inset)] text-[var(--color-ink-muted)]")
                }
              >
                {row.status === "good" ? "✓" : row.n}
              </div>

              <div className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-x-4 gap-y-1.5">
                <div className="min-w-0">
                  <div className="text-[13.5px] font-medium text-[var(--color-ink)]">{row.stage}</div>
                  <div className="mt-0.5 font-mono text-[11px] text-[var(--color-ink-muted)]">
                    {row.owner} · {row.meta}
                  </div>
                  {row.note && (
                    <div className="mt-2 max-w-md rounded-[4px] border border-[var(--color-critical)]/25 bg-[var(--color-critical)]/8 px-2.5 py-1.5 text-[11.5px] leading-snug text-[var(--color-ink-secondary)]">
                      {row.note}
                    </div>
                  )}
                </div>
                <StatusPill status={row.status} label={row.statusLabel} className="shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CornerFrame>
  )
}
