/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.125rem', // Increasing the base font size to 18px
        lg: '1.25rem',    // Increasing large font size to 20px
        xl: '1.5rem',     // Increasing extra-large font size to 24px
        '2xl': '1.875rem',// Increasing 2xl font size to 30px
        '3xl': '2.25rem', // Increasing 3xl font size to 36px
        '4xl': '3rem',    // Increasing 4xl font size to 48px
        '5xl': '3.75rem', // Increasing 5xl font size to 60px
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
      colors: {
        background: '#f7f7f7',  // Soft off-white background
        accent: '#ffd1dc',      // Pastel pink for headers and borders
        highlight: '#c9b59f',   // Soft brown for links and accents
        black: '#000000',       // Standard black for text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Roboto font
      },
    },
  },
  plugins: [],
}
