import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import Button from '@/components/ui/Button'
import { photoLibrary } from '@/data/images'

const blocks = ['Crops', 'Poultry', 'Livestock', 'Fish']

export default function FarmStory() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <RevealImage>
              <ImageFrame src={photoLibrary.harvestCrates.url} ratio="aspect-[16/11]" label="Emeritus Farms" />
            </RevealImage>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionLabel>The Emeritus Difference</SectionLabel>
            <h2 className="mt-4 font-normal text-3xl sm:text-4xl leading-[1.12] text-deep">
              Grown here.
              <br />
              Raised here.
              <br />
              Supplied from here.
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed">
              Emeritus is built around farming and direct supply. From crops and vegetables to
              poultry, livestock and fish, our work begins at the farm and moves toward the
              people and businesses that need it.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {blocks.map((b) => (
                <div key={b} className="flex items-center gap-2.5 py-2 border-b border-hairline">
                  <span className="h-1.5 w-1.5 rounded-full bg-emeritus shrink-0" />
                  <span className="text-sm font-semibold tracking-wide text-body uppercase">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button to="/farms" variant="secondary">
                Explore Our Farms
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
