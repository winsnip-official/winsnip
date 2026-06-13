'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'

const E = [0.16, 1, 0.3, 1] as const

const domains = [
  { label: 'Blockchain',     color: '#2563eb', light: '#eff6ff', skills: ['Cosmos SDK','CometBFT','IBC Protocol','Validator Ops','RPC/gRPC','Smart Contracts','Monad','Canton'] },
  { label: 'Infrastructure', color: '#7c3aed', light: '#f5f3ff', skills: ['Linux','Docker','Kubernetes','Nginx','Ansible','Terraform','CI/CD','Load Balancing'] },
  { label: 'Languages',      color: '#059669', light: '#ecfdf5', skills: ['Golang','Rust','Python','TypeScript','Bash/Shell','Node.js'] },
  { label: 'Data & Storage', color: '#ea580c', light: '#fff7ed', skills: ['PostgreSQL','MySQL','Redis','MongoDB','InfluxDB','Elasticsearch'] },
  { label: 'Observability',  color: '#0891b2', light: '#ecfeff', skills: ['Prometheus','Grafana','AlertManager','Loki','Jaeger','Datadog'] },
  { label: 'Cloud',          color: '#9333ea', light: '#fdf4ff', skills: ['AWS','Hetzner','Netcup','Cloudflare','Wireguard VPN','DDoS Protection'] },
]

const top = [
  { name: 'Validator Operations',   pct: 97, color: '#2563eb' },
  { name: 'Cosmos SDK',             pct: 95, color: '#2563eb' },
  { name: 'Linux / Server Admin',   pct: 95, color: '#7c3aed' },
  { name: 'Bash / Shell Scripting', pct: 93, color: '#059669' },
  { name: 'Prometheus / Grafana',   pct: 91, color: '#0891b2' },
  { name: 'Docker / Kubernetes',    pct: 89, color: '#7c3aed' },
]

const statsCards = [
  { v: '36+',   l: 'Technologies', s: '6 domains',    color: '#2563eb' },
  { v: '99.9%', l: 'Node Uptime',  s: 'All networks', color: '#059669' },
  { v: '50+',   l: 'Networks',     s: 'Supported',    color: '#7c3aed' },
  { v: '3+',    l: 'Years',        s: 'In production', color: '#ea580c' },
]

export default function SkillsSection() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <motion.div className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            36+ technologies, 6 domains.
          </h2>
        </motion.div>

        {/* Stats cards - animated on scroll */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {statsCards.map((s, i) => (
            <motion.div key={s.l}
              className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: E }}
              whileHover={reduce ? {} : { y: -4, scale: 1.02 }}>
              <div className="text-4xl font-black font-mono mb-1" style={{ color: s.color }}>{s.v}</div>
              <div className="text-sm font-bold text-gray-900">{s.l}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.s}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12" ref={ref}>

          {/* Domain tags */}
          <div className="space-y-4">
            {domains.map((d, di) => (
              <motion.div key={d.label}
                className="flex gap-4 items-start py-3 border-b border-gray-200 last:border-0"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: di * 0.07, ease: E }}>
                <div className="w-28 flex-shrink-0 pt-1.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{d.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.skills.map((sk, si) => (
                    <motion.span key={sk}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200 hover:shadow-sm cursor-default"
                      style={{ background: d.light, color: d.color, borderColor: `${d.color}30` }}
                      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: di * 0.07 + si * 0.03, ease: E }}
                      whileHover={reduce ? {} : { scale: 1.05 }}>
                      {sk}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated strength bars */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Core Strengths</p>
            <div className="space-y-5">
              {top.map((b, i) => (
                <div key={b.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{b.name}</span>
                    <motion.span className="text-sm font-black font-mono"
                      style={{ color: b.color }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.07 }}>
                      {b.pct}%
                    </motion.span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full relative overflow-hidden"
                      style={{ background: b.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${b.pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: E }}>
                      {/* Shine effect */}
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={reduce ? {} : { x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
