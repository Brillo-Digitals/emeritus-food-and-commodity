import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageContainer from '@/components/layout/PageContainer'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ProductGrid from '@/components/products/ProductGrid'
import { products } from '@/data/products'
import { useDocumentMeta } from '@/lib/useDocumentMeta'
import type { IconKey } from '@/components/ui/ImageFrame'

const iconMap: Record<string, IconKey> = {
  crops: 'crops',
  poultry: 'poultry',
  livestock: 'livestock',
  fish: 'fish',
  other: 'general',
}

const categoryLabels: Record<string, string> = {
  crops: 'Crops & Produce',
  poultry: 'Poultry',
  livestock: 'Livestock',
  fish: 'Fish & Aquaculture',
  other: 'Other Produce',
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta(
    product ? `${product.name} | Emeritus Foods & Commodities` : 'Product | Emeritus',
    product?.description
  )

  if (!product) return <Navigate to="/products" replace />

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="py-10 md:py-16">
      <PageContainer>
        <nav className="text-sm text-muted flex items-center gap-2" aria-label="Breadcrumb">
          <Link to="/products" className="hover:text-forest">
            Products
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-body">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <RevealImage>
              <ImageFrame
                icon={iconMap[product.category]}
                ratio="aspect-[4/5]"
                label={categoryLabels[product.category]}
              />
            </RevealImage>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <p className="eyebrow">{categoryLabels[product.category]}</p>
            <h1 className="mt-3 font-normal text-4xl text-deep">{product.name}</h1>

            <div className="mt-4 flex items-center gap-4">
              <Badge status={product.availability} />
              {product.unit && <span className="text-sm text-muted">{product.unit}</span>}
            </div>

            <p className="mt-6 text-base text-muted leading-relaxed max-w-lg">
              {product.longDescription ?? product.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/quote" variant="primary">
                Check Availability
              </Button>
              <Button to="/quote" variant="secondary">
                Request Price
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-hairline text-sm text-muted leading-relaxed">
              Prices vary with season and volume. Reach out with your quantity and location and
              we'll confirm current availability and pricing.
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 pt-14 border-t border-hairline">
            <p className="eyebrow">You May Also Like</p>
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  )
}
