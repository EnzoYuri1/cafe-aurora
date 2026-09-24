import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE6',
          dark: '#EDE4D7'
        },
        sage: '#E0E0C8',
        espresso: {
          DEFAULT: '#3D2B1F',
          deep: '#2A1D14',
          soft: '#5A4636'
        },
        olive: {
          DEFAULT: '#5A6B4E',
          light: '#6E7F61',
          dark: '#48573E'
        },
        muted: '#8C7B6B',
        surface: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)'
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)'
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)'
        },
        btn: {
          bg: 'var(--btn-primary-bg)',
          text: 'var(--btn-primary-text)'
        },
        line: 'var(--border-color)'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(61, 43, 31, 0.08)',
        lift: '0 16px 40px rgba(61, 43, 31, 0.14)'
      },
      borderRadius: {
        card: '1.5rem'
      }
    }
  },
  plugins: []
} satisfies Config
