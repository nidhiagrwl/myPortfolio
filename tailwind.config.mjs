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
        accent: {
          DEFAULT: "#10b981", // emerald-500
          soft: "rgba(16, 185, 129, 0.10)"
        },
        bg: {
          light: "#f8fafc", // slate-50 - light background
          dark: "#020617" // slate-950 - dark background
        },
        text: {
          light: "#0f172a", // slate-900 - dark text on light bg
          dark: "#e5e7eb", // slate-200 - light text on dark bg
          mutedLight: "#64748b", // slate-500 - muted on light
          mutedDark: "#94a3b8" // slate-400 - muted on dark
        },
        surface: {
          light: "#ffffff", // white surface in light mode
          dark: "#0f172a" // slate-900 surface in dark mode
        },
        border: {
          light: "#e2e8f0", // slate-200 - subtle border in light
          dark: "#334155" // slate-700 - visible border in dark
        }
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.16), transparent 50%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.10), transparent 55%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.98))"
      }
    }
  },
  plugins: []
};

export default config;

