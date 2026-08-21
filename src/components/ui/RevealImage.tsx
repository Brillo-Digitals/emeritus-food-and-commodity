import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { maskReveal, imageScale, viewportOnce, duration, ease } from '@/lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

/**
 * Wrap an <ImageFrame /> (or any image) in this to get the site's signature
 * editorial reveal: the frame is masked closed, then uncovers on scroll
 * while the photo underneath settles from a very slight zoom. This replaces
 * plain opacity/y fades for anything where the photograph is the point.
 */
export default function RevealImage({ children, className = '', delay = 0, once = true }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={once ? viewportOnce : { margin: '-80px' }}
      variants={maskReveal}
      transition={{ duration: duration.hero, ease: ease.out, delay }}
      className={className}
    >
      <motion.div variants={imageScale}>
        {children}
      </motion.div>
    </motion.div>
  )
}
