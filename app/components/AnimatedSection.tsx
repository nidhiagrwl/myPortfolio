"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, transitionFast } from "./motionPresets";

export function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={transitionFast}
    >
      {children}
    </motion.div>
  );
}

