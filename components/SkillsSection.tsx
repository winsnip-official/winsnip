'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Code2, Database, Activity, Cloud, GitBranch } from 'lucide-react'

const E = [0.16, 1, 0.3, 1] as const

const domains = [
  {
    label: 'Blockchain',
    icon: GitBranch,
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
    skills: ['Cosmos SDK', 'CometBFT', 'IBC Protocol', 'Validator Ops', 'RPC / gRPC', 'Smart Contracts', 'Monad', 'Canton'],
  },
  {
    label: 'Infrastructure',
    icon: Server,
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.25)',
    skills: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'Ansible', 'Terraform', 'CI/CD', 'Load Balancing'],
  },
  {
    label: 'Languages',
    icon: Code2,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
    skills: ['Golang', 'Rust', 'Python', 'TypeScript', 'Bash / Shell', 'Node.js'],
  },
  {
    label: 'Data & Storage',
    icon: Database,
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.15)',
    border: 'rgba(251,146,60,0.25)',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'InfluxDB', 'Elasticsearch'],
  },
  {
    label: 'Observability',
    icon: Activity,
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.25)',
    skills: ['Prometheus', 'Grafana', 'AlertManager', 'Loki', 'Jaeger', 'Datadog'],
  },
  {
    label: 'Cloud',
    icon: Cloud,
    color: '#e879f9',
    glow: 'rgba(232,121,249,0.15)',
    border: 'rgba(232,121,249,0.25)',
    skills: ['AWS', 'Hetzner', 'Netcup', 'Cloudflare', 'Wireguard VPN', 'DDoS Protection'],
  },
]

const topSkills = [
  { name: 'Validator Operations',   pct: 97, color: '#60a5fa' },
  { name: 'Cosmos SDK',             pct: 95, color: '#60a5fa' },
  { name: 'Linux / Server Admin',   pct: 95, color: '#a78bfa' },
  { name: 'Bash / Shell Scripting', pct: 93, color: '#34d399' },
  { name: 'Prometheus / Grafana',   pct: 91, color: '#38bdf8' },
  { name: 'Docker / Kubernetes',    pct: 89, color: '#a78bfa' },
]

export default function SkillsSection() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-24 overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #071020 0%, #0a1628 100%)' }}>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sk-dot" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#60a5fa" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sk-dot)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[0.95]">
              36+ technologies,<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>6 domains.</span>
            </h2>
          </div>
          {/* Stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { v: '36+',   l: 'Technologies', color: '#60a5fa' },
              { v: '99.9%', l: 'Node Uptime',  color: '#34d399' },
              { v: '50+',   l: 'Networks',      color: '#a78bfa' },
              { v: '3+',    l: 'Years',          color: '#fb923c' },
            ].map((s, i) => (
              <motion.div key={s.l}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: E }}
                className="text-center lg:text-left">
                <div className="text-3xl font-black font-mono" style={{ color: s.color }}>{s.v}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" ref={ref}>
          {domains.map((d, di) => {
            const Icon = d.icon
            return (
              <motion.div key={d.label}
                className="rounded-2xl p-6 relative overflow-hidden group"
                style={{ background: d.glow, border: `1px solid ${d.border}` }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: di * 0.07, ease: E }}
                whileHover={reduce ? {} : { scale: 1.01, y: -3 }}>

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 20% 20%, ${d.glow} 0%, transparent 70%)` }} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${d.color}20`, border: `1px solid ${d.color}40` }}>
                    <Icon size={18} style={{ color: d.color }} />
                  </div>
                  <h3 className="text-base font-bold text-white">{d.label}</h3>
                  <span className="ml-auto text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    {d.skills.length}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {d.skills.map((sk, si) => (
                    <motion.span key={sk}
                      className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold cursor-default"
                      style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.08)' }}
                      initial={reduce ? false : { opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.25, delay: di * 0.06 + si * 0.025, ease: E }}
                      whileHover={reduce ? {} : { scale: 1.06, color: d.color, borderColor: `${d.color}60` } as any}>
                      {sk}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Core strengths bar - full width, horizontal */}
        <motion.div className="rounded-2xl p-8"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Core strengths
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {topSkills.map((b, i) => (
              <div key={b.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>{b.name}</span>
                  <motion.span className="text-sm font-black font-mono"
                    style={{ color: b.color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.06 }}>
                    {b.pct}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <motion.div className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${b.color}80, ${b.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: E }}>
                    {/* Shimmer */}
                    <motion.div className="absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                      animate={reduce ? {} : { x: ['-100%', '200%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5 }} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
