/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-fast": "ping 500ms linear infinite",
        "ping-middle": "ping 70000ms linear infinite",
        "ping-slow": "ping 900ms linear infinite",

        loading: "loading 3000ms linear ",
      },
      keyframes: {
        loading: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
          // "0%": { transform: "scaleX(0)" },
          // "100%": { transform: "scaleX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
