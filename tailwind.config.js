/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Funnel Display"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#2A0F08',
          darker: '#1A0905',
          orange: '#FF4D2E',
          light: '#F3F3F3',
          white: '#FFFFFF',
          text: '#111111',
        }
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      }
    },
  },
  plugins: [],
}
