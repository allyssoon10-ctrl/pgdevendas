/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#faf7f0", ink: "#2b2a27", terra: "#c8643b", sage: "#6f8f72", sand: "#efe8d8" },
      fontFamily: { serif: ['"DM Serif Display"', "serif"], sans: ["Manrope", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
