import type { ReactNode } from "react"
import { cx } from "../../lib/utils"

const cornerBase = "absolute h-3 w-3 border-[var(--color-line-strong)] sm:h-4 sm:w-4"

export function CornerFrame({
  children,
  className,
  tone = "line",
}: {
  children: ReactNode
  className?: string
  tone?: "line" | "solar" | "signal"
}) {
  const color =
    tone === "solar"
      ? "border-[var(--color-solar)]/70"
      : tone === "signal"
        ? "border-[var(--color-signal)]/60"
        : "border-[var(--color-line-strong)]"

  return (
    <div className={cx("relative", className)}>
      <span className={cx(cornerBase, color, "top-0 left-0 border-t-2 border-l-2")} aria-hidden />
      <span className={cx(cornerBase, color, "top-0 right-0 border-t-2 border-r-2")} aria-hidden />
      <span className={cx(cornerBase, color, "bottom-0 left-0 border-b-2 border-l-2")} aria-hidden />
      <span className={cx(cornerBase, color, "bottom-0 right-0 border-b-2 border-r-2")} aria-hidden />
      {children}
    </div>
  )
}
