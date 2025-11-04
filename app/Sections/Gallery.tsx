'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/components/ui/card'
import {  Heart, Star, Sparkles } from 'lucide-react'
import Image from 'next/image'
import SectionTitle from '../components/ui/SectionTitle'
import GalleryCard from '../components/ui/GalleryCard'
import { generatePosition, generateDuration, generateDelay } from '../lib/animation-utils'
import stills from '../data/gallery-stills.json'

export default function Gallery() {

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{background: 'linear-gradient(135deg, #FACC15/10, #F9A8D4/10)'}}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{background: 'linear-gradient(135deg, #C084FC/10, #FACC15/10)'}}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-4 text-lg">
            Iconic moments and scenes from La La Land
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stills.map((still, index) => (
            <motion.div
              key={still.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
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
                
                <CardContent className="p-6">
                  {/* Scene Title */}
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {still.title}
                  </h3>
                  
                  {/* Scene Name */}
                  <p className="text-yellow-300 font-medium mb-3">
                    {still.scene}
                  </p>
                  
                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-4">
                    {still.description}
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-pink-400" />
                      <span className="text-white/60 text-sm">Iconic Scene</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gallery Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-yellow-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <p className="text-lg text-white font-medium">
              Every frame tells a story of dreams, love, and jazz
            </p>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
