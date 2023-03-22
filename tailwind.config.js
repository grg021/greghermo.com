module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
  },
  variants: {
    extend: {
      grayscale: ['hover'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
