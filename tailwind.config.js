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
          DEFAULT: '#003366', // Classic Navy
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#FF6600', // Vibrant Orange
          hover: '#e65c00',
        },
        light: '#F4F7F6',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        logo: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 15px rgba(255, 102, 0, 0.3)',
        'premium-hover': '0 8px 25px rgba(255, 102, 0, 0.4)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
