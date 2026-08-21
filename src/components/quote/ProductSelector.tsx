const options = [
  { id: 'crops', label: 'Crops & Produce' },
  { id: 'poultry', label: 'Poultry' },
  { id: 'livestock', label: 'Livestock' },
  { id: 'fish', label: 'Fish & Aquaculture' },
  { id: 'other', label: 'Other Produce' },
]

type Props = {
  value: string
  onChange: (val: string) => void
}

export default function ProductSelector({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 text-sm text-body focus:border-forest transition-colors"
    >
      <option value="" disabled>
        Select a category
      </option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
