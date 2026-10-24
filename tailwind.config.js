/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#121822",
          800: "#161f2c",
          700: "#1b2432",
          600: "#232d3d"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        signature: ["Satisfy", "cursive"]
      }
    }
  },
  plugins: []
};