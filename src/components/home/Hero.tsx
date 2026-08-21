import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import Button from '@/components/ui/Button'
import ImageFrame from '@/components/ui/ImageFrame'
import { photoLibrary } from '@/data/images'
import { ease } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative bg-warm-white overflow-hidden">
      <PageContainer className="pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: ease.out }}
              className="eyebrow"
            >
              Emeritus Foods &amp; Commodities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: ease.out }}
              className="mt-5 font-normal text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] text-deep"
            >
              From Farm
              <br />
              to Market.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: ease.out }}
              className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-md"
            >
              We grow, raise and supply quality food, livestock, fish and farm produce
              directly from our farms in Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: ease.out }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button to="/products" variant="primary">
                Explore Our Products
              </Button>
              <Button to="/quote" variant="secondary">
                Request a Quote
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 0.9, ease: ease.out, delay: 0.1 }}
              >
                <motion.div
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: ease.out, delay: 0.1 }}
                >
                  <ImageFrame
                    src={photoLibrary.cropsAerial.url}
                    label="Emeritus Farms, Nigeria"
                    ratio="aspect-[5/4] lg:aspect-[6/5]"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75, ease: ease.out }}
                className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 bg-deep text-warm-white text-xs font-semibold uppercase tracking-wide px-4 py-2.5"
              >
                Grown in Nigeria
              </motion.div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
