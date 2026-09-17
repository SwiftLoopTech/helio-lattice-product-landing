import { cx } from "../../lib/utils"

export type Status = "good" | "warning" | "serious" | "critical" | "neutral"

const statusStyles: Record<Status, string> = {
  good: "text-[var(--color-good)] bg-[var(--color-good)]/12",
  warning: "text-[var(--color-warning)] bg-[var(--color-warning)]/12",
  serious: "text-[var(--color-serious)] bg-[var(--color-serious)]/12",
  critical: "text-[var(--color-critical)] bg-[var(--color-critical)]/12",
  neutral: "text-[var(--color-ink-secondary)] bg-[var(--color-inset)]",
}

const statusIcon: Record<Status, string> = {
  good: "✓",
  warning: "▲",
  serious: "●",
  critical: "✕",
  neutral: "–",
}

export function StatusPill({
  status,
  label,
  className,
}: {
  status: Status
  label: string
  className?: string
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide uppercase",
        statusStyles[status],
        className,
      )}
    >
      <span aria-hidden className="text-[9px]">
        {statusIcon[status]}
      </span>
      {label}
    </span>
  )
}
