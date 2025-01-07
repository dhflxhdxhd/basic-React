/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ownglyph_meet: ["Ownglyph_meetme-Rg", "sans-serif"],
        ownglyph_park: ["Ownglyph_ParkDaHyun", "sans-serif"],
        yoonchild: ["YoonChildfundkoreaManSeh", "sans-serif"],
      },
      fontWeight: {
        yoonchildRegular: 400,
        yoonchildBold: 800,
      },
    },
  },
  plugins: [],
};
