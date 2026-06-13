'use client'

import { motion, useReducedMotion, useMotionValue, useSpring, animate } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ran = useRef(false)
  useEffect(() => {
    if (ran.current) return; ran.current = true
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: v => setVal(Math.floor(v)) })
    return () => c.stop()
  }, [to, duration])
  return <>{val.toLocaleString()}</>
}

const products = [
  { name: 'WinScan',    chain: 'Cosmos',    logo: '/COSMOS.png',  color: 'rgba(255,255,255,0.7)', txs: 14_119_218, tps: 4821 },
  { name: 'Monad Scan', chain: 'Monad',     logo: '/monad.svg',   color: 'rgba(255,255,255,0.6)', txs: 8_432_091,  tps: 9104 },
  { name: 'CC Scan',    chain: 'Canton',    logo: '/canton1.png', color: 'rgba(255,255,255,0.55)', txs: 2_891_340, tps: 1230 },
  { name: 'Wintip',     chain: 'Analytics', logo: '/Wintip.png',  color: 'rgba(255,255,255,0.65)', txs: 5_204_881, tps: 3321 },
]

const partners = [
  { src: '/COSMOS.png', name: 'Cosmos' }, { src: '/monad.svg', name: 'Monad' },
  { src: '/canton1.png', name: 'Canton' }, { src: '/XRPL.png', name: 'XRP EVM' },
  { src: '/walrus.webp', name: 'Walrus' }, { src: '/paxi.png', name: 'Paxinet' },
]

