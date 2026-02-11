"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "./motionPresets";

export function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

