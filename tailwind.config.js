/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "var(--color-bg)",
        bgElevated: "var(--color-bg-elevated)",
        lightText: "var(--color-text-secondary)",
        textPrimary: "var(--color-text-primary)",
        textMuted: "var(--color-text-muted)",
        themeBorder: "var(--color-border)",
        themeBorderStrong: "var(--color-border-strong)",
        cardBg: "var(--color-card)",
        cardBgHover: "var(--color-card-hover)",
        buttonBg: "var(--color-button-bg)",
        buttonText: "var(--color-button-text)",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#701a75",
      },
      boxShadow: {
        shadowOne: "var(--shadow-one)",
      },
    },
  },
  plugins: [],
};
