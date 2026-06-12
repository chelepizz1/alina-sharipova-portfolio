import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#F4F0E8",
        acid: "#D7FF42",
        coral: "#FF5C39",
        cyan: "#51D6FF"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      letterSpacing: {
        tightish: "0"
      }
    }
  },
  plugins: []
};

export default config;
