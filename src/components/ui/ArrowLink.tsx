import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: string
  className?: string
}

export default function ArrowLink({ to, children, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-deep transition-colors ${className}`}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  )
}
