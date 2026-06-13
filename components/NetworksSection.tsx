'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const expo = [0.16, 1, 0.3, 1] as const

const live = [
  { name: 'Cosmos', product: 'WinScan', url: 'https://winscan.winsnip.xyz/', logo: '/COSMOS.png', accent: '#3b82f6', accentText: 'text-blue-400', accentBorder: 'border-blue-500/25', dot: 'bg-blue-400' },
  { name: 'Monad', product: 'Monad Scan', url: 'https://monad-scan.winscan.org/', logo: '/monad.svg', accent: '#8b5cf6', accentText: 'text-violet-400', accentBorder: 'border-violet-500/25', dot: 'bg-violet-400' },
  { name: 'CC Network', product: 'CC Scan', url: 'https://ccscan.winsnip.xyz/', logo: '/canton1.png', accent: '#f97316', accentText: 'text-orange-400', accentBorder: 'border-orange-500/25', dot: 'bg-orange-400' },
]

const partners = [
  { name: 'Pactus', product: 'Validator', url: 'https://pactus.org/', logo: '/pactus-logo-circle.svg' },
  { name: 'XRP EVM', product: '$1M+ partner', url: 'https://explorer.xrplevm.org/apps/winsnip', logo: '/XRPL.png' },
  { name: 'Walrus', product: '$2M+ operator', url: 'https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c', logo: '/walrus.webp' },
  { name: 'Paxinet', product: 'Network', url: 'https://paxinet.io/', logo: '/paxi.png' },
]

export default function NetworksSection() {
  const reduce = useReducedMotion()

  return (
    <section id="networks" className="py-32 px-6 lg:px-10 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">

          {/* LEFT: heading + partner list + $5M stat */}
          <div>
            <motion.div
              className="mb-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: expo }}
            >
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.0] text-balance">
                7 networks,
                <br />
                <span className="text-zinc-600">one platform</span>
              </h2>
              <p className="mt-4 text-sm text-zinc-500 max-w-[40ch] leading-relaxed">
                Live explorers plus active partnerships across the most important blockchain ecosystems.
              </p>
            </motion.div>

            {/* Partners — link row with logo */}
            <div className="mb-10">
              <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-4">Active partners</p>
              <div className="space-y-1">
                {partners.map((p, i) => (
                  <motion.a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: expo }}
                    className="group flex items-center gap-4 py-3 px-3 -mx-3 rounded-xl hover:bg-zinc-900 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-zinc-700 transition-colors">
                      <Image src={p.logo} alt={p.name} width={22} height={22} className="object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-400 group-hover:text-white flex-1 transition-colors">{p.name}</span>
                    <span className="text-xs text-zinc-700 font-mono">{p.product}</span>
                    <ArrowUpRight size={13} className="text-zinc-800 group-hover:text-zinc-500 transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* $5M — inline strip, not hero-metric block */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3, ease: expo }}
              className="pt-8 border-t border-zinc-800 flex items-center gap-6"
            >
              <div>
                <div className="text-4xl font-black text-white font-mono">$5M+</div>
                <div className="text-xs text-zinc-600 mt-0.5 max-w-[30ch]">
                  Combined partnership value across XRP EVM, Walrus, and Paxinet
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Live explorer cards — each has a distinct accent personality */}
          <div className="space-y-2.5">
            <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-4">Live explorers</p>
            {live.map((n, i) => (
              <motion.a
                key={n.name}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={reduce ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: expo }}
                className={`group flex items-center gap-5 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 ${n.accentBorder} hover:border-opacity-60 overflow-hidden transition-all duration-300 relative`}
                whileHover={reduce ? {} : { x: 5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              >
                {/* Sweep shimmer — Jakub production polish */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.025) 50%, transparent 100%)',
                  }}
                  animate={reduce ? {} : { x: ['-100%', '200%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
                />

                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image src={n.logo} alt={n.name} width={36} height={36} className="object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.span
                      className={`w-1.5 h-1.5 rounded-full ${n.dot}`}
                      animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Live</span>
                  </div>
                  <h3 className={`text-xl font-black ${n.accentText}`}>{n.name}</h3>
                  <p className="text-xs text-zinc-600 mt-0.5">{n.product}</p>
                </div>

                <ArrowUpRight size={17} className="text-zinc-700 group-hover:text-zinc-300 transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
