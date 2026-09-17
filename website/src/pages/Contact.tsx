import { useState, type FormEvent } from "react"
import { Seo } from "../components/marketing/Seo"
import { PageHero } from "../components/marketing/PageHero"
import { contact } from "../data/company"
import { Container, Section } from "../components/ui/Container"
import { CornerFrame } from "../components/ui/CornerFrame"
import { Reveal } from "../components/ui/Reveal"
import { Field, TextInput, TextArea, Select, FormSuccess, SubmitButton } from "../components/marketing/form"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Seo title="Contact" description={contact.sub} />
      <PageHero eyebrow={contact.eyebrow} title={contact.headline} body={contact.sub} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <h2 className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-signal)] uppercase">Reach us directly</h2>
              <dl className="mt-5 space-y-4">
                {contact.channels.map((c) => (
                  <div key={c.label} className="border-b border-[var(--color-line)] pb-4 last:border-0">
                    <dt className="text-[12px] text-[var(--color-ink-muted)]">{c.label}</dt>
                    <dd className="mt-1 font-mono text-[13.5px] text-[var(--color-ink)]">{c.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{contact.officeNote}</p>
            </Reveal>

            <Reveal delay={0.1}>
              {submitted ? (
                <FormSuccess
                  title="Message received"
                  body="This is a front-end draft — nothing was sent yet, but in production our team would follow up shortly."
                />
              ) : (
                <CornerFrame tone="signal" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-7 sm:p-9">
                  <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="contact-name" required>
                      <TextInput id="contact-name" name="name" required placeholder="Your name" />
                    </Field>
                    <Field label="Work email" htmlFor="contact-email" required>
                      <TextInput id="contact-email" name="email" type="email" required placeholder="you@company.com" />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="I'm reaching out about" htmlFor="contact-topic">
                        <Select id="contact-topic" name="topic" defaultValue="Sales">
                          <option>Sales</option>
                          <option>Support</option>
                          <option>Security / compliance</option>
                          <option>Partnerships</option>
                          <option>Something else</option>
                        </Select>
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="Message" htmlFor="contact-message" required>
                        <TextArea id="contact-message" name="message" rows={5} required placeholder="How can we help?" />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <SubmitButton className="w-full justify-center">Send message</SubmitButton>
                      <p className="mt-3 text-center text-[11.5px] text-[var(--color-ink-faint)]">
                        Front-end draft — no data leaves this page yet.
                      </p>
                    </div>
                  </form>
                </CornerFrame>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
