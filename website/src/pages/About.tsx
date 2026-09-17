import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { about } from "../data/company"
import { Container, Section } from "../components/ui/Container"
import { Reveal, RevealGroup, revealItem, motion } from "../components/ui/Reveal"
import { StatusPill } from "../components/ui/StatusPill"
import { FinalCTA } from "../components/sections/FinalCTA"

export default function About() {
  return (
    <>
      <Seo title="About" description={about.body} />
      <PageHero eyebrow={about.eyebrow} title={about.headline} body={about.body} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <h2 className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-solar)] uppercase">{about.mission.title}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-balance text-[var(--color-ink)]">{about.mission.body}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                <StatusPill status="neutral" label={about.status} />
              </div>
              <p className="mt-3 text-[13px] text-[var(--color-ink-muted)]">{about.hq}</p>
            </Reveal>

            <RevealGroup className="grid gap-5" stagger={0.08}>
              {about.approach.map((a, i) => (
                <motion.div key={a.title} variants={revealItem} className="flex gap-5 border-t border-[var(--color-line)] pt-5">
                  <span className="font-display shrink-0 text-[13px] leading-none font-medium text-[var(--color-solar)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-balance text-[var(--color-ink)]">{a.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{a.body}</p>
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
