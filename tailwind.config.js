/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Tailwind will scan these files for class names
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#242223',  // Text color
        background: '#F7F7F7',  // Primary background color
        background2: '#E2E2E2', // Secondary background color (footer or sections)
        primary: '#242223',     // Default foreground (text, icons)
        secondary: '#50E3C2',   // Secondary elements (buttons, highlights)
        accent: '#F5A623',      // Accent color for emphasis
      },
    },
  },
  plugins: [],
}
