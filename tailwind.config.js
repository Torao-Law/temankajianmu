/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blueColor: "#0A3579",
        orangeColor: "#FF6600",
        greenColor: "#8FD14F",
        grayColor: "#52525B",
      }
    },
  },
  plugins: [],
}

