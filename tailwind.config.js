const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["src/**/*.ts", "src/**/*.tsx", "public/**/*.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#CC073C",
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
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
