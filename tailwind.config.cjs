/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        gidugu: ["Gidugu", "Tahoma", "sans-serif"],
      },
      colors: {
        primary: "#404eed",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "760px",
        md: "1040px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        heroBg: "url('./assets/hero-bg.jpg')",
      },
    },
    plugins: [],
  },
};
