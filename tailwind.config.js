/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090D",
        surface: "#0F1319",
        paper: "#E8ECF2",
        muted: "#8A94A6",
        brand: "#FFB400",
        arc: "#22D3EE",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.34em",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(-140%)", opacity: "0" },
          "25%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(260%)", opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.65)", opacity: "0.55" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "slow-spin": {
          to: { transform: "rotate(360deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.55" },
          "42%": { opacity: "0.9" },
          "44%": { opacity: "0.35" },
          "46%": { opacity: "0.85" },
          "70%": { opacity: "0.6" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "scroll-dot": "scroll-dot 2.2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.8s ease-out infinite",
        "slow-spin": "slow-spin 26s linear infinite",
        flicker: "flicker 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};