"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-border-light/70 bg-surface-light/80 shadow-subtle backdrop-blur-sm",
        "dark:border-border-dark dark:bg-surface-dark/90",
        "transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}


