import { solution } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { CornerFrame } from "../ui/CornerFrame"
import { Logo } from "../ui/Logo"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

const fragmentedNodes = ["Spreadsheets", "Chat groups", "Shared drives", "Memory"]
const connectedNodes = ["Sales", "Survey & quoting", "Delivery", "Stock", "Finance"]

export function Solution() {
  return (
    <Section className="border-b border-[var(--color-line)] bg-[var(--color-bg-raised)]">
      <Container>
        <SectionHeading eyebrow={solution.eyebrow} title={solution.headline} body={solution.body} tone="signal" size="lg" />

        <div className="relative mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-6">
          {/* decorative connectors — desktop only, positioned independent of grid flow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
          >
            <div className="absolute top-1/2 left-[calc(33.33%-1.5rem)] h-px w-[calc(16.66%+1.5rem)] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-line-strong)] to-[var(--color-solar)]/50" />
            <div className="absolute top-1/2 left-[calc(66.66%)] h-px w-[calc(16.66%+1.5rem)] -translate-y-1/2 bg-gradient-to-r from-[var(--color-solar)]/50 via-[var(--color-line-strong)] to-[var(--color-signal)]/60" />
          </div>

          {/* fragmented */}
          <Reveal className="relative flex flex-col items-center gap-3 lg:items-end">
            {fragmentedNodes.map((n, i) => (
              <div
                key={n}
                className="rounded-[5px] border border-[var(--color-line)] bg-[var(--color-panel)]/50 px-3.5 py-2 font-mono text-[11.5px] text-[var(--color-ink-muted)]"
                style={{ transform: `rotate(${[2, -3, 1.5, -2][i % 4]}deg)`, opacity: 0.85 }}
              >
                {n}
              </div>
            ))}
          </Reveal>

          {/* center */}
          <Reveal delay={0.1} className="relative flex justify-center">
            <CornerFrame tone="solar" className="mx-auto max-w-[280px] rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-8 text-center">
              <div className="flex justify-center">
                <Logo />
              </div>
              <p className="mt-4 text-[13px] leading-snug text-[var(--color-ink-secondary)]">
                One record, one process, per job
              </p>
            </CornerFrame>
          </Reveal>

          {/* connected */}
          <RevealGroup className="relative flex flex-col items-center gap-3 lg:items-start" stagger={0.07}>
            {connectedNodes.map((n) => (
              <motion.div
                key={n}
                variants={revealItem}
                className="flex items-center gap-2 rounded-[5px] border border-[var(--color-signal)]/25 bg-[var(--color-signal)]/8 px-3.5 py-2 font-mono text-[11.5px] text-[var(--color-ink)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                {n}
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        {/* boundaries */}
        <Reveal delay={0.1} className="mt-24">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)]/50 p-7 sm:p-9">
            <h3 className="font-display text-[17px] font-medium text-[var(--color-ink)]">{solution.boundaries.title}</h3>
            <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">
              {solution.boundaries.body}
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {solution.boundaries.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug text-[var(--color-ink-muted)]">
                  <span aria-hidden className="mt-0.5 shrink-0 font-mono text-[var(--color-ink-faint)]">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
