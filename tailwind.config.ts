import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
          dark: "#a70c0c",
          DEFAULT: "#C60E0E",
          light: "#f35858",
        },
        secondary: {
          DEFAULT: "#19297C",
        },
        tertiary: {
          DEFAULT: "#FFEE88",
        },
        uiBlack: {
          DEFAULT: "#333333",
          light: "#333333b3",
        },
        uiWhite: {
          DEFAULT: "white",
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
} satisfies Config;
