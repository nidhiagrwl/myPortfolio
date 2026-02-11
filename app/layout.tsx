import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Container } from "./components/Container";
import { ThemeToggle } from "./components/ThemeToggle";

// Global metadata for SEO and link previews
export const metadata: Metadata = {
  title: "Nidhi Agrawal | Senior Backend Engineer & Tech Lead",
  description:
    "Senior backend-heavy engineer with 5.5+ years of experience designing, owning, and operating production systems for enterprise hiring platforms.",
  openGraph: {
    title: "Nidhi Agrawal | Senior Backend Engineer & Tech Lead",
    description:
      "Built and scaled backend systems powering enterprise hiring platforms used by Meesho & Brillio.",
    url: "https://your-portfolio-url.com",
    siteName: "Nidhi Agrawal Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Agrawal | Senior Backend Engineer & Tech Lead",
    description:
      "Backend-heavy engineer who owns architecture, reliability, and client outcomes end-to-end."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg-light text-text-light antialiased dark:bg-bg-dark dark:text-text-dark">
        <ThemeProvider>
          <header className="sticky top-0 z-30 border-b border-border-light/70 bg-bg-light/80 backdrop-blur-md dark:border-border-dark/70 dark:bg-bg-dark/80">
            <Container className="flex items-center justify-between py-3 sm:py-4">
              {/* Brand: always takes you back to the main hero on the home page */}
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
              <nav className="hidden items-center gap-6 text-xs font-medium text-text-mutedLight dark:text-text-mutedDark sm:flex">
                <a href="/#about" className="hover:text-text-light dark:hover:text-text-dark">
                  About
                </a>
                <a href="/#skills" className="hover:text-text-light dark:hover:text-text-dark">
                  Skills
                </a>
                <a href="/#experience" className="hover:text-text-light dark:hover:text-text-dark">
                  Experience
                </a>
                <a href="/beyond" className="hover:text-text-light dark:hover:text-text-dark">
                  Beyond Code
                </a>
                <a href="/#projects" className="hover:text-text-light dark:hover:text-text-dark">
                  Projects
                </a>
                <a href="/#awards" className="hover:text-text-light dark:hover:text-text-dark">
                  Awards
                </a>
                <a href="/#resume" className="hover:text-text-light dark:hover:text-text-dark">
                  Resume
                </a>
                <a href="/#contact" className="hover:text-text-light dark:hover:text-text-dark">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </Container>
          </header>
          <main>{children}</main>
          <footer className="border-t border-border-light/70 py-6 text-xs text-text-mutedLight dark:border-border-dark/70 dark:text-text-mutedDark">
            <Container className="flex flex-col items-center justify-between gap-2 sm:flex-row">
              <p>© {new Date().getFullYear()} Nidhi Agrawal. All rights reserved.</p>
              <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}


