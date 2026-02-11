"use client";

import { Variants, Transition } from "framer-motion";

export const transitionFast: Transition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1]
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const staggerContainer = (stagger = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.04 }
  }
});

export const scaleOnHover: Variants = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(16,185,129,0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 18px 45px rgba(16,185,129,0.16)",
    transition: transitionFast
  }
};

