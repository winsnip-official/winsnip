'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Sparkles, Zap, Shield, Activity } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'WinScan',
    description: 'Cosmos blockchain explorer with real-time analytics and comprehensive network monitoring.',
    category: 'Cosmos Explorer',
    liveUrl: 'https://winscan.winsnip.xyz/',
    docsUrl: '/docs/winscan/getting-started/introduction',
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    color: 'bg-blue-500',
    logo: '/COSMOS.png',
    stats: { networks: 'Cosmos', uptime: '99.9%' },
    features: ['Real-time Analytics', 'Cosmos Network', 'Validator Tracking']
  },
  {
    title: 'Monad Scan',
    description: 'High-performance blockchain scanner optimized for Monad network infrastructure.',
    category: 'Network Scanner',
    liveUrl: 'https://monad-scan.winscan.org/',
    docsUrl: '/docs/monad-scan/getting-started/introduction',
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    color: 'bg-purple-500',
    logo: '/monad.svg',
    stats: { speed: '<100ms', blocks: '1.2M+' },
    features: ['Lightning Fast', 'High Performance', 'Monad Network']
  },
  {
    title: 'CC Network Scan',
    description: 'Canton Network blockchain explorer with enterprise-grade features and compliance tools.',
    category: 'Enterprise Explorer',
    liveUrl: 'https://ccscan.winsnip.xyz/',
    docsUrl: '/docs/cc-scan/getting-started/introduction',
    gradient: 'from-orange-500 via-red-500 to-orange-600',
    color: 'bg-orange-500',
    logo: null,
    icon: Shield,
    stats: { security: 'A+', network: 'CC' },
    features: ['Enterprise Security', 'Canton Network', 'Compliance Tools']
  }
]

export default function ProjectsGrid() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} id="projects" className="py-40 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} className="text-blue-400" />
            </motion.div>
            <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Our Ecosystem</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Blockchain
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
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
              Explorers
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-neutral-400 max-w-3xl mx-auto font-light"
          >
            Custom-built blockchain explorers developed by WinSnip, trusted by validators, developers, and institutions worldwide
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group"
              >
                <motion.div 
                    className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700"
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                      initial={false}
                    />
                    
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700`}
                      initial={false}
                    />
                    
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Header with Logo and Status */}
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          className={`w-20 h-20 rounded-2xl ${project.logo ? 'bg-white/10 p-3' : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center overflow-hidden shadow-2xl`}
                          whileHover={{ rotate: project.logo ? 0 : 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {project.logo ? (
                            <Image
                              src={project.logo}
                              alt={`${project.title} logo`}
                              width={56}
                              height={56}
                              className="object-contain"
                            />
                          ) : Icon ? (
                            <Icon size={32} className="text-white" />
                          ) : null}
                        </motion.div>
                        
                        {/* Status indicator */}
                        <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-green-400"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs font-semibold text-green-400">Live</span>
                        </div>
                      </div>
                      
                      {/* Category */}
                      <div className="mb-4">
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base text-neutral-400 leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-white/10">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className={`text-2xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {value}
                            </span>
                            <span className="text-xs text-neutral-500 capitalize mt-1 font-semibold">{key}</span>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + idx * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            <span className="text-sm text-neutral-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="space-y-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block relative w-full py-4 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center space-x-2 font-bold text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>Explore Now</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowUpRight size={20} />
                          </motion.div>
                        </motion.a>
                        
                        <motion.a
                          href={project.docsUrl}
                          className="block w-full py-3 rounded-xl border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 flex items-center justify-center space-x-2 font-semibold text-white transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>View Docs</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}