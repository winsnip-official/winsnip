'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const E = [0.16, 1, 0.3, 1] as const

const projects = [
  { title: 'WinScan',         category: 'Cosmos Explorer',    desc: 'Real-time analytics, validator tracking, and IBC monitoring for the Cosmos ecosystem.', liveUrl: 'https://winscan.winsnip.xyz/',    docsUrl: '/docs/winscan/getting-started/introduction',    logo: '/COSMOS.png',  stat: '99.9%', color: 'rgba(255,255,255,0.7)', featured: true  },
  { title: 'Monad Scan',      category: 'Network Scanner',    desc: 'High-performance block explorer for Monad. Sub-100ms response.',                        liveUrl: 'https://monad-scan.winscan.org/', docsUrl: '/docs/monad-scan/getting-started/introduction', logo: '/monad.svg',   stat: '<100ms', color: 'rgba(255,255,255,0.6)', featured: false },
  { title: 'CC Network Scan', category: 'Enterprise Explorer',desc: 'Canton Network explorer with enterprise compliance tooling.',                            liveUrl: 'https://ccscan.winsnip.xyz/',     docsUrl: '/docs/cc-scan/getting-started/introduction',    logo: '/canton1.png', stat: 'A+',     color: 'rgba(255,255,255,0.55)', featured: false },
  { title: 'Wintip',          category: 'Analytics Platform', desc: 'Multi-chain analytics and real-time data visualization.',                                 liveUrl: 'https://wintip.cc/',             docsUrl: '/docs/wintip/getting-started/introduction',     logo: '/Wintip.png',  stat: 'Live',   color: 'rgba(255,255,255,0.65)', featured: false },
]

export default function ProjectsGrid() {
  const reduce = useReducedMotion()
  const [feat, ...rest] = projects

  return (
    <section id="projects" className="py-28 px-6 lg:px-10" style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto">

        {/* xlabs-style section label */}
        <motion.div className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            What we built
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] leading-[0.92]">
              Four live<br /><span style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>explorers.</span>
            </h2>
            <p className="text-sm max-w-[38ch] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Custom-built blockchain infrastructure trusted by validators,
              developers, and institutions worldwide.
            </p>
          </div>
        </motion.div>

        {/* Featured — big horizontal */}
        <motion.div className="mb-3"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: E }}>
          <a href={feat.liveUrl} target="_blank" rel="noopener noreferrer"
            className="group grid grid-cols-1 lg:grid-cols-[220px_1fr] rounded-2xl overflow-hidden transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}>
            {/* Logo pane */}
            <div className="flex items-center justify-center p-12 relative overflow-hidden" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />
              <motion.div whileHover={reduce ? {} : { scale: 1.1, rotate: -3 }} transition={{ type: 'spring', stiffness: 200 }}>
                <Image src={feat.logo} alt={feat.title} width={72} height={72} className="object-contain" />
              </motion.div>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-[10px] font-bold text-emerald-400">Live</span>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#3b82f6' }}>{feat.category}</p>
                  <h3 className="text-3xl font-black text-white">{feat.title}</h3>
                </div>
                <div className="text-2xl font-black font-mono text-white">{feat.stat}</div>
              </div>
              <p className="text-sm leading-relaxed mb-8 max-w-[52ch]" style={{ color: 'rgba(255,255,255,0.45)' }}>{feat.desc}</p>
              <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-2">
                  {['Cosmos', 'Validators', 'IBC'].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Open <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#3b82f6' }} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {rest.map((p, i) => (
            <motion.a key={p.title} href={p.liveUrl} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-2xl transition-all duration-250 relative overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: E }}
              whileHover={reduce ? {} : { y: -4 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)' }}>
              {/* Top accent */}
              <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.3)', scaleX: 0, transformOrigin: 'left' }}
                whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} />

              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <Image src={p.logo} alt={p.title} width={28} height={28} className="object-contain" />
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }} />
                  Live
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.category}</p>
              <h3 className="text-xl font-black text-white mb-2.5">{p.title}</h3>
              <p className="text-sm leading-relaxed flex-grow" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>

              <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xl font-black font-mono text-white">{p.stat}</span>
                <ArrowUpRight size={15} className="transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {projects.map(p => (
            <a key={p.title} href={p.docsUrl}
              className="text-xs transition-colors inline-flex items-center gap-1 group"
              style={{ color: 'rgba(255,255,255,0.25)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)'}>
              {p.title} docs <ExternalLink size={9} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
