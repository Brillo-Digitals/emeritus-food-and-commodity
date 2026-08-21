import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import QuoteCTA from '@/components/home/QuoteCTA'
import { useDocumentMeta } from '@/lib/useDocumentMeta'
import { viewportOnce } from '@/lib/motion'

const beliefs = [
  {
    title: 'Direct is better.',
    body: 'The fewer hands between the farm and the customer, the more control we have over quality.',
  },
  {
    title: 'Care shows in the outcome.',
    body: 'How crops are grown and animals are raised affects what eventually reaches the table.',
  },
  {
    title: 'Consistency builds trust.',
    body: 'A dependable supply matters more to a business than a single impressive delivery.',
  },
]

export default function About() {
  useDocumentMeta(
    'About Us | Emeritus Foods & Commodities',
    'Emeritus Foods & Commodities is a Nigerian farm-owned food and agricultural supply company.'
  )

  return (
    <>
      <section className="pt-10 pb-16 md:pt-16 md:pb-24">
        <PageContainer>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <SectionLabel className="max-w-2xl">
              About Emeritus
            </SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 font-normal text-4xl sm:text-5xl lg:text-6xl text-deep max-w-2xl"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-5 text-muted max-w-lg leading-relaxed"
          >
            Emeritus Foods &amp; Commodities is a Nigerian farm-owned food and agricultural
            supply company. We grow it, we raise it, we supply it.
          </motion.p>
        </PageContainer>
      </section>

      <section className="pb-16 md:pb-24">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <RevealImage>
                <ImageFrame icon="people" ratio="aspect-[4/5]" label="The Emeritus Team" />
              </RevealImage>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="lg:col-span-6"
            >
              <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                <SectionLabel>Our Story</SectionLabel>
              </motion.div>
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-4 font-normal text-3xl text-deep"
              >
                Built around farming, not around selling.
              </motion.h2>
              <motion.p
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mt-5 text-muted leading-relaxed"
              >
                Emeritus is not a marketplace connecting random farmers to customers. We are
                involved in farming ourselves, growing crops and raising poultry, livestock and
                fish on our own farms. What we supply comes from work we do, not stock we buy
                in from elsewhere.
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mt-4 text-muted leading-relaxed"
              >
                That direct relationship with production is what shapes how we operate, from
                the quality of what leaves our farms to how reliably we can supply it.
              </motion.p>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <PageContainer>
          <SectionLabel>What We Believe</SectionLabel>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {beliefs.map((b, i) => (
              <div key={b.title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-deep">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 md:py-24">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <SectionLabel>What We Produce</SectionLabel>
              <h2 className="mt-4 font-normal text-3xl text-deep">
                Crops, poultry, livestock and fish.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Our product range spans grains, tubers, vegetables and fruit from our fields,
                chicken and eggs from our poultry operations, ram and goat from our livestock
                farms, and catfish from our ponds, along with other seasonal farm produce.
              </p>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <RevealImage>
                <ImageFrame icon="harvest" ratio="aspect-[4/3]" label="Farm Produce" />
              </RevealImage>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 md:py-24 bg-deep text-warm-white">
        <PageContainer>
          <div className="max-w-2xl">
            <SectionLabel light>Our Vision</SectionLabel>
            <h2 className="mt-4 font-normal text-3xl sm:text-4xl text-warm-white leading-[1.15]">
              To be a dependable source of farm produce for households and businesses across
              Nigeria, grown and raised on our own terms.
            </h2>
          </div>
        </PageContainer>
      </section>

      <QuoteCTA />
    </>
  )
}
