import { Link } from "react-router-dom"
import { footer } from "../../data/footer"
import { navCta } from "../../data/nav"
import { brand } from "../../data/brand"
import { Container } from "../ui/Container"
import { Logo } from "../ui/Logo"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-12 sm:py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_repeat(3,1fr)]">
          <div>
            <Link to="/">
              <Logo size="lg" />
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{footer.note}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] tracking-wide text-[var(--color-ink-faint)] uppercase">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-[13px] text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-[var(--color-ink-faint)]">
            © {new Date().getFullYear()} {brand.legalName}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {footer.legal.map((l) => (
              <Link key={l.to} to={l.to} className="text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-signal)]">
                {l.label}
              </Link>
            ))}
            <Link to="/product" className="text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-signal)]">
              {navCta.secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
