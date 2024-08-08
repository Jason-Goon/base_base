/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f4f1',  // Soft off-white background
        foreground: '#333',     // Darker text for contrast
        accent: '#a67c52',      // Coffee brown accent color
        secondary: '#e0dcd3',   // Lighter secondary color for soft contrasts
      },
      fontFamily: {
        sans: ['Roboto-Thin', 'sans-serif'],  // Roboto as the default font
      },
    },
  },
  plugins: [],
}
