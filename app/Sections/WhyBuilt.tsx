'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/components/ui/card'
import { Code, Heart, Music, Film, Sparkles, Github, Linkedin } from 'lucide-react'
import { generatePosition, generateDuration, generateDelay } from '../lib/animation-utils'
import motivations from '../data/motivations.json'

export default function WhyBuilt() {
  
  const getIcon = (iconName: string) => {
    const icons = { Film, Music, Code, Heart }
    return icons[iconName as keyof typeof icons] || Film
  }
  
  const floatingElements = Array.from({ length: 12 }, (_, i) => {
    const position = generatePosition('whybuilt-elements', i)
    const duration = generateDuration('whybuilt-elements', i, 8, 12)
    const delay = generateDelay('whybuilt-elements', i, 5)
    return {
      id: i,
      left: position.left,
      top: position.top,
      duration,
      delay
    }
  })

  return (
    <section id="why-built" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{background: 'linear-gradient(135deg, #FACC15/20, #F9A8D4/20)'}}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{background: 'linear-gradient(135deg, #C084FC/20, #FACC15/20)'}}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Code/Music Notes */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-white/10"
            style={{
              left: element.left,
              top: element.top,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {element.id % 3 === 0 && <Code className="w-6 h-6" style={{color: '#F5F5F5', opacity: 0.1}} />}
            {element.id % 3 === 1 && <Music className="w-6 h-6" style={{color: '#F5F5F5', opacity: 0.1}} />}
            {element.id % 3 === 2 && <Sparkles className="w-6 h-6" style={{color: '#F5F5F5', opacity: 0.1}} />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 mb-4">
            Why I Built This
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main Reflection */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 overflow-hidden">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                  A Tribute to Dreams and Code
                </h3>
              </div>

              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I built this website as a tribute to my passion for film and storytelling. La La Land captures the struggle between art and ambition — a theme I deeply relate to as a developer chasing creativity and dreams.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Just like Mia and Sebastian, we developers pour our hearts into our craft, often working late nights fueled by coffee and passion. We face rejection, celebrate small victories, and constantly balance our artistic vision with practical realities.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  This project represents the intersection of my two greatest loves: cinema and code. Through Next.js, Framer Motion, and thoughtful design, I wanted to create an experience that feels as magical and emotional as the film itself — proving that web development can be a form of artistic expression.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Here's to the fools who dream — whether on the silver screen or in lines of code.
                </motion.p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Motivation Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {motivations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {React.createElement(getIcon(item.icon), { className: "w-5 h-5 text-white" })}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm border-white/20 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-playfair font-bold text-white">
                  Connect With Me
                </h3>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                If you're passionate about combining technology and art, or simply love La La Land as much as I do, I'd love to connect!
              </p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href="https://github.com/teyorkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-white" />
                  <span className="text-white">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/moises-atienza-a58a422aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                 <Linkedin className="w-5 h-5 text-white" />
                  <span className="text-white">Linkedin</span>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            Built with passion, jazz, and lots of coffee ☕
          </p>
          <p className="text-yellow-300 font-playfair text-lg mt-2">
            — Moises
          </p>
        </motion.div>
      </div>
    </section>
  )
}
