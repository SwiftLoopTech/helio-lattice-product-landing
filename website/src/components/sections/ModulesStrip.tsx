import { Link } from "react-router-dom"
import { modulesStrip } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"
import { ButtonLink } from "../ui/Button"

export function ModulesStrip() {
  return (
    <Section id="modules" className="border-b border-[var(--color-line)]">
      <Container>
        <Reveal>
          <Eyebrow tone="signal">{modulesStrip.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.6rem,3.2vw,2.35rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
            {modulesStrip.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">{modulesStrip.body}</p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {modulesStrip.items.map((item) => (
            <motion.div key={item.id} variants={revealItem}>
              <Link
                to={item.to}
                className="flex h-full flex-col bg-[var(--color-bg)] p-5 transition-colors hover:bg-[var(--color-hover)]"
              >
                <span className="text-[13.5px] font-semibold text-[var(--color-ink)]">{item.label}</span>
                <span className="mt-1.5 text-[13px] leading-snug text-[var(--color-ink-muted)]">{item.oneLiner}</span>
              </Link>
            </motion.div>
          ))}
          <motion.div variants={revealItem} className="bg-[var(--color-bg-raised)] p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-[13px] leading-snug text-[var(--color-ink-muted)]">Open any item for more detail, or see all screens together.</p>
            <ButtonLink to={modulesStrip.cta.to} variant="outline" size="md" className="mt-4">
              {modulesStrip.cta.label}
              <span aria-hidden>→</span>
            </ButtonLink>
          </motion.div>
        </RevealGroup>
      </Container>
    </Section>
  )
}
