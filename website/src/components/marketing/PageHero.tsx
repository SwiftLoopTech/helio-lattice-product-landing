import type { ReactNode } from "react"
import { Container } from "../ui/Container"
import { Eyebrow } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { ButtonLink } from "../ui/Button"

type PageHeroProps = {
  eyebrow: string
  title: string
  body?: string
  tone?: "solar" | "signal"
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  children?: ReactNode
}

export function PageHero({ eyebrow, title, body, tone = "solar", primaryCta, secondaryCta, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] pt-28 pb-14 sm:pt-36 sm:pb-16">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
      <Container className="relative">
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-balance mt-5 max-w-3xl text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.08] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
            {title}
          </h1>
        </Reveal>
        {body && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-ink-secondary)]">{body}</p>
          </Reveal>
        )}
        {(primaryCta || secondaryCta) && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <ButtonLink to={primaryCta.to} size="lg">
                  {primaryCta.label}
                </ButtonLink>
              )}
              {secondaryCta && (
                <ButtonLink to={secondaryCta.to} variant="outline" size="lg">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}
