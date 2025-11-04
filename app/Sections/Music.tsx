'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/components/ui/card'
import { MusicIcon, Sparkles } from 'lucide-react'
import { generatePosition, generateDuration, generateDelay, generateSize } from '../lib/animation-utils'
import SectionTitle from '../components/ui/SectionTitle'
import MusicTrackCard from '../components/ui/MusicTrackCard'
import tracks from '../data/music-tracks.json'

export default function Music() {
  const floatingParticles = Array.from({ length: 20 }, (_, i) => {
    const position = generatePosition('music-particles', i)
    const duration = generateDuration('music-particles', i, 2, 4)
    const delay = generateDelay('music-particles', i, 2)
    const size = generateSize('music-particles', i, 4, 8)
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
    <section id="music" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              backgroundColor: '#FACC15'
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 mb-4">
            Music & Soundtrack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-4 text-lg">
            The jazz-infused heartbeat of La La Land
          </p>
        </motion.div>

        {/* Track List */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300">
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-white/20 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2">
                <MusicIcon className="w-5 h-5 text-yellow-400" />
                <p className="text-white/80 text-sm">
                  The soundtrack features original jazz compositions by Justin Hurwitz
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Music Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
            "Jazz is conflict. It's compromise."
          </blockquote>
          <p className="text-white/60 mt-2">— Sebastian Wilder</p>
        </motion.div>
      </div>
    </section>
  )
}
