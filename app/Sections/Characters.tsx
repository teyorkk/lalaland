'use client'

import { motion } from 'framer-motion'
import { Music, Star, Heart } from 'lucide-react'
import { generatePosition, generateDuration, generateDelay, generateSize } from '../lib/animation-utils'
import SectionTitle from '../components/ui/SectionTitle'
import CharacterCard from '../components/ui/CharacterCard'
import FloatingElement from '../components/ui/FloatingElement'
import characters from '../data/characters.json'

export default function Characters() {

  const floatingMusicNotes = Array.from({ length: 15 }, (_, i) => {
    const position = generatePosition('characters-music', i)
    const duration = generateDuration('characters-music', i, 10, 20)
    const delay = generateDelay('characters-music', i, 5)
    const size = generateSize('characters-music', i, 20, 40)
    return {
      id: i,
      left: position.left,
      top: position.top,
      duration,
      delay,
      size
    }
  })

  return (
    <section id="characters" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Floating Music Notes Background */}
      <div className="absolute inset-0">
        {floatingMusicNotes.map((note) => (
          <motion.div
            key={note.id}
            className="absolute text-white/10"
            style={{
              left: note.left,
              top: note.top,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: note.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: note.delay
            }}
          >
            <Music size={note.size} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <SectionTitle 
          title="Main Characters"
          className="mb-16"
        />

        {/* Character Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              index={index}
            />
          ))}
        </div>

        {/* Love Story Connection */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20">
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            <span className="text-white font-medium">
              Two dreamers, one city, infinite possibilities
            </span>
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
