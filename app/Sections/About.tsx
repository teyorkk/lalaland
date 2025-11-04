'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, Music, Film, Clock } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: '2016',
      title: 'Film Release',
      description: 'La La Land premieres at Venice Film Festival',
      icon: Calendar
    },
    {
      year: '2017',
      title: 'Academy Awards',
      description: 'Wins 6 Oscars including Best Director',
      icon: Award
    },
    {
      year: '2016',
      title: 'Soundtrack Launch',
      description: 'Chart-topping jazz and musical soundtrack',
      icon: Music
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-purple-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 mb-4">
            About the Film
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Film Overview */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-yellow-100">
              The Dream of Jazz & Love
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              La La Land is a romantic musical comedy-drama written and directed by Damien Chazelle. 
              Set in modern Los Angeles, the film tells the story of Mia Dolan, an aspiring actress, 
              and Sebastian Wilder, a dedicated jazz musician, who are struggling to make ends meet 
              in a city known for crushing hopes and breaking hearts.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Their vibrant journey through dreams, love, and sacrifice captures the bittersweet 
              reality of pursuing artistic passion in contemporary Hollywood. With stunning cinematography 
              and unforgettable musical numbers, the film pays homage to classic Hollywood musicals 
              while telling a thoroughly modern story.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Film className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-sm text-white/60">Director</p>
                  <p className="text-lg font-semibold text-white">Damien Chazelle</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-sm text-white/60">Release Year</p>
                  <p className="text-lg font-semibold text-white">2016</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-sm text-white/60">Genre</p>
                  <p className="text-lg font-semibold text-white">Musical Romance Drama</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-sm text-white/60">Runtime</p>
                  <p className="text-lg font-semibold text-white">128 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-yellow-100 text-center mb-12">
            Journey Through Time
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400 to-pink-400" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-5/12" />
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/25">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="w-5/12 bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-yellow-400 font-bold text-lg mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
