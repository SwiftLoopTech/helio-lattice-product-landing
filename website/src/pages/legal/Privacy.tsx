import { Seo } from "../../components/marketing/Seo"
import { PageHero } from "../../components/marketing/PageHero"
import { privacy } from "../../data/legal"
import { Container, Section } from "../../components/ui/Container"
import { Reveal } from "../../components/ui/Reveal"

export default function Privacy() {
  return (
    <>
      <Seo title={privacy.title} description={privacy.intro} />
      <PageHero eyebrow={privacy.updated} title={privacy.title} body={privacy.intro} />
      <Section>
        <Container className="max-w-2xl">
          <div className="space-y-9">
            {privacy.sections.map((s) => (
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
