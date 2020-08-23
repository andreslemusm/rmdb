/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
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
          100: "#FAFAFA",
          200: "#F3F3F4",
          300: "#ECEBED",
          400: "#DDDCDF",
          500: "#CFCDD1",
          600: "#BAB9BC",
          700: "#7C7B7D",
          800: "#5D5C5E",
          900: "#3E3E3F",
        },
        secondary: "#111822",
      },
    },
  },
  variants: {},
  plugins: [],
};
