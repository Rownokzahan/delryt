/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: {
          dark: "rgba(73, 69, 190, 0.3)",
          DEFAULT: "#4549BE",
          light: "",
        },
        "ui-gray": {
          dark: "",
          DEFAULT: "#666666",
          light: "rgb(192, 192, 201)",
        },

        warning: "#ff9800",
        success: "#4caf50",

        background: {
          light: "#f9f6f2",
          gray: "#eeecea",
        },
        dark: {
          light: "#dcdbdb",
          DEFAULT: "#717171",
          deep: "#212121",
        },
      },

      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
