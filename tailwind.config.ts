import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        abril: ["var(--font-abril)"],
      },
      colors: {
        "primary-navy": "#0D3B66",
        "primary-cream": "#FAF0CA",
        "primary-gold": "#F4D35E",
        "navy-light": "#1a5a99",
        "gold-dark": "#d4b03e",
      },
    },
  },
  plugins: [],
};

export default config;