export default function ShowcaseHero() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 130, damping: 16 })
  const sy = useSpring(my, { stiffness: 130, damping: 16 })

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setActive(p => (p + 1) % products.length), 3000)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden" style={{ background: '#050709' }}>

      {/* BG: xlabs-style — very subtle, mostly typography */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Faint horizontal lines — editorial grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(transparent calc(100% - 1px), rgba(255,255,255,0.5) 100%)', backgroundSize: '100% 80px' }} />
        {/* Single focused glow top-right */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* LEFT — xlabs-style massive type */}
          <div>
            {/* Section label like xlabs */}
            <motion.p className="text-xs font-bold uppercase tracking-[0.25em] mb-8"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: E }}>
              Blockchain Infrastructure
            </motion.p>

            {/* Massive headline — xlabs style */}
            <div className="mb-8 overflow-hidden">
              {[
                { t: 'Core infrastructure',  italic: false, delay: 0.05, color: '#ffffff' },
                { t: 'for the',              italic: true,  delay: 0.12, color: 'rgba(255,255,255,0.35)' },
                { t: 'internet of value.',   italic: false, delay: 0.19, gradient: true },
              ].map(l => (
                <div key={l.t} className="overflow-hidden">
                  <motion.div
                    className={`font-black leading-[0.92] tracking-[-0.04em] ${l.italic ? 'italic' : ''}`}
                    style={{
                      fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                      ...('gradient' in l && l.gradient ? {
                        background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'grad-slide 4s linear infinite',
                      } : { color: l.color }),
                    }}
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: l.delay, ease: E }}>
                    {l.t}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p className="text-base leading-relaxed max-w-[46ch] mb-12"
              style={{ color: 'rgba(255,255,255,0.45)', textWrap: 'pretty' } as React.CSSProperties}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: E }}>
              We are relentlessly committed to empowering validators, developers,
              and institutions across Cosmos, Monad, and Canton Network.
            </motion.p>

            {/* CTAs — xlabs minimal border style */}
            <motion.div className="flex flex-wrap gap-4 mb-16"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: E }}>
              <motion.a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white rounded-xl cursor-pointer select-none transition-all relative overflow-hidden"
                style={reduce ? { background: '#3b82f6' } : { x: sx, y: sy, background: '#3b82f6' }}
                onMouseMove={e => {
                  if (reduce) return
                  const r = e.currentTarget.getBoundingClientRect()
                  mx.set((e.clientX - (r.left + r.width / 2)) * 0.25)
                  my.set((e.clientY - (r.top + r.height / 2)) * 0.25)
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2563eb'}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#3b82f6'; mx.set(0); my.set(0) }}
                whileTap={{ scale: 0.98 }}>
                <motion.span className="absolute inset-0 -translate-x-full pointer-events-none"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)' }}
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.5 }} />
                <span className="relative">Our work</span>
                <ArrowRight size={14} className="relative group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                Validator guides <ArrowUpRight size={13} />
              </a>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Powering
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {partners.map((p, i) => (
                  <motion.div key={p.name}
                    className="flex items-center gap-2 opacity-30 hover:opacity-70 transition-opacity cursor-default"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.65 + i * 0.05 }}>
                    <Image src={p.src} alt={p.name} width={16} height={16} className="object-contain brightness-0 invert" />
                    <span className="text-xs font-semibold text-white">{p.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — product panel */}
          <motion.div className="hidden lg:block"
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: E }}>
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>

              {/* Border beam */}
              <div className="relative h-[1px] overflow-hidden">
                <motion.div className="absolute top-0 h-[1px] w-24"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                  animate={reduce ? {} : { x: ['-96px', '500px'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }} />
              </div>

              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <div className="flex-1 mx-3 rounded-md px-3 py-1.5 text-[11px] font-mono flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }} />
                  winscan.winsnip.xyz
                </div>
                {/* All Systems Live badge — in browser bar right side */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                  <div>
                    <div className="text-[9px] font-bold text-white leading-tight">All Systems Live</div>
                    <div className="text-[8px] leading-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>4 / 4 running</div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-5 pt-4">
                <div className="flex gap-1.5 mb-4">
                  {products.map((p, i) => (
                    <button key={p.name} onClick={() => setActive(i)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
                      style={active === i
                        ? { background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.25)' }
                        : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid transparent' }}>
                      <Image src={p.logo} alt="" width={11} height={11} className="object-contain brightness-0 invert opacity-60" />
                      {p.chain}
                    </button>
                  ))}
                </div>

                <motion.div key={active}
                  initial={reduce ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2.5 mb-3">
                    <div className="p-3.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Transactions</p>
                      <p className="text-lg font-black font-mono text-white">
                        <Counter to={products[active].txs} duration={1.5} />
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>TPS</p>
                      <div className="flex items-end gap-1">
                        <p className="text-lg font-black text-white font-mono"><Counter to={products[active].tps} duration={1} /></p>
                        <span className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>tx/s</span>
                      </div>
                    </div>
                  </div>

                  {/* Block list */}
                  <div className="space-y-1.5 pb-4">
                    {[141193, 141192, 141191, 141190].map((b, i) => (
                      <div key={b} className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-[9px] font-black font-mono"
                          style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>
                          {(b - i) % 100}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>Block #{(b - i).toLocaleString()}</div>
                        </div>
                        <span className="text-[9px] font-bold" style={{ color: '#34d399' }}>✓</span>                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Stats bar — xlabs has clean bottom strip */}
      <div className="relative z-10 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { v: '$5M+',  l: 'Partnership value' },
              { v: '99.9%', l: 'Node uptime' },
              { v: '4',     l: 'Live products' },
              { v: '50+',   l: 'Networks' },
            ].map((s, i) => (
              <motion.div key={s.l} className="px-8 py-6 first:pl-0"
                style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.07, ease: E }}>
                <div className="text-2xl font-black text-white font-mono">{s.v}</div>
                <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 overflow-hidden flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050709, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050709, transparent)' }} />
        <motion.div className="flex items-center w-max py-3"
          animate={reduce ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
          {['Cosmos SDK', 'IBC Protocol', 'CometBFT', 'Validator Ops', 'Monad', 'Canton', 'Prometheus', 'Grafana', 'Kubernetes', 'Docker', 'Rust', 'Golang', 'AWS', 'Hetzner',
            'Cosmos SDK', 'IBC Protocol', 'CometBFT', 'Validator Ops', 'Monad', 'Canton', 'Prometheus', 'Grafana', 'Kubernetes', 'Docker', 'Rust', 'Golang', 'AWS', 'Hetzner',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-5 text-[10px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.2)' }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }} />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
