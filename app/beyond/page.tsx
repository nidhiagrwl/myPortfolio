"use client";

import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function BeyondPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
          className="space-y-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Personal
            </p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Beyond Code</h1>
            <p className="mt-3 max-w-xl text-sm text-text-mutedLight dark:text-text-mutedDark">
              A quiet corner for what doesn&apos;t fit into a resume — principles, stories, and
              moments that shaped how I build and lead.
            </p>
          </div>

          <Card className="border-l-4 border-l-accent p-5 sm:p-6">
            <p className="text-sm italic text-text-mutedLight dark:text-text-mutedDark">
              “I believe in constant learning, fair consequences, and mastering my craft. Every day
              adds knowledge, every build adds power — and when code turns into magic, I know
              exactly who the magician is.”
            </p>
          </Card>

          <Card className="flex items-start gap-3 p-5 sm:p-6">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-lg">
              ✈️
            </div>
            <div>
              <h2 className="text-sm font-semibold">A story I&apos;ll share with you</h2>
              <p className="mt-2 text-sm text-text-mutedLight dark:text-text-mutedDark">
                This space is for a short story about a trip, experiment, or turning point that
                shaped how I build and lead. I&apos;ll keep it brief, honest, and focused on how it
                changed the way I think about systems — and people.
              </p>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}


