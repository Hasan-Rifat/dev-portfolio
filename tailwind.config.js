/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
    /* container: {
      screens: {
        "3xl": "1920px",
        "2xl": "1440px",
        xl: "1384px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
    },
    screens: {
      "3xl": "1920px",
      "2xl": "1440px",
      xl: "1230px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
    }, */
    colors: {
      primary: "#ee5f38",
      secondary: "#000248",
      accent: "#181a1d",
      success: "#212428",
    },
  },
  plugins: [],
};
