/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      colors:{
        starwars : "#FFE81F",
        space:"#0a0a0f"
      }},
  },
  plugins: [],
}

