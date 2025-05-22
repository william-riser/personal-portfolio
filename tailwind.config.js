/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme if you want to keep existing sans/serif etc.

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here
        'medieval': ['MedievalSharp', 'cursive'], // 'cursive' is a fallback
        'lora': ['Lora', 'serif'],           // 'serif' is a fallback
        // If you want to keep Tailwind's default sans-serif fonts as an option:
        // 'sans': ['Inter var', ...defaultTheme.fontFamily.sans], // Example
      },
      // You can also define specific WoW-themed colors here for reuse
      colors: {
        'wow-gold': {
          light: '#FFD700', // Brighter gold
          DEFAULT: '#DAA520', // Standard gold - Or choose one from your theme
          dark: '#B8860B',  // Darker gold
        },
        'wow-parchment': {
          DEFAULT: '#FBF5E6', // A parchment-like off-white
          text: '#4A3B31',    // Dark brown text color for parchment
        },
        'wow-stone': {
          light: '#A9A9A9',
          DEFAULT: '#696969',
          dark: '#363636',
        }
        // Add other thematic colors
      },
    },
  },
  plugins: [],
};

