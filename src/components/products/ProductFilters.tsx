type Props = {
  active: string
  onChange: (val: string) => void
}

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'crops', label: 'Crops' },
  { id: 'poultry', label: 'Poultry' },
  { id: 'livestock', label: 'Livestock' },
  { id: 'fish', label: 'Fish' },
  { id: 'other', label: 'Other Produce' },
]

export default function ProductFilters({ active, onChange }: Props) {
  return (
    <div
      className="flex gap-2 overflow-x-auto scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap"
      role="tablist"
      aria-label="Filter products by category"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`shrink-0 px-4 py-2 rounded-md text-sm font-semibold transition-colors border ${
              isActive
                ? 'bg-forest text-warm-white border-forest'
                : 'bg-transparent text-body border-hairline hover:border-forest/50'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
