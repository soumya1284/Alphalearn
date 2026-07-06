import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F1E1",
          dark: "#EFE7D2",
        },
        card: "#FFFDF7",
        navy: {
          DEFAULT: "#17233F",
          light: "#2C3C60",
          muted: "#4B5A7C",
        },
        green: {
          DEFAULT: "#1E5E45",
          dark: "#153F2F",
          light: "#DCEAE2",
        },
        marker: {
          DEFAULT: "#B4392C",
          light: "#F4DAD4",
          dark: "#8C2C21",
        },
        ink: "#2C2A22",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(23,35,63,0.06), 0 10px 24px -12px rgba(23,35,63,0.12)",
        cardHover: "0 6px 18px rgba(23,35,63,0.10), 0 20px 36px -16px rgba(23,35,63,0.18)",
        soft: "0 1px 2px rgba(23,35,63,0.05), 0 8px 20px -10px rgba(23,35,63,0.10)",
      },
      backgroundImage: {
        "rule-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(23,35,63,0.07) 35px, rgba(23,35,63,0.07) 36px)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
