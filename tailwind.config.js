/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      // bg colors
      // text colors
      white: "var(--white)",
      black: "var(--black)",

      //border colors
    },
    extend: {
      fontFamily: {
        primary_font: "var(--primary_font)",
        secondary_font: "var(--secondary_font)",
        tertiary_font: "var(--tertiary_font)",
      },
    },
  },
  plugins: [],
};
