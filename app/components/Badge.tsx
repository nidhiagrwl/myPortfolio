"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-border-light bg-accent-soft px-3 py-1 text-xs font-medium text-accent",
        "dark:border-border-dark dark:bg-slate-800/70 dark:text-sky-300",
        className
      )}
    >
      {children}
    </span>
  );
}


