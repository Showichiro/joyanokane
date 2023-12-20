import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        purupuru: {
          "0%": {
            transform: "translate(3px, 0px)",
          },
          "5%": {
            transform: "translate(-3px, 0px)",
          },
          "10%": {
            transform: "translate(3px, 0px)",
          },
          "15%": {
            transform: "translate(-3px, 0px)",
          },
          "20%": {
            transform: "translate(3px, 0px)",
          },
          "25%": {
            transform: "translate(-3px, 0px)",
          },
          "30%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
      tokens: {
        animations: {
          purupuru: { value: "purupuru 6s infinite" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
