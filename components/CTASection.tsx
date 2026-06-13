'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

export default function CTASection() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [done, setDone] = useState(false)

  return (
    <section id="contact" className="py-28 px-6 lg:px-10 relative overflow-hidden" style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Same grid as hero */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(transparent calc(100% - 1px), rgba(255,255,255,0.5) 100%)', backgroundSize: '100% 80px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        <motion.div className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: E }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Contact us</p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] leading-[0.92]">
            <span style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Get in touch.</span>
          </h2>
          <p className="mt-4 text-base max-w-[42ch] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Infrastructure, validator services, or partnership opportunities.
            We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'Email', detail: 'admin@winsnip.xyz', href: 'mailto:admin@winsnip.xyz' },
              { icon: MessageCircle, label: 'Telegram', detail: '@winsnip', href: 'https://t.me/winsnip' },
            ].map(c => (
              <motion.a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                initial={reduce ? false : { opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: E }}
                whileHover={reduce ? {} : { x: 4 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <c.icon size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{c.label}</div>
                  <div className="text-base font-bold text-white">{c.detail}</div>
                </div>
                <ArrowRight size={14} className="ml-auto transition-all group-hover:translate-x-1" style={{ color: 'rgba(255,255,255,0.2)' }} />
              </motion.a>
            ))}

            <motion.a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl transition-all duration-200 relative overflow-hidden"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={reduce ? {} : { x: 4 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.5)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.25)'}>
              <motion.span className="absolute inset-0 -translate-x-full pointer-events-none"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.08),transparent)' }}
                whileHover={{ translateX: '200%' }} transition={{ duration: 0.6 }} />
              <div>
                <div className="text-base font-bold text-white">Validator Guides</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Setup guides for every major network</div>
              </div>
              <motion.div animate={reduce ? {} : { x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={18} style={{ color: '#3b82f6' }} />
              </motion.div>
            </motion.a>
          </div>

          {/* Form */}
          {done ? (
            <motion.div className="flex items-center justify-center p-16 rounded-2xl"
              style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-white mb-1">Message sent</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>We'll reply within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <motion.form onSubmit={e => { e.preventDefault(); setDone(true) }}
              className="space-y-3 p-7 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: E }}>
              <div className="grid grid-cols-2 gap-3">
                {[{ k: 'name', l: 'Name', t: 'text', ph: 'Your name' }, { k: 'email', l: 'Email', t: 'email', ph: 'you@example.com' }].map(f => (
                  <div key={f.k}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{f.l}</label>
                    <input type={f.t} placeholder={f.ph}
                      value={form[f.k as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', color: '#fff' }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'}
                      required />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Subject</label>
                <input type="text" placeholder="What is this about?"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'}
                  required />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Message</label>
                <textarea placeholder="Tell us more..." rows={5}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors resize-none"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'}
                  required />
              </div>
              <motion.button type="submit"
                className="w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all relative overflow-hidden group"
                style={{ background: '#3b82f6' }}
                whileHover={reduce ? {} : { background: '#2563eb' } as any}
                whileTap={{ scale: 0.99 }}>
                <motion.span className="absolute inset-0 -translate-x-full"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }}
                  whileHover={{ translateX: '200%' }} transition={{ duration: 0.5 }} />
                <span className="relative">Send Message</span>
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
