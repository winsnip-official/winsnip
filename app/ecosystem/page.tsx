'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search, ArrowUpRight, ExternalLink, Globe, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const E = [0.16, 1, 0.3, 1] as const

// ─── DATA ──────────────────────────────────────────────────────────────
const partners = [
  // Validators / Live explorers
  { name: 'WinScan',        desc: 'Real-time Cosmos explorer with validator tracking, IBC monitoring, and governance tools.',     logo: '/COSMOS.png',           url: 'https://winscan.winsnip.xyz/',    tags: ['Explorer','Cosmos','Validator'],             type: 'Product'  },
  { name: 'Monad Scan',     desc: 'High-performance block explorer for the Monad network. Sub-100ms response times.',              logo: '/monad.svg',             url: 'https://monad-scan.winscan.org/', tags: ['Explorer','Monad','High-perf'],              type: 'Product'  },
  { name: 'CC Network Scan',desc: 'Canton Network explorer with enterprise compliance tooling and privacy analytics.',              logo: '/canton1.png',           url: 'https://ccscan.winsnip.xyz/',     tags: ['Explorer','Canton','Enterprise'],            type: 'Product'  },
  { name: 'Wintip',         desc: 'Multi-chain analytics and real-time data visualization across multiple networks.',              logo: '/Wintip.png',            url: 'https://wintip.cc/',             tags: ['Analytics','Multi-chain'],                  type: 'Product'  },
  // Network partners
  { name: 'XRP EVM',        desc: 'EVM-compatible chain built on the XRP Ledger. WinSnip is an active explorer partner.',          logo: '/XRPL.png',             url: 'https://explorer.xrplevm.org/apps/winsnip', tags: ['Partner','EVM','XRP'],            type: 'Network'  },
  { name: 'Walrus',         desc: 'Decentralized storage protocol. WinSnip operates as a Walrus mainnet operator.',                logo: '/walrus.webp',          url: 'https://walruscan.com/mainnet/operator/0xbf50bcd0befb824f2066cf9b73a20a8e328ae411c816b0b425453c82c0e7ff9c', tags: ['Partner','Storage','Decentralized'], type: 'Network' },
  { name: 'Cosmos',         desc: 'The Internet of Blockchains. WinSnip provides validator infrastructure for Cosmos chains.',     logo: '/COSMOS.png',           url: 'https://cosmos.network/',        tags: ['Network','IBC','Validator'],                type: 'Network'  },
  { name: 'Canton Network', desc: 'Enterprise blockchain network for institutional financial applications.',                       logo: '/canton1.png',           url: 'https://canton.network/',        tags: ['Network','Enterprise','DeFi'],              type: 'Network'  },
  { name: 'Pactus',         desc: 'Decentralized blockchain network. WinSnip provides validator services.',                       logo: '/pactus-logo-circle.svg',url: 'https://pactus.org/',            tags: ['Partner','Validator','Network'],             type: 'Network'  },
  { name: 'Paxinet',        desc: 'Network partner. WinSnip provides infrastructure services for the Paxinet ecosystem.',         logo: '/paxi.png',             url: 'https://paxinet.io/',            tags: ['Partner','Infrastructure'],                 type: 'Network'  },
  // Infrastructure
  { name: 'AWS',            desc: 'Enterprise cloud infrastructure powering WinSnip validator nodes.',                            logo: '/aws.png',              url: 'https://aws.amazon.com/',        tags: ['Infrastructure','Cloud'],                   type: 'Infrastructure' },
  { name: 'Hetzner',        desc: 'European cloud and dedicated server provider for WinSnip node operations.',                    logo: '/Hetzner.png',          url: 'https://hetzner.com/',           tags: ['Infrastructure','Cloud'],                   type: 'Infrastructure' },
  { name: 'Netcup',         desc: 'German cloud hosting provider supporting WinSnip infrastructure.',                             logo: '/netcup.jpeg',          url: 'https://netcup.eu/',             tags: ['Infrastructure','Cloud'],                   type: 'Infrastructure' },
  // Wallets
  { name: 'MetaMask',       desc: 'Leading Web3 wallet integrated with WinSnip block explorers.',                                 logo: '/MetaMask.png',         url: 'https://metamask.io/',           tags: ['Wallet','Web3','EVM'],                      type: 'Wallet'   },
  { name: 'Cosmostation',   desc: 'Multi-chain Cosmos wallet integrated with WinScan explorer.',                                  logo: '/Cosmostation.png',     url: 'https://cosmostation.io/',       tags: ['Wallet','Cosmos','IBC'],                    type: 'Wallet'   },
  { name: 'Keplr',          desc: 'The leading Cosmos IBC wallet, integrated with WinScan.',                                      logo: '/keplr.png',            url: 'https://keplr.app/',             tags: ['Wallet','Cosmos','IBC'],                    type: 'Wallet'   },
  { name: 'Leap',           desc: 'Multi-chain wallet supporting Cosmos and IBC assets.',                                         logo: '/leap.png',             url: 'https://leapwallet.io/',         tags: ['Wallet','Multi-chain','IBC'],               type: 'Wallet'   },
]

