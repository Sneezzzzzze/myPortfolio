import type { Config } from "tailwindcss";

export default {
  content: [
      "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors : {
        primary: '#6699ff',
        'primary-dark': '#4d7aff',
        'primary-light': '#8fb3ff'
      },
    },
  },
  plugins: [],
} satisfies Config;
