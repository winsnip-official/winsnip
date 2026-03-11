'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Mail, ArrowUpRight, Send } from 'lucide-react'
import Image from 'next/image'

const footerSections = {
  Product: [
    { name: 'WinScan Explorer', href: 'https://winscan.winsnip.xyz/' },
    { name: 'Monad Scanner', href: 'https://monad-scan.winscan.org/' },
    { name: 'CC Network Scan', href: 'https://ccscan.winsnip.xyz/' },
    { name: 'Validator Guides', href: 'https://service.winsnip.xyz/' }
  ],
  Resources: [
    { name: 'Documentation', href: '/docs/winscan/getting-started/introduction' },
    { name: 'Validator Setup', href: 'https://service.winsnip.xyz/' },
    { name: 'GitHub', href: 'https://github.com/winsnip' },
    { name: 'Community', href: 'https://t.me/winsnip' }
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: 'mailto:admin@winsnip.xyz' },
    { name: 'X (Twitter)', href: 'https://x.com/winsnip' },
    { name: 'Telegram', href: 'https://t.me/winsnip' }
  ],
  Legal: [
    { name: 'Privacy', href: '/docs/legal/privacy' },
    { name: 'Terms', href: '/docs/legal/terms' },
    { name: 'Security', href: '/docs/legal/security' },
    { name: 'Compliance', href: '/docs/legal/compliance' }
  ]
}

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/winsnip', label: 'X (Twitter)' },
  { icon: Github, href: 'https://github.com/winsnip', label: 'GitHub' },
  { icon: Mail, href: 'mailto:admin@winsnip.xyz', label: 'Email' }
]

export default function EnterpriseFooter() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.svg"
                  alt="WinSnip Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">WinSnip</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-sm">
                Enterprise-grade blockchain infrastructure for the decentralized future. 
                Join our community of 10K+ members.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/5 hover:border-white/10 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} className="text-neutral-400 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
              {/* Telegram Community */}
              <motion.a
                href="https://t.me/winsnip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/20 hover:border-blue-500/30 rounded-full text-sm text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={14} />
                <span>Join Telegram Community</span>
              </motion.a>
            </div>

            {/* Links Columns */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-4 text-white/90">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-500 hover:text-blue-400 transition-colors inline-flex items-center group"
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} WinSnip. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}