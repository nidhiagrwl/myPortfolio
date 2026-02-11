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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 2, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -6,
        scale: 1.01,
        boxShadow: "0 10px 30px rgba(16,185,129,0.12)",
        borderColor: "rgba(16,185,129,0.4)",
        transition: { duration: 0.25 }
      }}
      
      className={clsx(
        "rounded-2xl transition-all duration-300",
        "bg-gradient-to-br from-slate-50/95 via-white to-indigo-50/80 border border-slate-200/80",
        "dark:bg-gradient-to-br dark:from-slate-800/95 dark:via-slate-800 dark:to-slate-900 dark:border-slate-700",
        "shadow-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
