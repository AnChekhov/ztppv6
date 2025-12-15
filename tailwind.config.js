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
          // МЕНЯЕМ ЛАЙМ НА ЗОЛОТОЙ (Yellow-500 из Tailwind)
          primary: '#EAB308',   
          primaryHover: '#CA8A04', // Yellow-600 для ховера
          
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
