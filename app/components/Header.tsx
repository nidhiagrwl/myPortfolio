"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-xs font-medium">
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

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden flex flex-col gap-1 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={clsx(
                "block h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-transform",
                mobileOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-opacity",
                mobileOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-transform",
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="sm:hidden bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-700/80">
          <div className="flex flex-col p-4 gap-4 text-sm font-medium text-slate-900 dark:text-slate-100">
            {links.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
