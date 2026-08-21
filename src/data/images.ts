export type ImageKey =
  | 'crops'
  | 'poultry'
  | 'livestock'
  | 'fish'
  | 'farm'
  | 'harvest'
  | 'people'
  | 'supply'
  | 'general'

// Default photo per product/content category. Used by components that render
// one image per category (product cards, category tiles) where visual
// consistency with the category is more important than variety.
export const stockImages: Record<ImageKey, { url: string; credit: string }> = {
  crops: {
    url: 'https://images.unsplash.com/photo-1719921781743-23133491b844',
    credit: 'Francesco Ungaro / Unsplash',
  },
  farm: {
    url: 'https://images.unsplash.com/photo-1719921781743-23133491b844',
    credit: 'Francesco Ungaro / Unsplash',
  },
  poultry: {
    url: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0',
    credit: 'James Wainscoat / Unsplash',
  },
  livestock: {
    url: 'https://images.unsplash.com/photo-1719319431983-4ba1ff8bfd04',
    credit: 'Jim / Unsplash',
  },
  fish: {
    url: 'https://images.unsplash.com/photo-1515735543535-12664d2453f8',
    credit: 'Milos Prelevic / Unsplash',
  },
  harvest: {
    url: 'https://images.unsplash.com/photo-1753172433718-d0c2a99443d8',
    credit: 'Serghey Savchuk / Unsplash',
  },
  people: {
    url: 'https://images.unsplash.com/photo-1712473047475-519e90f2b35b',
    credit: 'Annie Spratt / Unsplash',
  },
  supply: {
    url: 'https://images.unsplash.com/photo-1660224286794-fc173fa9295c',
    credit: 'Erin Larson / Unsplash',
  },
  general: {
    url: 'https://images.unsplash.com/photo-1752917680382-3ac274d84103',
    credit: 'Bade Saba / Unsplash',
  },
}

// A wider library used for one-off, section-specific photography so that the
// hero, farm story, gallery and trust sections do not all reuse the same
// handful of category thumbnails. Each key is used in at most one place per
// page.
export const photoLibrary = {
  cropsAerial: {
    url: 'https://images.unsplash.com/photo-1719921781743-23133491b844',
    credit: 'Francesco Ungaro / Unsplash',
  },
  cropsHands: {
    url: 'https://images.unsplash.com/photo-1752917680382-3ac274d84103',
    credit: 'Bade Saba / Unsplash',
  },
  poultryChicken: {
    url: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0',
    credit: 'James Wainscoat / Unsplash',
  },
  livestockGoat: {
    url: 'https://images.unsplash.com/photo-1719319431983-4ba1ff8bfd04',
    credit: 'Jim / Unsplash',
  },
  fishCatfish: {
    url: 'https://images.unsplash.com/photo-1515735543535-12664d2453f8',
    credit: 'Milos Prelevic / Unsplash',
  },
  harvestCrates: {
    url: 'https://images.unsplash.com/photo-1753172433718-d0c2a99443d8',
    credit: 'Serghey Savchuk / Unsplash',
  },
  peoplePortrait: {
    url: 'https://images.unsplash.com/photo-1712473047475-519e90f2b35b',
    credit: 'Annie Spratt / Unsplash',
  },
  eggsCarton: {
    url: 'https://images.unsplash.com/photo-1660224286794-fc173fa9295c',
    credit: 'Erin Larson / Unsplash',
  },
} as const

export function buildImageUrl(base: string, width = 1200, quality = 80) {
  return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`
}
