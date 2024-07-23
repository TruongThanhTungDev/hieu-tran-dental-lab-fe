/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#343436",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

