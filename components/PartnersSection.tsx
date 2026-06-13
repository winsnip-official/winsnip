'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const E = [0.16, 1, 0.3, 1] as const

const wallets = [
  { name: 'MetaMask', logo: '/MetaMask.png' }, { name: 'Cosmostation', logo: '/Cosmostation.png' },
  { name: 'Keplr', logo: '/keplr.png' }, { name: 'Leap', logo: '/leap.png' },
]
const cloud = [
  { name: 'AWS', logo: '/aws.png' }, { name: 'Hetzner', logo: '/Hetzner.png' },
  { name: 'Netcup', logo: '/netcup.jpeg' }, { name: 'Paxinet', logo: '/paxi.png' },
]

export default function PartnersSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-28 px-6 lg:px-10" style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto">

        <motion.div className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Infrastructure</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] leading-[0.92]">
              Built on trusted<br />
              <span style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>infrastructure.</span>
            </h2>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.15)' }}>
              <motion.span className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                animate={reduce ? {} : { scale: [1, 1.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }} />
              <div>
                <div className="text-sm font-bold text-white">99.9% uptime SLA</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>All providers</div>
              </div>
            </div>
          </div>
        </motion.div>

        {[{ title: 'Wallet Integrations', items: wallets }, { title: 'Cloud Providers', items: cloud }].map((group, gi) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>{group.title}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {group.items.map((p, i) => (
                <motion.div key={p.name}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.12 + i * 0.06, ease: E }}
                  whileHover={reduce ? {} : { y: -5 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
                  title={p.name}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Image src={p.logo} alt={p.name} width={36} height={36}
                      className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-90 transition-all duration-300" />
                  </div>
                  <div className="text-sm font-semibold text-white text-center">{p.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
