'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, User, Sparkles, Check, Zap, Shield, Globe, X } from 'lucide-react'

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'validator'
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 })
  const [captchaError, setCaptchaError] = useState(false)
  const [errorPopup, setErrorPopup] = useState<string | null>(null)

  // Generate random captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 20) + 1
    const num2 = Math.floor(Math.random() * 20) + 1
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 })
    setCaptchaAnswer('')
    setCaptchaError(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show captcha popup
    generateCaptcha()
    setShowCaptcha(true)
  }

  const handleCaptchaSubmit = async () => {
    // Verify captcha
    if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      setCaptchaError(true)
      return
    }

    setLoading(true)
    setShowCaptcha(false)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      setSubmitted(true)
    } catch (error: any) {
      console.error('Submission error:', error)
      setErrorPopup(error.message || 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const benefits = [
    { icon: Zap, title: 'Early Access', desc: 'Be first to access new features' },
    { icon: Shield, title: 'Priority Support', desc: 'Dedicated support for early users' },
    { icon: Globe, title: 'Exclusive Updates', desc: 'Get insider news and updates' }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src="/logo.svg"
            alt="WinSnip"
            width={800}
            height={800}
            className="w-[800px] h-[800px] object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>

              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <Image
                  src="/logo.svg"
                  alt="WinSnip"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-3xl font-black">WinSnip</span>
              </div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center space-x-2 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={24} className="text-blue-400" />
                  </motion.div>
                  <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">
                    Join the Waitlist
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-white">Be Part of the</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Future
                  </span>
                </h1>

                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Join thousands of validators, developers, and blockchain enthusiasts building the decentralized future with WinSnip.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                        <p className="text-sm text-neutral-400">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                {[
                  { value: '10K+', label: 'Community' },
                  { value: '3+', label: 'Explorers' },
                  { value: '99.9%', label: 'Uptime' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
                
                {/* Form Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-black mb-2">Join Waitlist</h2>
                        <p className="text-neutral-400 text-sm">
                          Get early access to exclusive features
                        </p>
                      </div>

                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Interest Select */}
                      <div>
                        <label className="block text-sm font-medium mb-2">I'm interested in</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-neutral-900 [&>option]:text-white"
                        >
                          <option value="validator">Validator Services</option>
                          <option value="developer">Developer Tools</option>
                          <option value="explorer">Blockchain Explorers</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Join Waitlist'
                        )}
                      </motion.button>

                      <p className="text-xs text-neutral-500 text-center">
                        By joining, you agree to our{' '}
                        <Link href="/docs/legal/terms" className="text-blue-400 hover:text-blue-300">
                          Terms
                        </Link>{' '}
                        and{' '}
                        <Link href="/docs/legal/privacy" className="text-blue-400 hover:text-blue-300">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Check size={40} className="text-white" />
                      </motion.div>

                      <h3 className="text-3xl font-black mb-4">You're on the list!</h3>
                      <p className="text-neutral-400 mb-8">
                        Thank you for joining the WinSnip waitlist. We'll notify you when we launch new features.
                      </p>

                      <Link
                        href="/"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                      >
                        <ArrowLeft size={18} />
                        <span>Back to Home</span>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CAPTCHA Popup */}
      <AnimatePresence>
        {showCaptcha && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCaptcha(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowCaptcha(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Captcha content */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-black mb-2">Verify You're Human</h3>
                <p className="text-neutral-400 text-sm mb-8">
                  Please solve this simple math problem
                </p>

                {/* Math question */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <div className="text-4xl font-black mb-4">
                    {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                  </div>
                  <input
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => {
                      setCaptchaAnswer(e.target.value)
                      setCaptchaError(false)
                    }}
                    placeholder="Your answer"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-center text-2xl font-bold placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    autoFocus
                  />
                  {captchaError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-3"
                    >
                      Incorrect answer. Please try again.
                    </motion.p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCaptcha(false)}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCaptchaSubmit}
                    disabled={!captchaAnswer || loading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Popup */}
      <AnimatePresence>
        {errorPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setErrorPopup(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-neutral-900 to-black border border-red-500/30 rounded-2xl p-8 max-w-md w-full relative"
            >
              {/* Error Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <X size={32} className="text-white" />
              </div>

              {/* Error Message */}
              <div className="text-center">
                <h3 className="text-2xl font-black mb-3 text-white">Oops!</h3>
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  {errorPopup}
                </p>

                {/* OK Button */}
                <button
                  onClick={() => setErrorPopup(null)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
