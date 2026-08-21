import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import { categories } from '@/data/categories'
import { photoLibrary } from '@/data/images'
import { fadeIn, viewportOnce } from '@/lib/motion'

const images = [
  photoLibrary.cropsHands.url,
  photoLibrary.poultryChicken.url,
  photoLibrary.livestockGoat.url,
  photoLibrary.fishCatfish.url,
]

export default function ProductCategories() {
  const [primary, ...rest] = categories

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <SectionLabel>What We Produce</SectionLabel>
            <SectionHeading className="mt-4">
              From crops in our fields to livestock and fish raised on our farms.
            </SectionHeading>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Four categories, one farm-direct model: grown or raised by us, then supplied to
            you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          <div className="lg:col-span-7">
            <Link to="/products" className="group block">
              <RevealImage>
                <ImageFrame
                  src={images[0]}
                  ratio="aspect-[16/11]"
                  className="transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </RevealImage>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={fadeIn}
                className="mt-5 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-deep">{primary.label}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-md">
                    {primary.description}
                  </p>
                </div>
                <span className="shrink-0 mt-2 text-forest transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeIn}
            className="lg:col-span-5 flex flex-col divide-y divide-hairline lg:border-t lg:border-hairline"
          >
            {rest.map((cat, i) => (
              <div key={cat.id} className="py-5 first:pt-0 lg:first:pt-5">
                <Link to="/products" className="group flex items-center gap-5">
                  <ImageFrame
                    src={images[i + 1]}
                    ratio="aspect-square"
                    className="w-20 shrink-0 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-deep">{cat.label}</h3>
                    <p className="mt-1 text-sm text-muted leading-snug line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
