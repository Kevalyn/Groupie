import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111315",
        sand: "#f7f2ea",
        mint: "#70f0a5",
        coral: "#ff6b4a",
        sky: "#3b82f6"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(112, 240, 165, 0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
