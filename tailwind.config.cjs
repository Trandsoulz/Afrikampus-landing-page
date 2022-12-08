/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        gidugu: ["Nunito", "Tahoma", "sans-serif"],
      },
      colors: {
        primary: "#404eed",
      },
      screens: {
        // xs: "480px",
        // ss: "620px",
        sm: "480px",
        md: "620px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        heroBg: "url('./assets/bg-img.png')",
      },
    },
    plugins: [],
  },
};
