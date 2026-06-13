'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Menu, X, ChevronDown, Home } from 'lucide-react'

const menuStructure = {
  'Legal': [
    { title: 'Privacy Policy', path: 'privacy' },
    { title: 'Terms of Service', path: 'terms' },
    { title: 'Security Policy', path: 'security' },
    { title: 'Compliance Policy', path: 'compliance' }
  ]
}

export default function LegalDocsPage() {
  const params = useParams()
  const slug = params.slug as string
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Legal': true
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const currentPath = slug || 'privacy'

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        setLoading(true)
        const path = slug || 'privacy'
        const response = await fetch(`/api/docs/legal/${path}`)
        const data = await response.json()
        setContent(data.content || '')
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-neutral-800 rounded w-1/4"></div>
            <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
            <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top Navigation */}
      <div className="border-b border-neutral-800 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="WinSnip" width={24} height={24} />
              <span className="text-lg font-bold text-white">WinSnip</span>
            </Link>

            {/* Right: Home Button */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/"
                className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                <Home size={14} className="text-white" />
                <span className="text-xs font-medium text-white">Home</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-neutral-800 rounded-md transition-colors"
              >
                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 py-2 border-t border-neutral-800/50">
            <Link href="/" className="text-xs text-neutral-500 hover:text-white transition-colors">
              WinSnip
            </Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-xs text-neutral-500">Legal</span>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-xs text-white capitalize">
              {slug?.replace(/-/g, ' ') || 'Privacy'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 border-r border-neutral-800 h-[calc(100vh-96px)] sticky top-[96px] overflow-y-auto bg-[#0a0a0a]`}>
            <nav className="p-6 space-y-2">
              {Object.entries(menuStructure).map(([category, items]) => {
                const isExpanded = expandedSections[category]
                return (
                  <div key={category}>
                    <button
                      onClick={() => toggleSection(category)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                    >
                      <span>{category}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                      />
                    </button>
                    
                    {isExpanded && (
                      <ul className="mt-1 space-y-1 ml-3 border-l border-neutral-800">
                        {items.map((item) => {
                          const isActive = currentPath === item.path
                          return (
                            <li key={item.path}>
                              <Link
                                href={`/docs/legal/${item.path}`}
                                className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                  isActive
                                    ? 'bg-blue-500/10 text-blue-400 font-medium border-l-2 border-blue-400 -ml-[1px]'
                                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/30'
                                }`}
                                onClick={() => setSidebarOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <article className="px-8 py-20 max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => {
                        const text = String(children)
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                        return (
                          <h1 id={id} className="text-4xl font-bold mb-6 text-white border-b border-neutral-800 pb-4 scroll-mt-20">
                            {children}
                          </h1>
                        )
                      },
                      h2: ({ children }) => {
                        const text = String(children)
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                        return (
                          <h2 id={id} className="text-3xl font-bold mt-12 mb-4 text-white scroll-mt-20">
                            {children}
                          </h2>
                        )
                      },
                      h3: ({ children }) => {
                        const text = String(children)
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                        return (
                          <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 text-white scroll-mt-20">
                            {children}
                          </h3>
                        )
                      },
                      p: ({ children }) => (
                        <p className="text-neutral-300 leading-relaxed mb-4 text-base">
                          {children}
                        </p>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-400 hover:text-blue-300 underline transition-colors"
                          target={href?.startsWith('http') ? '_blank' : undefined}
                          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      ),
                      code: ({ children, className }) => {
                        const isInline = !className
                        return isInline ? (
                          <code className="px-1.5 py-0.5 bg-neutral-800 rounded text-sm text-blue-400 font-mono">
                            {children}
                          </code>
                        ) : (
                          <code className={className}>{children}</code>
                        )
                      },
                      pre: ({ children }) => (
                        <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
                          {children}
                        </pre>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-4 text-neutral-300">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 mb-4 text-neutral-300">
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-400 my-4 bg-blue-500/5 py-2">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
