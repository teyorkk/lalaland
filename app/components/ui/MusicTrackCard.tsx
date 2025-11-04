'use client'

import { motion } from 'framer-motion'
import { MusicIcon, Sparkles } from 'lucide-react'
import MotionCard from './MotionCard'

interface MusicTrackCardProps {
  track: {
    title: string
    artist: string
    duration: string
    description: string
    mood: string
  }
  index: number
}

export default function MusicTrackCard({ track, index }: MusicTrackCardProps) {
  return (
    <MotionCard
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <MusicIcon className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {track.title}
          </h3>
          <p className="text-white/60 text-sm mb-2">{track.artist}</p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            {track.description}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-yellow-300">{track.duration}</span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-purple-300">{track.mood}</span>
            </div>
          </div>
        </div>
      </div>
    </MotionCard>
  )
}
