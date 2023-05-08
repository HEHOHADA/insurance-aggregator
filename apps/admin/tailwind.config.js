// module.exports = require("config/tailwind.config");
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
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
