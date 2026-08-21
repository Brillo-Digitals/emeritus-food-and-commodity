const options = [
  { id: 'personal', label: 'Personal' },
  { id: 'restaurant', label: 'Restaurant / Caterer' },
  { id: 'retail', label: 'Retail' },
  { id: 'wholesale', label: 'Wholesale' },
  { id: 'business', label: 'Business' },
  { id: 'event', label: 'Event' },
  { id: 'other', label: 'Other' },
]

type Props = {
  value: string
  onChange: (val: string) => void
}

export default function CustomerTypeSelector({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-md text-sm font-semibold border transition-colors ${
              isActive
                ? 'bg-forest text-warm-white border-forest'
                : 'bg-transparent text-body border-hairline hover:border-forest/50'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
