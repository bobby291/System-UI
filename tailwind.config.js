/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themegreen: '#25db79',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], //Add Poppins font
      },
    },
  },
  plugins: [],
} 