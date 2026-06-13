'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Activity, Zap, Shield, TrendingUp, Server, Globe2, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const expo = [0.16, 1, 0.3, 1] as const

const secondaryFeatures = [
  {
    icon: Zap,
    title: 'Testnet Participation',
    desc: 'Early access to blockchain testnets with detailed setup guides and active community support.',
    accent: '#8b5cf6',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
    tag: 'Active',
  },
  {
    icon: Shield,
    title: 'Airdrop Alerts',
    desc: 'Real-time alerts for airdrop opportunities and blockchain incentive programs.',
    accent: '#f97316',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
    tag: 'Real-time',
  },
  {
    icon: TrendingUp,
    title: 'Multi-chain Explorers',
    desc: 'Live block explorers for Cosmos, Monad, and Canton Network with real-time data.',
    accent: '#10b981',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    tag: '3 chains',
  },
  {
    icon: Activity,
    title: 'Node Infrastructure',
    desc: 'Enterprise-grade node hosting with 99.9% uptime SLA and 24/7 monitoring.',
    accent: '#06b6d4',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    tag: '99.9%',
  },
  {
    icon: Globe2,
    title: 'Partner Network',
    desc: 'Active integrations with XRP EVM, Walrus, and Paxinet worth over $5M combined.',
    accent: '#3b82f6',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    tag: '$5M+',
  },
]

export default function FeaturesShowcase() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Subtle parallax on the background accent
  const bgX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} id="features" className="relative py-32 px-6 lg:px-10 bg-zinc-900 overflow-hidden">

      {/* Background accent — different from other sections */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-[500px] pointer-events-none"
        style={reduce ? {} : { x: bgX }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: 'conic-gradient(from 160deg at 80% 50%, transparent 0deg, #3b82f6 60deg, transparent 120deg)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* ── HEADER: left-right split, no eyebrow ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-white leading-[0.95] text-balance"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: expo }}
          >
            Six services,
            <br />
            <span className="text-zinc-500">one team</span>
          </motion.h2>
          <motion.p
            className="text-sm text-zinc-500 max-w-[40ch] leading-relaxed lg:pb-1"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From validator setup guides to live block explorers, we build and operate
            every piece of infrastructure in-house.
          </motion.p>
        </div>

        {/* ── MAIN LAYOUT: 1 large left + 5-item right list ── */}
        {/* Completely different from identical card grids */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4">

          {/* LARGE FEATURED: Validator Services */}
          <motion.a
            href="https://service.winsnip.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: expo }}
            className="group relative rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/40 overflow-hidden flex flex-col p-8 transition-colors duration-300 min-h-[360px]"
            whileHover={reduce ? {} : { scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          >
            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(ellipse at 15% 85%, rgba(59,130,246,0.14) 0%, transparent 65%)',
              }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/80 via-blue-400/40 to-transparent" />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-auto">
                <Server size={26} className="text-blue-400" />
              </div>

              {/* Content sits at bottom */}
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Active service</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight mb-3">
                  Validator<br />Services
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[30ch]">
                  Professional validator node infrastructure with comprehensive setup guides
                  and 24/7 monitoring across multiple networks.
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-5 border-t border-zinc-800">
                <span className="text-xs font-mono text-zinc-700">service.winsnip.xyz</span>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 group-hover:text-blue-400 transition-colors">
                  Visit
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </motion.a>

          {/* RIGHT: 5 features as stacked rows — dense list style */}
          <div className="flex flex-col gap-2.5">
            {secondaryFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: expo }}
                  className="group flex items-start gap-5 p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 flex-1"
                  style={{ minHeight: '64px' }}
                  whileHover={reduce ? {} : { x: 3 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${f.iconBg}`}
                  >
                    <Icon size={16} className={f.iconColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-bold text-white">{f.title}</h3>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md font-mono"
                        style={{ background: `${f.accent}18`, color: f.accent }}
                      >
                        {f.tag}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
