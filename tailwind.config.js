/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#000040',
        'red' : '#FF595A',
        'beige' : '#CAC0B3',
      }
    },
  },
  plugins: [],
}

//#001233