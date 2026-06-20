/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        cream: "#F8F7F3",
        panel: "#EFECE5",
        blush: "#F7DCE0",
        sage: "#DCE8DC",
        butter: "#FCEFC7",
        sky: "#DCEAF7",
        ink: "#181612",
        charcoal: "#1A1A18",
        muted: "#7A746A",
        accent: "#2449F2",
        teal: "#1F4E45",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'modern': '0px 8px 24px rgba(0, 0, 0, 0.12)', // Soft glow shadow
        'neumorphism': '8px 8px 15px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.8)', // Neumorphic style
        'colorful': '0px 4px 10px rgba(33, 30, 53, 0.15), 0px 4px 20px rgba(145, 92, 182, 0.2)', // Gradient shadow
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Fraunces", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
        cursive: ["Caveat", "cursive"],
      },
      screens: {
        xs: "450px",
      },

    },
  },
  plugins: [],
};
