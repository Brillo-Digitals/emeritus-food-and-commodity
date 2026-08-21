import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'text'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  arrow?: boolean
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  to?: undefined
}

type ButtonAsRouterLink = CommonProps & {
  to: string
  href?: undefined
}

type Props = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const base =
  'inline-flex items-center gap-2 font-semibold text-sm tracking-wide transition-all duration-300 rounded-md'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-warm-white px-6 py-3.5 hover:bg-deep',
  secondary:
    'bg-transparent border border-deep/70 text-deep px-6 py-3.5 hover:border-deep hover:bg-deep/5',
  text: 'text-forest px-0 py-0 hover:text-deep',
}

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  )
}

export default function Button(props: Props) {
  const { children, variant = 'primary', className = '', arrow = true } = props
  const classes = `group ${base} ${variants[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
        {arrow && <ArrowGlyph />}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const isExternal = props.href.startsWith('http')
    return (
      <a
        href={props.href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
        {arrow && <ArrowGlyph />}
      </a>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {arrow && <ArrowGlyph />}
    </button>
  )
}
