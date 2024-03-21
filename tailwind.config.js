import COLOR from "./src/constants/COLOR";

/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: COLOR.brand,
        brand_gold: COLOR.brand_gold,
        brand_blue: COLOR.brand_blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
