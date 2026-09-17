import { roles } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"

export function RoleValue() {
  return (
    <Section id="roles" className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
      <Container>
        <Reveal>
          <Eyebrow tone="signal">Who uses it</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
            Owner, sales, site, store, accounts, partners — each sees their work.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {roles.map((role) => (
            <motion.div key={role.persona} variants={revealItem} className="bg-[var(--color-bg-raised)] p-6">
              <h3 className="text-[14.5px] font-semibold text-[var(--color-ink)]">{role.persona}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{role.does}</p>
              <div className="mt-4 flex items-start gap-2 border-t border-[var(--color-line)] pt-3">
                <span className="mt-0.5 shrink-0 text-[var(--color-signal)]" aria-hidden>
                  →
                </span>
                <p className="text-[13px] leading-snug font-medium text-[var(--color-ink-secondary)]">{role.benefit}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
