import { useState } from 'react'
import { stockImages, buildImageUrl, type ImageKey } from '@/data/images'

export type IconKey = ImageKey

type Props = {
  icon?: IconKey
  label?: string
  ratio?: string
  className?: string
  tone?: 'deep' | 'cream'
  /** Optional explicit image URL override; falls back to the icon's stock photo. */
  src?: string
  alt?: string
}

export default function ImageFrame({
  icon = 'general',
  label,
  ratio = 'aspect-[4/5]',
  className = '',
  tone = 'deep',
  src,
  alt,
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const isDeep = tone === 'deep'
  const source = src ?? stockImages[icon].url

  return (
    <div
      className={`relative overflow-hidden ${ratio} ${className}`}
      style={{ backgroundColor: isDeep ? 'var(--color-deep)' : 'var(--color-cream)' }}
    >
      <img
        src={buildImageUrl(source, 1400, 80)}
        srcSet={`${buildImageUrl(source, 700, 75)} 700w, ${buildImageUrl(source, 1100, 78)} 1100w, ${buildImageUrl(source, 1600, 80)} 1600w`}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={alt ?? label ?? ''}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDeep
            ? 'linear-gradient(180deg, rgba(6,42,24,0) 55%, rgba(6,42,24,0.55) 100%)'
            : 'linear-gradient(180deg, rgba(16,37,26,0) 60%, rgba(16,37,26,0.35) 100%)',
        }}
      />

      {label && (
        <div className="absolute bottom-3 left-3 right-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-warm-white/90">
          {label}
        </div>
      )}
    </div>
  )
}
