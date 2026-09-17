import { cx } from "../../lib/utils"

type LogoProps = {
  className?: string
  /** Show wordmark text next to the mark (default true). */
  withWordmark?: boolean
  /** Larger lockup for nav / footer. */
  size?: "md" | "lg" | "xl"
}

const sizes = {
  md: { mark: "h-9 w-9", word: "text-[18px]", gap: "gap-2.5", imgH: "h-11" },
  lg: { mark: "h-11 w-11", word: "text-[22px]", gap: "gap-3", imgH: "h-12 sm:h-[3.5rem]" },
  xl: { mark: "h-12 w-12", word: "text-[26px] sm:text-[28px]", gap: "gap-3.5", imgH: "h-14 sm:h-16 md:h-[4.25rem]" },
} as const

/**
 * Brand lockup matching the HelioLattice logo:
 * amber sun + teal lattice mark, Helio (charcoal) + Lattice (teal).
 */
export function Logo({ className, withWordmark = true, size = "lg" }: LogoProps) {
  const s = sizes[size]

  // Full PNG lockup (exact brand art) — used in light theme when wordmark is on.
  // Dark theme uses mark + CSS wordmark so Helio/Lattice colors stay correct on dark bg.
  return (
    <span className={cx("inline-flex items-center", s.gap, className)} aria-label="HelioLattice">
      {/* Light: full designed lockup */}
      {withWordmark ? (
        <>
          <img
            src="/brand/heliolattice-logo.png"
            alt=""
              className={cx(
              "logo-lockup-light w-auto max-w-[min(340px,70vw)] object-contain object-left",
              s.imgH,
            )}
            decoding="async"
          />
          <span className={cx("logo-lockup-dark inline-flex items-center", s.gap)}>
            <img
              src="/brand/heliolattice-mark.png"
              alt=""
              width={48}
              height={48}
              className={cx(s.mark, "rounded-[8px] object-contain")}
              decoding="async"
            />
            <span className={cx("font-display font-semibold tracking-[-0.02em] leading-none", s.word)} aria-hidden>
              <span className="text-[var(--color-logo-helio)]">Helio</span>
              <span className="text-[var(--color-logo-lattice)]">Lattice</span>
            </span>
          </span>
        </>
      ) : (
        <img
          src="/brand/heliolattice-mark.png"
          alt=""
          width={48}
          height={48}
          className={cx(s.mark, "rounded-[8px] object-contain")}
          decoding="async"
        />
      )}
    </span>
  )
}
