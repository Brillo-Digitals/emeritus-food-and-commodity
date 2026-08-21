import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import Button from '@/components/ui/Button'

export default function QuoteCTA() {
  return (
    <section className="py-16 md:py-24 bg-forest text-warm-white">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.12] text-warm-white">
              What do you need from the farm?
            </h2>
            <p className="mt-4 text-warm-white/70 leading-relaxed">
              Tell us what you're looking for, how much you need and where you're located.
              We'll get back to you with availability and pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button to="/quote" variant="secondary" className="!border-warm-white/40 !text-warm-white hover:!bg-warm-white/10">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
