/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          ctxt: "#ffffff",
          cbg: "#0a0a0a",
          primary: "#ffd414",
          secondary: "#2653a6",
          accent: "#ffd414",
          neutral: "#042825",
          "base-100": "#2a2c27",
          info: "#008db5",
          success: "#008900",
          warning: "#ffa500",
          error: "#de2c4e",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
