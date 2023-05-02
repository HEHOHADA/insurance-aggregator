module.exports = {
  printWidth: 100,
  trailingComma: "all",
  jsxSingleQuote: false,
  tabWidth: 2,
  semi: true,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
  singleQuote: false,
  bracketSpacing: true,
  importOrder: ["solid", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
};
