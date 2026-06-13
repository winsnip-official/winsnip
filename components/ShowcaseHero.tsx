'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'
import { ArrowRight, CheckCircle, Activity, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

// Animated counter component
function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current) return
    ref.current = true
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: v => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [to, duration])
  return <>{val.toLocaleString()}</>
}

// 3D tilt card
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotY = useTransform(x, [-0.5, 0.5], [-8, 8])
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 20 })
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 20 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      className={className}
      style={reduce ? {} : { rotateX: sRotX, rotateY: sRotY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.div>
  )
}

const products = [
  { name: 'WinScan',    chain: 'Cosmos',    logo: '/COSMOS.png',  color: '#2563eb', transactions: 14_119_218, tps: 4821  },
  { name: 'Monad Scan', chain: 'Monad',     logo: '/monad.svg',   color: '#7c3aed', transactions: 8_432_091,  tps: 9104  },
  { name: 'CC Scan',    chain: 'Canton',    logo: '/canton1.png', color: '#ea580c', transactions: 2_891_340,  tps: 1230  },
  { name: 'Wintip',     chain: 'Analytics', logo: '/Wintip.png',  color: '#059669', transactions: 5_204_881,  tps: 3321  },
]

const partnerLogos = [
  { src: '/COSMOS.png',  name: 'Cosmos'  },
  { src: '/monad.svg',   name: 'Monad'   },
  { src: '/canton1.png', name: 'Canton'  },
  { src: '/XRPL.png',    name: 'XRP EVM' },
  { src: '/walrus.webp', name: 'Walrus'  },
  { src: '/paxi.png',    name: 'Paxinet' },
]

export default function ShowcaseHero() {
  const reduce = useReducedMotion()
  const [activeProduct, setActiveProduct] = useState(0)

  // Auto-cycle through products
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setActiveProduct(p => (p + 1) % products.length), 3000)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section className="pt-16 bg-white overflow-hidden">

      {/* ── MAIN HERO ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-20">

          {/* LEFT */}
          <div>
            <motion.p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-6"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}>
              Blockchain Infrastructure
            </motion.p>

            <motion.h1 className="font-black text-gray-900 leading-[1.0] tracking-tight mb-8 text-balance"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: E }}>
              Professional<br />
              <span className="text-blue-600">blockchain</span><br />
              infrastructure.
            </motion.h1>

            <motion.p className="text-lg text-gray-500 leading-relaxed max-w-[48ch] mb-10"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: E }}>
              Validator node operations, live block explorers, and airdrop
              intelligence trusted by institutions across Cosmos, Monad,
              and Canton Network.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: E }}>
              <a href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl transition-colors shadow-lg shadow-blue-200">
                Explore Products
                <ArrowRight size={16} />
              </a>
              <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-base font-semibold rounded-xl transition-all bg-white">
                Validator Guides
              </a>
            </motion.div>

            <motion.div className="flex flex-wrap gap-5"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}>
              {[
                { icon: CheckCircle, label: '99.9% Uptime SLA' },
                { icon: Shield,      label: '4 Live Products'  },
                { icon: Activity,    label: '$5M+ Partnerships' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-gray-500">
                  <b.icon size={15} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Animated product dashboard */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: E }}
            className="hidden lg:block">

            <TiltCard className="relative">
              {/* Main dashboard card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl shadow-gray-200/80 bg-white">

                {/* Top bar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100 bg-gray-50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-3 py-1.5 border border-gray-200 text-xs text-gray-400 font-mono flex items-center gap-2">
                      <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }} />
                      winscan.winsnip.xyz
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">

                  {/* Product tabs */}
                  <div className="flex gap-2 mb-6">
                    {products.map((p, i) => (
                      <button key={p.name}
                        onClick={() => setActiveProduct(i)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          activeProduct === i
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}>
                        <Image src={p.logo} alt={p.name} width={14} height={14} className={`object-contain ${activeProduct === i ? 'brightness-0 invert' : ''}`} />
                        {p.chain}
                      </button>
                    ))}
                  </div>

                  {/* Active product stats */}
                  <motion.div key={activeProduct}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {/* Total transactions */}
                      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                        <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Total Transactions</p>
                        <p className="text-2xl font-black text-blue-700 font-mono">
                          <Counter to={products[activeProduct].transactions} duration={1.5} />
                        </p>
                      </div>
                      {/* TPS */}
                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Current TPS</p>
                        <div className="flex items-end gap-1">
                          <p className="text-2xl font-black text-gray-900 font-mono">
                            <Counter to={products[activeProduct].tps} duration={1} />
                          </p>
                          <span className="text-xs text-gray-400 mb-1">tx/s</span>
                        </div>
                      </div>
                    </div>

                    {/* Fake block list */}
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                          initial={reduce ? false : { opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${products[activeProduct].color}15` }}>
                            <Zap size={13} style={{ color: products[activeProduct].color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-mono text-gray-400">
                              Block #{(Math.floor(products[activeProduct].transactions / 100) - i).toLocaleString()}
                            </div>
                            <div className="text-[10px] text-gray-300 font-mono truncate">
                              {['0x4a2f...9b3c','0xa18d...f042','0x7e5a...c831','0x2b9f...a441'][i]}
                            </div>
                          </div>
                          <div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                            Confirmed
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Live indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div className="w-2 h-2 rounded-full bg-emerald-500"
                        animate={reduce ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }} />
                      <span className="text-xs font-semibold text-emerald-600">Live data</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-300">Updated every block</span>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                animate={reduce ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle size={16} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">All Systems Live</div>
                  <div className="text-[10px] text-gray-400">4 / 4 products running</div>
                </div>
              </motion.div>

              {/* Floating stat badge */}
              <motion.div
                className="absolute -bottom-3 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3"
                animate={reduce ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <div className="text-xs font-mono font-bold text-blue-600">99.9%</div>
                <div className="text-[10px] text-gray-400">Uptime SLA</div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* ── PARTNER LOGOS ── */}
      <div className="border-t border-b border-gray-100 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mr-4">Powering</p>
            {partnerLogos.map((p, i) => (
              <motion.div key={p.name}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-default"
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05, ease: E }}>
                <Image src={p.src} alt={p.name} width={16} height={16} className="object-contain w-4 h-4" />
                <span className="text-xs font-semibold text-gray-600">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: '$5M+',  label: 'Partnership value',  sub: 'XRP EVM · Walrus · Paxinet' },
              { value: '99.9%', label: 'Node uptime SLA',    sub: 'All live networks'           },
              { value: '4',     label: 'Live products',      sub: 'Explorers & analytics'       },
              { value: '50+',   label: 'Networks supported', sub: 'And growing'                 },
            ].map((s, i) => (
              <motion.div key={s.label} className="py-8 px-8 first:pl-0"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.07, ease: E }}>
                <div className="text-3xl font-black text-gray-900 font-mono">{s.value}</div>
                <div className="text-sm font-semibold text-gray-900 mt-1">{s.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
