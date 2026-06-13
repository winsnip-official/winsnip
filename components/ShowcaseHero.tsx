'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const expo = [0.16, 1, 0.3, 1] as const

// --- Live explorer pills shown in the visual panel ---
const explorers = [
  { name: 'WinScan', chain: 'Cosmos', logo: '/COSMOS.png', color: '#3b82f6', status: 'live' },
  { name: 'Monad Scan', chain: 'Monad', logo: '/monad.svg', color: '#8b5cf6', status: 'live' },
  { name: 'CC Scan', chain: 'Canton', logo: '/canton1.png', color: '#f97316', status: 'live' },
  { name: 'Wintip', chain: 'Analytics', logo: '/Wintip.png', color: '#10b981', status: 'live' },
]

export default function ShowcaseHero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Two-speed parallax for genuine depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Magnetic primary CTA — Jhey technique, no useState
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 160, damping: 20 })
  const sy = useSpring(my, { stiffness: 160, damping: 20 })

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] bg-zinc-950 overflow-hidden flex flex-col"
    >
      {/* ═══ BACKGROUND ARCHITECTURE ═══════════════════════════ */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        style={reduce ? {} : { y: bgY }}
      >
        {/* Structural dot grid — extremely subtle, gives scale */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        {/* Hard diagonal light beam from top-right — not a blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.22] pointer-events-none"
          style={{
            background:
              'conic-gradient(from 195deg at 100% 0%, transparent 0deg, #3b82f6 35deg, transparent 75deg)',
            filter: 'blur(50px)',
          }}
        />
        {/* Horizon rule — gives landing */}
        <div className="absolute bottom-[28%] left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute bottom-[28%] left-1/3 w-32 h-px bg-blue-500/30" />
      </motion.div>

      {/* ═══ CONTENT ════════════════════════════════════════════ */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-24 pb-10"
        style={reduce ? {} : { y: fgY, opacity: fade }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">

          {/* ── LEFT: CONTENT ── */}
          <div>
            {/* Status — semantic, not decorative eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: expo }}
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"
                  animate={reduce ? {} : { scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-semibold text-zinc-500 tracking-wide">
                All systems operational
              </span>
            </motion.div>

            {/* ── HEADLINE: 3 lines, each architecturally distinct ── */}
            {/* Line 1: massive, white, full weight */}
            {/* Line 2: slightly indented, brand blue */}
            {/* Line 3: right-aligned, muted — creates diagonal eye path */}
            <h1 className="mb-8 overflow-hidden">
              <div className="overflow-hidden mb-1">
                <motion.div
                  className="font-black tracking-[-0.04em] leading-[0.9] text-white"
                  style={{ fontSize: 'clamp(4rem, 9.5vw, 8rem)' }}
                  initial={reduce ? false : { y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.05, ease: expo }}
                >
                  Blockchain
                </motion.div>
              </div>

              <div className="overflow-hidden mb-1">
                <motion.div
                  className="font-black tracking-[-0.04em] leading-[0.9] text-blue-400 pl-[0.05em]"
                  style={{ fontSize: 'clamp(4rem, 9.5vw, 8rem)' }}
                  initial={reduce ? false : { y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.13, ease: expo }}
                >
                  Infrastructure
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  className="font-black tracking-[-0.02em] leading-[0.95] text-zinc-600 text-right pr-[0.02em]"
                  style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4.5rem)' }}
                  initial={reduce ? false : { y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.75, delay: 0.21, ease: expo }}
                >
                  at institutional scale.
                </motion.div>
              </div>
            </h1>

            {/* Body copy */}
            <motion.p
              className="text-base text-zinc-400 leading-relaxed max-w-[42ch] mb-9"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: expo }}
            >
              Testnet participation, airdrop alerts, and professional node infrastructure
              trusted by validators across Cosmos, Monad, and Canton Network.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: expo }}
            >
              {/* Primary — magnetic + shimmer sweep */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-500 text-white text-sm font-bold rounded-xl overflow-hidden cursor-pointer select-none"
                style={reduce ? {} : { x: sx, y: sy }}
                onMouseMove={(e) => {
                  if (reduce) return
                  const r = e.currentTarget.getBoundingClientRect()
                  mx.set((e.clientX - (r.left + r.width / 2)) * 0.3)
                  my.set((e.clientY - (r.top + r.height / 2)) * 0.3)
                }}
                onMouseLeave={() => { mx.set(0); my.set(0) }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shimmer — runs once on hover, Jakub production polish */}
                <motion.span
                  className="absolute inset-0 -translate-x-full pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.22) 50%,transparent 100%)',
                  }}
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                <span className="relative">Explore Projects</span>
                <ArrowRight
                  size={14}
                  className="relative group-hover:translate-x-0.5 transition-transform duration-150"
                />
              </motion.a>

              <motion.a
                href="https://service.winsnip.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-zinc-400 rounded-xl border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all duration-200"
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              >
                Validator Guides
                <ArrowUpRight
                  size={13}
                  className="opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: VISUAL PANEL ── */}
          {/* Live product cards — shows actual product, not abstract decoration */}
          <motion.div
            className="hidden lg:block"
            initial={reduce ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: expo }}
          >
            <div className="relative">
              {/* Panel label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">Live products</span>
                <div className="flex-1 h-px bg-zinc-800" />
                <span className="text-[10px] font-mono text-zinc-700">4 running</span>
              </div>

              {/* Cards stack — each slightly different y offset = depth */}
              <div className="space-y-2.5">
                {explorers.map((ex, i) => (
                  <motion.div
                    key={ex.name}
                    initial={reduce ? false : { opacity: 0, x: 24, y: 8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={reduce ? {} : { x: -4, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                    className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-200 cursor-default"
                    style={{ borderLeftColor: `${ex.color}40`, borderLeftWidth: '2px' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: `${ex.color}18` }}
                    >
                      <Image src={ex.logo} alt={ex.name} width={26} height={26} className="object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-white leading-none mb-0.5">{ex.name}</div>
                      <div className="text-xs text-zinc-600">{ex.chain}</div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <span className="text-[10px] font-semibold text-green-400">Live</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent — uptime strip */}
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                className="mt-4 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-zinc-600">Network uptime</span>
                    <span className="text-[10px] font-mono text-green-400">99.9%</span>
                  </div>
                  {/* Mini bar */}
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '99.9%' }}
                      transition={{ duration: 1.4, delay: 1.0, ease: expo }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ═══ BOTTOM TICKER — one per page ════════════════════ */}
      <motion.div
        className="relative z-10 border-t border-zinc-800/40 overflow-hidden flex-shrink-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center w-max py-3"
          animate={reduce ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[
            'Cosmos SDK', 'IBC Protocol', 'CometBFT', 'Validator Node Ops',
            'Monad Network', 'Canton Network', 'Prometheus', 'Grafana',
            'Kubernetes', 'Docker', 'Rust', 'Golang', 'AWS', 'Hetzner',
            'Cosmos SDK', 'IBC Protocol', 'CometBFT', 'Validator Node Ops',
            'Monad Network', 'Canton Network', 'Prometheus', 'Grafana',
            'Kubernetes', 'Docker', 'Rust', 'Golang', 'AWS', 'Hetzner',
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-5 text-[10px] font-semibold text-zinc-700 uppercase tracking-[0.14em] whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-zinc-800 flex-shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}
