'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookie-consent', 'declined'); setVisible(false) }

  if (!mounted || !visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '0',
      right: '0',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 16px',
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '680px',
        background: '#050709',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '20px',
        boxShadow: '0 24px 64px rgba(0,0,0,0.85)',
        padding: '28px 32px',
        pointerEvents: 'all',
        animation: 'slide-up 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
      }}>
        <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '18px', marginBottom: '10px', fontFamily: 'inherit' }}>
          This website uses cookies
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6', marginBottom: '24px', fontFamily: 'inherit' }}>
          We use cookies to enhance your experience. For more information, visit our{' '}
          <Link href="/docs/legal/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
            privacy policy
          </Link>
          . You can always change your preferences by clicking &ldquo;Customize&rdquo;.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={decline} style={{
            flex: 1, padding: '13px 20px', fontSize: '14px', fontWeight: 600,
            color: '#fff', background: 'transparent', borderRadius: '999px',
            border: '1.5px solid rgba(255,255,255,0.2)', cursor: 'pointer',
            fontFamily: 'inherit', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
            Customize
          </button>
          <button onClick={accept} style={{
            flex: 1, padding: '13px 20px', fontSize: '14px', fontWeight: 700,
            color: '#fff', background: '#3b82f6', borderRadius: '999px',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#2563eb')}
            onMouseLeave={e => (e.currentTarget.style.background = '#3b82f6')}>
            Allow all
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
