import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans'],
        'sf-pro-text': ['SF Pro Text', 'sans'],
      },
      colors: {
        'primary-dark-100': 'var(--primary-dark-100)',
      
       
        'blue-highlight': 'var(--Blue-Highlight)',
        'primary': 'var(--Primary)',
        'off-white': 'var(--Off-White)',
        'off-white-lighter': 'var(--Off-White-lighter)',
        'accent-dark': 'var(--Accent-1---Dark)',
        'accent-light': 'var(--Accent-1---Light)',
        'success': 'var(--success-success)',
        'success-light': 'var(--success-success-light)',
        'error': 'var(--error-error)',
        'error-light': 'var(--error-error-light)',
        'black-100': 'var(--black-100)',
        'black-90': 'var(--black-90)',
        'black-70': 'var(--black-70)',
        'black-50': 'var(--black-50)',
        'black-30': 'var(--black-30)',
        'black-10': 'var(--black-10)',
      },
      fontSize: {
        'extra-extra-small': '.5rem', // 8px
        'extra-small': '.625rem', // 10px
        'small': '.75rem',     // 12px
        'normal': '.875rem',   // 14px
        'title-2': '1rem',    // 16px
        'title-1': '1.5rem',   // 24px
       
      },
    },
  },
  plugins: [],
}

export default config
