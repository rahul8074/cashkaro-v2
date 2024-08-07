/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        gray:"#282828",
        lightGray: "#656565",
        creamText: "#B8956D",
        silverText: "#b7b7b7",
        bgColor:"#2E2E2E",
      }, 
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      clipPath: {
        'arc-top': 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)',
        'arc-bottom': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
      },
    },
  },
  plugins: [],
}