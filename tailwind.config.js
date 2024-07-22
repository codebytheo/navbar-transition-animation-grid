/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '20': 'repeat(20, minmax(100px, 1fr))',
      }
    },
  },
  plugins: [],
}

