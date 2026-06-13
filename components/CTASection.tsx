'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Send, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const expo = [0.16, 1, 0.3, 1] as const

export default function CTASection() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [done, setDone] = useState(false)

  return (
    <section id="contact" className="py-32 px-6 lg:px-10 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: expo }}
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.0] text-balance mb-5">
              Get in touch
            </h2>
            <p className="text-sm text-zinc-500 max-w-[40ch] leading-relaxed mb-10">
              Questions about infrastructure, validator services, or partnership opportunities?
              We respond within 24 hours.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: 'Email', detail: 'admin@winsnip.xyz', href: 'mailto:admin@winsnip.xyz', hover: 'group-hover:text-blue-400' },
                { icon: Send, label: 'Telegram', detail: '@winsnip', href: 'https://t.me/winsnip', hover: 'group-hover:text-cyan-400' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className={`text-zinc-600 ${c.hover} transition-colors`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-500">{c.label}</div>
                    <div className="text-sm font-semibold text-white">{c.detail}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Validator CTA at bottom of contact column */}
            <motion.a
              href="https://service.winsnip.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-between p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300"
              whileHover={reduce ? {} : { x: 4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              <div>
                <div className="text-sm font-bold text-white mb-0.5">Validator Guides</div>
                <div className="text-xs text-zinc-500">Setup guides for every major network</div>
              </div>
              <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150" />
            </motion.a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: expo }}
          >
            {done ? (
              <div className="h-full flex items-center justify-center p-12 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Message sent</h3>
                  <p className="text-sm text-zinc-500">We will get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setDone(true) }}
                className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-semibold text-zinc-600 mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-blue-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors duration-150"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-blue-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors duration-150"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-blue-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors duration-150 resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
                  whileHover={reduce ? {} : { scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
