import type { CategoryInfo } from '@/types/product'

export const categories: CategoryInfo[] = [
  {
    id: 'crops',
    label: 'Crops & Produce',
    description: 'Grains, tubers, vegetables and fruit grown across our fields.',
    image: 'crops',
  },
  {
    id: 'poultry',
    label: 'Poultry',
    description: 'Chicken, eggs and other poultry products raised on our farms.',
    image: 'poultry',
  },
  {
    id: 'livestock',
    label: 'Livestock',
    description: 'Ram, goat and other livestock reared for household and event supply.',
    image: 'livestock',
  },
  {
    id: 'fish',
    label: 'Fish & Aquaculture',
    description: 'Catfish and other fish raised in our ponds and supplied fresh.',
    image: 'fish',
  },
]
