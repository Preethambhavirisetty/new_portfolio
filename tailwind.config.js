/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F5",
        sunset: "#FE7F2D",
        deep: "#233D4D",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'modern': '0px 8px 24px rgba(0, 0, 0, 0.12)', // Soft glow shadow
        'neumorphism': '8px 8px 15px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.8)', // Neumorphic style
        'colorful': '0px 4px 10px rgba(33, 30, 53, 0.15), 0px 4px 20px rgba(145, 92, 182, 0.2)', // Gradient shadow
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["General Sans", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      screens: {
        xs: "450px",
      },

    },
  },
  plugins: [],
};
