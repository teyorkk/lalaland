'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import MotionCard from './MotionCard'

interface CharacterCardProps {
  character: {
    name: string
    actress: string
    role: string
    quote: string
    traits: string
    color: string
    image: string
  }
  index: number
}

export default function CharacterCard({ character, index }: CharacterCardProps) {
  return (
    <MotionCard
      className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Character Image */}
      <motion.div
        className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={character.image}
          alt={character.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Character Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
          {character.name}
        </h3>
        <p className="text-yellow-300 font-medium mb-1">{character.role}</p>
        <p className="text-white/60 text-sm mb-4">{character.actress}</p>
        
        {/* Quote */}
        <div className="flex items-center justify-center mb-4">
          <Quote className="w-4 h-4 text-yellow-400 mr-2" />
          <p className="text-white/80 italic text-sm">"{character.quote}"</p>
        </div>

        {/* Traits */}
        <p className="text-white/70 text-sm leading-relaxed">
          {character.traits}
        </p>
      </div>
    </MotionCard>
  )
}
