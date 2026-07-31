import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          50: "#f5f5f5",
          900: "#0a0a0b",
          950: "#050506",
        },
        surface: {
          DEFAULT: "#151517",
          light: "#1e1e21",
          border: "#2a2a2e",
        },
        ivory: {
          DEFAULT: "#eae7e0",
          muted: "#a8a5a0",
          dim: "#78756f",
        },
        brass: {
          DEFAULT: "#b08d57",
          light: "#c9a56e",
          dark: "#8a6d40",
        },
        tally: {
          DEFAULT: "#8c2f2f",
          light: "#a83d3d",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        grain: "url('/images/grain.svg')",
      },
      boxShadow: {
        card: "0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      animation: {
        pulseTally: "pulseTally 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        pulseTally: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
