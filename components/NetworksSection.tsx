'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CheckCircle, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const E = [0.16, 1, 0.3, 1] as const

const live = [
  { name: 'Cosmos',     product: 'WinScan',    url: 'https://winscan.winsnip.xyz/',    logo: '/COSMOS.png',  color: '#2563eb', blocks: '14,382,941', tps: '4,821' },
  { name: 'Monad',      product: 'Monad Scan', url: 'https://monad-scan.winscan.org/', logo: '/monad.svg',   color: '#7c3aed', blocks: '8,204,512',  tps: '9,104' },
  { name: 'CC Network', product: 'CC Scan',    url: 'https://ccscan.winsnip.xyz/',     logo: '/canton1.png', color: '#ea580c', blocks: '2,891,230',  tps: '1,230' },
]

const partners = [
  { name: 'XRP EVM', value: '$1M+',  type: 'Partnership',   url: 'https://explorer.xrplevm.org/apps/winsnip', logo: '/XRPL.png'             },
  { name: 'Walrus',  value: '$2M+',  type: 'Operator',      url: 'https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c', logo: '/walrus.webp'  },
  { name: 'Pactus',  value: 'Validator', type: 'Network',   url: 'https://pactus.org/',              logo: '/pactus-logo-circle.svg' },
  { name: 'Paxinet', value: 'Network',   type: 'Partner',   url: 'https://paxinet.io/',             logo: '/paxi.png'             },
]

export default function NetworksSection() {
  const reduce = useReducedMotion()

  return (
    <section id="networks" className="py-24 border-t" style={{ background: '#f8faff', borderColor: '#e0e7ff' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <motion.div className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Networks</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              7 networks, one platform.
            </h2>
            {/* Animated $5M badge */}
            <motion.div
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
              whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <TrendingUp size={24} className="text-blue-200" />
              <div>
                <div className="text-2xl font-black font-mono">$5M+</div>
                <div className="text-xs text-blue-200">Combined partnership value</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Live Explorers — animated cards */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Live Explorers</p>
            <div className="space-y-3">
              {live.map((n, i) => (
                <motion.a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-blue-200 bg-white hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden"
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: E }}
                  whileHover={reduce ? {} : { x: 4 }}>
                  {/* Left color bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full" style={{ background: n.color }} />

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center ml-2" style={{ background: `${n.color}18` }}>
                    <Image src={n.logo} alt={n.name} width={32} height={32} className="object-contain" />
                  </div>

                  <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">{n.name}</div>
                    <div className="text-xs text-gray-400 font-mono">{n.product}</div>
                  </div>

                  {/* Live stats */}
                  <div className="hidden sm:flex gap-4 text-right">
                    <div>
                      <div className="text-xs font-mono font-bold text-gray-700">{n.blocks}</div>
                      <div className="text-[9px] text-gray-400">blocks</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold" style={{ color: n.color }}>{n.tps}</div>
                      <div className="text-[9px] text-gray-400">tx/s</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      animate={reduce ? {} : { opacity: [1, 0.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
                    <span className="text-[10px] font-bold text-emerald-700">Live</span>
                  </div>
                  <ArrowUpRight size={15} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                </motion.a>
              ))}

              <motion.div
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}>
                <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-gray-900">99.9% uptime SLA</div>
                  <div className="text-xs text-gray-500">Guaranteed across all live networks</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Partners — animated cards */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Active Partners</p>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((p, i) => (
                <motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl border-2 border-gray-100 hover:border-blue-200 bg-white hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: E }}
                  whileHover={reduce ? {} : { y: -5 }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center overflow-hidden transition-colors">
                      <Image src={p.logo} alt={p.name} width={26} height={26} className="object-contain" />
                    </div>
                    <ArrowUpRight size={14} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="text-base font-bold text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{p.type}</div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-sm font-black text-blue-600 font-mono">{p.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Partnership value breakdown */}
            <motion.div className="mt-3 p-5 rounded-2xl bg-blue-50 border border-blue-100"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Combined Value</span>
                <span className="text-2xl font-black text-blue-700 font-mono">$5M+</span>
              </div>
              {/* Progress bars */}
              {[
                { label: 'XRP EVM',  val: 20, color: '#2563eb' },
                { label: 'Walrus',   val: 40, color: '#7c3aed' },
                { label: 'Paxinet',  val: 40, color: '#059669' },
              ].map((b, i) => (
                <div key={b.label} className="mb-2">
                  <div className="flex justify-between text-[10px] text-blue-500 mb-1">
                    <span>{b.label}</span><span>${(b.val / 20).toFixed(1)}M+</span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: b.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: E }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
