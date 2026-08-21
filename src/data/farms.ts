import type { ProcessStage, FarmLocation } from '@/types/farm'

export const processStages: ProcessStage[] = [
  {
    index: '01',
    title: 'Grow',
    description: 'We cultivate crops and farm produce across our fields, season by season.',
  },
  {
    index: '02',
    title: 'Raise',
    description: 'We raise poultry, livestock and fish with daily care on our own farms.',
  },
  {
    index: '03',
    title: 'Harvest',
    description: 'Products are prepared for supply according to their nature and customer requirements.',
  },
  {
    index: '04',
    title: 'Supply',
    description: 'We connect our farm products directly with the people and businesses that need them.',
  },
]

export const farmLocations: FarmLocation[] = [
  {
    id: 'f1',
    name: 'Emeritus Farm & Produce',
    state: 'Kwara State',
    focus: 'Crops & Produce',
  },
  {
    id: 'f2',
    name: 'Emeritus Poultry Farm',
    state: 'Kwara State',
    focus: 'Poultry',
  },
  {
    id: 'f3',
    name: 'Emeritus Fish Farm',
    state: 'Kwara State',
    focus: 'Fish & Aquaculture',
  },
]
