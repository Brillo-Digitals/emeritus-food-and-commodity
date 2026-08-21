import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/products/ProductCard'
import Button from '@/components/ui/Button'
import { products } from '@/data/products'
import { fadeIn, viewportOnce } from '@/lib/motion'

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <SectionLabel>Featured Produce</SectionLabel>
            <SectionHeading className="mt-4">What would you like from the farm?</SectionHeading>
          </div>
          <div className="hidden md:block">
            <Button to="/products" variant="text">
              View All Products
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeIn}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6"
        >
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} reveal />
          ))}
        </motion.div>

        <div className="mt-10 md:hidden">
          <Button to="/products" variant="secondary">
            View All Products
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
