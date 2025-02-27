/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "#3ECF4C", // Bright green used in your buttons
          dark: "#2E9F3A", // Darker shade for hover effects
          light: "#A5F4BC", // Light green variant
        },
        secondary: {
          DEFAULT: "#FFFBF0", // Light beige background color
          dark: "#EDE6DA",
          light: "#FFFDF7",
        },
        neutral: {
          light: "#F9FAFB", // Light grey for subtle UI sections
          DEFAULT: "#D1D5DB",
          dark: "#374151",
        },
        accent: {
          yellow: "#FFD700", // Golden yellow for highlights
          red: "#E63946", // Bright red for error states
          blue: "#1D4ED8", // Accent blue for links
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
