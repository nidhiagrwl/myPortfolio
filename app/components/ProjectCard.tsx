"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./motionPresets";

type Project = {
  title: string;
  problem: string;
  built: string;
  architecture: string;
  stack: string[];
  impact: string;
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
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden p-5 sm:p-6 rounded-2xl shadow-md bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-slate-800 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 dark:border dark:border-slate-700 dark:text-slate-100 transition-all duration-300"
        whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)" }}
      >
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-2">
            <ProjectIcon />
            <h3 className="text-sm font-semibold">{project.title}</h3>
          </div>

          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Problem
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
            {project.problem}
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            What I built
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
            {project.built}
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Architecture
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
            {project.architecture}
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Tech stack
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="rounded-full bg-white/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-600 shadow-sm dark:bg-slate-700/80 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Business impact
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
            {project.impact}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
