/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./**/*.{html,js}"],
  content: ["./_includes/*.html", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
