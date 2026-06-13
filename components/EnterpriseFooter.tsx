'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Github, Twitter, Mail, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const cols = {
  Products:  [
    { name: 'WinScan',          href: 'https://winscan.winsnip.xyz/'   },
    { name: 'Monad Scan',       href: 'https://monad-scan.winscan.org/'},
    { name: 'CC Network Scan',  href: 'https://ccscan.winsnip.xyz/'    },
    { name: 'Wintip',           href: 'https://wintip.cc/'             },
    { name: 'Validator Guides', href: 'https://service.winsnip.xyz/'   },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs/winscan/getting-started/introduction' },
    { name: 'Ecosystem',     href: '/ecosystem'                                 },
    { name: 'GitHub',        href: 'https://github.com/winsnip-official'        },
    { name: 'Community',     href: 'https://t.me/winsnip'                       },
  ],
  Legal: [
    { name: 'Privacy',    href: '/docs/legal/privacy'    },
    { name: 'Terms',      href: '/docs/legal/terms'      },
    { name: 'Security',   href: '/docs/legal/security'   },
  ],
}

export default function EnterpriseFooter() {
  const reduce = useReducedMotion()

  return (
    <footer style={{ background: '#050709', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="" width={26} height={26} className="opacity-70" />
              <span className="text-sm font-bold text-white">WinSnip</span>
            </div>
            <p className="text-xs leading-relaxed max-w-[26ch] mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Core infrastructure for the internet of value.
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[
                { icon: Twitter, href: 'https://x.com/winsnip', label: 'X' },
                { icon: Github,  href: 'https://github.com/winsnip-official', label: 'GitHub' },
                { icon: Mail,    href: 'mailto:admin@winsnip.xyz', label: 'Email' },
              ].map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
                  whileHover={reduce ? {} : { scale: 1.06, color: '#fff' } as any}
                  whileTap={{ scale: 0.95 }}>
                  <s.icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>{title}</h3>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.name}>
                    <a href={item.href}
                      className="text-xs transition-colors inline-flex items-center gap-1 group"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>
                      {item.name}
                      {item.href.startsWith('http') && (
                        <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar — xlabs style */}
        <div className="py-8 mb-8 rounded-2xl px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <div className="text-base font-black mb-1"
              style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Build with us.
            </div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Work on the leading blockchain infrastructure and make a significant impact.</div>
          </div>
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all"
            style={{ border: '1px solid rgba(59,130,246,0.4)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.8)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.4)'}>
            Get started <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)' }}>&copy; {new Date().getFullYear()} WinSnip. All rights reserved.</p>
          <p className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>99.9% uptime SLA</p>
        </div>
      </div>
    </footer>
  )
}
