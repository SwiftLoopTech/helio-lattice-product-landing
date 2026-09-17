import { proof } from "../../data/home"
import { Container } from "../ui/Container"
import { CountUp } from "../ui/CountUp"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"

export function ProofStrip() {
  return (
    <section className="border-y border-[var(--color-line)] py-10 sm:py-12">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {proof.map((p) => (
            <motion.div key={p.label} variants={revealItem}>
              <div className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                <CountUp value={p.value} />
              </div>
              <div className="mt-1.5 text-[13.5px] font-medium text-[var(--color-ink-secondary)]">{p.label}</div>
              <div className="mt-1 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{p.detail}</div>
            </motion.div>
          ))}
        </RevealGroup>
        <Reveal delay={0.15} className="mt-8 border-t border-[var(--color-line)] pt-5">
          <p className="font-mono text-[11.5px] text-[var(--color-ink-muted)]">
            Built for solar installation companies — not generic office CRM talk.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
