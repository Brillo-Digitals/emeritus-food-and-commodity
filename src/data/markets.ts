import type { Market } from '@/types/market'

export const markets: Market[] = [
  {
    id: 'personal',
    label: 'Households',
    problem: 'Finding food that is genuinely fresh and worth trusting for the family table.',
    supply: 'Fresh fish, chicken, eggs, meat, vegetables and farm produce, sold in household quantities.',
    reason: 'Because it comes straight from our farms, you know where it was grown or raised.',
    cta: 'Request Household Supply',
  },
  {
    id: 'restaurant',
    label: 'Restaurants & Caterers',
    problem: 'Kitchens that need consistent quality and supply they can plan around.',
    supply: 'Regular, reliable access to fish, poultry, livestock and fresh produce in commercial quantities.',
    reason: 'Consistency matters more than a single good delivery. We work to keep it dependable.',
    cta: 'Request Supply Information',
  },
  {
    id: 'retail',
    label: 'Retailers',
    problem: 'Stocking shelves with produce that sells because it looks and tastes farm fresh.',
    supply: 'Bulk crops, poultry products and fish suited to retail turnover and shelf life.',
    reason: 'Products move from our farms to you with as few hands in between as possible.',
    cta: 'Request Retail Partnership',
  },
  {
    id: 'wholesale',
    label: 'Wholesalers',
    problem: 'Sourcing volume without losing quality or consistency across a large order.',
    supply: 'Larger volumes of grains, tubers, poultry and livestock, coordinated ahead of time.',
    reason: 'We grow and raise what we supply, so volume orders start from a farm relationship, not a broker chain.',
    cta: 'Discuss a Wholesale Order',
  },
  {
    id: 'business',
    label: 'Businesses',
    problem: 'Organisations that need a dependable food supply partner for staff or operations.',
    supply: 'Scheduled supply of farm produce, poultry, livestock or fish, arranged around your calendar.',
    reason: 'One point of contact for sourcing, instead of managing several unpredictable suppliers.',
    cta: 'Talk to Us About Supply',
  },
  {
    id: 'event',
    label: 'Events',
    problem: 'Events need larger quantities delivered on a fixed date, with no room for disappointment.',
    supply: 'Livestock, poultry, fish and produce for weddings, parties, festive seasons and gatherings.',
    reason: 'We plan ahead with you, so your event date is never a surprise to us.',
    cta: 'Plan Your Event Supply',
  },
]
