import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { photoLibrary } from '@/data/images'
import { buildImageUrl } from '@/data/images'

const sources = [
  { key: 'crops', label: 'Crops', x: 150 },
  { key: 'poultry', label: 'Poultry', x: 383 },
  { key: 'livestock', label: 'Livestock', x: 617 },
  { key: 'aquaculture', label: 'Aquaculture', x: 850 },
]

const CENTER = { x: 500, y: 300 }
const HARVEST_Y = 400
const SUPPLY_Y = 470
const MARKET_Y = 540

export default function LivingFarmDesktop() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  const introOpacity = useTransform(smooth, [0, 0.06], [0, 1])
  const bgScale = useTransform(smooth, [0, 1], [1.04, 1])

  return (
    <div ref={containerRef} className="relative" style={{ height: '320vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-deep">
        <motion.img
          src={buildImageUrl(photoLibrary.cropsAerial.url, 2000, 70)}
          alt=""
          aria-hidden="true"
          style={{ scale: bgScale }}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-deep/70" aria-hidden="true" />

        <motion.div style={{ opacity: introOpacity }} className="absolute top-14 left-1/2 -translate-x-1/2 text-center">
          <p className="eyebrow text-soft-gold justify-center">The Emeritus Farm System</p>
          <h2 className="mt-3 font-display text-3xl xl:text-4xl text-warm-white">
            Everything starts at the farm.
          </h2>
        </motion.div>

        <svg
          viewBox="0 0 1000 640"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {sources.map((s, i) => {
            const start = 0.12 + i * 0.045
            const end = start + 0.16
            return (
              <SourcePath
                key={s.key}
                x={s.x}
                progress={smooth}
                drawRange={[start, end]}
                labelRange={[end - 0.05, end + 0.02]}
                label={s.label}
              />
            )
          })}

          <CenterMark progress={smooth} range={[0.4, 0.47]} />

          <TrunkPath progress={smooth} range={[0.48, 0.86]} />
        </svg>

        <FinalHeadline progress={smooth} />
      </div>
    </div>
  )
}

function SourcePath({
  x,
  progress,
  drawRange,
  labelRange,
  label,
}: {
  x: number
  progress: import('framer-motion').MotionValue<number>
  drawRange: [number, number]
  labelRange: [number, number]
  label: string
}) {
  const pathLength = useTransform(progress, drawRange, [0, 1])
  const labelOpacity = useTransform(progress, labelRange, [0, 1])
  const d = `M ${x} 90 Q ${(x + CENTER.x) / 2} ${x === CENTER.x ? 90 : 130} ${CENTER.x} ${CENTER.y}`

  return (
    <g>
      <motion.circle cx={x} cy={90} r={3.5} fill="#D9B85A" style={{ opacity: labelOpacity }} />
      <motion.path
        d={d}
        fill="none"
        stroke="#D9B85A"
        strokeWidth={1.2}
        strokeOpacity={0.7}
        style={{ pathLength }}
      />
      <motion.text
        x={x}
        y={68}
        textAnchor="middle"
        fill="#F8F7F2"
        fontSize={13}
        fontWeight={600}
        letterSpacing={1.5}
        style={{ opacity: labelOpacity, textTransform: 'uppercase' } as never}
      >
        {label}
      </motion.text>
    </g>
  )
}

function CenterMark({
  progress,
  range,
}: {
  progress: import('framer-motion').MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0, 1])
  const scale = useTransform(progress, range, [0.7, 1])

  return (
    <g>
      <motion.circle cx={CENTER.x} cy={CENTER.y} r={5} fill="#C99A2E" style={{ opacity, scale }} />
      <motion.circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={16}
        fill="none"
        stroke="#C99A2E"
        strokeWidth={1}
        style={{ opacity, scale }}
      />
      <motion.text
        x={CENTER.x}
        y={CENTER.y + 38}
        textAnchor="middle"
        fill="#F8F7F2"
        fontSize={16}
        fontFamily="'DM Serif Display', serif"
        style={{ opacity }}
      >
        Emeritus Farm
      </motion.text>
    </g>
  )
}

function TrunkPath({
  progress,
  range,
}: {
  progress: import('framer-motion').MotionValue<number>
  range: [number, number]
}) {
  const [start, end] = range
  const span = end - start
  const pathLength = useTransform(progress, range, [0, 1])

  const markerY = useTransform(
    progress,
    [start, end],
    [CENTER.y + 20, MARKET_Y]
  )

  const harvestOpacity = useTransform(progress, [start + span * 0.28, start + span * 0.38], [0, 1])
  const supplyOpacity = useTransform(progress, [start + span * 0.58, start + span * 0.68], [0, 1])
  const marketOpacity = useTransform(progress, [start + span * 0.86, start + span * 0.96], [0, 1])

  const d = `M ${CENTER.x} ${CENTER.y + 20} L ${CENTER.x} ${MARKET_Y}`

  return (
    <g>
      <motion.path d={d} fill="none" stroke="#D9B85A" strokeWidth={1.4} strokeOpacity={0.8} style={{ pathLength }} />
      <motion.circle cy={markerY} cx={CENTER.x} r={4.5} fill="#F8F7F2" style={{ opacity: pathLength }} />

      <Stage y={HARVEST_Y} label="Harvest" opacity={harvestOpacity} />
      <Stage y={SUPPLY_Y} label="Supply" opacity={supplyOpacity} />
      <Stage y={MARKET_Y} label="Market" opacity={marketOpacity} />
    </g>
  )
}

function Stage({
  y,
  label,
  opacity,
}: {
  y: number
  label: string
  opacity: import('framer-motion').MotionValue<number>
}) {
  return (
    <g>
      <motion.circle cx={500} cy={y} r={3} fill="#D9B85A" style={{ opacity }} />
      <motion.text
        x={524}
        y={y + 4}
        fill="#F8F7F2"
        fontSize={13}
        fontWeight={600}
        letterSpacing={1.5}
        style={{ opacity, textTransform: 'uppercase' } as never}
      >
        {label}
      </motion.text>
    </g>
  )
}

function FinalHeadline({ progress }: { progress: import('framer-motion').MotionValue<number> }) {
  const opacity = useTransform(progress, [0.92, 1], [0, 1])
  const y = useTransform(progress, [0.92, 1], [10, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
    >
      <p className="font-display text-3xl xl:text-4xl text-warm-white leading-tight">
        From farm.
        <br />
        To market.
      </p>
    </motion.div>
  )
}
