/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1d',  // Dark grayish black background
        foreground: '#f0e7db',  // Light tan for text
        accent: '#c3073f',      // Deep red for highlights
        secondary: '#6f2232',   // Darker red for secondary elements
        tertiary: '#950740',    // Wine red for additional accents
        highlight: '#FFD700',   // Yellow for highlights like buttons or links
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Roboto font
      },
    },
  },
  plugins: [],
}
