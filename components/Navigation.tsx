'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Github, Twitter } from 'lucide-react'
import Image from 'next/image'

const NAV = [
  { name: 'Products', href: '#projects' },
  { name: 'Services', href: '#features' },
  { name: 'Networks', href: '#networks' },
  { name: 'Stack',    href: '#skills'   },
  { name: 'Contact',  href: '#contact'  },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [past, setPast] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', v => setPast(v > 10))

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href) as HTMLElement
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      past ? 'bg-white shadow-[0_1px_0_#e5e7eb]' : 'bg-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        <a href="/" className="flex items-center gap-3 select-none">
          <Image src="/logo.svg" alt="" width={28} height={28} />
          <span className="text-base font-bold text-gray-900">WinSnip</span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
              {n.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1.5">
          {/* GitHub icon */}
          <a href="https://github.com/winsnip-official" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
            <Github size={17} />
          </a>
          {/* Twitter/X icon */}
          <a href="https://x.com/winsnip" target="_blank" rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
            <Twitter size={17} />
          </a>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors">
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {NAV.map(n => (
            <a key={n.name} href={n.href} onClick={e => go(e, n.href)}
              className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
              {n.name}
            </a>
          ))}
          <div className="flex items-center gap-3 px-4 py-3">
            <a href="https://github.com/winsnip-official" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
              <Github size={15} /> GitHub
            </a>
            <a href="https://x.com/winsnip" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
              <Twitter size={15} /> Twitter
            </a>
          </div>
          <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
            className="block text-center px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl">
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
