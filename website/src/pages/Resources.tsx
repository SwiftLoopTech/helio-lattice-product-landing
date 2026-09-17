import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { resources } from "../data/company"
import { Container, Section } from "../components/ui/Container"
import { RevealGroup, revealItem, motion } from "../components/ui/Reveal"
import { FinalCTA } from "../components/sections/FinalCTA"

export default function Resources() {
  return (
    <>
      <Seo title="Resources" description={resources.body} />
      <PageHero eyebrow={resources.eyebrow} title={resources.headline} body={resources.body} />

      <Section>
        <Container>
          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
            {resources.stubs.map((r) => (
              <motion.div
                key={r.title}
                variants={revealItem}
                className="flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)]/50 p-5"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-wide text-[var(--color-signal)] uppercase">{r.tag}</span>
                  <h3 className="mt-1.5 text-[14.5px] font-medium text-balance text-[var(--color-ink)]">{r.title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--color-inset)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-ink-muted)] uppercase">
                  {r.status}
                </span>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
