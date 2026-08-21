type Props = {
  children: string
  light?: boolean
  className?: string
}

export default function SectionLabel({
  children,
  light = false,
  className = '',
}: Props) {
  return (
    <div className={`w-fit ${className}`}>
      <span className={`eyebrow ${light ? 'text-soft-gold' : ''}`}>
        {children}
      </span>
    </div>
  )
}
