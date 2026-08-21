import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import QuoteForm from '@/components/quote/QuoteForm'
import { company } from '@/data/company'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

export default function Quote() {
  useDocumentMeta(
    'Request a Quote | Emeritus Foods & Commodities',
    'Tell us what you need from the farm. We will get back to you with availability and pricing.'
  )

  return (
    <div className="py-14 md:py-20">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Request a Quote</SectionLabel>
            <h1 className="mt-4 font-normal text-4xl sm:text-5xl text-deep leading-[1.08]">
              What do you need from the farm?
            </h1>
            <p className="mt-5 text-muted leading-relaxed max-w-sm">
              Tell us what you're looking for, how much you need and where you're located.
              We'll get back to you with availability and pricing.
            </p>

            <div className="mt-10 pt-8 border-t border-hairline space-y-2 text-sm text-muted">
              <p className="text-body font-semibold">Prefer to talk directly?</p>
              <p>
                <a href={company.whatsappLink} className="hover:text-forest transition-colors">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={company.whatsappLink} className="hover:text-forest transition-colors">
                  {company.whatsapp} (WhatsApp)
                </a>
              </p>
              <p>{company.email}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
