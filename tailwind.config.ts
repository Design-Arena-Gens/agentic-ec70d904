import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#22c55e',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}
export default config
