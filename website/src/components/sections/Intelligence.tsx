import { intelligence } from "../../data/home"
import { Container, Section } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { DashboardMockup } from "../mockups/DashboardMockup"
import { ReportLibraryMockup } from "../mockups/ReportLibraryMockup"

export function Intelligence() {
  return (
    <Section id="intelligence">
      <Container>
        <SectionHeading eyebrow={intelligence.eyebrow} title={intelligence.headline} body={intelligence.body} tone="solar" size="lg" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <Reveal>
            <DashboardMockup />
          </Reveal>
          <Reveal delay={0.12}>
            <ReportLibraryMockup />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
