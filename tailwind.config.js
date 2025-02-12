/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ["group-hover"],
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideInDown: "slideInDown 1s ease-in-out",
        zoomIn: "zoomIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInDown: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        DEFAULT: "100%",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secundary: "var(--secundary-color)",
        bg_primary: "var(--bg-primary)",
      },
      fontSize: {
        "custom-40px": "var(--font-size-40px)",
      },
      maxWidth: {
        container: "1440px",
      },
      fontFamily: {
        jacques: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
