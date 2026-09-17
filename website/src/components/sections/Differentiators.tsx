import { differentiators } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"

export function Differentiators() {
  return (
    <Section className="border-t border-[var(--color-line)]">
      <Container>
        <Reveal>
          <Eyebrow>Why not Zoho / Excel / a generic CRM</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
            Built for rooftop solar jobs — not remapped from another industry.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2" stagger={0.06}>
          {differentiators.map((d, i) => (
            <motion.div key={d.title} variants={revealItem} className="flex gap-5 border-t border-[var(--color-line)] pt-6">
              <span className="font-display shrink-0 text-[13px] leading-none font-medium text-[var(--color-solar)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-balance text-[var(--color-ink)]">{d.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{d.body}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
