'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Play, ArrowRight, Zap, Shield, Activity } from 'lucide-react'
import Image from 'next/image'

export default function ShowcaseHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
          
          {/* Large Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-end pr-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative opacity-15"
            >
              <Image
                src="/logo.svg"
                alt="WinSnip"
                width={800}
                height={800}
                className="w-[800px] h-[800px] object-contain"
              />
            </motion.div>
          </div>
          
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating orbs with blur */}
          {[
            { color: 'from-blue-500/30 to-cyan-500/30', size: 'w-[600px] h-[600px]', position: 'top-1/4 left-1/4', delay: 0 },
            { color: 'from-purple-500/30 to-pink-500/30', size: 'w-[700px] h-[700px]', position: 'bottom-1/4 right-1/4', delay: 2 },
            { color: 'from-green-500/20 to-emerald-500/20', size: 'w-[500px] h-[500px]', position: 'top-1/2 right-1/3', delay: 4 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className={`absolute ${orb.size} ${orb.position} bg-gradient-to-br ${orb.color} rounded-full blur-3xl`}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 60, 0],
                y: [0, -60, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: orb.delay
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div 
          style={{ y, opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center mb-10"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={20} className="text-blue-400" />
                </motion.div>
                <span className="text-base font-bold text-white uppercase tracking-wider">Blockchain Infrastructure Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tight mb-8">
              <motion.span
                className="block text-white mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Blockchain
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Infrastructure
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Excellence
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-3xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Your gateway to blockchain opportunities: testnet participation, airdrop alerts, and professional node infrastructure services.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            {[
              { icon: Zap, text: 'Lightning Fast', color: 'from-yellow-500 to-orange-500' },
              { icon: Shield, text: '99.9% Uptime', color: 'from-green-500 to-emerald-500' },
              { icon: Activity, text: 'Real-time Data', color: 'from-blue-500 to-cyan-500' }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="group"
                >
                  <div className="relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300`}></div>
                    <div className="relative px-6 py-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center space-x-3">
                      <Icon size={18} className="text-white" />
                      <span className="text-sm font-semibold text-white">{feature.text}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#projects')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative text-white flex items-center space-x-3">
                <span>Explore Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </motion.a>

            <motion.a
              href="https://service.winsnip.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 transition-colors"></div>
              <span className="relative text-white flex items-center space-x-3">
                <Play size={20} />
                <span>Validator Guides</span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
