// module.exports = require("config/tailwind.config");
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,css,md,mdx,html,astro}",
    "../../packages/ui/components/**/*.{ts,tsx,css}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
