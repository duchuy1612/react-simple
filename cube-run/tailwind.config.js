/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#13cf32",
        secondaryHover: "#05bb30",
        secondaryActive: "#00aa15",
        primary: "#fff",
        primaryHover: "#ddd",
        primaryActive: "#aaa",
      },
      animation: {
        "expand-move-contract": "expand-move-contract 2s ease-in-out infinite",
      },
      keyframes: {
        "expand-move-contract": {
          "0%": {
            width: "0%",
            height: "0%",
            bottom: "10%",
            left: "50%",
          },
          "50%": {
            width: "100%",
            height: "50%",
            bottom: "40%",
            left: "0%",
          },
          "100%": {
            width: "0%",
            height: "0%",
            bottom: "80%",
            left: "50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};


