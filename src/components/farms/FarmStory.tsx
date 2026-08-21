import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { farmLocations } from '@/data/farms'
import Button from '@/components/ui/Button'

export default function FarmStory() {
  return (
    <section className="py-16 md:py-24">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Our Locations</SectionLabel>
            <SectionHeading className="mt-4">Farming across Nigeria.</SectionHeading>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              Our operations are organised around what each farm grows or raises, so we can
              give proper attention to crops, poultry, livestock and fish.
            </p>
            <div className="mt-8">
              <Button to="/quote" variant="secondary">
                Ask About a Location
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-hairline border-t border-hairline">
              {farmLocations.map((farm) => (
                <div key={farm.id} className="flex items-center justify-between py-5">
                  <div>
                    <p className="font-display text-lg text-deep">{farm.name}</p>
                    <p className="text-sm text-muted mt-0.5">{farm.state}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emeritus bg-emeritus/10 px-3 py-1.5 rounded-md">
                    {farm.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
