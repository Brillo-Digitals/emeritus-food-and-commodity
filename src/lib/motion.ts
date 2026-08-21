import type { Transition, Variants } from 'framer-motion'

// Timing scale. Keep this short list and reuse it everywhere so the whole
// site moves at a small number of consistent speeds rather than ad hoc
// durations per component.
export const duration = {
  micro: 0.2,
  ui: 0.35,
  editorial: 0.6,
  hero: 0.9,
}

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
}

// Quiet fade, no vertical movement. Used for typography choreography where
// a heading or label should simply arrive rather than travel upward.
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.editorial, ease: ease.out } },
}

// Small lift, reserved for hero copy and short standalone lines only. Not to
// be used as the default reveal for every section on the page.
export const liftIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: duration.ui, ease: ease.out } },
}

// Clip-path mask reveal for editorial photography. The image is uncovered
// rather than slid or faded in.
export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  show: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: duration.hero, ease: ease.out },
  },
}

export const imageScale: Variants = {
  hidden: { scale: 1.04 },
  show: { scale: 1, transition: { duration: 1.1, ease: ease.out } },
}

// Small, fast stagger for short groups (three or four items). Never used on
// long lists.
export function smallStagger(delayChildren = 0, staggerChildren = 0.08): Transition {
  return { delayChildren, staggerChildren }
}

export const viewportOnce = { once: true, margin: '-80px' } as const
