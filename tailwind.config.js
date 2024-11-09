/** @type {import('tailwindcss').Config} */
module.exports = {
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
        jacques: ['"Jacques François"', "cursive"],
      },
    },
  },
  plugins: [],
};
