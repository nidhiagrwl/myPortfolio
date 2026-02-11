"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 50px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.2)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      className={clsx(
        "rounded-2xl border border-border-light/70 bg-surface-light/80 shadow-subtle backdrop-blur-sm",
        "dark:border-border-dark dark:bg-surface-dark/90",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}


