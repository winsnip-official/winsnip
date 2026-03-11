'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Hexagon, Diamond, Circle } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const networkIcons = [
  Hexagon,  // Cosmos
  Diamond,  // Monad
  Circle,   // Canton
  Diamond,  // XRP EVM
  Hexagon,  // Walrus
  Circle    // Paxinet
]

const networks = [
  { 
    name: 'Cosmos', 
    status: 'Live', 
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    transactions: 'WinScan',
    url: 'https://winscan.winsnip.xyz/',
    logo: '/COSMOS.png',
    hasLogo: true
  },
  { 
    name: 'Monad', 
    status: 'Live', 
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500',
    transactions: 'Monad Scan',
    url: 'https://monad-scan.winscan.org/',
    logo: '/monad.svg',
    hasLogo: true
  },
  { 
    name: 'CC Network', 
    status: 'Live', 
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-500',
    transactions: 'CC Scan',
    url: 'https://ccscan.winsnip.xyz/',
    logo: '/canton-logo.png',
    hasLogo: false
  },
  { 
    name: 'XRP EVM', 
    status: 'Partner', 
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-500',
    transactions: 'Explorer',
    url: 'https://explorer.xrplevm.org/apps/winsnip',
    logo: '/XRPL.png',
    hasLogo: true
  },
  { 
    name: 'Walrus', 
    status: 'Partner', 
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500',
    transactions: 'Operator',
    url: 'https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c',
    logo: '/walrus.webp',
    hasLogo: true
  },
  { 
    name: 'Paxinet', 
    status: 'Partner', 
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500',
    transactions: 'Network',
    url: 'https://paxinet.io/',
    logo: '/paxi.png',
    hasLogo: true
  }
]

export default function NetworksSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={containerRef} id="networks" className="py-40 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
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
              <Sparkles size={24} className="text-purple-400" />
            </motion.div>
            <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">Cross-Chain Infrastructure</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Unified
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
            >
              Platform
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Seamlessly access and monitor multiple blockchain networks through a single, enterprise-grade infrastructure platform
          </motion.p>
        </motion.div>

        {/* Networks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {networks.map((network, index) => {
            const IconComponent = networkIcons[index]
            return (
              <motion.a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group block"
              >
                <motion.div 
                  className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-white/20 h-full overflow-hidden cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${network.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${network.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    {/* Icon or Logo */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl ${network.hasLogo ? 'bg-white/10' : `bg-gradient-to-br ${network.color}`} flex items-center justify-center mb-6 shadow-lg overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: network.hasLogo ? 0 : 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {network.hasLogo ? (
                        <Image
                          src={network.logo}
                          alt={`${network.name} logo`}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      ) : (
                        <IconComponent size={40} className="text-white" strokeWidth={1.5} />
                      )}
                    </motion.div>
                  
                  {/* Network name */}
                  <h3 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {network.name}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-500">Transactions</span>
                    <span className={`text-lg font-bold bg-gradient-to-r ${network.color} bg-clip-text text-transparent`}>
                      {network.transactions}
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      network.status === 'Live' 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : network.status === 'Partner'
                        ? 'bg-blue-500/20 border border-blue-500/30'
                        : 'bg-neutral-500/20 border border-neutral-500/30'
                    }`}>
                      {network.status === 'Live' && (
                        <motion.div
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      {network.status === 'Partner' && (
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      <span className={`text-xs font-bold ${
                        network.status === 'Live' ? 'text-green-400' : network.status === 'Partner' ? 'text-blue-400' : 'text-neutral-400'
                      }`}>
                        {network.status}
                      </span>
                    </div>
                    
                    {(network.status === 'Live' || network.status === 'Partner') && (
                      <motion.div
                        className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <ArrowRight size={16} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
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
            </motion.a>
          )
        })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-stretch max-w-5xl mx-auto"
        >
          {/* Partnership Value Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="w-full p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl text-center relative overflow-hidden group"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
            
            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-4 relative z-10"
            >
              <motion.div 
                className="text-7xl md:text-8xl font-black mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  $5M+
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Total Partnership Value
              </motion.h3>
              <motion.p 
                className="text-neutral-400 text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Combined value across XRP Ledger EVM, Walrus Network, and Paxinet partnerships
              </motion.p>
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
