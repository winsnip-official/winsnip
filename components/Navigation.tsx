'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
  useMotionValueEvent(scrollY, 'change', v => setPast(v > 40))

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href) as HTMLElement
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: past ? 'rgba(5,7,9,0.95)' : 'transparent',
        backdropFilter: past ? 'blur(20px)' : 'none',
        borderBottom: past ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        <a href="/" className="flex items-center gap-2.5 select-none group">
          <Image src="/logo.svg" alt="" width={28} height={28} className="opacity-90" />
          <span className="text-sm font-bold text-white tracking-tight">WinSnip</span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className="px-4 py-2 text-[13px] font-medium transition-colors rounded-lg"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#93c5fd'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}>
              {n.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/winsnip-official" target="_blank" rel="noopener noreferrer"
            className="text-[13px] font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>
            GitHub
          </a>
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 text-[13px] font-semibold text-white rounded-lg transition-all"
            style={{ background: '#3b82f6' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2563eb'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#3b82f6'}>
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(5,7,9,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          className="md:hidden px-6 py-5 space-y-1">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className="block px-4 py-3 text-sm text-white/50 hover:text-white transition-colors rounded-xl hover:bg-white/5">
              {n.name}
            </a>
          ))}
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="block text-center mt-3 px-4 py-3 text-sm font-semibold text-white rounded-xl transition-all"
            style={{ background: '#3b82f6' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#2563eb'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#3b82f6'}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
