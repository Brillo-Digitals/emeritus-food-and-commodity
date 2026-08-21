import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ImageFrame from '@/components/ui/ImageFrame'
import type { IconKey } from '@/components/ui/ImageFrame'

const gallery: { icon: IconKey; label: string }[] = [
  { icon: 'crops', label: 'Crops & Produce' },
  { icon: 'poultry', label: 'Poultry' },
  { icon: 'livestock', label: 'Livestock' },
  { icon: 'fish', label: 'Fish & Aquaculture' },
  { icon: 'harvest', label: 'Harvest' },
  { icon: 'people', label: 'Our People' },
]

export default function FarmGallery() {
  return (
    <section className="py-16 md:py-24">
      <PageContainer>
        <SectionLabel>Farm Gallery</SectionLabel>
        <SectionHeading className="mt-4">What we grow and raise.</SectionHeading>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {gallery.map((g, i) => (
            <ImageFrame
              key={g.label}
              icon={g.icon}
              label={g.label}
              ratio={i === 0 ? 'aspect-[4/5] md:col-span-2 md:aspect-[8/5]' : 'aspect-[4/5]'}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
