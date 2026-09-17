import type { ReactNode } from "react"
import { Link, useParams } from "react-router-dom"
import { Seo } from "../../components/marketing/Seo"
import { PageHero } from "../../components/marketing/PageHero"
import { getModule, modules } from "../../data/product"
import { Container, Section } from "../../components/ui/Container"
import { Reveal } from "../../components/ui/Reveal"
import { FinalCTA } from "../../components/sections/FinalCTA"
import NotFound from "../NotFound"

import { PipelineMockup } from "../../components/mockups/PipelineMockup"
import { SurveyQuoteMockup } from "../../components/mockups/SurveyQuoteMockup"
import { WorkflowTemplateMockup } from "../../components/mockups/WorkflowTemplateMockup"
import { StockLedgerMockup } from "../../components/mockups/StockLedgerMockup"
import { FinanceMockup } from "../../components/mockups/FinanceMockup"
import { DashboardMockup } from "../../components/mockups/DashboardMockup"
import { ReportLibraryMockup } from "../../components/mockups/ReportLibraryMockup"
import { PartnerPortalMockup } from "../../components/mockups/PartnerPortalMockup"

const mockups: Record<string, ReactNode> = {
  sales: <PipelineMockup />,
  "survey-quotation": <SurveyQuoteMockup />,
  delivery: <WorkflowTemplateMockup />,
  materials: <StockLedgerMockup />,
  finance: <FinanceMockup />,
  reporting: (
    <div className="flex flex-col gap-5">
      <DashboardMockup />
      <ReportLibraryMockup />
    </div>
  ),
  partners: <PartnerPortalMockup />,
}

export default function ModulePage() {
  const { slug } = useParams<{ slug: string }>()
  const mod = getModule(slug)

  if (!mod) return <NotFound />

  const relatedModules = mod.related.map((id) => modules.find((m) => m.id === id)).filter(Boolean)

  return (
    <>
      <Seo title={mod.shortTitle} description={mod.description} />
      <PageHero
        eyebrow={`Product · ${mod.tag}`}
        title={mod.title}
        body={mod.subhead}
        tone="signal"
        primaryCta={{ label: "Book a demo", to: "/demo" }}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.8rem)] font-medium tracking-[-0.015em] text-balance text-[var(--color-ink)]">
                  The problem it solves
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-ink-secondary)]">{mod.problem}</p>
              </Reveal>

              <Reveal delay={0.08} className="mt-10">
                <h3 className="text-[13px] font-mono tracking-[0.1em] text-[var(--color-signal)] uppercase">What it does</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-secondary)]">{mod.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {mod.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink-secondary)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-solar)]" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {mod.metric && (
                <Reveal delay={0.14}>
                  <div className="mt-8 inline-flex items-baseline gap-2 border-t border-[var(--color-line)] pt-4">
                    <span className="font-display text-2xl font-medium text-[var(--color-ink)]">{mod.metric.value}</span>
                    <span className="text-[12.5px] text-[var(--color-ink-muted)]">{mod.metric.label}</span>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1}>{mockups[mod.mockup]}</Reveal>
          </div>
        </Container>
      </Section>

      {relatedModules.length > 0 && (
        <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
          <Container>
            <Reveal>
              <h3 className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-ink-muted)] uppercase">Works together with</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedModules.map((rm) => (
                <Link
                  key={rm!.id}
                  to={rm!.path}
                  className="group rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-5 transition-colors hover:border-[var(--color-signal)]/40"
                >
                  <span className="font-mono text-[10px] tracking-wide text-[var(--color-ink-faint)] uppercase">{rm!.tag}</span>
                  <div className="mt-2 flex items-center justify-between gap-2 text-[14px] font-medium text-[var(--color-ink)]">
                    {rm!.shortTitle}
                    <span aria-hidden className="text-[var(--color-signal)] transition-transform group-hover:translate-x-0.5">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FinalCTA />
    </>
  )
}
