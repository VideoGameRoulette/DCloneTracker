const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '1024px',
      lg: '1600px',
    },
    extend: {
      fontFamily: {
        righteous: ['Righteous', ...defaultTheme.fontFamily.sans],
        'roboto-condensed': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'yellow-custom': `#eab308`,
        leet: '#BE1337',
        'grad-blue': '#00b4db',
        'grad-blue-2': '#0083b0',
        'grad-blue-dark': '#000046',
        'grad-blue-dark-2': '#1cb5e0',
      },
      backgroundImage: {
        welcome: "url('/img/bg.jpg')",
        gvirus: "url('/img/gvirus.jpg')",
        merch: "url('/img/merch.webp')",
        dclone: "url('/img/dclone.webp')",
        sun: "url('/svgs/custom/sun.svg')",
        moon: "url('/svgs/custom/moon.svg')",
        en: "url('/svgs/custom/en.svg')",
        fr: "url('/svgs/custom/fr.svg')",
      },
      boxShadow: {
        dark: '0 0 0 2rem rgb(30, 41, 59) inset !important',
        light: '0 0 0 2rem rgb(229 231 235) inset !important',
      },
    },
  },
  variants: {
    textFillColor: ['responsive'],
    extends: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
