'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'

const E = [0.16, 1, 0.3, 1] as const

export default function CTASection() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [done, setDone] = useState(false)
  const [focused, setFocused] = useState('')

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <motion.div className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: E }}>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Get in touch with our team.
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-[44ch]">
            We respond within 24 hours. Infrastructure, validator services, or partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: contact cards + validator CTA */}
          <div className="space-y-4">
            {[
              { icon: Mail,          label: 'Email us',    detail: 'admin@winsnip.xyz', href: 'mailto:admin@winsnip.xyz', color: '#2563eb', bg: '#eff6ff', delay: 0    },
              { icon: MessageCircle, label: 'Telegram',     detail: '@winsnip',          href: 'https://t.me/winsnip',     color: '#0891b2', bg: '#ecfeff', delay: 0.07 },
            ].map(c => (
              <motion.a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: c.delay, ease: E }}
                whileHover={reduce ? {} : { x: 4 }}>
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.bg }}
                  whileHover={reduce ? {} : { scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <c.icon size={22} style={{ color: c.color }} />
                </motion.div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 mb-0.5">{c.label}</div>
                  <div className="text-lg font-bold text-gray-900">{c.detail}</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-blue-600 transition-colors group-hover:translate-x-1 transform" />
              </motion.a>
            ))}

            {/* Validator guide CTA — animated */}
            <motion.a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg shadow-blue-200 relative overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              whileHover={reduce ? {} : { scale: 1.01, y: -2 }}>
              {/* Shine */}
              <motion.div className="absolute inset-0 -translate-x-full"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }}
                whileHover={{ translateX: '200%' }}
                transition={{ duration: 0.6 }} />
              <div>
                <div className="text-base font-bold">Validator Guides</div>
                <div className="text-sm text-blue-200">Setup guides for every major network</div>
              </div>
              <motion.div animate={reduce ? {} : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={22} className="text-white/70" />
              </motion.div>
            </motion.a>
          </div>

          {/* Right: Form with focus animations */}
          {done ? (
            <motion.div
              className="flex items-center justify-center p-16 rounded-3xl bg-white border-2 border-emerald-200 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}>
              <div className="text-center">
                <motion.div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5"
                  animate={reduce ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500">We'll reply within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <motion.form onSubmit={e => { e.preventDefault(); setDone(true) }}
              className="p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-sm space-y-4"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: E }}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { k: 'name',  l: 'Full Name', t: 'text',  ph: 'Your name'       },
                  { k: 'email', l: 'Email',     t: 'email', ph: 'you@example.com' },
                ].map(f => (
                  <div key={f.k}>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">{f.l}</label>
                    <motion.input type={f.t} placeholder={f.ph}
                      value={form[f.k as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                      onFocus={() => setFocused(f.k)}
                      onBlur={() => setFocused('')}
                      className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-gray-50 focus:bg-white"
                      animate={focused === f.k ? { scale: 1.01 } : { scale: 1 }}
                      required />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Subject</label>
                <input type="text" placeholder="What is this about?"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-gray-50 focus:bg-white"
                  required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Message</label>
                <textarea placeholder="Tell us more..." rows={5}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                  required />
              </div>
              <motion.button type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-blue-200 relative overflow-hidden group"
                whileHover={reduce ? {} : { scale: 1.01 }}
                whileTap={{ scale: 0.99 }}>
                <motion.div className="absolute inset-0 -translate-x-full"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }}
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.5 }} />
                <span className="relative">Send Message</span>
                <Send size={15} className="relative" />
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
