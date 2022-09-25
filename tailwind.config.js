/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'svgbg': "url('/src/components/svgbg.svg')",
      }
    },
  },
  plugins: [],
}