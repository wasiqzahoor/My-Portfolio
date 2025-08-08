/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoke: {
          '0%': { transform: 'scale(0.5) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'scale(1.2) translateY(-80px)', opacity: '0' },
        },
        'bubble-rise': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100vh)', // Bubble ko neeche se upar poori screen tak le jayega
            opacity: '0'
          },
        },
      },
      // Aur yahan us animation ko ek utility class de rahe hain
      animation: {
        smoke: 'smoke 4s ease-out infinite',
        'bubble-rise': 'bubble-rise 15s linear infinite',
      },
    },
  },
  plugins: [],
}