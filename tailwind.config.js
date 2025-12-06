/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tpp: {
          primary: '#D8FB53',   // Светлый Лайм (Акцент)
          primaryHover: '#BCE63B',
          dark: '#0F172A',      // Slate 900 (Основа)
          secondary: '#06B6D4', // Electric Cyan (Поддержка)
          surface: '#F8FAFC',   // Slate 50 (Фон)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
