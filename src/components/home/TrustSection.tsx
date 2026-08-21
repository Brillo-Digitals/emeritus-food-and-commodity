import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import { photoLibrary } from '@/data/images'

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <PageContainer>
        <div className="max-w-xl">
          <SectionLabel>A Closer Look</SectionLabel>
          <SectionHeading className="mt-4">Where it actually comes from.</SectionHeading>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <RevealImage>
              <ImageFrame src={photoLibrary.livestockGoat.url} ratio="aspect-[4/3] md:aspect-[16/12]" label="Our Farms" />
            </RevealImage>
            <p className="mt-3 text-sm text-muted">
              Where our crops, poultry, livestock and fish are grown and raised.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <RevealImage delay={0.08}>
                <ImageFrame src={photoLibrary.peoplePortrait.url} ratio="aspect-[16/8]" label="Our People" />
              </RevealImage>
              <p className="mt-3 text-sm text-muted">
                The hands that grow, raise, harvest and prepare what we supply.
              </p>
            </div>

            <div>
              <RevealImage delay={0.14}>
                <ImageFrame src={photoLibrary.eggsCarton.url} ratio="aspect-[16/8]" label="Our Process" />
              </RevealImage>
              <p className="mt-3 text-sm text-muted">
                How produce moves from field and pen to the point of supply.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
