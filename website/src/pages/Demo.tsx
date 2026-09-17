import { useState, type FormEvent } from "react"
import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { demo } from "../data/company"
import { Container, Section } from "../components/ui/Container"
import { CornerFrame } from "../components/ui/CornerFrame"
import { Reveal } from "../components/ui/Reveal"
import { Field, TextInput, TextArea, Select, FormSuccess, SubmitButton } from "../components/marketing/form"

export default function Demo() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Front-end only for this program — no backend wired up yet.
    setSubmitted(true)
  }

  return (
    <>
      <Seo title="Book a demo" description={demo.sub} />
      <PageHero eyebrow={demo.eyebrow} title={demo.headline} body={demo.sub} />

      <Section>
        <Container className="max-w-2xl">
          <Reveal>
            {submitted ? (
              <FormSuccess
                title="Request received"
                body="This is a front-end draft — nothing was sent yet, but in production you'd hear from our team within one business day."
              />
            ) : (
              <CornerFrame tone="solar" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-7 sm:p-9">
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="demo-name" required>
                    <TextInput id="demo-name" name="name" required placeholder="Your name" />
                  </Field>
                  <Field label="Work email" htmlFor="demo-email" required>
                    <TextInput id="demo-email" name="email" type="email" required placeholder="you@company.com" />
                  </Field>
                  <Field label="Company" htmlFor="demo-company" required>
                    <TextInput id="demo-company" name="company" required placeholder="Company name" />
                  </Field>
                  <Field label="Team size" htmlFor="demo-size">
                    <Select id="demo-size" name="teamSize" defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>1–12 seats</option>
                      <option>13–40 seats</option>
                      <option>40+ seats</option>
                    </Select>
                  </Field>
                  <Field label="What's your current setup?" htmlFor="demo-setup" required>
                    <Select id="demo-setup" name="setup" required defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Spreadsheets & chat groups</option>
                      <option>A generic CRM</option>
                      <option>Another solar-specific tool</option>
                      <option>Something else</option>
                    </Select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Anything we should know before the call?" htmlFor="demo-notes">
                      <TextArea id="demo-notes" name="notes" rows={4} placeholder="Team structure, current pain points, timeline…" />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <SubmitButton className="w-full justify-center">Request a demo</SubmitButton>
                    <p className="mt-3 text-center text-[11.5px] text-[var(--color-ink-faint)]">
                      Front-end draft — no data leaves this page yet.
                    </p>
                  </div>
                </form>
              </CornerFrame>
            )}
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
