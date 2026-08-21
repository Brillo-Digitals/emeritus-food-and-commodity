import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { viewportOnce } from '@/lib/motion'

const reasons = [
  {
    title: 'Farm Direct',
    body: 'Products come from our own farming operations, not a chain of middlemen.',
  },
  {
    title: 'Quality',
    body: 'We care about the quality of what leaves the farm, from seed and stock to supply.',
  },
  {
    title: 'Reliability',
    body: 'We aim to provide dependable supply that customers and businesses can plan around.',
  },
  {
    title: 'Variety',
    body: 'Crops, poultry, livestock, fish and other farm produce, all from one source.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

// Typography choreography: number, title and body arrive as a sequence of
// opacity steps within each block, not a block that travels upward.
const line = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

export default function WhyEmeritus() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel>Why Emeritus</SectionLabel>
            <SectionHeading className="mt-4">Close to the source, from start to supply.</SectionHeading>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={container}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          >
            {reasons.map((r) => (
              <motion.div key={r.title} variants={container} className="pb-6 border-b border-hairline">
                <motion.span variants={line} className="eyebrow block">
                  0{reasons.indexOf(r) + 1}
                </motion.span>
                <motion.h3 variants={line} className="mt-3 font-display text-2xl text-deep">
                  {r.title}
                </motion.h3>
                <motion.p variants={line} className="mt-2 text-sm text-muted leading-relaxed">
                  {r.body}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
