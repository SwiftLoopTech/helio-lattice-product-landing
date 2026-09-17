import { motion, useReducedMotion } from "motion/react"

export type StackSegment = {
  label: string
  value: number
  color: string
}

/** Horizontal stacked bar — one row, segments gapped 2px, always direct-labelled via legend row. */
export function StackedBar({
  segments,
  ariaLabel,
  unit = "",
}: {
  segments: StackSegment[]
  ariaLabel: string
  unit?: string
}) {
  const reduce = useReducedMotion()
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1

  return (
    <div role="img" aria-label={ariaLabel} className="w-full">
      <div className="flex h-6 w-full gap-[2px] overflow-hidden rounded-[3px]">
        {segments.map((seg, i) => {
          const pct = (seg.value / total) * 100
          return (
            <motion.div
              key={seg.label}
              className="h-full first:rounded-l-[3px] last:rounded-r-[3px]"
              style={{ background: seg.color }}
              initial={reduce ? { width: `${pct}%` } : { width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              title={`${seg.label}: ${seg.value}${unit}`}
            />
          )
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 rounded-[2px]"
              style={{ background: seg.color }}
              aria-hidden
            />
            <span className="font-mono text-[10.5px] text-[var(--color-ink-secondary)]">
              {seg.label} <span className="text-[var(--color-ink-muted)]">{seg.value}{unit}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
