type Status = 'available' | 'seasonal' | 'on-request'

const labels: Record<Status, string> = {
  available: 'Available',
  seasonal: 'Seasonal',
  'on-request': 'On Request',
}

const dot: Record<Status, string> = {
  available: 'bg-emeritus',
  seasonal: 'bg-gold',
  'on-request': 'bg-muted',
}

export default function Badge({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-body">
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} aria-hidden="true" />
      {labels[status]}
    </span>
  )
}
