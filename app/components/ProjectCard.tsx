"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";
import { fadeInUp, scaleOnHover } from "./motionPresets";

type Project = {
  title: string;
  problem: string;
  built: string;
  architecture: string;
  stack: string[];
  impact: string;
  details?: string[];
};

function ProjectIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="3" y="13" width="7" height="7" rx="1.5" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="relative flex h-full flex-col overflow-hidden border-border-light/80 bg-card-gradient dark:border-border-dark/80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.12),transparent_55%)] opacity-70" />
          <div className="relative z-10 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2">
              <ProjectIcon />
              <h3 className="text-sm font-semibold">{project.title}</h3>
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Problem
            </p>
            <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
              {project.problem}
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              What I built
            </p>
            <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
              {project.built}
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Architecture
            </p>
            <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
              {project.architecture}
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Tech stack
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-surface-light/80 px-2.5 py-1 text-[0.7rem] font-medium text-text-mutedLight shadow-sm dark:bg-surface-dark/80 dark:text-text-mutedDark"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Business impact
            </p>
            <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
              {project.impact}
            </p>

            <button
              type="button"
              onClick={() => setOpen(prev => !prev)}
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent transition hover:text-emerald-300"
            >
              <span>{open ? "Hide details" : "View details"}</span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && project.details && project.details.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                  transition={{ duration: 0.22 }}
                  className="mt-3 border-t border-border-light/50 pt-3 text-xs text-text-mutedLight dark:border-border-dark/60 dark:text-text-mutedDark"
                >
                  <ul className="space-y-1.5">
                    {project.details.map(line => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
    </motion.div>
  );
}

