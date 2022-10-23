module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './slices/**/*.js'],
  theme:   {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend:     {
      colors: {
        blue: {
          50: '#f4f6f8', 
          100: '#e9edf1', 
          200: '#c8d1dc', 
          300: '#a7b5c7', 
          400: '#647e9d', 
          500: '#224773', 
          600: '#1f4068', 
          700: '#1a3556', 
          800: '#142b45', 
          900: '#112338'
      }
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
