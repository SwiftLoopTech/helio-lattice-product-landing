import type { ReactNode } from "react"
import { cx } from "../../lib/utils"
import { Reveal } from "./Reveal"

export function Eyebrow({ children, tone = "solar" }: { children: ReactNode; tone?: "solar" | "signal" }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={cx(
          "h-1.5 w-1.5 rounded-full",
          tone === "solar" ? "bg-[var(--color-solar)]" : "bg-[var(--color-signal)]",
        )}
        aria-hidden
      />
      <span
        className={cx(
          "font-mono text-[11px] tracking-[0.18em] uppercase",
          tone === "solar" ? "text-[var(--color-solar)]" : "text-[var(--color-signal)]",
        )}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "solar",
  align = "left",
  size = "md",
  className,
}: {
  eyebrow?: string
  title: string
  body?: string
  tone?: "solar" | "signal"
  align?: "left" | "center"
  size?: "md" | "lg"
  className?: string
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <div className={cx(align === "center" && "flex justify-center")}>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cx(
            "font-display mt-4 text-balance font-medium tracking-[-0.02em] text-[var(--color-ink)]",
            size === "lg" ? "text-[clamp(1.9rem,4.4vw,3.1rem)]" : "text-[clamp(1.6rem,3.2vw,2.4rem)]",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-secondary)] sm:text-base">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  )
}