const ALL_TYPES = ['All', 'Product', 'Network', 'Infrastructure', 'Wallet']
const ALL_TAGS = ['Explorer', 'Validator', 'Analytics', 'Partner', 'Network', 'Cloud', 'Wallet', 'Enterprise', 'IBC', 'EVM']

const TYPE_COLORS: Record<string, string> = {
  Product:        'bg-blue-100 text-blue-700 border-blue-200',
  Network:        'bg-violet-100 text-violet-700 border-violet-200',
  Infrastructure: 'bg-orange-100 text-orange-700 border-orange-200',
  Wallet:         'bg-emerald-100 text-emerald-700 border-emerald-200',
}

export default function EcosystemPage() {
  const reduce = useReducedMotion()
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')
  const [activeTags, setActiveTags] = useState<string[]>([])

  const filtered = useMemo(() => {
    return partners.filter(p => {
      const matchSearch = !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchType = activeType === 'All' || p.type === activeType
      const matchTags = activeTags.length === 0 || activeTags.every(t => p.tags.includes(t))
      return matchSearch && matchType && matchTags
    })
  }, [search, activeType, activeTags])

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">

      {/* Header */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/logo.svg" alt="WinSnip" width={26} height={26} className="brightness-0 invert opacity-80" />
            <span className="text-sm font-bold text-white">WinSnip</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/#contact"
              className="text-sm font-medium px-4 py-2 rounded-xl transition-all"
              style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact
            </Link>
            <a href="https://service.winsnip.xyz/" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: E }}>
          <div className="flex items-center gap-2 mb-5">
            <Globe size={16} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95] mb-4">
            The WinSnip<br />
            <span style={{ color: '#60a5fa' }}>ecosystem</span>
          </h1>
          <p className="text-lg max-w-[48ch] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Products, networks, infrastructure providers, and wallet integrations
            that power the WinSnip platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div className="flex flex-wrap gap-6 mt-10 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          {[
            { v: `${partners.length}`, l: 'Partners & products' },
            { v: '7',  l: 'Active networks' },
            { v: '$5M+', l: 'Partnership value' },
            { v: '99.9%', l: 'Uptime SLA' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl font-black text-white font-mono">{s.v}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-40 border-b" style={{ background: 'rgba(10,22,40,0.95)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">

            {/* Search */}
            <div className="relative flex-shrink-0 w-full md:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.3)' }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search partners..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X size={13} style={{ color: 'rgba(255,255,255,0.4)' }} />
                </button>
              )}
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap gap-2">
              {ALL_TYPES.map(t => (
                <button key={t} onClick={() => setActiveType(t)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                  style={activeType === t
                    ? { background: '#3b82f6', color: '#fff', border: '1px solid #3b82f6' }
                    : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {t}
                </button>
              ))}
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap gap-1.5 md:ml-auto">
              {ALL_TAGS.map(tag => (
                <button key={tag} onClick={() => toggleTag(tag)}
                  className="px-3 py-1 rounded-lg text-[11px] font-semibold transition-all"
                  style={activeTags.includes(tag)
                    ? { background: 'rgba(96,165,250,0.2)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.4)' }
                    : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {tag}
                </button>
              ))}
              {activeTags.length > 0 && (
                <button onClick={() => setActiveTags([])}
                  className="px-3 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                  style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <X size={10} /> Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span className="font-semibold text-white">{filtered.length}</span> of {partners.length} partners
          </p>
          {(search || activeType !== 'All' || activeTags.length > 0) && (
            <button onClick={() => { setSearch(''); setActiveType('All'); setActiveTags([]) }}
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              <X size={11} /> Reset all filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">🔍</div>
            <div className="text-lg font-bold text-white mb-2">No results found</div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Try a different search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 rounded-2xl transition-all duration-200 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3), ease: E }}
                whileHover={reduce ? {} : { y: -3 }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <Image src={p.logo} alt={p.name} width={30} height={30}
                      className="object-contain" />
                  </div>
                  <ArrowUpRight size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>

                {/* Type badge */}
                <span className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full border mb-2 ${TYPE_COLORS[p.type] || ''}`}>
                  {p.type}
                </span>

                <h3 className="text-base font-bold text-white mb-1.5 leading-tight">{p.name}</h3>
                <p className="text-xs leading-relaxed flex-grow" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  {p.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div className="mt-16 p-8 rounded-3xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #162d55 100%)', border: '1px solid rgba(96,165,250,0.2)' }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h3 className="text-2xl font-black text-white mb-2">Want to join the ecosystem?</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Partner with WinSnip to expand your reach across the blockchain ecosystem.
          </p>
          <a href="mailto:admin@winsnip.xyz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-colors">
            Contact us <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="border-t py-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          &copy; {new Date().getFullYear()} WinSnip. All rights reserved.
        </p>
      </div>

    </div>
  )
}
