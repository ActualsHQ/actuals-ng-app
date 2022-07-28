const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content:[
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  screens: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens
    },
  }
}
