"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "scroll-mt-24 border-t border-border-light/60 bg-gradient-to-b from-bg-light via-bg-light/98 to-bg-light py-14 sm:py-20",
        "dark:border-border-dark/60 dark:from-bg-dark dark:via-bg-dark/98 dark:to-bg-dark",
        className
      )}
    >
      <div className="mb-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 inline-flex items-baseline gap-2 text-2xl font-semibold tracking-tight text-text-light dark:text-text-dark sm:text-3xl">
          <span className="relative">
            <span className="relative z-10">{title}</span>
            <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent/80 via-emerald-400/60 to-transparent" />
          </span>
        </h2>
      </div>
      {children}
    </section>
  );
}


