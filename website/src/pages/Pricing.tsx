import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { pricingHero, plans, pricingDetails, pricingFaq } from "../data/pricing"
import { Container, Section } from "../components/ui/Container"
import { CornerFrame } from "../components/ui/CornerFrame"
import { ButtonLink } from "../components/ui/Button"
import { Reveal, RevealGroup, revealItem, motion } from "../components/ui/Reveal"
import { cx } from "../lib/utils"
import { FinalCTA } from "../components/sections/FinalCTA"

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="HelioLattice pricing: Starter, Growth and Enterprise plans for solar installers and EPCs, priced by platform and seats."
      />
      <PageHero eyebrow={pricingHero.eyebrow} title={pricingHero.headline} body={pricingHero.sub} />

      <Section>
        <Container>
          <RevealGroup className="grid gap-5 lg:grid-cols-3" stagger={0.08}>
            {plans.map((plan) => (
              <motion.div key={plan.id} variants={revealItem}>
                <CornerFrame
                  tone={plan.hero ? "solar" : "line"}
                  className={cx(
                    "flex h-full flex-col rounded-[var(--radius-lg)] border p-7",
                    plan.hero
                      ? "border-[var(--color-solar)]/35 bg-[var(--color-panel)]"
                      : "border-[var(--color-line)] bg-[var(--color-panel)]/80",
                  )}
                >
                  {plan.hero && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--color-solar)]/15 px-2.5 py-1 font-mono text-[10px] tracking-wide text-[var(--color-solar)] uppercase">
                      Most teams choose this
                    </span>
                  )}
                  <h3 className="font-display text-[19px] font-medium text-[var(--color-ink)]">{plan.name}</h3>
                  <p className="mt-1.5 text-[13px] text-[var(--color-ink-muted)]">{plan.who}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-[2rem] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                      {plan.priceInr}
                    </span>
                    {plan.priceInr !== "Custom" && (
                      <span className="text-[13px] text-[var(--color-ink-muted)]">/mo</span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[11.5px] text-[var(--color-ink-faint)]">
                    {plan.priceUsd !== "Custom" ? `${plan.priceUsd} / mo · ${plan.billing}` : plan.billing}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug text-[var(--color-ink-secondary)]">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    to={plan.cta.to}
                    variant={plan.hero ? "solar" : "outline"}
                    size="lg"
                    className="mt-8 w-full justify-center"
                  >
                    {plan.cta.label}
                  </ButtonLink>
                </CornerFrame>
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)]/40 p-5">
              <h4 className="text-[13.5px] font-semibold text-[var(--color-ink)]">{pricingDetails.seatOverage.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{pricingDetails.seatOverage.body}</p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel)]/40 p-5">
              <h4 className="text-[13.5px] font-semibold text-[var(--color-ink)]">{pricingDetails.onboarding.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{pricingDetails.onboarding.body}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              {pricingDetails.packaging.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-secondary)]">{pricingDetails.packaging.body}</p>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {pricingDetails.packaging.packs.map((pack) => (
              <motion.div key={pack.name} variants={revealItem} className="bg-[var(--color-bg-raised)] p-5">
                <h4 className="text-[13.5px] font-semibold text-[var(--color-ink)]">{pack.name}</h4>
                <p className="mt-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{pack.detail}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              {pricingDetails.howCompaniesBuy.title}
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {pricingDetails.howCompaniesBuy.steps.map((step, i) => (
              <motion.div key={step.label} variants={revealItem} className="border-t border-[var(--color-line)] pt-5">
                <span className="font-display text-[13px] font-medium text-[var(--color-solar)]">0{i + 1}</span>
                <h4 className="mt-2 text-[14.5px] font-semibold text-[var(--color-ink)]">{step.label}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-secondary)]">{step.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)]">
        <Container>
          <Reveal>
            <h2 className="font-display max-w-2xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              Pricing FAQ
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2" stagger={0.05}>
            {pricingFaq.map((f) => (
              <motion.div key={f.q} variants={revealItem}>
                <h4 className="text-[14px] font-semibold text-[var(--color-ink)]">{f.q}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{f.a}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA
        eyebrow="Ready when you are"
        headline="See Starter, Growth and Enterprise on your own numbers."
        body="A working demo runs on your pipeline shape, not a canned script."
        primaryCta={{ label: "Book a demo", to: "/demo" }}
        secondaryCta={{ label: "Talk to sales", to: "/contact" }}
      />
    </>
  )
}
