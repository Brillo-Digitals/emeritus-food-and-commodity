import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import { photoLibrary } from '@/data/images'

export default function FarmHero() {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24">
      <PageContainer>
        <SectionLabel>Our Farms</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-4 font-normal text-4xl sm:text-5xl lg:text-6xl text-deep max-w-2xl"
        >
          Where it all begins.
        </motion.h1>
        <p className="mt-5 text-muted max-w-lg leading-relaxed">
          Our farms are where the Emeritus story starts, long before anything reaches a
          customer.
        </p>

        <div className="mt-10">
          <RevealImage delay={0.1}>
            <ImageFrame src={photoLibrary.cropsHands.url} ratio="aspect-[16/9]" label="Emeritus Farms, Nigeria" />
          </RevealImage>
        </div>
      </PageContainer>
    </section>
  )
}
