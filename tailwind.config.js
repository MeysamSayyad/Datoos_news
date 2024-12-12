/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#507687",
        primary: "#384B70",
      },
      keyframes: {
        mirrormove: {
          "0%,100%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(0,1)" },
        },
      },
    },
  },
  plugins: [],
};
