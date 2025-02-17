/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ranco': ['Ranco', 'sans-serif'], // 'Ranco' is the name you gave in @font-face
      }
    },
  },
  plugins: [
   
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

