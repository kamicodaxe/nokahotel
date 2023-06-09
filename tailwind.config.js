/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'clifford': '#da373d',
        'jade': '#00A86B',
        'secondary': '#C7A222',
        'tertiary': '#F8471C',
        'water': '#5d8a82',
        'box': {
          '100': '#CDE420',
          '600': '#CDE420'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
