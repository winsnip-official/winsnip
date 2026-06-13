'use client'

import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Github, Twitter } from 'lucide-react'
import Image from 'next/image'

const expo = [0.16, 1, 0.3, 1] as const

const NAV_ITEMS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Features', href: '#features' },
  { name: 'Networks', href: '#networks' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 32))

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-[background,border-color] duration-300"
      style={{
        background: scrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.svg"
              alt="WinSnip"
              width={30}
              height={30}
              className="w-7.5 h-7.5 group-hover:opacity-80 transition-opacity"
            />
            <span className="text-[15px] font-bold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
              WinSnip
            </span>
          </a>

          {/* Desktop links — Emil: no animation on frequent nav clicks */}
          <div className="hidden md:flex items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => goto(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/[0.04]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-1.5">
            {[
              { icon: Github, href: 'https://github.com/winsnip', label: 'GitHub' },
              { icon: Twitter, href: 'https://x.com/winsnip', label: 'X' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.05] transition-all duration-150"
              >
                <s.icon size={15} />
              </a>
            ))}
            <div className="w-px h-5 bg-zinc-800 mx-1" />
            <a
              href="https://service.winsnip.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-colors duration-150 ml-1"
            >
              Validator Guides
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.05] transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.22, ease: expo }}
        className="md:hidden overflow-hidden bg-zinc-950/98 border-t border-zinc-800/60"
      >
        <div className="px-6 py-5 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => goto(e, item.href)}
              className="block px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 mt-3 border-t border-zinc-800/60">
            <a
              href="https://service.winsnip.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Validator Guides
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
