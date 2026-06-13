'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Server, Zap, Shield, TrendingUp, Activity, Globe2, ArrowRight, CheckCircle } from 'lucide-react'

const E = [0.16, 1, 0.3, 1] as const

const services = [
  { icon: Server,     title: 'Validator Services',    desc: 'Full-stack node infrastructure with setup guides and 24/7 monitoring.',  badge: 'Active',    url: 'https://service.winsnip.xyz/', big: true  },
  { icon: Zap,        title: 'Testnet Participation', desc: 'Early network access with step-by-step guides and community support.',    badge: 'Active',    url: null,                            big: false },
  { icon: Shield,     title: 'Airdrop Alerts',        desc: 'Real-time alerts for airdrop opportunities and incentive programs.',       badge: 'Real-time', url: null,                            big: false },
  { icon: TrendingUp, title: 'Block Explorers',       desc: 'Live explorers for Cosmos, Monad, Canton with real-time data.',           badge: '3 live',    url: null,                            big: false },
  { icon: Activity,   title: 'Node Infrastructure',   desc: 'Enterprise-grade node hosting. 99.9% uptime SLA.',                         badge: '99.9%',     url: null,                            big: false },
  { icon: Globe2,     title: 'Partner Network',       desc: 'XRP EVM, Walrus, Paxinet — $5M+ in active partnerships.',                 badge: '$5M+',      url: null,                            big: false },
]

const validatorSteps = [
  { num: '01', title: 'Choose Network',  desc: 'Select from our supported blockchain networks' },
  { num: '02', title: 'Follow Guide',    desc: 'Step-by-step setup documentation'              },
  { num: '03', title: 'Monitor 24/7',    desc: 'Real-time alerts and uptime monitoring'         },
]

export default function FeaturesShowcase() {
  const reduce = useReducedMotion()

  return (
    <section id="features" className="py-24 overflow-hidden relative" style={{ background: 'linear-gradient(160deg, #0d1f38 0%, #111d35 100%)' }}>
      {/* Grid on dark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="feat-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#feat-grid)" />
        </svg>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        <motion.div className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Services</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Everything you need<br />to run on-chain.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '38ch' }}>
              Six services, one team. We build and operate every piece of blockchain infrastructure in-house.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 mb-4">

          {/* BIG: Validator Services with animated steps */}
          <motion.div
            className="rounded-3xl overflow-hidden bg-blue-600 text-white p-10 relative"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: E }}
            whileHover={reduce ? {} : { scale: 1.01 }}>

            {/* Animated bg grid */}
            <div className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* Animated glow */}
            <motion.div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #93c5fd, transparent)' }}
              animate={reduce ? {} : { scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Server size={24} className="text-white" />
              </div>
              <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Infrastructure</div>
              <h3 className="text-3xl font-black text-white mb-3">Validator Services</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-[34ch]">
                Professional validator node infrastructure with comprehensive setup guides and 24/7 monitoring.
              </p>

              {/* Animated steps */}
              <div className="space-y-3 mb-8">
                {validatorSteps.map((step, i) => (
                  <motion.div key={step.num}
                    className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3 backdrop-blur"
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: E }}>
                    <span className="text-2xl font-black text-white/40 font-mono w-10 flex-shrink-0">{step.num}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{step.title}</div>
                      <div className="text-xs text-blue-200">{step.desc}</div>
                    </div>
                    <motion.div className="ml-auto"
                      animate={reduce ? {} : { x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
                      <CheckCircle size={16} className="text-blue-300" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                View Validator Guides <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.slice(1).map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.title}
                  className="group rounded-2xl p-6 border transition-all duration-300 flex flex-col"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: E }}
                  whileHover={reduce ? {} : { y: -4, borderColor: 'rgba(99,102,241,0.4)' } as any}>
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(99,102,241,0.15)' }}
                    whileHover={reduce ? {} : { rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    <Icon size={18} className="text-indigo-400" />
                  </motion.div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white leading-tight">{s.title}</h3>
                    <span className="flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-full font-mono" style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>{s.badge}</span>
                  </div>
                  <p className="text-xs leading-relaxed flex-grow" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
