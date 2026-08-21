import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { processStages } from '@/data/farms'

export default function FarmProcess() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <PageContainer>
        <SectionLabel>Farm Practices</SectionLabel>
        <SectionHeading className="mt-4">From cultivation to supply.</SectionHeading>

        <div className="mt-12 space-y-0">
          {processStages.map((stage) => (
            <div
              key={stage.index}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-hairline"
            >
              <span className="font-display text-2xl text-gold sm:w-16 shrink-0">{stage.index}</span>
              <h3 className="font-display text-2xl text-deep sm:w-48 shrink-0">{stage.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md">{stage.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
