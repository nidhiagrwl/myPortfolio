"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "awards",
  "resume",
  "contact"
];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (!visible.length) return;

        const topMost = visible.reduce((top, entry) => {
          const topOffset = (top.target as HTMLElement).offsetTop;
          const entryOffset = (entry.target as HTMLElement).offsetTop;
          return entryOffset < topOffset ? entry : top;
        });

        setActiveId((topMost.target as HTMLElement).id);
      },
      {
        root: null,
        rootMargin: "-55% 0px -40% 0px",
        threshold: 0.2
      }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}

