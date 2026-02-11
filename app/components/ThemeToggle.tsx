"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="relative flex h-9 w-16 items-center rounded-full border border-border-light bg-surface-light/90 px-1 text-xs text-text-mutedLight shadow-sm transition-colors hover:border-accent hover:bg-accent-soft dark:border-border-dark dark:bg-surface-dark/90 dark:text-text-dark"
    >
      <motion.div
        layout
        style={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-accent to-emerald-400 shadow-[0_0_0_1px_rgba(16,185,129,0.4)]"
      >
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.22 }}
              aria-hidden="true"
            >
              ☾
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
              transition={{ duration: 0.22 }}
              aria-hidden="true"
            >
              ☼
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark
            ? "0 0 18px rgba(16,185,129,0.4)"
            : "0 0 12px rgba(56,189,248,0.25)"
        }}
        transition={{ duration: 0.25 }}
      />
    </button>
  );
}

