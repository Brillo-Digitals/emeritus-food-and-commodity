import { useState, type FormEvent } from 'react'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { company } from '@/data/company'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

const details = [
  { label: 'Phone', value: company.phone },
  { label: 'WhatsApp', value: company.whatsapp },
  { label: 'Email', value: company.email },
  { label: 'Location', value: company.location },
  { label: 'Business Hours', value: company.hours },
]

export default function Contact() {
  useDocumentMeta(
    'Contact Us | Emeritus Foods & Commodities',
    'Get in touch with Emeritus Foods & Commodities by phone, WhatsApp, email or our contact form.'
  )

  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="py-14 md:py-20">
      <PageContainer>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-4 font-normal text-4xl sm:text-5xl text-deep max-w-xl">
          Get in Touch
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <dl className="divide-y divide-hairline border-t border-hairline">
              {details.map((d) => (
                <div key={d.label} className="py-5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted shrink-0">
                    {d.label}
                  </dt>
                  <dd className="text-sm text-body text-right">
                    {d.label === 'Phone' || d.label === 'WhatsApp' ? (
                      <a href={company.whatsappLink} className="hover:text-forest transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Button to="/quote" variant="primary">
                Request a Quote
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-cream rounded-md p-8 md:p-10">
                <p className="eyebrow">Message Sent</p>
                <h3 className="mt-3 font-display text-2xl text-deep">Thank you for reaching out.</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-body mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 text-sm focus:border-forest transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-body mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 text-sm focus:border-forest transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-body mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 text-sm focus:border-forest transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-body mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 text-sm focus:border-forest transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-forest text-warm-white font-semibold text-sm px-7 py-4 rounded-md hover:bg-deep transition-colors"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
