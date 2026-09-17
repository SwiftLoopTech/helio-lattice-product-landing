import { Link } from "react-router-dom"
import { Seo } from "../../components/marketing/Seo"
import { PageHero } from "../../components/marketing/PageHero"
import { productOverview, modules } from "../../data/product"
import { Container, Section } from "../../components/ui/Container"
import { CornerFrame } from "../../components/ui/CornerFrame"
import { RevealGroup, revealItem, motion } from "../../components/ui/Reveal"
import { FinalCTA } from "../../components/sections/FinalCTA"

export default function ProductOverview() {
  return (
    <>
      <Seo
        title="Product overview"
        description="HelioLattice platform overview — sales, survey & quotation, delivery workflows, materials, finance, reporting and partner portal, all on one job record."
      />
      <PageHero
        eyebrow="Product"
        title={productOverview.headline}
        body={productOverview.body}
        primaryCta={{ label: "Book a demo", to: "/demo" }}
        secondaryCta={{ label: "View pricing", to: "/pricing" }}
      />

      <Section>
        <Container>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {modules.map((m, i) => (
              <motion.div key={m.id} variants={revealItem}>
                <Link to={m.path} className="group block h-full">
                  <CornerFrame
                    tone="line"
                    className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-6 transition-colors group-hover:border-[var(--color-signal)]/40"
                  >
                    <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-faint)] uppercase">
                      0{i + 1} · {m.tag}
                    </span>
                    <h3 className="font-display mt-3 text-[17px] font-medium text-balance text-[var(--color-ink)]">
                      {m.shortTitle}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">
                      {m.subhead}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-signal)]">
                      Explore module
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </CornerFrame>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
