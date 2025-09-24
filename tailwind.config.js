/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F5F0",
        "light-cream": "#F2EAD3",
        "dark-blue": "#19183B",
        orange: "#F4991A",
        white: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(244, 153, 26, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(244, 153, 26, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
