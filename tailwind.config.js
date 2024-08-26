/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#253D4E",
        secondary: "#008D36",
        accent: "#E30613",
        accent2: "#E84534",
        light: "#C8D9E2",
        textColor: "#4A4A4A",
        bgColor: "#116F84",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        lg: "0px 4px 3px 0px rgba(117, 124, 126, 0.20)",
        xl: "3px 0px 20px 0px rgba(117, 124, 126, 0.15)",
        "2xl": "0px 6px 10px 0px rgba(117, 124, 126, 0.10)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1rem" }],
        sm: ["14px", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["20px", { lineHeight: "1.75rem" }],
        xl: ["24px", { lineHeight: "1.75rem" }],
        "2xl": ["29px", { lineHeight: "2rem" }],
        "3xl": ["34px", { lineHeight: "2.25rem" }],
        "4xl": ["41px", { lineHeight: "2.5rem" }],
        "5xl": ["48px", { lineHeight: "1" }],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
        "3xl": "100%",
      },
    },
  },
  plugins: [],
}