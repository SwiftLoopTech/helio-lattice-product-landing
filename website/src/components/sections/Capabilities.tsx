import type { ReactNode } from "react"
import { modules } from "../../data/product"
import { Container, Section } from "../ui/Container"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { cx } from "../../lib/utils"
import { PipelineMockup } from "../mockups/PipelineMockup"
import { SurveyQuoteMockup } from "../mockups/SurveyQuoteMockup"
import { WorkflowTemplateMockup } from "../mockups/WorkflowTemplateMockup"
import { StockLedgerMockup } from "../mockups/StockLedgerMockup"
import { FinanceMockup } from "../mockups/FinanceMockup"
import { Link } from "react-router-dom"

const visuals: Record<string, ReactNode> = {
  sales: <PipelineMockup />,
  "survey-quotation": <SurveyQuoteMockup />,
  delivery: <WorkflowTemplateMockup />,
  materials: <StockLedgerMockup />,
  finance: <FinanceMockup />,
}

// Homepage teaser shows the five core pillars; Reporting and Partner Portal
// get their own emphasis further down the page and in the product overview.
const homepagePillars = modules.filter((m) => visuals[m.id])

export function Capabilities() {
  return (
    <Section id="capabilities">
      <Container>
        <Reveal>
          <Eyebrow>Modules</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
            The screens your team opens every day — linked to one job.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 lg:gap-28">
          {homepagePillars.map((pillar, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={pillar.id}
                className={cx(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  pillar.id === "delivery" && "lg:grid-cols-[0.9fr_1.1fr]",
                )}
              >
                <Reveal className={cx(reversed && "lg:order-2")}>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-signal)] uppercase">
                    0{i + 1} · {pillar.tag}
                  </span>
                  <h3 className="font-display mt-3 text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium tracking-[-0.015em] text-balance text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-ink-secondary)]">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {pillar.capabilities.slice(0, 4).map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink-secondary)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-solar)]" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                    {pillar.metric && (
                      <div className="inline-flex items-baseline gap-2 border-t border-[var(--color-line)] pt-4">
                        <span className="font-display text-2xl font-medium text-[var(--color-ink)]">{pillar.metric.value}</span>
                        <span className="text-[12.5px] text-[var(--color-ink-muted)]">{pillar.metric.label}</span>
                      </div>
                    )}
                    <Link
                      to={pillar.path}
                      className="inline-flex items-center gap-1.5 border-t border-transparent pt-4 text-[13px] font-medium text-[var(--color-signal)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      Explore {pillar.shortTitle}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={cx(reversed && "lg:order-1")}>
                  {visuals[pillar.id]}
                </Reveal>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
