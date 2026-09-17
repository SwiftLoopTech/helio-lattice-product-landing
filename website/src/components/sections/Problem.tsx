import { problem } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { Reveal, RevealGroup, revealItem, motion } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

const wobble = [0, -3, 2, -4, 3, -2, 4, -3]

export function Problem() {
  return (
    <Section className="border-b border-[var(--color-line)]">
      <Container>
        <SectionHeading eyebrow={problem.eyebrow} title={problem.headline} body={problem.body} tone="solar" size="lg" />

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="flex min-w-[760px] items-center gap-0 lg:min-w-0">
            {problem.chain.map((stage, i) => {
              const isBroken = stage.state === "broken"
              const isFirstBroken = isBroken && problem.chain[i - 1]?.state !== "broken"
              return (
                <div key={stage.label} className="flex flex-1 items-center">
                  {i > 0 && (
                    <div
                      className="h-px flex-1"
                      style={{
                        background: isBroken
                          ? "repeating-linear-gradient(to right, var(--color-critical) 0 6px, transparent 6px 11px)"
                          : "var(--color-line-strong)",
                        opacity: isBroken ? 0.6 : 1,
                      }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: isBroken ? wobble[i % wobble.length] : 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={
                      "shrink-0 rounded-[5px] border px-3 py-2 font-mono text-[11px] whitespace-nowrap " +
                      (isBroken
                        ? "border-[var(--color-critical)]/35 bg-[var(--color-critical)]/8 text-[var(--color-ink-secondary)]"
                        : "border-[var(--color-line-strong)] bg-[var(--color-panel)] text-[var(--color-ink)]")
                    }
                  >
                    {stage.label}
                    {isFirstBroken && (
                      <span className="ml-1.5 text-[var(--color-critical)]" aria-hidden>
                        ⚠
                      </span>
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <blockquote className="font-display border-l-2 border-[var(--color-critical)]/50 pl-5 text-[clamp(1.15rem,2vw,1.5rem)] leading-snug font-medium text-balance text-[var(--color-ink)]">
              “{problem.quote}”
            </blockquote>
          </Reveal>

          <RevealGroup className="grid gap-3" stagger={0.06}>
            {problem.fragments.map((f) => (
              <motion.div
                key={f}
                variants={revealItem}
                className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-panel)]/60 px-4 py-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ink-faint)]" aria-hidden />
                <span className="text-[13.5px] leading-snug text-[var(--color-ink-secondary)]">{f}</span>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  )
}
