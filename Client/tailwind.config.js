/** @type {import('tailwindcss').Config} */
module.exports = {
  // conte nt: ["./src/**/*.{html,js}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
      // xs: { min: "0", max: "639px" },
      // md: { min: "768px", max: "1018px" },
      // lg: { min: "1019px", max: "1279px" },
      // xl: { min: "1280px", max: "1535px" },
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};
