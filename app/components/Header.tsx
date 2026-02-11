"use client";

import clsx from "clsx";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const links = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/beyond", id: "beyond", label: "Beyond Code" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#awards", id: "awards", label: "Awards" },
  { href: "/#resume", id: "resume", label: "Resume" },
  { href: "/#contact", id: "contact", label: "Contact" }
];

export function Header() {
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-30 border-b border-border-light/70 bg-bg-light/80 backdrop-blur-md dark:border-border-dark/70 dark:bg-bg-dark/80">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <a href="/#hero" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-xs font-semibold text-white dark:bg-accent">
            NA
          </div>
          <div>
            <p className="text-sm font-semibold">Nidhi Agrawal</p>
            <p className="text-xs text-text-mutedLight dark:text-text-mutedDark">
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
                    ? "text-text-light dark:text-text-dark"
                    : "text-text-mutedLight dark:text-text-mutedDark hover:text-text-light dark:hover:text-text-dark"
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

