'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const infrastructure = [
  {
    name: 'MetaMask',
    logo: '/MetaMask.png',
    category: 'Wallet Integration'
  },
  {
    name: 'Cosmostation',
    logo: '/Cosmostation.png',
    category: 'Wallet Integration'
  },
  {
    name: 'Keplr',
    logo: '/keplr.png',
    category: 'Wallet Integration'
  },
  {
    name: 'Leap',
    logo: '/leap.png',
    category: 'Wallet Integration'
  },
  {
    name: 'AWS',
    logo: '/aws.png',
    category: 'Cloud Provider'
  },
  {
    name: 'Hetzner',
    logo: '/Hetzner.png',
    category: 'Cloud Provider'
  },
  {
    name: 'Netcup',
    logo: '/netcup.jpeg',
    category: 'Cloud Provider'
  },
  {
    name: 'Paxinet',
    logo: '/paxi.png',
    category: 'Network Partner'
  }
]

export default function PartnersSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Large Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-end pr-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative opacity-15"
          >
            <Image
              src="/logo.svg"
              alt="WinSnip"
              width={700}
              height={700}
              className="w-[700px] h-[700px] object-contain"
            />
          </motion.div>
        </div>
        
        {/* Floating shapes */}
        <motion.div
          style={{ y }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} className="text-blue-600" />
            </motion.div>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Infrastructure</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-9xl font-black text-neutral-900 mb-8 leading-none">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Built on
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Trusted Infrastructure
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Enterprise infrastructure powered by industry-leading cloud providers and seamlessly integrated with premier wallet solutions
          </motion.p>
        </motion.div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {infrastructure.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <motion.div 
                className="relative bg-white rounded-[2rem] p-8 border border-neutral-200 hover:border-neutral-300 h-full flex flex-col items-center justify-center overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10 flex flex-col items-center space-y-4">
                  {/* Logo */}
                  <motion.div
                    className="relative w-24 h-24 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={96}
                      height={96}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  </motion.div>
                  
                  {/* Partner name */}
                  <h3 className="text-xl font-black text-neutral-900 text-center">
                    {partner.name}
                  </h3>
                  
                  {/* Category badge */}
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-3 py-1 bg-neutral-100 rounded-full">
                    {partner.category}
                  </span>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-neutral-600">
            Enterprise-grade infrastructure ensuring 99.9% uptime and maximum performance
          </p>
        </motion.div>
      </div>
    </section>
  )
}
