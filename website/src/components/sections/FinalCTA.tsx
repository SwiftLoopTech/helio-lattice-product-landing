import { finalCta as defaultFinalCta } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { ButtonLink } from "../ui/Button"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"

type FinalCTAProps = {
  eyebrow?: string
  headline?: string
  body?: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  id?: string
}

export function FinalCTA({
  eyebrow = defaultFinalCta.eyebrow,
  headline = defaultFinalCta.headline,
  body = defaultFinalCta.body,
  primaryCta = defaultFinalCta.primaryCta,
  secondaryCta = defaultFinalCta.secondaryCta,
  id,
}: FinalCTAProps) {
  return (
    <Section id={id} className="relative border-t border-[var(--color-line)]">
      <Container className="relative text-center">
        <Reveal className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.12] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">
            {body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to={primaryCta.to} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink to={secondaryCta.to} variant="outline" size="lg">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
