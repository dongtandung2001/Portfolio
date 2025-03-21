/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        dark: {
          100: "#ccd6f6",
          200: "#8892b0",
          300: "#495670",
          400: "#283149",
          500: "#1a1e2e",
          600: "#0f1120",
          700: "#080a16",
        },
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    fontFamily: {
      signature: "Great Vibes",
      sans: ["Inter var", "Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
