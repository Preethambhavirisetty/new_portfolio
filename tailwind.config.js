/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FEF9E7",        // Light cream/yellow background
        secondary: "#000000",      // Black text
        tertiary: "#F5F5DC",       // Light cream
        "black-100": "#000000",    // Pure black
        "black-200": "#1A1A1A",    // Dark black
        "white-100": "#FFFFFF",    // White
        "cream-light": "#FEF9E7",   // Light cream/yellow
        "cream-medium": "#F5F5DC",  // Medium cream
        "cream-dark": "#E8E8D3",    // Darker cream
        "brown-dark": "#5D4E37",    // Dark brown accent
        "gray-light": "#E5E5E5",     // Light gray
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'modern': '0px 8px 24px rgba(0, 0, 0, 0.12)', // Soft glow shadow
        'neumorphism': '8px 8px 15px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.8)', // Neumorphic style
        'colorful': '0px 4px 10px rgba(33, 30, 53, 0.15), 0px 4px 20px rgba(145, 92, 182, 0.2)', // Gradient shadow
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};