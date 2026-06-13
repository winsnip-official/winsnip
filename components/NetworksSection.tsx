'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const E = [0.16, 1, 0.3, 1] as const

const live = [
  { name: 'Cosmos',     product: 'WinScan',    url: 'https://winscan.winsnip.xyz/',    logo: '/COSMOS.png',  color: 'rgba(255,255,255,0.7)', blocks: '14,382,941', tps: '4,821' },
  { name: 'Monad',      product: 'Monad Scan', url: 'https://monad-scan.winscan.org/', logo: '/monad.svg',   color: 'rgba(255,255,255,0.6)', blocks: '8,204,512',  tps: '9,104' },
  { name: 'CC Network', product: 'CC Scan',    url: 'https://ccscan.winsnip.xyz/',     logo: '/canton1.png', color: 'rgba(255,255,255,0.55)', blocks: '2,891,230', tps: '1,230' },
]

const partners = [
  { name: 'XRP EVM', value: '$1M+', url: 'https://explorer.xrplevm.org/apps/winsnip', logo: '/XRPL.png' },
  { name: 'Walrus',  value: '$2M+', url: 'https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c', logo: '/walrus.webp' },
  { name: 'Pactus',  value: 'Validator', url: 'https://pactus.org/', logo: '/pactus-logo-circle.svg' },
  { name: 'Paxinet', value: 'Partner',   url: 'https://paxinet.io/', logo: '/paxi.png' },
]

export default function NetworksSection() {
  const reduce = useReducedMotion()

  return (
    <section id="networks" className="py-28 px-6 lg:px-10" style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto">

        <motion.div className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Networks</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] leading-[0.92]">
              7 networks,<br />
              <span style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>one platform.</span>
            </h2>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div className="text-3xl font-black text-white font-mono">$5M+</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Combined partnership value</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Live explorers */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Live Explorers</p>
            <div className="space-y-2.5">
              {live.map((n, i) => (
                <motion.a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: E }}
                  whileHover={reduce ? {} : { x: 4 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}>
                  {/* Left color stripe */}
                  <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full" style={{ background: '#3b82f6' }} />

                  <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 ml-2"
                    style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <Image src={n.logo} alt={n.name} width={30} height={30} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-white">{n.name}</div>
                    <div className="text-xs font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{n.product}</div>
                  </div>
                  <div className="hidden sm:flex gap-4 text-right mr-2">
                    <div>
                      <div className="text-xs font-mono font-bold text-white">{n.blocks}</div>
                      <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>blocks</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">{n.tps}</div>
                      <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>tx/s</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      animate={reduce ? {} : { opacity: [1, 0.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
                    <span className="text-[10px] font-bold text-emerald-400">Live</span>
                  </div>
                  <ArrowUpRight size={14} className="flex-shrink-0 transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }} />
                </motion.a>
              ))}

              {/* Uptime */}
              <div className="flex items-center gap-3 p-4 rounded-xl mt-1"
                style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.15)' }}>
                <motion.span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                  animate={reduce ? {} : { scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <div>
                  <div className="text-sm font-bold text-white">99.9% uptime SLA</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Guaranteed across all live networks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Active Partners</p>
            <div className="grid grid-cols-2 gap-2.5">
              {partners.map((p, i) => (
                <motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: E }}
                  whileHover={reduce ? {} : { y: -4 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <Image src={p.logo} alt={p.name} width={26} height={26} className="object-contain" />
                    </div>
                    <ArrowUpRight size={13} style={{ color: 'rgba(255,255,255,0.2)' }} />
                  </div>
                  <div className="text-base font-bold text-white">{p.name}</div>
                  <div className="mt-2 pt-2 font-black font-mono text-sm text-white" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {p.value}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-3 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>Combined value</span>
                <span className="text-xl font-black text-white font-mono">$5M+</span>
              </div>
              {[{ l: 'XRP EVM', v: 20, c: 'rgba(255,255,255,0.5)' }, { l: 'Walrus', v: 40, c: 'rgba(255,255,255,0.6)' }, { l: 'Paxinet', v: 40, c: 'rgba(255,255,255,0.7)' }].map((b, i) => (
                <div key={b.l} className="mb-2">
                  <div className="flex justify-between text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    <span>{b.l}</span><span>${(b.v / 20).toFixed(1)}M+</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div className="h-full rounded-full" style={{ background: b.c }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: E }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
