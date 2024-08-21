/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        moderu: ["Moderustic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
