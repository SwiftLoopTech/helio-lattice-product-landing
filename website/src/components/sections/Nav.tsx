import { useEffect, useRef, useState } from "react"
import { Link, NavLink as RouterNavLink } from "react-router-dom"
import { primaryNav, navCta, type NavGroup } from "../../data/nav"
import { ButtonLink } from "../ui/Button"
import { Container } from "../ui/Container"
import { Logo } from "../ui/Logo"
import { ThemeToggle } from "../ui/ThemeToggle"
import { cx } from "../../lib/utils"

function DesktopDropdown({ group }: { group: Extract<NavGroup, { kind: "group" }> }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cx(
          "flex items-center gap-1 text-[13px] font-medium transition-colors",
          open ? "text-[var(--color-ink)]" : "text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]",
        )}
      >
        {group.label}
        <svg
          width="9"
          height="9"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
          className={cx("transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 z-50 w-[260px] -translate-x-1/2 pt-2">
          <div className="shadow-product rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)] p-1.5">
            {group.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-[var(--radius-sm)] px-3 py-2 transition-colors hover:bg-[var(--color-hover)]"
              >
                <div className="text-[13px] font-medium text-[var(--color-ink)]">{link.label}</div>
                {link.description && (
                  <div className="mt-0.5 text-[12px] leading-snug text-[var(--color-ink-muted)]">{link.description}</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileGroup({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  if (group.kind === "link") {
    return (
      <Link
        to={group.to}
        onClick={onNavigate}
        className="rounded-[var(--radius-sm)] px-2 py-2.5 text-[15px] font-medium text-[var(--color-ink-secondary)] hover:bg-[var(--color-hover)] hover:text-[var(--color-ink)]"
      >
        {group.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-[var(--radius-sm)] px-2 py-2.5 text-[15px] font-medium text-[var(--color-ink-secondary)] hover:bg-[var(--color-hover)] hover:text-[var(--color-ink)]"
      >
        {group.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className={cx("transition-transform", open && "rotate-180")}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="ml-2 flex flex-col gap-0.5 border-l border-[var(--color-line)] pl-3">
          {group.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onNavigate}
              className="rounded-[var(--radius-sm)] px-2 py-2 text-[14px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          "border-b transition-colors duration-200",
          scrolled
            ? "border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur-sm"
            : "border-transparent bg-[var(--color-bg)]/70 backdrop-blur-sm",
        )}
      >
        <Container>
          <nav className="flex h-[4.75rem] items-center justify-between gap-4 sm:h-20" aria-label="Primary">
            <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
              <Logo size="xl" />
            </Link>

            <ul className="hidden items-center gap-7 lg:flex">
              {primaryNav.map((group) => (
                <li key={group.label}>
                  {group.kind === "group" ? (
                    <DesktopDropdown group={group} />
                  ) : (
                    <RouterNavLink
                      to={group.to}
                      className={({ isActive }) =>
                        cx(
                          "text-[13px] font-medium transition-colors",
                          isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]",
                        )
                      }
                    >
                      {group.label}
                    </RouterNavLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link
                to="/product"
                className="text-[13px] font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-signal)]"
              >
                {navCta.secondary.label}
              </Link>
              <ButtonLink to={navCta.primary.to} size="md">
                {navCta.primary.label}
              </ButtonLink>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label="Toggle menu"
                className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-line)] text-[var(--color-ink)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  {open ? (
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  ) : (
                    <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {open && (
        <div id="mobile-nav" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-[var(--color-line)] bg-[var(--color-bg)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((group) => (
              <MobileGroup key={group.label} group={group} onNavigate={() => setOpen(false)} />
            ))}
            <Link
              to="/product"
              onClick={() => setOpen(false)}
              className="rounded-[var(--radius-sm)] px-2 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)]"
            >
              {navCta.secondary.label}
            </Link>
            <ButtonLink to={navCta.primary.to} onClick={() => setOpen(false)} className="mt-2 justify-center">
              {navCta.primary.label}
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  )
}
