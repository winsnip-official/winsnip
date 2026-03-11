/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'rotate-3d': 'rotate3d 10s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'bounce-3d': 'bounce3d 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(90deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(90deg) rotateY(90deg)' },
          '75%': { transform: 'rotateX(0deg) rotateY(90deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
        pulseGlow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)',
            transform: 'scale(1.05)'
          },
        },
        bounce3d: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateX(0deg)',
          },
          '50%': { 
            transform: 'translateY(-20px) rotateX(180deg)',
          },
        }
      }
    },
  },
  plugins: [],
}