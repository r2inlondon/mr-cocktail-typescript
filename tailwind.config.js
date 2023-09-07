/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-color-pri": "var(--btn-color-pri)",
        "btn-color-hover": "var(--btn-color-hover)",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
