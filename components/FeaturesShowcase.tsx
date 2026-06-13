'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Server, Zap, Shield, TrendingUp, Activity, Globe2, ArrowRight } from 'lucide-react'

const E = [0.16, 1, 0.3, 1] as const

const services = [
  { icon: Server,     title: 'Validator Services',    desc: 'Professional validator node infrastructure with comprehensive setup guides and 24/7 monitoring across multiple networks.',  url: 'https://service.winsnip.xyz/', tag: 'Active'    },
  { icon: Zap,        title: 'Testnet Participation', desc: 'Early network access with step-by-step guides and active community support.',                                               url: null,                           tag: 'Active'    },
  { icon: Shield,     title: 'Airdrop Alerts',        desc: 'Real-time alerts for airdrop opportunities and blockchain incentive programs.',                                              url: null,                           tag: 'Real-time' },
  { icon: TrendingUp, title: 'Block Explorers',       desc: 'Live explorers for Cosmos, Monad, and Canton Network with real-time on-chain data.',                                        url: null,                           tag: '3 live'    },
  { icon: Activity,   title: 'Node Infrastructure',   desc: 'Enterprise-grade node hosting with 99.9% uptime SLA and around-the-clock monitoring.',                                      url: null,                           tag: '99.9%'     },
  { icon: Globe2,     title: 'Partner Network',       desc: 'Active integrations with XRP EVM, Walrus, and Paxinet. Over $5M in combined partnership value.',                            url: null,                           tag: '$5M+'      },
]

export default function FeaturesShowcase() {
  const reduce = useReducedMotion()

  return (
    <section id="features" className="py-28 px-6 lg:px-10 relative overflow-hidden"
      style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Faint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="fg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.6"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#fg)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        <motion.div className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            What we do
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] leading-[0.92]">
            Six services,<br />
            <span style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>one team.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3">

          {/* Big featured — xlabs contribution card style */}
          <motion.a href={services[0].url!} target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '2px solid #3b82f6' }}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
            whileHover={reduce ? {} : { scale: 1.005 }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.28)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}>
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)' }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-auto"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Server size={22} style={{ color: 'rgba(255,255,255,0.7)' }} />
              </div>
            </div>
            <div className="relative z-10 mt-10">
              <div className="flex items-center gap-2 mb-3">
                <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Active service</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Validator Services</h3>
              <p className="text-sm leading-relaxed mb-8 max-w-[32ch]" style={{ color: 'rgba(255,255,255,0.45)' }}>{services[0].desc}</p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>service.winsnip.xyz</span>
                <div className="flex items-center gap-1 text-xs font-semibold transition-colors group-hover:text-white"
                  style={{ color: '#3b82f6' }}>
                  Visit <ArrowRight size={12} style={{ color: '#3b82f6' }} />
                </div>
              </div>
            </div>
          </motion.a>

          {/* 5 rows — xlabs list style */}
          <div className="flex flex-col gap-2.5">
            {services.slice(1).map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.title}
                  className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  initial={reduce ? false : { opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: E }}
                  whileHover={reduce ? {} : { x: 3 }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Icon size={15} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-sm font-bold text-white">{s.title}</h3>
                      <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }}>{s.tag}</span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.desc}</p>
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
