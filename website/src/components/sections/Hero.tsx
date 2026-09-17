import { motion, useReducedMotion } from "motion/react"
import { hero } from "../../data/home"
import { ButtonLink } from "../ui/Button"
import { Container } from "../ui/Container"
import { DeliveryChecklistMockup } from "../mockups/DeliveryChecklistMockup"

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-ink-muted)] uppercase">
              {hero.eyebrow}
            </p>

            <h1 className="font-display text-balance mt-4 text-[clamp(2.1rem,4.6vw,3.25rem)] leading-[1.06] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-[var(--color-ink-secondary)]">{hero.sub}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <ButtonLink to={hero.primaryCta.to} size="lg">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink to={hero.secondaryCta.to} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative"
          >
            <DeliveryChecklistMockup />
            <p className="mt-3 text-center font-mono text-[10.5px] tracking-wide text-[var(--color-ink-faint)] lg:text-left">
              {hero.screenLabel}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
