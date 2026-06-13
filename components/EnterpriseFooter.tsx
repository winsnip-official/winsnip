'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Github, Twitter, Mail, ArrowUpRight, Send } from 'lucide-react'
import Image from 'next/image'

const cols = {
  Products: [
    { name: 'WinScan',          href: 'https://winscan.winsnip.xyz/'   },
    { name: 'Monad Scan',       href: 'https://monad-scan.winscan.org/'},
    { name: 'CC Network Scan',  href: 'https://ccscan.winsnip.xyz/'    },
    { name: 'Wintip',           href: 'https://wintip.cc/'             },
    { name: 'Validator Guides', href: 'https://service.winsnip.xyz/'   },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs/winscan/getting-started/introduction' },
    { name: 'GitHub',        href: 'https://github.com/winsnip-official'        },
    { name: 'Community',     href: 'https://t.me/winsnip'                       },
  ],
  Legal: [
    { name: 'Privacy',    href: '/docs/legal/privacy'    },
    { name: 'Terms',      href: '/docs/legal/terms'      },
    { name: 'Security',   href: '/docs/legal/security'   },
    { name: 'Compliance', href: '/docs/legal/compliance' },
  ],
}

export default function EnterpriseFooter() {
  const reduce = useReducedMotion()

  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="WinSnip" width={28} height={28} />
              <span className="text-base font-bold text-gray-900">WinSnip</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[28ch] mb-6">
              Enterprise blockchain infrastructure for the decentralized future.
            </p>

            <div className="flex items-center gap-2 mb-5">
              {[
                { icon: Twitter, href: 'https://x.com/winsnip',              label: 'X'      },
                { icon: Github,  href: 'https://github.com/winsnip-official', label: 'GitHub' },
                { icon: Mail,    href: 'mailto:admin@winsnip.xyz',            label: 'Email'  },
              ].map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-all duration-200"
                  whileHover={reduce ? {} : { scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>

            <a href="https://t.me/winsnip" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              <Send size={13} />
              Join Telegram Community
            </a>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.name}>
                    <a href={item.href}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group">
                      {item.name}
                      {item.href.startsWith('http') && (
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          className="mb-10 p-8 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative z-10">
            <div className="text-xl font-black mb-1">Ready to get started?</div>
            <div className="text-blue-200 text-sm">Join validators running on WinSnip infrastructure.</div>
          </div>
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            Get Started <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} WinSnip. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              99.9% uptime SLA
            </span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-400 font-mono">4 products live</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
