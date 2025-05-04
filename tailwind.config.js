/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        Brown: "hsl(28.9,52.9%,90%)"
      },
      fontFamily: {
        young: ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}

