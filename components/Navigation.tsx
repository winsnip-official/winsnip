'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Github, Twitter, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  )
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)'])

  const menuItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Features', href: '#features' },
    { name: 'Networks', href: '#networks' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 shadow-2xl' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-4 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo.svg"
                alt="WinSnip Logo"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 tracking-tight">
                WinSnip
              </span>
              <span className="text-[11px] text-neutral-500 uppercase tracking-[0.2em] font-bold">
                Blockchain Infrastructure
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative px-5 py-2.5 text-sm font-semibold text-neutral-300 hover:text-white transition-colors rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.a>
            ))}
            
            {/* Action Icons */}
            <div className="flex items-center space-x-1 ml-4 pl-4 border-l border-white/10">
              <motion.a
                href="/docs/winscan/getting-started/introduction"
                className="p-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Documentation"
              >
                <BookOpen size={18} />
              </motion.a>
              
              <div className="w-px h-6 bg-white/10"></div>
              
              <motion.a
                href="https://github.com/winsnip"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github size={18} />
              </motion.a>
              
              <div className="w-px h-6 bg-white/10"></div>
              
              <motion.button
                onClick={() => {
                  const url = window.location.href
                  const text = 'Check out WinSnip - Blockchain Infrastructure Excellence'
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="p-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Share on Twitter"
              >
                <Twitter size={18} />
              </motion.button>
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="https://service.winsnip.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-4 px-6 py-2.5 rounded-xl font-bold text-sm overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative text-white">
                Validator Guides
              </span>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
      >
        <div className="px-6 py-6 space-y-3">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              className="block px-4 py-3 text-base font-semibold text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.a
            href="https://service.winsnip.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ delay: menuItems.length * 0.1 }}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center"
          >
            Validator Guides
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
