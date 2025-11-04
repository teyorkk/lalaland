'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MotionCard from './MotionCard'

interface GalleryCardProps {
  still: {
    id: number
    title: string
    scene: string
    description: string
    color: string
    image: string
  }
  index: number
}

export default function GalleryCard({ still, index }: GalleryCardProps) {
  return (
    <motion.div
      key={still.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <MotionCard className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        {/* Image */}
        <div className={`h-48 bg-gradient-to-br ${still.color} relative overflow-hidden`}>
          <Image
            src={still.image}
            alt={still.title}
            fill
            className="object-contain"
          />
          <motion.div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Scene Title */}
          <h3 className="text-2xl font-playfair font-bold text-white mb-2">
            {still.title}
          </h3>
          
          {/* Scene Description */}
          <p className="text-yellow-300 font-medium mb-3">
            {still.scene}
          </p>
          
          {/* Scene Details */}
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {still.description}
          </p>
          
          {/* View Button */}
          <motion.button
            className="flex items-center gap-2 text-purple-300 hover:text-yellow-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">View Scene</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </div>
      </MotionCard>
    </motion.div>
  )
}
