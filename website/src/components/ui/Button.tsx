import type { AnchorHTMLAttributes } from "react"
import { Link, type LinkProps } from "react-router-dom"
import { cx } from "../../lib/utils"

type Variant = "solar" | "ghost" | "outline"
type Size = "md" | "lg"

const variants: Record<Variant, string> = {
  solar:
    "bg-[var(--color-solar)] text-[var(--color-solar-ink)] hover:brightness-105 border border-[var(--color-solar)]/30",
  ghost: "text-[var(--color-ink)] hover:text-[var(--color-signal)]",
  outline:
    "border border-[var(--color-line-strong)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]",
}

const sizes: Record<Size, string> = {
  md: "text-sm px-4 py-2.5",
  lg: "text-[15px] px-6 py-3.5",
}

export function buttonClasses(variant: Variant = "solar", size: Size = "md", className?: string) {
  return cx(
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-medium tracking-[-0.01em] transition-all duration-200 whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  )
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
}

/** For external links, mailto:, or in-page `#` anchors. */
export function Button({ variant = "solar", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}

type ButtonLinkProps = Omit<LinkProps, "className"> & {
  variant?: Variant
  size?: Size
  className?: string
}

/** For internal client-side navigation via React Router. */
export function ButtonLink({ variant = "solar", size = "md", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  )
}
