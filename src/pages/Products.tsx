import { useMemo, useState } from 'react'
import PageContainer from '@/components/layout/PageContainer'
import SectionLabel from '@/components/ui/SectionLabel'
import ProductFilters from '@/components/products/ProductFilters'
import ProductGrid from '@/components/products/ProductGrid'
import { products } from '@/data/products'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

export default function Products() {
  useDocumentMeta(
    'Our Products | Emeritus Foods & Commodities',
    'Browse crops, poultry, livestock and fish supplied directly from Emeritus farms in Nigeria.'
  )

  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    if (active === 'all') return products
    return products.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="py-14 md:py-20">
      <PageContainer>
        <SectionLabel>Our Products</SectionLabel>
        <h1 className="mt-4 font-normal text-4xl sm:text-5xl text-deep max-w-2xl">
          What would you like from the farm?
        </h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Crops, poultry, livestock, fish and other farm produce, supplied directly from our
          farms according to availability.
        </p>

        <div className="mt-10">
          <ProductFilters active={active} onChange={setActive} />
        </div>

        <div className="mt-10">
          <ProductGrid products={filtered} />
        </div>
      </PageContainer>
    </div>
  )
}
