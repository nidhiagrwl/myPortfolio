"use client";

import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function BeyondPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">

      {/* Gradient Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br 
        from-indigo-50 via-white to-purple-50 
        dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950" />

      {/* Soft Radial Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full 
        bg-purple-300/20 blur-3xl dark:bg-indigo-700/20 -z-10" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full 
        bg-indigo-300/20 blur-3xl dark:bg-purple-700/20 -z-10" />

      <Container>
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
          className="space-y-12"
        >

          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Personal
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              bg-clip-text text-transparent">
              Beyond Code
            </h1>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              A quiet corner for what doesn&apos;t fit into a resume — principles, stories,
              and moments that shaped how I build and lead.
            </p>
          </div>

          {/* Belief Card */}
          <Card
  className="
  relative
  bg-white dark:bg-slate-900
  border border-slate-200 dark:border-slate-700
  rounded-2xl
  p-6 sm:p-8
  shadow-sm
  transition-all duration-300
  hover:shadow-xl
  hover:border-indigo-500 dark:hover:border-purple-400
"
>


            <p className="text-sm italic leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              “I believe in constant learning, fair consequences, and mastering my craft.
              Every day adds knowledge, every build adds power — and when code turns into magic,
              I know exactly who the magician is.”
            </p>
          </Card>

          {/* Story Card */}
          <Card className="group relative overflow-hidden 
            backdrop-blur-md bg-white/70 dark:bg-slate-900/70
            border border-slate-200 dark:border-slate-800
            shadow-lg p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

            {/* Left Gradient Accent */}
            <div className="absolute left-0 top-0 h-full w-1 
              bg-gradient-to-b from-indigo-500 to-purple-500" />

            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className="mt-1 flex h-10 w-10 items-center justify-center 
                rounded-full bg-gradient-to-br 
                from-indigo-100 to-purple-100 
                dark:from-indigo-900 dark:to-purple-900 
                text-lg transition-transform duration-300 
                group-hover:scale-110">
                ✈️
              </div>

              <div className="flex-1 max-w-3xl">

                {/* Heading */}
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  A story I&apos;ll share with you
                </h2>

                {/* Accent Divider */}
                <div className="mt-3 h-1 w-16 rounded-full 
                  bg-gradient-to-r from-indigo-500 to-purple-500" />

                {/* Story Content */}
                <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">

                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    During my college years, I was certain of one thing — coding was not meant for me.
                  </p>

                  <p>
                    My background was in Electronics and Telecommunications, and at that time,
                    I didn&apos;t even know how to print a simple “Hello World.” A career in software
                    felt like a distant city I wasn&apos;t invited to.
                  </p>

                  <p>
                    Many people around me — friends, relatives — believed I wasn&apos;t built for it either.
                    Their expectations of me were modest. I was seen as someone who would do “just enough.”
            
                  </p>

                  <p>But there was something they overlooked.</p>

                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    I&apos;ve always loved solving problems.
                  </p>

                  <p>
                    Even before I knew syntax or structure, I was drawn to challenges.
                    I liked untangling complexity. I liked figuring things out.
                    That curiosity quietly became my turning point.
                  </p>

                  <p>
                    What began as exploration gradually became commitment.
                    What felt unfamiliar slowly became natural.
                    And somewhere in that transition, I realized coding wasn&apos;t something I was forcing —
                    it was something I was growing into.
                  </p>

                  <p>
                    I remember a trip early in my career where someone casually remarked
                    that I had big ambitions but wouldn&apos;t achieve much.
                    The comment stayed with me — not as a wound, but as a mirror.
                    It made me reflect on who I wanted to become.
                  </p>

                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    That moment didn&apos;t discourage me. It refined me.
                  </p>

                  <p>
                    Over time, I built skills, confidence, and clarity.
                    I moved from hesitation to ownership.
                    From doubt to direction.
                    From learning basics to designing systems.
                  </p>

                  <p>
                    Today, when I look at myself, I see transformation —
                    not just in capability, but in identity.
                    I didn&apos;t just learn how to code.
                    I discovered resilience, discipline, and the quiet power of persistence.
                  </p>

                  <p>
                    I never imagined coding would become my career.
                    Now, I can&apos;t imagine a path that fits me better.
                  </p>

                  <p className="italic text-slate-900 dark:text-slate-100">
                    Growth isn&apos;t loud. It&apos;s steady.
                    And sometimes, the person you surprise the most is yourself.
                  </p>

                </div>

              </div>
            </div>
          </Card>

        </motion.div>
      </Container>
    </section>
  );
}



