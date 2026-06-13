'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expo = [0.16, 1, 0.3, 1] as const

const domains = [
  {
    label: 'Blockchain',
    dotClass: 'bg-blue-400',
    tagClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    skills: ['Cosmos SDK', 'CometBFT', 'IBC Protocol', 'Validator Ops', 'RPC / gRPC', 'Smart Contracts', 'Monad', 'Canton Network'],
  },
  {
    label: 'Infrastructure',
    dotClass: 'bg-violet-400',
    tagClass: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    skills: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'Ansible', 'Terraform', 'CI/CD', 'Load Balancing'],
  },
  {
    label: 'Languages',
    dotClass: 'bg-emerald-400',
    tagClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    skills: ['Golang', 'Rust', 'Python', 'TypeScript', 'Bash / Shell', 'Node.js'],
  },
  {
    label: 'Data & Storage',
    dotClass: 'bg-orange-400',
    tagClass: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'InfluxDB', 'Elasticsearch'],
  },
  {
    label: 'Observability',
    dotClass: 'bg-cyan-400',
    tagClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    skills: ['Prometheus', 'Grafana', 'AlertManager', 'Loki', 'Jaeger', 'Datadog'],
  },
  {
    label: 'Cloud',
    dotClass: 'bg-amber-400',
    tagClass: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    skills: ['AWS', 'Hetzner', 'Netcup', 'Cloudflare', 'Wireguard VPN', 'DDoS Protection'],
  },
]

const top = [
  { name: 'Validator Operations', pct: 97, color: 'bg-blue-500' },
  { name: 'Cosmos SDK', pct: 95, color: 'bg-blue-400' },
  { name: 'Linux / Server Admin', pct: 95, color: 'bg-violet-500' },
  { name: 'Bash / Shell', pct: 93, color: 'bg-emerald-500' },
  { name: 'Prometheus / Grafana', pct: 91, color: 'bg-cyan-500' },
  { name: 'Docker / Kubernetes', pct: 89, color: 'bg-violet-400' },
]

function Tag({ label, cls, delay }: { label: string; cls: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const reduce = useReducedMotion()
  return (
    <motion.span
      ref={ref}
      className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap ${cls}`}
      initial={reduce ? false : { opacity: 0, scale: 0.82 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.32, delay, ease: expo }}
    >
      {label}
    </motion.span>
  )
}

export default function SkillsSection() {
  const reduce = useReducedMotion()
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, amount: 0.4 })

  return (
    <section id="skills" className="py-32 px-6 lg:px-10 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto">

        {/* Header: number-forward headline left, bar chart right */}
        <div
          ref={headRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end"
        >
          <div>
            <motion.h2
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.0] text-balance"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: expo }}
            >
              36+ tools,
              <br />
              <span className="text-zinc-600">6 domains</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-sm text-zinc-500 max-w-[38ch] leading-relaxed"
              initial={reduce ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Battle-tested across full-stack blockchain infrastructure, DevOps, and distributed systems.
            </motion.p>
          </div>

          {/* Top strengths bar list */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: expo }}
          >
            <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-5">Core strengths</p>
            <div className="space-y-3">
              {top.map((s, i) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400 w-44 flex-shrink-0 font-medium">{s.name}</span>
                  <div className="flex-1 h-[3px] bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${s.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${s.pct}%` } : {}}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: expo }}
                    />
                  </div>
                  <span className="text-xs text-zinc-700 font-mono w-8 text-right">{s.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Domain tag grid — each row has a different accent, staggered reveals */}
        <div className="space-y-5">
          {domains.map((d, di) => (
            <motion.div
              key={d.label}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: di * 0.05, ease: expo }}
              className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start"
            >
              <div className="flex items-center gap-2 pt-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${d.dotClass}`} />
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">{d.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.skills.map((sk, si) => (
                  <Tag key={sk} label={sk} cls={d.tagClass} delay={di * 0.04 + si * 0.035} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { v: '36+', l: 'Technologies', s: 'across 6 domains' },
            { v: '99.9%', l: 'Node uptime', s: 'all networks' },
            { v: '50+', l: 'Networks', s: 'supported' },
            { v: '3+', l: 'Years', s: 'in production' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-black text-white font-mono">{s.v}</div>
              <div className="text-sm font-semibold text-zinc-400 mt-0.5">{s.l}</div>
              <div className="text-xs text-zinc-700 mt-0.5">{s.s}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
