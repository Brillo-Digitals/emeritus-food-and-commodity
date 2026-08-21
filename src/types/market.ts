export type CustomerType =
  | 'personal'
  | 'restaurant'
  | 'retail'
  | 'wholesale'
  | 'business'
  | 'event'
  | 'other'

export type Market = {
  id: CustomerType
  label: string
  problem: string
  supply: string
  reason: string
  cta: string
}
