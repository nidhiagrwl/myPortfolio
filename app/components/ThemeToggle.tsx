"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-300 bg-slate-100 px-1 shadow-sm transition-all duration-300 hover:border-emerald-400/60 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:hover:border-emerald-400/50"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        layout
        style={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-md"
      >
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="text-white text-sm"
            >
              ☾
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="text-white text-sm"
            >
              ☼
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

