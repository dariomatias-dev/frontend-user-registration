/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('/images/background.jpg')",
        "objective_background": "url('/images/objective_background.jpg')",
      },
      screens: {
        "table": "848px",
        "mini-lg": "900px",
      }
    },
  },
  plugins: [],
}
