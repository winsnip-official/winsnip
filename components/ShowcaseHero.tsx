'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'
import { ArrowRight, CheckCircle, Activity, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

// Animated counter
function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current) return
    ref.current = true
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [to, duration])
  return <>{val.toLocaleString()}</>
}

// Border beam — pure CSS animation
function BorderBeam({ className = '' }: { className?: string }) {
  return (
    <>
      <style>{`
        @keyframes border-beam {
          from { offset-distance: 0%; }
          to   { offset-distance: 100%; }
        }
        .beam-track {
          position: absolute; inset: 0; border-radius: inherit;
          background: transparent;
          overflow: hidden; pointer-events: none;
        }
        .beam-track::after {
          content: '';
          position: absolute;
          width: 120px; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #818cf8, transparent);
          offset-path: border-box;
          offset-distance: 0%;
          animation: border-beam 3s linear infinite;
          border-radius: 9999px;
        }
      `}</style>
      <div className={`beam-track ${className}`} />
    </>
  )
}

// 3D tilt
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const sX = useSpring(rotX, { stiffness: 180, damping: 22 })
  const sY = useSpring(rotY, { stiffness: 180, damping: 22 })
  return (
    <motion.div className={className}
      style={reduce ? {} : { rotateX: sX, rotateY: sY, transformStyle: 'preserve-3d' }}
      onMouseMove={e => {
        if (reduce) return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.div>
  )
}

const products = [
  { name: 'WinScan',    chain: 'Cosmos',    logo: '/COSMOS.png',  color: '#2563eb', transactions: 14_119_218, tps: 4821 },
  { name: 'Monad Scan', chain: 'Monad',     logo: '/monad.svg',   color: '#7c3aed', transactions: 8_432_091,  tps: 9104 },
  { name: 'CC Scan',    chain: 'Canton',    logo: '/canton1.png', color: '#ea580c', transactions: 2_891_340,  tps: 1230 },
  { name: 'Wintip',     chain: 'Analytics', logo: '/Wintip.png',  color: '#059669', transactions: 5_204_881,  tps: 3321 },
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

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setActiveProduct(p => (p + 1) % products.length), 3000)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section className="pt-16 bg-white overflow-hidden relative">

      {/* ══ STRIPE-STYLE MESH GRADIENT BG ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Animated color blobs */}
        <motion.div className="absolute rounded-full blur-[120px] opacity-20 w-[700px] h-[700px] -top-60 -right-40"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, #3b82f6 40%, transparent 70%)' }}
          animate={reduce ? {} : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute rounded-full blur-[100px] opacity-15 w-[500px] h-[500px] top-1/3 -left-40"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, #6366f1 50%, transparent 70%)' }}
          animate={reduce ? {} : { x: [0, 30, -40, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
        <motion.div className="absolute rounded-full blur-[80px] opacity-10 w-[400px] h-[400px] bottom-0 right-1/3"
          style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
          animate={reduce ? {} : { x: [0, -30, 20, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }} />
        {/* Dot grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.28]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
        {/* Fade bottom */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, transparent 20%, white 85%)' }} />
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-20">

          {/* LEFT */}
          <div>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 mb-7 backdrop-blur"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}>
              <motion.span className="w-2 h-2 rounded-full bg-emerald-500"
                animate={reduce ? {} : { scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-sm font-semibold text-blue-700">Blockchain Infrastructure</span>
            </motion.div>

            {/* Animated gradient headline */}
            <motion.h1 className="font-black leading-[1.0] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: E }}>
              <span className="text-gray-900 block">Professional</span>
              <span className="block" style={{
                background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 40%, #7c3aed 80%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: reduce ? 'none' : 'gradient-slide 4s linear infinite',
              }}>blockchain</span>
              <span className="text-gray-900 block">infrastructure.</span>
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
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-white text-base font-semibold rounded-xl transition-all shadow-lg shadow-blue-300/40 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}>
                {/* Shimmer */}
                <motion.span className="absolute inset-0 -translate-x-full"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)' }}
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.6 }} />
                <span className="relative">Explore Products</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-base font-semibold rounded-xl transition-all bg-white/80 backdrop-blur">
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

          {/* RIGHT — Dashboard with border beam */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: E }}
            className="hidden lg:block">

            <TiltCard className="relative">
              {/* Dashboard card with border beam */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl shadow-blue-100/60 bg-white">
                <BorderBeam />

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

                {/* Tabs */}
                <div className="px-6 pt-5 pb-0">
                  <div className="flex gap-2 mb-5">
                    {products.map((p, i) => (
                      <button key={p.name} onClick={() => setActiveProduct(i)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          activeProduct === i ? 'text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                        style={activeProduct === i ? { background: p.color } : {}}>
                        <Image src={p.logo} alt={p.name} width={13} height={13} className={`object-contain ${activeProduct === i ? 'brightness-0 invert' : ''}`} />
                        {p.chain}
                      </button>
                    ))}
                  </div>

                  <motion.div key={activeProduct}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-4 rounded-2xl border"
                        style={{ background: `${products[activeProduct].color}08`, borderColor: `${products[activeProduct].color}20` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: products[activeProduct].color }}>Transactions</p>
                        <p className="text-2xl font-black font-mono" style={{ color: products[activeProduct].color }}>
                          <Counter to={products[activeProduct].transactions} duration={1.5} />
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">TPS</p>
                        <div className="flex items-end gap-1">
                          <p className="text-2xl font-black text-gray-900 font-mono">
                            <Counter to={products[activeProduct].tps} duration={1} />
                          </p>
                          <span className="text-xs text-gray-400 mb-1">tx/s</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[141193, 141192, 141191, 141190].map((block, i) => (
                        <div key={block} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${products[activeProduct].color}15` }}>
                            <Zap size={12} style={{ color: products[activeProduct].color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-mono text-gray-400">Block #{(block - i).toLocaleString()}</div>
                            <div className="text-[9px] text-gray-300 font-mono">{['0x4a2f...9b3c','0xa18d...f042','0x7e5a...c831','0x2b9f...a441'][i]}</div>
                          </div>
                          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100">✓</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="mt-4 pb-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div className="w-2 h-2 rounded-full bg-emerald-500"
                        animate={reduce ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }} />
                      <span className="text-xs font-semibold text-emerald-600">Live</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-300">Updated every block</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                animate={reduce ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle size={15} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">All Systems Live</div>
                  <div className="text-[10px] text-gray-400">4 / 4 running</div>
                </div>
              </motion.div>

              <motion.div className="absolute -bottom-4 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3"
                animate={reduce ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <div className="text-sm font-black text-blue-600 font-mono">99.9%</div>
                <div className="text-[10px] text-gray-400">Uptime SLA</div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Partner logos - marquee scroll like Alchemy/Hedera */}
      <div className="relative z-10 border-t border-b border-gray-100 bg-white/80 backdrop-blur overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex items-center py-5">
          <div className="flex-shrink-0 px-8 z-20">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Trusted by</p>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-4 w-max"
              animate={reduce ? {} : { x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
              {[...partnerLogos, ...partnerLogos].map((p, i) => (
                <div key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all cursor-default group flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image src={p.src} alt={p.name} width={22} height={22}
                      className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative z-10 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: '$5M+',  label: 'Partnership value',  sub: 'XRP EVM · Walrus · Paxinet', color: '#4f46e5' },
              { value: '99.9%', label: 'Node uptime SLA',    sub: 'All live networks',           color: '#059669' },
              { value: '4',     label: 'Live products',      sub: 'Explorers & analytics',       color: '#2563eb' },
              { value: '50+',   label: 'Networks supported', sub: 'And growing',                 color: '#7c3aed' },
            ].map((s, i) => (
              <motion.div key={s.label} className="py-8 px-8 first:pl-0 group hover:bg-gray-50 transition-colors cursor-default"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.07, ease: E }}>
                <div className="text-3xl font-black font-mono transition-colors" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm font-semibold text-gray-900 mt-1">{s.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-slide {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }
      `}</style>
    </section>
  )
}
