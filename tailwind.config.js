/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: {
          dark: "#3733a5",
          DEFAULT: "#4549BE",
          light: "#4945be4d",
        },
        secondary: {
          dark: "",
          DEFAULT: "#3cb500",
          light: "",
        },
        tertiary: {
          dark: "",
          DEFAULT: "#f7b500",
          light: "",
        },
        "ui-gray": {
          dark: "",
          DEFAULT: "#666666",
          light: "rgb(192, 192, 201)",
        },
        warning: "#ff9800",
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
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
