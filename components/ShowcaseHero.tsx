'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'
import { ArrowRight, CheckCircle, Activity, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ran = useRef(false)
  useEffect(() => {
    if (ran.current) return
    ran.current = true
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [to, duration])
  return <>{val.toLocaleString()}</>
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const rX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const sX = useSpring(rX, { stiffness: 180, damping: 22 })
  const sY = useSpring(rY, { stiffness: 180, damping: 22 })
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
  { name: 'WinScan',    chain: 'Cosmos',    logo: '/COSMOS.png',  color: '#60a5fa', transactions: 14_119_218, tps: 4821 },
  { name: 'Monad Scan', chain: 'Monad',     logo: '/monad.svg',   color: '#a78bfa', transactions: 8_432_091,  tps: 9104 },
  { name: 'CC Scan',    chain: 'Canton',    logo: '/canton1.png', color: '#fb923c', transactions: 2_891_340,  tps: 1230 },
  { name: 'Wintip',     chain: 'Analytics', logo: '/Wintip.png',  color: '#34d399', transactions: 5_204_881,  tps: 3321 },
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
    <section className="pt-16 overflow-hidden" style={{ background: '#0a1628' }}>

      {/* ═══ CITI-STYLE DARK NAVY HERO ═══ */}
      <div className="relative overflow-hidden">

        {/* Background rings - Cumberland style on dark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Rings right */}
          <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[900px] h-[900px]">
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <motion.div key={n}
                className="absolute rounded-full"
                style={{
                  inset: `${(n-1) * 46}px`,
                  border: `${n <= 2 ? '1.5px' : '1px'} solid rgba(96,165,250,${Math.max(0.04, 0.16 - n*0.015)})`,
                }}
                animate={reduce ? {} : { rotate: n % 2 === 0 ? [0,360] : [360,0] }}
                transition={{ duration: 35 + n*7, repeat: Infinity, ease: 'linear' }} />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div className="w-4 h-4 rounded-full bg-blue-400"
                animate={reduce ? {} : { scale:[1,1.6,1], opacity:[0.7,1,0.7] }}
                transition={{ duration: 3, repeat: Infinity }} />
            </div>
            {/* Fade rings at edges */}
            <div className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, transparent 15%, #0a1628 75%)' }} />
          </div>
          {/* Fine grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nav-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nav-grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.25)' }}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: E }}>
                <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={reduce ? {} : { scale: [1,1.5,1] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-sm font-semibold text-blue-300">Blockchain Infrastructure</span>
              </motion.div>

              <motion.h1 className="font-black leading-[0.95] tracking-tight mb-8 text-white"
                style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)' }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: E }}>
                Professional<br />
                <span style={{ color: '#60a5fa' }}>blockchain</span><br />
                infrastructure.
              </motion.h1>

              <motion.p className="text-lg leading-relaxed max-w-[48ch] mb-10"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: E }}>
                Validator node operations, live block explorers, and airdrop
                intelligence trusted by institutions across Cosmos, Monad,
                and Canton Network.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 mb-14"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: E }}>
                <a href="#projects"
                  onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white text-base font-semibold rounded-xl transition-colors">
                  Explore Products
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl transition-all"
                  style={{ border: '1.5px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'rgba(96,165,250,0.5)'; (e.target as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}>
                  Validator Guides
                </a>
              </motion.div>

              <motion.div className="flex flex-wrap gap-6"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}>
                {[
                  { icon: CheckCircle, label: '99.9% Uptime SLA' },
                  { icon: Shield,      label: '4 Live Products'   },
                  { icon: Activity,    label: '$5M+ Partnerships'  },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <b.icon size={14} className="text-blue-400 flex-shrink-0" />
                    <span className="font-medium">{b.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Dashboard */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: E }}
              className="hidden lg:block">
              <TiltCard className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ background: '#0f1e35', border: '1px solid rgba(96,165,250,0.2)' }}>
                  {/* Border beam */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div className="absolute h-[2px] w-32 top-0"
                      style={{ background: 'linear-gradient(90deg, transparent, #60a5fa, #a78bfa, transparent)' }}
                      animate={reduce ? {} : { x: ['-128px', '500px'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }} />
                  </div>

                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <div className="flex-1 mx-3">
                      <div className="rounded-lg px-3 py-1.5 text-xs font-mono flex items-center gap-2"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          animate={reduce ? {} : { opacity: [1,0.3,1] }}
                          transition={{ duration: 1.5, repeat: Infinity }} />
                        winscan.winsnip.xyz
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="px-6 pt-5">
                    <div className="flex gap-2 mb-5">
                      {products.map((p, i) => (
                        <button key={p.name} onClick={() => setActiveProduct(i)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                          style={activeProduct === i
                            ? { background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}40` }
                            : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid transparent' }}>
                          <Image src={p.logo} alt={p.name} width={12} height={12} className="object-contain" />
                          {p.chain}
                        </button>
                      ))}
                    </div>

                    <motion.div key={activeProduct}
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-4 rounded-2xl" style={{ background: `${products[activeProduct].color}12`, border: `1px solid ${products[activeProduct].color}25` }}>
                          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: `${products[activeProduct].color}` }}>Transactions</p>
                          <p className="text-xl font-black font-mono" style={{ color: products[activeProduct].color }}>
                            <Counter to={products[activeProduct].transactions} duration={1.5} />
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>TPS</p>
                          <div className="flex items-end gap-1">
                            <p className="text-xl font-black text-white font-mono">
                              <Counter to={products[activeProduct].tps} duration={1} />
                            </p>
                            <span className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>tx/s</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 pb-5">
                        {[141193,141192,141191,141190].map((block, i) => (
                          <div key={block} className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: `${products[activeProduct].color}15` }}>
                              <Zap size={11} style={{ color: products[activeProduct].color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>Block #{(block-i).toLocaleString()}</div>
                              <div className="text-[9px] font-mono truncate" style={{ color: 'rgba(255,255,255,0.18)' }}>
                                {['0x4a2f...9b3c','0xa18d...f042','0x7e5a...c831','0x2b9f...a441'][i]}
                              </div>
                            </div>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>✓</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{ background: '#0f1e35', border: '1px solid rgba(96,165,250,0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
                  animate={reduce ? {} : { y: [0,-5,0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.15)' }}>
                    <CheckCircle size={15} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">All Systems Live</div>
                    <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>4 / 4 running</div>
                  </div>
                </motion.div>

                <motion.div className="absolute -bottom-3 -left-4 rounded-2xl px-4 py-3"
                  style={{ background: '#0f1e35', border: '1px solid rgba(96,165,250,0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
                  animate={reduce ? {} : { y: [0,5,0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                  <div className="text-sm font-black text-blue-400 font-mono">99.9%</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Uptime SLA</div>
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ TRUSTED BY — scrolling marquee ═══ */}
      <div className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a1628, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a1628, transparent)' }} />
        <div className="flex items-center py-5">
          <div className="flex-shrink-0 px-8 z-20">
            <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.3)' }}>Trusted by</p>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div className="flex items-center gap-4 w-max"
              animate={reduce ? {} : { x: ['0%', '-50%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
              {[...partnerLogos, ...partnerLogos].map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl flex-shrink-0 group cursor-default transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Image src={p.src} alt={p.name} width={20} height={20}
                    className="object-contain opacity-40 group-hover:opacity-90 grayscale group-hover:grayscale-0 brightness-200 transition-all duration-300" />
                  <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ STATS BAR ═══ */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { value: '$5M+',  label: 'Partnership value',  sub: 'XRP EVM · Walrus · Paxinet', color: '#a78bfa' },
              { value: '99.9%', label: 'Node uptime SLA',    sub: 'All live networks',           color: '#34d399' },
              { value: '4',     label: 'Live products',      sub: 'Explorers & analytics',       color: '#60a5fa' },
              { value: '50+',   label: 'Networks supported', sub: 'And growing',                 color: '#fb923c' },
            ].map((s, i) => (
              <motion.div key={s.label} className="py-8 px-8 cursor-default"
                style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.07, ease: E }}>
                <div className="text-3xl font-black font-mono" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm font-semibold text-white mt-1 opacity-80">{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
