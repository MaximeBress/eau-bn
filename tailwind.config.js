module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './slices/**/*.js'],
  theme:   {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend:     {
      colors: {
        blue: {
          50:  '#F4F6F8',
          100: '#E9EDF1',
          200: '#C8D1DC',
          300: '#A7B5C7',
          400: '#647E9D',
          500: '#224773',
          600: '#1F4068',
          700: '#1A3556',
          800: '#142B45',
          900: '#112338',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
