'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const expo = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    title: 'WinScan',
    description:
      'Cosmos blockchain explorer with real-time analytics, validator tracking, and comprehensive network monitoring.',
    category: 'Cosmos Explorer',
    liveUrl: 'https://winscan.winsnip.xyz/',
    docsUrl: '/docs/winscan/getting-started/introduction',
    accent: '#3b82f6',
    accentText: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/50',
    logo: '/COSMOS.png',
    stat: '99.9%',
    statLabel: 'uptime',
    tags: ['Cosmos', 'Validators', 'IBC'],
    featured: true,
  },
  {
    title: 'Monad Scan',
    description:
      'High-performance scanner built for Monad network. Sub-100ms response, optimised for high-throughput chains.',
    category: 'Network Scanner',
    liveUrl: 'https://monad-scan.winscan.org/',
    docsUrl: '/docs/monad-scan/getting-started/introduction',
    accent: '#8b5cf6',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/20',
    hoverBorder: 'hover:border-violet-500/50',
    logo: '/monad.svg',
    stat: '<100ms',
    statLabel: 'latency',
    tags: ['Monad', 'High-perf'],
    featured: false,
  },
  {
    title: 'CC Network Scan',
    description:
      'Canton Network explorer with enterprise-grade compliance tooling and privacy-preserving analytics.',
    category: 'Enterprise Explorer',
    liveUrl: 'https://ccscan.winsnip.xyz/',
    docsUrl: '/docs/cc-scan/getting-started/introduction',
    accent: '#f97316',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-500/50',
    logo: '/canton1.png',
    stat: 'A+',
    statLabel: 'security',
    tags: ['Canton', 'Enterprise'],
    featured: false,
  },
  {
    title: 'Wintip',
    description:
      'Advanced blockchain analytics and real-time data visualization. Insights across multiple chains.',
    category: 'Analytics Platform',
    liveUrl: 'https://wintip.cc/',
    docsUrl: '/docs/wintip/getting-started/introduction',
    accent: '#10b981',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/50',
    logo: '/Wintip.png',
    stat: 'Live',
    statLabel: 'data feed',
    tags: ['Analytics', 'Multi-chain'],
    featured: false,
  },
]

export default function ProjectsGrid() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineW = useTransform(scrollYProgress, [0.05, 0.4], ['0%', '100%'])

  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header — left headline + right description (split, not centered) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.0] text-balance"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: expo }}
          >
            Explorers
            <br />
            <span className="text-zinc-600">we built</span>
          </motion.h2>
          <motion.p
            className="text-sm text-zinc-500 max-w-[40ch] leading-relaxed lg:text-right"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Custom-built infrastructure trusted by validators, developers,
            and institutions across multiple networks.
          </motion.p>
        </div>

        {/* Scroll-driven divider — tells a story, not decoration */}
        <div className="h-px bg-zinc-800/60 mb-10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-blue-500/50 rounded-full"
            style={reduce ? { width: '100%' } : { width: lineW }}
          />
        </div>

        {/* Featured — full-width, logo pane + content pane */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: expo }}
          className="mb-3"
        >
          <motion.a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group grid grid-cols-1 lg:grid-cols-[280px_1fr] rounded-2xl bg-zinc-900 border border-zinc-800 ${featured.hoverBorder} overflow-hidden transition-colors duration-300`}
            whileHover={reduce ? {} : { scale: 1.003 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Logo pane */}
            <div className="relative flex items-center justify-center p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at center, ${featured.accent}14 0%, transparent 70%)`,
                }}
              />
              <motion.div
                className="relative z-10"
                whileHover={reduce ? {} : { scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <Image
                  src={featured.logo}
                  alt={featured.title}
                  width={88}
                  height={88}
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${featured.accentText} mb-1.5`}>
                      {featured.category}
                    </p>
                    <h3 className="text-4xl font-black text-white">{featured.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black font-mono ${featured.accentText}`}>{featured.stat}</div>
                    <div className="text-[10px] text-zinc-600 font-medium mt-0.5">{featured.statLabel}</div>
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-[54ch] text-sm">
                  {featured.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-5 border-t border-zinc-800">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${featured.accentBg} ${featured.accentBorder} border ${featured.accentText}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-500 group-hover:text-white transition-colors">
                  Open Explorer
                  <ArrowUpRight size={14} className={`${featured.accentText} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Rest — 3 equal-height compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {rest.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group flex flex-col p-6 rounded-2xl bg-zinc-900 border border-zinc-800 ${p.hoverBorder} overflow-hidden transition-colors duration-300 relative`}
              whileHover={reduce ? {} : { y: -5 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}80, transparent)` }}
              />

              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <Image src={p.logo} alt={p.title} width={32} height={32} className="object-contain" />
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] font-semibold text-green-400">Live</span>
                </span>
              </div>

              <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${p.accentText} mb-1.5`}>
                {p.category}
              </p>
              <h3 className="text-2xl font-black text-white mb-2.5">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-grow">{p.description}</p>

              <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <span className={`text-xl font-black font-mono ${p.accentText}`}>{p.stat}</span>
                  <span className="text-[10px] text-zinc-600 ml-1.5">{p.statLabel}</span>
                </div>
                <ArrowUpRight size={15} className="text-zinc-700 group-hover:text-zinc-300 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Docs links */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 flex flex-wrap gap-4"
        >
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.docsUrl}
              className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors inline-flex items-center gap-1"
            >
              {p.title} docs <ExternalLink size={10} />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
