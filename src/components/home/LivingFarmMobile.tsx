import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const stages = ['Crops', 'Poultry', 'Livestock', 'Aquaculture', 'Emeritus Farm', 'Harvest', 'Supply', 'Market']

export default function LivingFarmMobile() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const lineScale = useTransform(smooth, [0.04, 0.94], [0, 1])

  return (
    <div ref={containerRef} className="relative" style={{ height: '260vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-deep flex flex-col justify-center px-8">
        <div className="mb-10">
          <p className="eyebrow text-soft-gold">The Emeritus Farm System</p>
          <h2 className="mt-3 font-display text-3xl text-warm-white leading-tight">
            Everything starts
            <br />
            at the farm.
          </h2>
        </div>

        <div className="relative pl-7">
          <div className="absolute left-[3px] top-1 bottom-1 w-px bg-warm-white/15" aria-hidden="true" />
          <motion.div
            className="absolute left-[3px] top-1 w-px bg-soft-gold origin-top"
            style={{ scaleY: lineScale, height: 'calc(100% - 8px)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {stages.map((stage, i) => (
              <StageRow key={stage} index={i} total={stages.length} label={stage} progress={smooth} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StageRow({
  index,
  total,
  label,
  progress,
}: {
  index: number
  total: number
  label: string
  progress: import('framer-motion').MotionValue<number>
}) {
  const start = 0.08 + (index / total) * 0.8
  const end = start + 0.09
  const opacity = useTransform(progress, [start, end], [0.25, 1])
  const dotScale = useTransform(progress, [start, end], [0.6, 1])
  const isMilestone = label === 'Emeritus Farm'

  return (
    <motion.div style={{ opacity }} className="relative flex items-center gap-4">
      <motion.span
        style={{ scale: dotScale }}
        className={`absolute -left-7 h-2 w-2 rounded-full ${
          isMilestone ? 'bg-gold' : 'bg-soft-gold'
        }`}
      />
      <span
        className={
          isMilestone
            ? 'font-display text-2xl text-warm-white'
            : 'text-sm font-semibold uppercase tracking-wide text-warm-white/80'
        }
      >
        {label}
      </span>
    </motion.div>
  )
}
