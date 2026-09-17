import { Link, useParams } from "react-router-dom"
import { Seo } from "../../components/marketing/Seo"
import { PageHero } from "../../components/marketing/PageHero"
import { getSolution } from "../../data/solutions"
import { getModule } from "../../data/product"
import { Container, Section } from "../../components/ui/Container"
import { Reveal, RevealGroup, revealItem, motion } from "../../components/ui/Reveal"
import { CornerFrame } from "../../components/ui/CornerFrame"
import { FinalCTA } from "../../components/sections/FinalCTA"
import NotFound from "../NotFound"

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>()
  const sol = getSolution(slug)

  if (!sol) return <NotFound />

  return (
    <>
      <Seo title={sol.navLabel} description={sol.sub} />
      <PageHero
        eyebrow={sol.eyebrow}
        title={sol.title}
        body={sol.sub}
        tone="signal"
        primaryCta={{ label: "Book a demo", to: "/demo" }}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-medium tracking-[-0.015em] text-balance text-[var(--color-ink)]">
                What this looks like without a system of record
              </h2>
              <ul className="mt-6 space-y-3">
                {sol.pains.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-panel)]/50 px-4 py-3 text-[13.5px] leading-snug text-[var(--color-ink-secondary)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-critical)]/70" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <CornerFrame tone="solar" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
                <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">In production</span>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]">{sol.proofNote}</p>
              </CornerFrame>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              How HelioLattice fits
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3" stagger={0.06}>
            {sol.capabilities.map((c) => {
              const mod = getModule(c.moduleId)
              return (
                <motion.div key={c.title} variants={revealItem}>
                  <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-6">
                    <h3 className="text-[14.5px] font-semibold text-[var(--color-ink)]">{c.title}</h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-[var(--color-ink-secondary)]">{c.body}</p>
                    {mod && (
                      <Link
                        to={mod.path}
                        className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[var(--color-signal)] hover:text-[var(--color-ink)]"
                      >
                        See {mod.shortTitle}
                        <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
