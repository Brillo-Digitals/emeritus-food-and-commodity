import { Link } from 'react-router-dom'
import ImageFrame from '@/components/ui/ImageFrame'
import RevealImage from '@/components/ui/RevealImage'
import Badge from '@/components/ui/Badge'
import type { Product } from '@/types/product'
import type { IconKey } from '@/components/ui/ImageFrame'

const categoryLabels: Record<string, string> = {
  crops: 'Crops & Produce',
  poultry: 'Poultry',
  livestock: 'Livestock',
  fish: 'Fish & Aquaculture',
  other: 'Other Produce',
}

const iconMap: Record<string, IconKey> = {
  crops: 'crops',
  poultry: 'poultry',
  livestock: 'livestock',
  fish: 'fish',
  other: 'general',
}

export default function ProductCard({
  product,
  reveal = false,
}: {
  product: Product
  /** Use the editorial mask reveal (featured contexts). Catalog grids stay restrained. */
  reveal?: boolean
}) {
  const image = (
    <ImageFrame
      icon={iconMap[product.category]}
      ratio="aspect-[4/5]"
      className="transition-transform duration-500 group-hover:scale-[1.015]"
    />
  )

  return (
    <Link to={`/products/${product.slug}`} className="group block">
      {reveal ? <RevealImage>{image}</RevealImage> : image}
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {categoryLabels[product.category]}
        </p>
        <h3 className="mt-1.5 font-display text-xl text-deep">{product.name}</h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Badge status={product.availability} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
            View Product
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
