import { motion, useReducedMotion } from "motion/react"

export type BarDatum = {
  label: string
  value: number
  sublabel?: string
}

/** Single-series ordinal/sequential bar chart — one hue, values shown as height. */
export function BarChart({
  data,
  height = 140,
  color = "var(--color-series-1)",
  valueFormatter = (v: number) => String(v),
  ariaLabel,
}: {
  data: BarDatum[]
  height?: number
  color?: string
  valueFormatter?: (v: number) => string
  ariaLabel: string
}) {
  const reduce = useReducedMotion()
  const max = Math.max(...data.map((d) => d.value), 1)

  return (
    <div role="img" aria-label={ariaLabel} className="w-full">
      <div className="flex items-end gap-2.5 sm:gap-3">
        {data.map((d, i) => {
          const pct = Math.max((d.value / max) * 100, 3)
          return (
            <div key={d.label} className="group flex flex-1 flex-col items-center gap-2">
              <span className="font-mono text-[10px] text-[var(--color-ink-muted)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {valueFormatter(d.value)}
              </span>
              <div className="relative w-full overflow-hidden rounded-t-[3px] bg-[var(--color-inset)]" style={{ height }}>
                <motion.div
                  className="absolute inset-x-0 bottom-0 rounded-t-[3px]"
                  style={{ background: color }}
                  initial={reduce ? { height: `${pct}%` } : { height: 0 }}
                  whileInView={{ height: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="font-mono text-[9.5px] leading-tight text-[var(--color-ink-muted)]">
                {d.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
