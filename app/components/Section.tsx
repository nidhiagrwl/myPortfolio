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
        "scroll-mt-24 border-t border-border-light/60 bg-bg-light py-14 sm:py-20",
        "dark:border-border-dark/60 dark:bg-bg-dark",
        className
      )}
    >
      <div className="mb-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 inline-block border-b-2 border-accent pb-1 text-2xl font-semibold text-text-light dark:text-text-dark sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}


