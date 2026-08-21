import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  size?: 'lg' | 'md' | 'sm'
  light?: boolean
  className?: string
}

const sizes = {
  lg: 'text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]',
  md: 'text-3xl leading-[1.12] sm:text-4xl md:text-5xl',
  sm: 'text-2xl leading-[1.15] sm:text-3xl',
}

export default function SectionHeading({
  children,
  as = 'h2',
  size = 'md',
  light = false,
  className = '',
}: Props) {
  const Tag = as
  return (
    <Tag
      className={`font-normal ${sizes[size]} ${light ? 'text-warm-white' : 'text-deep'} ${className}`}
    >
      {children}
    </Tag>
  )
}
