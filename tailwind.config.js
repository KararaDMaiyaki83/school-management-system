/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nigerian: {
          green: '#008751',
          light: '#e8f5e9',
          dark: '#005a36'
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        },
        secondary: {
          50: '#f8fafc',
          600: '#475569',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}
