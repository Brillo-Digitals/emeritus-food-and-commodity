import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import ImageFrame from '@/components/ui/ImageFrame'
import { markets } from '@/data/markets'
import { useDocumentMeta } from '@/lib/useDocumentMeta'
import { photoLibrary } from '@/data/images'

const imageMap: Record<string, string> = {
  personal: photoLibrary.peoplePortrait.url,
  restaurant: photoLibrary.harvestCrates.url,
  retail: photoLibrary.eggsCarton.url,
  wholesale: photoLibrary.cropsAerial.url,
  business: photoLibrary.cropsHands.url,
  event: photoLibrary.livestockGoat.url,
}

export default function Markets() {
  useDocumentMeta(
    'Markets We Serve | Emeritus Foods & Commodities',
    'Emeritus supplies households, restaurants, retailers, wholesalers, businesses and events directly from our farms.'
  )

  return (
    <>
      <section className="pt-10 pb-14 md:pt-16 md:pb-20">
        <PageContainer>
          <SectionLabel>Markets We Serve</SectionLabel>
          <h1 className="mt-4 font-normal text-4xl sm:text-5xl lg:text-6xl text-deep max-w-2xl">
            From our farms to your table, business or market.
          </h1>
        </PageContainer>
      </section>

      {markets.map((m, i) => (
        <section key={m.id} className={i % 2 === 1 ? 'bg-cream' : ''}>
          <PageContainer className="py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <ImageFrame src={imageMap[m.id]} ratio="aspect-[4/3]" />
              </div>
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="eyebrow">For {m.label}</p>
                <h2 className="mt-3 font-display text-3xl text-deep">{m.problem}</h2>
                <p className="mt-4 text-muted leading-relaxed max-w-lg">{m.supply}</p>
                <p className="mt-3 text-sm text-muted/80 leading-relaxed max-w-lg">{m.reason}</p>
                <div className="mt-7">
                  <Button to="/quote" variant="secondary">
                    {m.cta}
                  </Button>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      ))}
    </>
  )
}
