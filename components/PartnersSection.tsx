'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const E = [0.16, 1, 0.3, 1] as const

const wallets = [
  { name: 'MetaMask',    logo: '/MetaMask.png',     desc: 'Web3 Wallet'  },
  { name: 'Cosmostation',logo: '/Cosmostation.png', desc: 'Cosmos Wallet' },
  { name: 'Keplr',       logo: '/keplr.png',        desc: 'IBC Wallet'   },
  { name: 'Leap',        logo: '/leap.png',         desc: 'Multi-chain'  },
]
const cloud = [
  { name: 'AWS',     logo: '/aws.png',      desc: 'Cloud Provider' },
  { name: 'Hetzner', logo: '/Hetzner.png',  desc: 'Cloud Provider' },
  { name: 'Netcup',  logo: '/netcup.jpeg',  desc: 'Cloud Provider' },
  { name: 'Paxinet', logo: '/paxi.png',     desc: 'Network Partner'},
]

export default function PartnersSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24 border-t border-gray-100" style={{ background: '#fafbff' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <motion.div className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Infrastructure</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Built on trusted infrastructure.
            </h2>
            <motion.div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200"
              whileHover={reduce ? {} : { scale: 1.02 }}>
              <motion.span className="w-3 h-3 rounded-full bg-emerald-500"
                animate={reduce ? {} : { scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }} />
              <div>
                <div className="text-sm font-bold text-gray-900">99.9% uptime SLA</div>
                <div className="text-xs text-gray-500">All providers</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {[
          { title: 'Wallet Integrations', items: wallets },
          { title: 'Cloud Providers',     items: cloud   },
        ].map((group, gi) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{group.title}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {group.items.map((p, i) => (
                <motion.div key={p.name}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gray-50 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 cursor-default"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.15 + i * 0.07, ease: E }}
                  whileHover={reduce ? {} : { y: -6, scale: 1.02 }}>
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white border border-gray-200 group-hover:border-blue-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all overflow-hidden"
                    whileHover={reduce ? {} : { rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}>
                    <Image src={p.logo} alt={p.name} width={40} height={40}
                      className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">{p.name}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
