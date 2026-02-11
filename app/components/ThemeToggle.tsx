"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light bg-surface-light text-xs text-text-mutedLight shadow-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent dark:border-accent dark:bg-surface-dark dark:text-text-dark dark:hover:bg-accent-soft"
    >
      {theme === "light" ? <span aria-hidden="true">☾</span> : <span aria-hidden="true">☼</span>}
    </button>
  );
}


