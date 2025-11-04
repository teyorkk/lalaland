'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/components/ui/card'
import { Palette, Heart, Star, Music, Drama } from 'lucide-react'
import { generatePosition, generateDuration, generateDelay } from '../lib/animation-utils'
import SectionTitle from '../components/ui/SectionTitle'
import themes from '../data/themes.json'

export default function Themes() {

  const floatingSymbols = Array.from({ length: 12 }, (_, i) => {
    const position = generatePosition('themes-symbols', i)
    const duration = generateDuration('themes-symbols', i, 8, 12)
    const delay = generateDelay('themes-symbols', i, 5)
    return {
      id: i,
      left: position.left,
      top: position.top,
      duration,
      delay
    }
  })

  return (
    <section id="themes" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Dynamic Background with Color Transitions */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}
          animate={{
            background: [
              'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)',
              'linear-gradient(135deg, #1E1B4B, #C084FC, #F9A8D4)',
              'linear-gradient(135deg, #C084FC, #F9A8D4, #FACC15)',
              'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Symbolic Elements */}
        {floatingSymbols.map((symbol) => (
          <motion.div
            key={symbol.id}
            className="absolute"
            style={{
              left: symbol.left,
              top: symbol.top,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut"
            }}
          >
            {symbol.id % 3 === 0 && <Star className="w-6 h-6" style={{color: '#FACC15', opacity: 0.3}} />}
            {symbol.id % 3 === 1 && <Music className="w-6 h-6" style={{color: '#C084FC', opacity: 0.3}} />}
            {symbol.id % 3 === 2 && <Heart className="w-6 h-6" style={{color: '#F9A8D4', opacity: 0.3}} />}
          </motion.div>
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
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mb-4">
            Themes & Symbolism
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
            Explore the deeper meanings woven into the fabric of La La Land
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <Drama className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-lg text-white/90 leading-relaxed">
                La La Land is more than a musical romance—it's a profound exploration of ambition, 
                sacrifice, and the bittersweet nature of dreams. Through its vibrant colors, 
                musical numbers, and cinematic symbolism, the film tells a universal story 
                about the choices we make between love and art.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Theme Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className={`h-1 bg-gradient-to-r ${theme.color}`} />
                <CardContent className="p-8">
                  {/* Theme Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Palette className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-playfair font-bold text-white">
                      {theme.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-6">
                    {theme.description}
                  </p>

                  {/* Symbol */}
                  <motion.div
                    className="bg-black/30 rounded-lg p-4 mb-6 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-yellow-300 font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Symbolism
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {theme.symbol}
                    </p>
                  </motion.div>

                  {/* Analysis */}
                  <motion.div
                    className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Deeper Meaning
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {theme.analysis}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Typography Quote */}
        <motion.div
          className="text-center py-12 px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-3xl md:text-4xl font-playfair font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mb-4 leading-relaxed">
            "A bit of madness is key to give us new colors to see"
          </blockquote>
          <p className="text-white/60 text-lg">
            The film reminds us that dreaming, even foolishly, is what makes life beautiful
          </p>
        </motion.div>

        {/* Color Palette Representation */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-playfair font-semibold text-center text-white mb-8">
            The Emotional Color Journey
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mb-2 animate-pulse" />
              <p className="text-white/60 text-sm">Reality</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mb-2 animate-pulse" />
              <p className="text-white/60 text-sm">Dreams</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full mb-2 animate-pulse" />
              <p className="text-white/60 text-sm">Hope</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mb-2 animate-pulse" />
              <p className="text-white/60 text-sm">Love</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full mb-2 animate-pulse" />
              <p className="text-white/60 text-sm">Success</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
