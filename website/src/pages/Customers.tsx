import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { customers } from "../data/company"
import { Container, Section } from "../components/ui/Container"
import { CornerFrame } from "../components/ui/CornerFrame"
import { Reveal, RevealGroup, revealItem, motion } from "../components/ui/Reveal"
import { FinalCTA } from "../components/sections/FinalCTA"

export default function Customers() {
  return (
    <>
      <Seo title="Customers" description={customers.body} />
      <PageHero eyebrow={customers.eyebrow} title={customers.headline} body={customers.body} />

      <Section>
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {customers.stories.map((s) => (
              <motion.div key={s.role} variants={revealItem}>
                <CornerFrame tone="solar" className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
                  <blockquote className="font-display flex-1 text-[16px] leading-snug text-balance text-[var(--color-ink)]">
                    “{s.quote}”
                  </blockquote>
                  <p className="mt-5 font-mono text-[11.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">{s.role}</p>
                  <div className="mt-4 flex items-baseline gap-2 border-t border-[var(--color-line)] pt-4">
                    <span className="font-display text-2xl font-medium text-[var(--color-ink)]">{s.metric.value}</span>
                    <span className="text-[12.5px] text-[var(--color-ink-muted)]">{s.metric.label}</span>
                  </div>
                </CornerFrame>
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-10 border-t border-[var(--color-line)] pt-6">
            <p className="font-mono text-[11.5px] text-[var(--color-ink-faint)]">{customers.logosNote}</p>
          </Reveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
