import { Seo } from "../../components/marketing/Seo"
import { PageHero } from "../../components/marketing/PageHero"
import { terms } from "../../data/legal"
import { Container, Section } from "../../components/ui/Container"
import { Reveal } from "../../components/ui/Reveal"

export default function Terms() {
  return (
    <>
      <Seo title={terms.title} description={terms.intro} />
      <PageHero eyebrow={terms.updated} title={terms.title} body={terms.intro} />
      <Section>
        <Container className="max-w-2xl">
          <div className="space-y-9">
            {terms.sections.map((s) => (
              <Reveal key={s.title}>
                <h2 className="text-[15px] font-semibold text-[var(--color-ink)]">{s.title}</h2>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
