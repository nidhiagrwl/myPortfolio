"use client";

import clsx from "clsx";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const links = [
  { href: "/#hero", id: "hero", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#resume", id: "resume", label: "Resume" },
  { href: "/beyond", id: "beyond", label: "Beyond Code" },
  { href: "/#contact", id: "contact", label: "Contact" }
];

export function Header() {
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <a href="/#hero" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-xs font-semibold text-white dark:bg-accent">
            NA
          </div>
          <div>
            <p className="text-sm font-semibold">Nidhi Agrawal</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Senior Software Engineer
            </p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-xs font-medium sm:flex">
          {links.map(link => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={clsx(
                  "relative pb-1 transition-colors",
                  isActive
                    ? "text-slate-900 dark:text-slate-100"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-accent transition-all",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                  )}
                />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

