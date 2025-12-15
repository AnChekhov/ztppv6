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
          // ИЗМЕНЕНО: Теперь это Золотой (Yellow-500), а не Лайм
          primary: '#EAB308',   
          
          // ИЗМЕНЕНО: Цвет при наведении (Yellow-600)
          primaryHover: '#CA8A04',

          dark: '#0F172A',      // Slate 900 (Основа - как в Hero)
          secondary: '#06B6D4', // Electric Cyan (Поддержка)
          surface: '#F8FAFC',   // Slate 50 (Фон страниц)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
