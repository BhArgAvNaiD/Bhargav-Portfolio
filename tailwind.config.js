const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dmsans: ["DM Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
