'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Activity, Clock, Shield, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    title: 'WinScan',
    category: 'Cosmos Explorer',
    desc: 'Real-time analytics and validator tracking for the Cosmos ecosystem.',
    liveUrl: 'https://winscan.winsnip.xyz/',
    docsUrl: '/docs/winscan/getting-started/introduction',
    logo: '/COSMOS.png',
    color: '#2563eb',
    lightColor: '#eff6ff',
    stat: '99.9%', statLabel: 'uptime',
    tags: ['Cosmos', 'Validators', 'IBC'],
    featured: true,
    metrics: [
      { icon: Activity, label: 'Validators',   value: '150+' },
      { icon: TrendingUp, label: 'Blocks/day', value: '14.4K' },
      { icon: Clock,    label: 'Block time',   value: '6.5s'  },
    ],
    preview: { blocks: 147382, txs: 28941, validators: 150 },
  },
  {
    title: 'Monad Scan',
    category: 'Network Scanner',
    desc: 'High-performance block explorer for Monad. Sub-100ms response.',
    liveUrl: 'https://monad-scan.winscan.org/',
    docsUrl: '/docs/monad-scan/getting-started/introduction',
    logo: '/monad.svg',
    color: '#7c3aed',
    lightColor: '#f5f3ff',
    stat: '<100ms', statLabel: 'latency',
    tags: ['Monad', 'High-perf'],
    featured: false,
    metrics: [],
    preview: null,
  },
  {
    title: 'CC Network Scan',
    category: 'Enterprise Explorer',
    desc: 'Canton Network explorer with enterprise-grade compliance tooling.',
    liveUrl: 'https://ccscan.winsnip.xyz/',
    docsUrl: '/docs/cc-scan/getting-started/introduction',
    logo: '/canton1.png',
    color: '#ea580c',
    lightColor: '#fff7ed',
    stat: 'A+', statLabel: 'security',
    tags: ['Canton', 'Enterprise'],
    featured: false,
    metrics: [],
    preview: null,
  },
  {
    title: 'Wintip',
    category: 'Analytics Platform',
    desc: 'Multi-chain analytics and real-time data visualization.',
    liveUrl: 'https://wintip.cc/',
    docsUrl: '/docs/wintip/getting-started/introduction',
    logo: '/Wintip.png',
    color: '#059669',
    lightColor: '#ecfdf5',
    stat: 'Live', statLabel: 'data feed',
    tags: ['Analytics', 'Multi-chain'],
    featured: false,
    metrics: [],
    preview: null,
  },
]

// Shimmer animation component
function Shimmer() {
  return (
    <motion.div
      className="absolute inset-0 -translate-x-full"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
      animate={{ translateX: '200%' }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
    />
  )
}

// 3D tilt for featured card
function TiltCard3D({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const sX = useSpring(rotX, { stiffness: 150, damping: 20 })
  const sY = useSpring(rotY, { stiffness: 150, damping: 20 })

  return (
    <motion.div className={className}
      style={reduce ? {} : { rotateX: sX, rotateY: sY, transformStyle: 'preserve-3d' }}
      onMouseMove={e => {
        if (reduce) return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.div>
  )
}

export default function ProjectsGrid() {
  const reduce = useReducedMotion()
  const feat = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="projects" className="py-24 border-t border-gray-100" style={{ background: '#f8faff' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Products</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Our live blockchain explorers
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-[40ch] leading-relaxed md:text-right">
            Custom-built infrastructure trusted by validators, developers, and institutions worldwide.
          </p>
        </motion.div>

        {/* Featured large card with live preview */}
        <motion.div className="mb-4"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: E }}>
          <TiltCard3D className="group">
            <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60 transition-all duration-500 bg-white">

              {/* LEFT — Blue pane with animated content */}
              <div className="lg:w-[420px] flex-shrink-0 bg-blue-600 p-10 relative overflow-hidden">
                {/* BG pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                {/* Glow orb */}
                <motion.div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-30"
                  style={{ background: 'radial-gradient(circle, #93c5fd, transparent)' }}
                  animate={reduce ? {} : { scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity }} />

                <div className="relative z-10">
                  {/* Logo */}
                  <motion.div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-8 overflow-hidden"
                    whileHover={reduce ? {} : { scale: 1.08, rotate: -3 }}
                    transition={{ type: 'spring', stiffness: 200 }}>
                    <Image src={feat.logo} alt="WinScan" width={50} height={50} className="object-contain brightness-0 invert" />
                  </motion.div>

                  <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">{feat.category}</div>
                  <h3 className="text-4xl font-black text-white mb-3">{feat.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-[28ch]">{feat.desc}</p>

                  {/* Metrics */}
                  <div className="space-y-3">
                    {feat.metrics.map(m => {
                      const Icon = m.icon
                      return (
                        <div key={m.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                          <Icon size={15} className="text-blue-200" />
                          <span className="text-blue-200 text-xs flex-1">{m.label}</span>
                          <span className="text-white text-sm font-black font-mono">{m.value}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Live badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1.5">
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-300"
                    animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }} />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* RIGHT — Live block feed */}
              <div className="flex-1 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-black text-blue-600 font-mono">{feat.stat}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{feat.statLabel}</div>
                  </div>
                  <a href={feat.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                    Open Explorer <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Fake live block feed */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Latest Blocks</div>
                  {[147382, 147381, 147380, 147379].map((block, i) => (
                    <motion.div key={block}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default relative overflow-hidden"
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}>
                      <Shimmer />
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold font-mono text-[10px]">
                        #{(block % 100).toString().padStart(2, '0')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-900 font-mono">Block {block.toLocaleString()}</div>
                        <div className="text-[10px] text-gray-400 font-mono truncate">0x4a2f...{['9b3c','a81d','f042'][i] ?? '7e5a'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-gray-600">{[32, 18, 45, 27][i] ?? 20} txs</div>
                        <div className="text-[10px] text-gray-400">{i * 6 + 2}s ago</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        ✓
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {feat.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard3D>
        </motion.div>

        {/* 3 smaller cards with hover animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {rest.map((p, i) => (
            <motion.a key={p.title} href={p.liveUrl} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col p-7 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 bg-white transition-all duration-300 relative overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: E }}
              whileHover={reduce ? {} : { y: -8, scale: 1.01 }}
              onMouseMove={e => {
                if (reduce) return
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}>

              {/* Magic spotlight follows cursor */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${p.color}12, transparent 70%)` }} />

              {/* Top color line animates in on hover */}
              <motion.div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: p.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }} />

              {/* Shimmer on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Shimmer />
              </div>

              <div className="flex items-center justify-between mb-7">
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden shadow-md"
                  style={{ background: p.lightColor }}
                  whileHover={reduce ? {} : { scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <Image src={p.logo} alt={p.title} width={34} height={34} className="object-contain" />
                </motion.div>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                  Live
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: p.color }}>{p.category}</p>
              <h3 className="text-xl font-black text-gray-900 mb-2.5">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">{p.desc}</p>

              <div className="mt-7 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black font-mono" style={{ color: p.color }}>{p.stat}</span>
                  <span className="text-xs text-gray-400 ml-1.5">{p.statLabel}</span>
                </div>
                <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors"
                  whileHover={reduce ? {} : { scale: 1.1, rotate: 10 }}>
                  <ArrowUpRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Docs links */}
        <div className="flex flex-wrap gap-4">
          {projects.map(p => (
            <a key={p.title} href={p.docsUrl}
              className="text-xs text-gray-400 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
              {p.title} docs <ExternalLink size={9} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
