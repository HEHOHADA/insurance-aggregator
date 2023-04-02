/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,css}",
    "./components/**/*.{ts,tsx,css}",
    "../../packages/ui/**/*.{ts,tsx,css}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
