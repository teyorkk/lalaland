'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from './card'

interface MotionCardProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  whileInView?: any
  transition?: any
  viewport?: any
  whileHover?: any
}

export default function MotionCard({
  children,
  className = "",
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  whileInView,
  transition,
  viewport,
  whileHover,
}: MotionCardProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      whileHover={whileHover}
    >
      <Card className={className}>
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}
