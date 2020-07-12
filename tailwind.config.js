/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#cc073c",
        gray: {
          1: "#cfcdd1",
          2: "#bbb9bd",
          3: "#a7a5a9",
        },
        secondary: "#111822",
      },
    },
  },
  variants: {},
  plugins: [],
};
