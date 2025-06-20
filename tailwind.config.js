/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nav: ["var(--navfontfamily)", "sans-serif"],
        herohead: ["var(--mainheadingfont)", "sans-serif"], // Tailwind array syntax
      },
    },
  },
  plugins: [],
}

