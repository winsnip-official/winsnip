'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Github, Twitter, Mail, ArrowUpRight, Send } from 'lucide-react'
import Image from 'next/image'

const links = {
  Product: [
    { name: 'WinScan', href: 'https://winscan.winsnip.xyz/' },
    { name: 'Monad Scan', href: 'https://monad-scan.winscan.org/' },
    { name: 'CC Network Scan', href: 'https://ccscan.winsnip.xyz/' },
    { name: 'Wintip', href: 'https://wintip.cc/' },
    { name: 'Validator Guides', href: 'https://service.winsnip.xyz/' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs/winscan/getting-started/introduction' },
    { name: 'Validator Setup', href: 'https://service.winsnip.xyz/' },
    { name: 'GitHub', href: 'https://github.com/winsnip' },
    { name: 'Community', href: 'https://t.me/winsnip' },
  ],
  Legal: [
    { name: 'Privacy', href: '/docs/legal/privacy' },
    { name: 'Terms', href: '/docs/legal/terms' },
    { name: 'Security', href: '/docs/legal/security' },
    { name: 'Compliance', href: '/docs/legal/compliance' },
  ],
}

export default function EnterpriseFooter() {
  const reduce = useReducedMotion()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="WinSnip" width={26} height={26} />
              <span className="text-sm font-bold text-white">WinSnip</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[28ch] mb-6">
              Enterprise-grade blockchain infrastructure for the decentralized future.
            </p>
            <div className="flex items-center gap-2 mb-5">
              {[
                { icon: Twitter, href: 'https://x.com/winsnip', label: 'X' },
                { icon: Github, href: 'https://github.com/winsnip', label: 'GitHub' },
                { icon: Mail, href: 'mailto:admin@winsnip.xyz', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-600 hover:text-zinc-300 transition-all duration-200"
                  whileHover={reduce ? {} : { scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon size={13} />
                </motion.a>
              ))}
            </div>
            <a
              href="https://t.me/winsnip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-400 transition-colors"
            >
              <Send size={11} />
              Join Telegram
            </a>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      {item.href.startsWith('http') && (
                        <ArrowUpRight
                          size={9}
                          className="opacity-0 group-hover:opacity-50 transition-opacity"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-zinc-800">
            &copy; {new Date().getFullYear()} WinSnip. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-800 font-mono">99.9% uptime SLA</p>
        </div>

      </div>
    </footer>
  )
}
