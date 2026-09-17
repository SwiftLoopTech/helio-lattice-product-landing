import { workflow } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"
import { RevealGroup, revealItem, motion } from "../ui/Reveal"

export function Workflow() {
  return (
    <Section id="workflow" className="border-b border-[var(--color-line)] bg-[var(--color-bg-raised)]">
      <Container>
        <SectionHeading eyebrow={workflow.eyebrow} title={workflow.headline} body={workflow.body} tone="signal" size="lg" align="center" />

        <div className="mt-16 -mx-5 overflow-x-auto px-5 pb-6 sm:mx-0 sm:px-0">
          <RevealGroup className="relative flex min-w-[1400px] gap-0 sm:min-w-0 sm:gap-0" stagger={0.05}>
            <div
              aria-hidden
              className="absolute top-[19px] right-0 left-0 h-px bg-[repeating-linear-gradient(to_right,var(--color-line-strong)_0,var(--color-line-strong)_1px,transparent_1px,transparent_8px)]"
            />
            {workflow.stages.map((s) => (
              <motion.div key={s.n} variants={revealItem} className="relative flex-1 px-2.5 first:pl-0 last:pr-0">
                <div className="relative z-10 flex items-center gap-2">
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-solar)]/40 bg-[var(--color-bg)] font-mono text-[11px] text-[var(--color-solar)]">
                    {s.n}
                  </div>
                </div>
                <h3 className="mt-4 text-[13.5px] leading-tight font-semibold text-[var(--color-ink)]">{s.label}</h3>
                <p className="mt-1.5 text-[12px] leading-snug text-[var(--color-ink-muted)]">{s.detail}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
        <p className="mt-2 text-center font-mono text-[10.5px] text-[var(--color-ink-faint)] sm:hidden">
          Scroll to see the full sequence →
        </p>
      </Container>
    </Section>
  )
}
