'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Film, Camera, Music, Award, Star, ChevronRight, Sparkles } from 'lucide-react'
import { generatePosition, generateDuration, generateDelay } from '../lib/animation-utils'
import SectionTitle from '../components/ui/SectionTitle'
import triviaFacts from '../data/trivia-facts.json'

export default function Trivia() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const floatingSparkles = Array.from({ length: 15 }, (_, i) => {
    const position = generatePosition('trivia-sparkles', i)
    const duration = generateDuration('trivia-sparkles', i, 10, 20)
    const delay = generateDelay('trivia-sparkles', i, 5)
    return {
      id: i,
      left: position.left,
      top: position.top,
      duration,
      delay
    }
  })

  const handleCardFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'Hard': return 'bg-red-500/20 text-red-300 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return Camera
      case 'Music': return Music
      case 'Award': return Award
      case 'Film': return Film
      case 'Star': return Star
      default: return Film
    }
  }

  return (
    <section id="trivia" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingSparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{
              left: sparkle.left,
              top: sparkle.top,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "linear"
            }}
          >
            <Sparkles className="w-8 h-12" style={{color: '#FACC15', opacity: 0.2}} />
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
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 mb-4">
            Trivia & Fun Facts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-4 text-lg">
            Discover the secrets behind the magic of La La Land
          </p>
        </motion.div>

       
        {/* Trivia Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triviaFacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card 
                className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => handleCardFlip(item.id)}
              >
                  <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                  <CardContent className="p-6">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 180 }}
                          transition={{ duration: 0.5 }}
                        >
                          {React.createElement(getIcon(item.icon), { className: "w-5 h-5 text-white" })}
                        </motion.div>
                        <Badge variant="outline" className="text-xs text-white">
                          {item.category}
                        </Badge>
                      </div>
                      <Badge className={`text-xs ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Fact */}
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {flippedCard === item.id ? item.behindTheScenes : item.fact}
                    </p>

                    {/* Click to Flip Hint */}
                    <div className="flex items-center justify-center gap-2 text-xs text-white/50 mt-auto">
                      {flippedCard === item.id ? (
                        <>
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span>Behind the Scenes</span>
                        </>
                      ) : (
                        <>
                          <ChevronRight className="w-4 h-4" />
                          <span>Click to reveal more</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>

        {/* Easter Egg Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-yellow-500/10 to-pink-500/10 backdrop-blur-sm border-white/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Hidden Easter Egg
              </h3>
              <p className="text-white/80 mb-4">
                Throughout the website, keep an eye out for hidden messages and special interactions...
              </p>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-yellow-300 font-medium">
                  "They worship everything and they value nothing."
                </span>
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
