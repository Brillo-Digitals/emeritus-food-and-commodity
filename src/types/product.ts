export type ProductCategory = 'crops' | 'poultry' | 'livestock' | 'fish' | 'other'

export type Availability = 'available' | 'seasonal' | 'on-request'

export type Product = {
  id: string
  slug: string
  name: string
  category: ProductCategory
  description: string
  longDescription?: string
  image: string
  availability: Availability
  featured?: boolean
  unit?: string
}

export type CategoryInfo = {
  id: ProductCategory
  label: string
  description: string
  image: string
}
