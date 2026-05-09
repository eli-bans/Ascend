/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        dark: '#111111',
        mid: '#1c1c1c',
        warm: '#c9a96e',
        'warm-light': '#e8d5b0',
        offwhite: '#f5f3ef',
        grey: '#6a6a6a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
        widest4: '0.4em',
      },
    },
  },
  plugins: [],
}
