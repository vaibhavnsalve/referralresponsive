/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f0f6ff",
        mediumseagreen: "#1fb488",
        blue: "#137ce7",
        "deep-blue": "#0b366b",
        steelblue: "#658aaf",
        lavender: "#e4edff",
        goldenrod: "#ffbe40",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [],
};
