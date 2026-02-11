/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#f5f5f7",
          dark: "#050711"
        },
        surface: {
          light: "#ffffff",
          dark: "#0b1020"
        },
        accent: {
          DEFAULT: "#16a34a", // green-600
          soft: "#dcfce7" // green-100
        },
        text: {
          light: "#0b1120",
          mutedLight: "#4b5563",
          dark: "#e5e7eb",
          mutedDark: "#9ca3af"
        },
        border: {
          light: "#e5e7eb",
          dark: "#1f2933"
        }
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(15,23,42,0.08)"
      }
    }
  },
  plugins: []
};

export default config;


