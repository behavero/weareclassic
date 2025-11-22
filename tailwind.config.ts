import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // We Are Classic Brand Colors (Updated)
        black: {
          DEFAULT: '#121212',
          light: '#2A2A2A',
        },
        white: {
          DEFAULT: '#FFFCFB',
        },
        blue: {
          DEFAULT: '#154363',
          dark: '#0F2F47',
          light: '#1B5A82',
        },
        orange: {
          DEFAULT: '#e2a347',
          light: '#E8B766',
          dark: '#D08F2E',
        },
        beige: {
          DEFAULT: '#ffeccb',
          light: '#FFF4DC',
          dark: '#F5DFB5',
        },
      },
      fontFamily: {
        // Headline font (GFS Didot) - Custom .otf from /public/fonts/
        headline: ['GFS Didot', 'Didot', 'Georgia', 'serif'],
        serif: ['GFS Didot', 'Didot', 'Georgia', 'serif'],
        // Body/UI font (Sofia Sans) - Modern, elegant sans-serif
        sans: ['Sofia Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

