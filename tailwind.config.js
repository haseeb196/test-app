/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(ellipse at center, #FFF 39.72%, #DCD1FF 100%)",
      },
      fontFamily: {
        moranga: ["Moranga", "sans"],
        raleway: ["Raleway", "sans"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-rgba": {
          "background-color": "rgba(255, 255, 255, 0.10)",
        },
        ".backdrop-blur": {
          "backdrop-filter": "blur(10px)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
