module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './slices/**/*.js'],
  theme:   {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend:     {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
