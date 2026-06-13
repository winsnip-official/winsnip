'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const expo = [0.16, 1, 0.3, 1] as const

const wallets = [
  { name: 'MetaMask', logo: '/MetaMask.png' },
  { name: 'Cosmostation', logo: '/Cosmostation.png' },
  { name: 'Keplr', logo: '/keplr.png' },
  { name: 'Leap', logo: '/leap.png' },
]
const cloud = [
  { name: 'AWS', logo: '/aws.png' },
  { name: 'Hetzner', logo: '/Hetzner.png' },
  { name: 'Netcup', logo: '/netcup.jpeg' },
  { name: 'Paxinet', logo: '/paxi.png' },
]

function LogoGrid({ items, label, baseDelay = 0 }: { items: typeof wallets; label: string; baseDelay?: number }) {
  const reduce = useReducedMotion()
  return (
    <div>
      <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-4">{label}</p>
      <div className="grid grid-cols-4 gap-2.5">
        {items.map((p, i) => (
          <motion.div
            key={p.name}
            initial={reduce ? false : { opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: baseDelay + i * 0.06, ease: expo }}
            className="group aspect-square rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 flex items-center justify-center transition-all duration-250"
            title={p.name}
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={36}
              height={36}
              className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 opacity-35 group-hover:opacity-90 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function PartnersSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-32 px-6 lg:px-10 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: expo }}
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.0] text-balance">
              Trusted
              <br />
              <span className="text-zinc-600">infrastructure</span>
            </h2>
            <p className="mt-4 text-sm text-zinc-500 max-w-[38ch] leading-relaxed">
              Enterprise cloud providers and premier wallet integrations
              powering every validator node we run.
            </p>

            {/* SLA badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: expo }}
              className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={reduce ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-sm font-bold text-white">99.9% uptime SLA</span>
              <span className="text-xs text-zinc-600">across all providers</span>
            </motion.div>
          </motion.div>

          {/* Right — two logo rows */}
          <div className="space-y-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08, ease: expo }}
            >
              <LogoGrid items={wallets} label="Wallet integrations" baseDelay={0.1} />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.18, ease: expo }}
            >
              <LogoGrid items={cloud} label="Cloud providers" baseDelay={0.22} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
