export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#3b4cca", // SBI blue color
        background: "#e6f0ff",
        buttonBg: "#3b4cca",
        buttonHover: "#2e3b9e",
      },

      fontSize: {
        sm: "12px", // Small font size for general text
        base: "14px", // Slightly smaller default text
      },
    },
  },
  plugins: [],
};
