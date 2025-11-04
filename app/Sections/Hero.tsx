'use client'

import { motion } from 'framer-motion'
import { Star, Music, Sparkles } from 'lucide-react'
import { scrollToSection } from '../lib/utils'
import { generatePosition, generateDuration, generateDelay } from '../lib/animation-utils'

export default function Hero() {
  const floatingStars = Array.from({ length: 20 }, (_, i) => {
    const position = generatePosition('hero-star', i)
    const duration = generateDuration('hero-star', i, 3, 7)
    const delay = generateDelay('hero-star', i, 5)
    return {
      id: i,
      left: position.left,
      top: position.top,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Stars */}
        {floatingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute text-yellow-200 opacity-60"
            style={{
              left: star.left,
              top: star.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: parseFloat(star.animationDuration),
              delay: parseFloat(star.animationDelay),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star size={12} fill="currentColor" />
          </motion.div>
        ))}

        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mb-6">
            La La Land
          </h1>
          <motion.div
            className="flex justify-center items-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Music className="w-6 h-6 text-yellow-300" />
            <p className="text-xl md:text-2xl text-yellow-100 font-light">
              A Cinematic Journey
            </p>
            <Music className="w-6 h-6 text-yellow-300" />
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-2xl md:text-4xl font-light text-white/90 mb-12 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          "Here's to the fools who dream."
        </motion.blockquote>

        {/* Enter Button */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter the Journey
            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Scroll Indicator */}
       
      </div>

      {/* Easter Egg Hover Area */}
      <div
        className="absolute top-10 right-10 w-20 h-20 cursor-help group"
        title="Hover for a secret"
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <Star className="w-8 h-8 text-yellow-300/30 group-hover:text-yellow-300/60 transition-colors" />
        </motion.div>
        <motion.div
          className="absolute top-full right-0 mt-2 w-64 p-3 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          "They worship everything and they value nothing."
        </motion.div>
      </div>
    </section>
  )
}
