import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import {
  securityHero,
  controls,
  deploymentModel,
  slaTable,
  integrations,
  nonClaims,
  securityFaq,
  type IntegrationStatus,
} from "../data/security"
import { Container, Section } from "../components/ui/Container"
import { Reveal, RevealGroup, revealItem, motion } from "../components/ui/Reveal"
import { CornerFrame } from "../components/ui/CornerFrame"
import { cx } from "../lib/utils"
import { FinalCTA } from "../components/sections/FinalCTA"

const statusStyle: Record<IntegrationStatus, string> = {
  Available: "text-[var(--color-good)] bg-[var(--color-good)]/12",
  Beta: "text-[var(--color-warning)] bg-[var(--color-warning)]/12",
  Roadmap: "text-[var(--color-ink-muted)] bg-[var(--color-inset)]",
}

export default function Security() {
  return (
    <>
      <Seo
        title="Security & trust"
        description="How HelioLattice controls access to your data: role-based permissions, TLS and encryption at rest, and a dedicated-instance deployment model."
      />
      <PageHero eyebrow={securityHero.eyebrow} title={securityHero.headline} body={securityHero.sub} tone="signal" />

      <Section>
        <Container>
          <Reveal>
            <h2 className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-signal)] uppercase">Access & data controls</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {controls.map((c) => (
              <motion.div key={c.title} variants={revealItem} className="bg-[var(--color-bg-raised)] p-6">
                <h3 className="text-[14px] font-semibold text-[var(--color-ink)]">{c.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{c.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.8rem)] font-medium tracking-[-0.015em] text-balance text-[var(--color-ink)]">
                {deploymentModel.title}
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-ink-secondary)]">{deploymentModel.body}</p>
              <p className="mt-4 font-mono text-[11.5px] text-[var(--color-ink-faint)]">{deploymentModel.hosting}</p>

              {/* simple deployment diagram */}
              <svg viewBox="0 0 480 140" className="mt-8 w-full max-w-md" role="img" aria-label="Each customer runs on its own dedicated managed-cloud instance, isolated from other customers">
                {[0, 1, 2].map((i) => (
                  <g key={i} transform={`translate(${20 + i * 160}, 20)`}>
                    <rect width="130" height="100" rx="6" fill="var(--color-panel)" stroke="var(--color-line-strong)" />
                    <rect x="12" y="14" width="106" height="10" rx="2" fill="var(--color-line-strong)" />
                    <rect x="12" y="32" width="80" height="8" rx="2" fill="var(--color-line)" />
                    <rect x="12" y="46" width="90" height="8" rx="2" fill="var(--color-line)" />
                    <circle cx="65" cy="78" r="10" fill="none" stroke="var(--color-signal)" strokeWidth="1.5" />
                    <text x="65" y="120" textAnchor="middle" fontSize="9" fill="var(--color-ink-faint)" fontFamily="var(--font-mono)">
                      Customer {i + 1} instance
                    </text>
                  </g>
                ))}
              </svg>
            </Reveal>

            <Reveal delay={0.1}>
              <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
                <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Deployment & SLA</span>
                <dl className="mt-4 space-y-3">
                  {slaTable.map((row) => (
                    <div key={row.item} className="border-b border-[var(--color-line)] pb-3 last:border-0">
                      <dt className="text-[11.5px] text-[var(--color-ink-muted)]">{row.item}</dt>
                      <dd className="mt-0.5 text-[13px] font-medium text-[var(--color-ink)]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </CornerFrame>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              Integrations & roadmap
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)]">
            <table className="w-full border-collapse text-[13px]">
              <tbody>
                {integrations.map((i, idx) => (
                  <tr key={i.name} className={cx(idx % 2 === 0 ? "bg-[var(--color-panel)]/40" : "bg-transparent")}>
                    <td className="px-5 py-3.5 text-[var(--color-ink-secondary)]">{i.name}</td>
                    <td className="px-5 py-3.5 text-right">
                      <span className={cx("inline-flex rounded-full px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide uppercase", statusStyle[i.status])}>
                        {i.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
        <Container>
          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-critical)]/25 bg-[var(--color-critical)]/6 p-7 sm:p-9">
              <h3 className="font-display text-[16px] font-medium text-[var(--color-ink)]">{nonClaims.title}</h3>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{nonClaims.body}</p>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {nonClaims.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug text-[var(--color-ink-muted)]">
                    <span aria-hidden className="mt-0.5 shrink-0 font-mono text-[var(--color-critical)]">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              Security FAQ
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2" stagger={0.05}>
            {securityFaq.map((f) => (
              <motion.div key={f.q} variants={revealItem}>
                <h4 className="text-[14px] font-semibold text-[var(--color-ink)]">{f.q}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{f.a}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA
        eyebrow="Have a security questionnaire?"
        headline="Send it over — we'll answer plainly, gaps included."
        body="If a procurement checklist needs a certification we don't hold, we'll tell you that directly rather than imply otherwise."
        primaryCta={{ label: "Talk to sales", to: "/contact" }}
        secondaryCta={{ label: "Book a demo", to: "/demo" }}
      />
    </>
  )
}
