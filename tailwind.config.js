/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Pure black like NOCTA
          light: '#1a1a1a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#ffffff', // White accents like NOCTA
          light: '#f5f5f5',
          dark: '#000000',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#999999',
          dark: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

