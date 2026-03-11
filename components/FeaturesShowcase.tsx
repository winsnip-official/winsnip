'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Activity, Zap, Shield, TrendingUp, Database, Globe2, ArrowRight, Server, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    icon: Activity,
    title: 'Validator Services',
    description: 'Professional validator node infrastructure with comprehensive guides and 24/7 monitoring.',
    color: 'from-blue-500 to-cyan-500',
    stats: 'service.winsnip.xyz'
  },
  {
    icon: Zap,
    title: 'Testnet Participation',
    description: 'Early access to blockchain testnets with detailed setup guides and community support.',
    color: 'from-purple-500 to-pink-500',
    stats: 'Active testnets'
  },
  {
    icon: Shield,
    title: 'Airdrop Alerts',
    description: 'Stay updated with the latest airdrop opportunities and blockchain incentive programs.',
    color: 'from-orange-500 to-red-500',
    stats: 'Real-time alerts'
  },
  {
    icon: TrendingUp,
    title: 'Blockchain Explorers',
    description: 'Multi-chain explorers for Cosmos, Monad, and Canton Network with real-time data.',
    color: 'from-green-500 to-emerald-500',
    stats: '3+ explorers'
  },
  {
    icon: Server,
    title: 'Node Infrastructure',
    description: 'Enterprise-grade node hosting and infrastructure services for blockchain networks.',
    color: 'from-indigo-500 to-purple-500',
    stats: '99.9% uptime'
  },
  {
    icon: Sparkles,
    title: 'Partner Network',
    description: 'Integrated with XRP EVM, Walrus, Paxinet and other leading blockchain ecosystems.',
    color: 'from-pink-500 to-rose-500',
    stats: 'Growing partners'
  }
]

export default function FeaturesShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={containerRef} id="features" className="py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white"></div>
        
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
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"
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
            className="inline-block mb-6"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Infrastructure Excellence</span>
            </div>
          </motion.div>
          
          <h2 className="text-7xl md:text-9xl font-black text-neutral-900 mb-8 leading-none">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Enterprise
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Solutions
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Comprehensive blockchain infrastructure powering validators, developers, and institutions across multiple networks
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <motion.div 
                  className="relative bg-white rounded-[2rem] p-8 border border-neutral-200 hover:border-neutral-300 h-full overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    {/* Icon with 3D effect */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 180,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-3xl font-black text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Stats badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <span className="text-sm font-bold text-neutral-400">{feature.stats}</span>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-neutral-900 flex items-center justify-center transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <ArrowRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
                      </motion.div>
                    </div>
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
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-neutral-600 mb-8 text-lg">
            Ready to join our validator network or explore blockchain opportunities?
          </p>
          <motion.a
            href="https://service.winsnip.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Validator Guides</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
