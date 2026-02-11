import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PageTransition } from "./components/PageTransition";

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
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
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


