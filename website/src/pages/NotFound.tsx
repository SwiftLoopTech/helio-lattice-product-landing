import { Link } from "react-router-dom"
import { Seo } from "../components/marketing/Seo"
import { Container, Section } from "../components/ui/Container"
import { ButtonLink } from "../components/ui/Button"
import { Reveal } from "../components/ui/Reveal"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested is not on this site." />
      <Section className="py-24 sm:py-32">
        <Container className="max-w-xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-ink-muted)] uppercase">404</p>
            <h1 className="font-display mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-medium tracking-[-0.02em] text-balance text-[var(--color-ink)]">
              This page isn&apos;t on the map
            </h1>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-ink-secondary)]">
              The route may have moved as we expanded the marketing site. Head back to the homepage or explore the product overview.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to="/" size="lg">
                Back to home
              </ButtonLink>
              <Link to="/product" className="text-[13.5px] font-medium text-[var(--color-signal)] hover:underline">
                Product overview →
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
