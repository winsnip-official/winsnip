'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Github, Twitter } from 'lucide-react'
import Image from 'next/image'

const NAV = [
  { name: 'Products',  href: '#projects'  },
  { name: 'Services',  href: '#features'  },
  { name: 'Networks',  href: '#networks'  },
  { name: 'Stack',     href: '#skills'    },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'Contact',   href: '#contact'   },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [past, setPast] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', v => setPast(v > 10))

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return // let browser handle real page links
    e.preventDefault()
    const el = document.querySelector(href) as HTMLElement
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={past
        ? { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #e5e7eb' }
        : { background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }
      }>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 select-none">
          <Image src="/logo.svg" alt="" width={28} height={28}
            className={past ? '' : 'brightness-0 invert'} />
          <span className={`text-base font-bold tracking-tight ${past ? 'text-gray-900' : 'text-white'}`}>
            WinSnip
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                past
                  ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  : 'hover:bg-white/10'
              }`}
              style={!past ? { color: 'rgba(255,255,255,0.6)' } : {}}>
              {n.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-1.5">
          <a href="https://github.com/winsnip-official" target="_blank" rel="noopener noreferrer"
            className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
              past ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            style={!past ? { color: 'rgba(255,255,255,0.7)' } : {}}>
            <Github size={16} />
          </a>
          <a href="https://x.com/winsnip" target="_blank" rel="noopener noreferrer"
            aria-label="X"
            className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
              past ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            style={!past ? { color: 'rgba(255,255,255,0.7)' } : {}}>
            <Twitter size={16} />
          </a>
          <div className={`w-px h-4 mx-1 ${past ? 'bg-gray-200' : 'bg-white/15'}`} />
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold rounded-xl transition-colors bg-blue-500 hover:bg-blue-400 text-white">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-lg transition-all ${
            past ? 'text-gray-600 hover:bg-gray-100' : 'hover:bg-white/10'
          }`}
          style={!past ? { color: 'rgba(255,255,255,0.8)' } : {}}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg">
        <div className="px-6 py-4 space-y-1">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
              {n.name}
            </a>
          ))}
          <div className="flex items-center gap-3 px-4 py-2.5">
            <a href="https://github.com/winsnip-official" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
              <Github size={14} /> GitHub
            </a>
            <a href="https://x.com/winsnip" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
              <Twitter size={14} /> Twitter
            </a>
          </div>
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="block text-center px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl">
            Get Started
          </a>
        </div>
      </motion.div>
    </header>
  )
}
