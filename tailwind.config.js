/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f4ec',
        champagne: '#d8b57a',
        gold: '#b99058',
        warmwhite: '#fffcf8',
        blush: '#f2dbd6',
        ink: '#2d2721',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(62, 44, 18, 0.15)',
      },
    },
  },
  plugins: [],
}

