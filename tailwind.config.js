/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        Teal: "#2f6c3b",
        HummingBird: "#d1flee",
        Yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gary: "#48484c",
      },
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transorm: "translateX(5%" },
          "50%": { transorm: "translatex(-120%" },
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
