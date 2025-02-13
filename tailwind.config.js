/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // teko: ['Teko', 'sans-serif'],
        sans: ['IBM Plex Sans','Helvetica','Arial','sans-serif']
      }
    },
  },
  plugins: [],
}

