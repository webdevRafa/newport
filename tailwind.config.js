/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black-800': '#060606',
      'black-600': '#090909',
      'black-400': '#0d0d0e',
      'white': '#ffffff',
      'off-white': '#a6a6a6',
      'blue': '#0b55eb',
      'red': '#ff6161'
    },
    extend: {
      boxShadow: {
        '3xl': '0 1px 5px 2px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

