"use client";

// Top-level page wiring together all sections.
// Layout favors clarity and scanning for hiring managers over visual gimmicks.

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./components/Section";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Badge } from "./components/Badge";
import { SimpleModal } from "./components/Modal";
import { AnimatedSection } from "./components/AnimatedSection";
import { fadeIn, fadeInUp, staggerContainer } from "./components/motionPresets";
import { ProjectCard } from "./components/ProjectCard";
import { useTheme } from "./components/ThemeProvider";

export default function HomePage() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [awardPreview, setAwardPreview] = useState<string | null>(null);

  return (
    <>
      <Hero onViewResume={() => setResumeOpen(true)} />
      <Container>
        <Section id="about" title="About" eyebrow="Profile">
          <About />
        </Section>

        <Section id="skills" title="Skills &amp; Tools" eyebrow="Strengths">
          <Skills />
        </Section>

        <Section id="experience" title="Experience" eyebrow="Career">
          <Experience />
        </Section>

        <Section id="projects" title="Projects" eyebrow="Selected Work">
          <Projects />
        </Section>

        <Section id="awards" title="Awards & Praise" eyebrow="Recognition">
          <Awards onOpenImage={setAwardPreview} />
        </Section>

        <Section id="resume" title="Resume" eyebrow="Details">
          <ResumeSection onOpen={() => setResumeOpen(true)} />
        </Section>

        <Section id="contact" title="Contact" eyebrow="Get in Touch">
          <Contact />
        </Section>
      </Container>

      <SimpleModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        title="Resume – Nidhi Agrawal"
      >
        <div className="space-y-4">
          <p className="text-sm text-text-mutedLight dark:text-text-mutedDark">
            You can view the embedded resume below or download a copy.
          </p>
          <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-border-light/70 bg-surface-light dark:border-border-dark dark:bg-surface-dark">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="h-full w-full"
              aria-label="Embedded resume"
            >
              <p className="p-4 text-sm">
                Your browser does not support embedded PDFs.{" "}
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-accent underline">
                  Open the resume in a new tab
                </a>
                .
              </p>
            </object>
          </div>
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
            >
              View Fullscreen
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-border-light bg-surface-light px-4 py-2 text-sm font-medium text-text-light hover:bg-slate-100 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:hover:bg-slate-800"
            >
              Download PDF
            </a>
          </div>
        </div>
      </SimpleModal>

      <SimpleModal
        open={!!awardPreview}
        onClose={() => setAwardPreview(null)}
        title="Client Appreciation"
      >
        {awardPreview && (
          <img
            src={awardPreview}
            alt="Client appreciation"
            className="max-h-[70vh] w-full rounded-xl object-contain"
          />
        )}
      </SimpleModal>
    </>
  );
}

function Hero({ onViewResume }: { onViewResume: () => void }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border-light/70 bg-hero-mesh py-16 dark:border-border-dark/60 sm:py-20"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      <Container>
        <motion.div
          className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Badge>Available for senior backend roles &amp; consulting</Badge>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Nidhi Agrawal
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-text-mutedLight dark:text-text-mutedDark">
              Senior Software Engineer
            </p>
            <p className="mt-5 max-w-xl text-sm text-text-mutedLight dark:text-text-mutedDark sm:text-base">
              Backend-heavy engineer with 5.5+ years of experience owning systems end-to-end — from
              architecture and integrations to production operations. I design calm, reliable
              systems that scale, and I partner directly with clients, product, and business to ship
              what actually moves the needle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button
                type="button"
                onClick={onViewResume}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-subtle transition-all duration-200"
              >
                View Resume
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border border-border-light bg-surface-light px-6 py-2.5 text-sm font-medium text-text-light transition-all duration-200 hover:bg-slate-100 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:hover:bg-slate-800"
              >
                Contact Me
              </motion.a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-text-mutedLight dark:text-text-mutedDark">
              <span>Backend-heavy · Java / Spring · Integrations · AI features</span>
              <span className="hidden h-1 w-1 align-middle rounded-full bg-text-mutedLight sm:inline-block" />
              <span>Client-facing · Owns ambiguity · Leads cross-functional work</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-medium">
                Let&apos;s connect
              </span>
              <div className="flex gap-3">
                <SocialIcon brand="email" label="Email" href="mailto:nidhiagrawal.career@gmail.com" icon={<MailIcon />} />
                <SocialIcon brand="linkedin" label="LinkedIn" href="https://www.linkedin.com/in/nidhi-agrawal-b5a73b151/" icon={<LinkedInIcon />} />
                <SocialIcon brand="github" label="GitHub" href="https://github.com/nidhiagrwl" icon={<GithubIcon />} />
                <SocialIcon brand="phone" label="Phone" href="tel:+918770603916" icon={<PhoneIcon />} />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:justify-self-end"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.24, 1, 0.32, 1] }}
          >
            <div className="flex flex-col items-center gap-5">
            <motion.div
  whileHover={{
    scale: 1.05,
    rotate: 1,
    boxShadow: "0 0 40px rgba(16, 185, 129, 0.25)",
    transition: { duration: 0.3 },
  }}
  className="rounded-full p-[3px] bg-gradient-to-tr from-accent to-emerald-500 shadow-lg"
>
  <img
    src="/profile.jpeg"
    alt="Portrait of Nidhi Agrawal"
    className="h-40 w-40 sm:h-48 sm:w-48 rounded-full border-2 border-white object-cover dark:border-slate-700"
  />
</motion.div>





              <Card className="w-full max-w-sm p-4 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
                  Quick facts
                </p>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Experience</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">5.5+ years</dd>
                  </div>
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Focus</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">
                    Backend Architecture &amp; Systems
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Current</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">
                    Senior Software Engineer
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Strength</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">
                    Problem Solving &amp; Execution Excellence
                    </dd>
                  </div>
                </dl>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <AnimatedSection>
      <Card className="p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-text-mutedLight dark:text-text-mutedDark">
          I am a senior backend-focused engineer with <strong>5.5+ years</strong> of experience
          designing and operating production systems. For over a year, I worked as a{" "}
          <strong>solo backend developer</strong>, owning the entire backend for a fast-moving
          startup — from schema design and integrations to observability and incident response.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-mutedLight dark:text-text-mutedDark">
          I thrive in ambiguous environments: clarifying fuzzy requirements, designing pragmatic
          architectures, and iterating quickly without compromising on reliability. I am comfortable
          thinking in terms of SLAs, scale, and trade-offs, and I treat production as the source of
          truth.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-mutedLight dark:text-text-mutedDark">
          Beyond the code, I routinely act as a bridge between <strong>business, clients, and
          engineering</strong> — representing the tech team in executive conversations, aligning
          roadmaps with client needs, and translating constraints on both sides into stable,
          maintainable systems.
        </p>
      </Card>
    </AnimatedSection>
  );
}

function TechChip({
  label,
  icon,
  colors
}: {
  label: string;
  icon?: string;
  colors: {
    bgLight: string;
    bgDark: string;
    borderLight: string;
    borderDark: string;
    textLight: string;
    textDark: string;
  };
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? colors.bgDark : colors.bgLight;
  const border = isDark ? colors.borderDark : colors.borderLight;
  const text = isDark ? colors.textDark : colors.textLight;

  return (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-200"
      style={{
        backgroundColor: bg,
        border: `1px solid ${border}`,
        color: text,
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = `0 4px 12px ${border}, 0 0 0 1px ${border}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
      }}
    >
      {icon && (
        <span aria-hidden="true" className="text-[0.8rem]">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </motion.span>
  );
}

function Skills() {
  // Color mapping for tech chips - subtle tints with matching borders
  const getTechChipColors = (label: string) => {
    const lower = label.toLowerCase();
    
    // Programming Languages - Blue tones
    if (lower.includes("java") || lower.includes("kotlin")) {
      return {
        bgLight: "rgba(59, 130, 246, 0.1)", // blue-500/10
        bgDark: "rgba(59, 130, 246, 0.15)",
        borderLight: "rgba(59, 130, 246, 0.4)",
        borderDark: "rgba(59, 130, 246, 0.5)",
        textLight: "#1e40af", // blue-800
        textDark: "#93c5fd" // blue-300
      };
    }
    
    // Frameworks - Green tones
    if (lower.includes("spring") || lower.includes("hibernate") || lower.includes("jpa")) {
      return {
        bgLight: "rgba(16, 185, 129, 0.1)", // emerald-500/10
        bgDark: "rgba(16, 185, 129, 0.15)",
        borderLight: "rgba(16, 185, 129, 0.4)",
        borderDark: "rgba(16, 185, 129, 0.5)",
        textLight: "#065f46", // emerald-800
        textDark: "#6ee7b7" // emerald-300
      };
    }
    
    // Cloud & DevOps - Cyan tones
    if (lower.includes("aws") || lower.includes("gcp") || lower.includes("docker") || lower.includes("maven")) {
      return {
        bgLight: "rgba(6, 182, 212, 0.1)", // cyan-500/10
        bgDark: "rgba(6, 182, 212, 0.15)",
        borderLight: "rgba(6, 182, 212, 0.4)",
        borderDark: "rgba(6, 182, 212, 0.5)",
        textLight: "#155e75", // cyan-800
        textDark: "#67e8f9" // cyan-300
      };
    }
    
    // Integrations - Purple tones
    if (lower.includes("google") || lower.includes("microsoft") || lower.includes("zoom") || lower.includes("dyte") || lower.includes("daily")) {
      return {
        bgLight: "rgba(168, 85, 247, 0.1)", // purple-500/10
        bgDark: "rgba(168, 85, 247, 0.15)",
        borderLight: "rgba(168, 85, 247, 0.4)",
        borderDark: "rgba(168, 85, 247, 0.5)",
        textLight: "#6b21a8", // purple-800
        textDark: "#c4b5fd" // purple-300
      };
    }
    
    // ATS - Orange tones
    if (lower.includes("lever") || lower.includes("greenhouse") || lower.includes("recruitee")) {
      return {
        bgLight: "rgba(249, 115, 22, 0.1)", // orange-500/10
        bgDark: "rgba(249, 115, 22, 0.15)",
        borderLight: "rgba(249, 115, 22, 0.4)",
        borderDark: "rgba(249, 115, 22, 0.5)",
        textLight: "#9a3412", // orange-800
        textDark: "#fdba74" // orange-300
      };
    }
    
    // Databases - Indigo tones
    if (lower.includes("mysql") || lower.includes("postgresql") || lower.includes("oracle") || lower.includes("elasticsearch")) {
      return {
        bgLight: "rgba(99, 102, 241, 0.1)", // indigo-500/10
        bgDark: "rgba(99, 102, 241, 0.15)",
        borderLight: "rgba(99, 102, 241, 0.4)",
        borderDark: "rgba(99, 102, 241, 0.5)",
        textLight: "#3730a3", // indigo-800
        textDark: "#a5b4fc" // indigo-300
      };
    }
    
    // Tools - Teal tones
    if (lower.includes("git") || lower.includes("postman") || lower.includes("intellij") || lower.includes("eclipse") || lower.includes("code") || lower.includes("swagger") || lower.includes("sentry")) {
      return {
        bgLight: "rgba(20, 184, 166, 0.1)", // teal-500/10
        bgDark: "rgba(20, 184, 166, 0.15)",
        borderLight: "rgba(20, 184, 166, 0.4)",
        borderDark: "rgba(20, 184, 166, 0.5)",
        textLight: "#134e4a", // teal-800
        textDark: "#5eead4" // teal-300
      };
    }
    
    // Testing - Pink tones
    if (lower.includes("junit") || lower.includes("test")) {
      return {
        bgLight: "rgba(236, 72, 153, 0.1)", // pink-500/10
        bgDark: "rgba(236, 72, 153, 0.15)",
        borderLight: "rgba(236, 72, 153, 0.4)",
        borderDark: "rgba(236, 72, 153, 0.5)",
        textLight: "#9f1239", // pink-800
        textDark: "#f9a8d4" // pink-300
      };
    }
    
    // Soft Skills - Amber tones
    return {
      bgLight: "rgba(245, 158, 11, 0.1)", // amber-500/10
      bgDark: "rgba(245, 158, 11, 0.15)",
      borderLight: "rgba(245, 158, 11, 0.4)",
      borderDark: "rgba(245, 158, 11, 0.5)",
      textLight: "#78350f", // amber-800
      textDark: "#fcd34d" // amber-300
    };
  };

  const groups = [
    {
      title: "Programming Languages",
      items: [
        { label: "Java 8/17/21", icon: "☕" },
        { label: "Kotlin", icon: "🟣" }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { label: "Spring Boot", icon: "🌱" },
        { label: "Spring Cloud", icon: "☁️" },
        { label: "Hibernate", icon: "⚙️" },
        { label: "JPA", icon: "📄" },
        { label: "Spring Security", icon: "🔐" }
      ]
    },
    {
      title: "Cloud & DevOps",
      items: [
        { label: "AWS (S3, SQS, SNS, CloudFront, Rekognition)", icon: "☁️" },
        { label: "GCP (SSO, Calendar)", icon: "☁️" },
        { label: "Docker", icon: "🐳" },
        { label: "Maven", icon: "📦" }
      ]
    },
    {
      title: "Integrations",
      items: [
        { label: "Google Meet", icon: "🎥" },
        { label: "Google Calendar", icon: "📅" },
        { label: "Microsoft Teams", icon: "💬" },
        { label: "Microsoft Graph API", icon: "📡" },
        { label: "Zoom", icon: "🎦" },
        { label: "Dyte", icon: "🧩" },
        { label: "Daily.co", icon: "🧩" }
      ]
    },
    {
      title: "ATS Integrations",
      items: [
        { label: "Lever", icon: "⚙️" },
        { label: "Greenhouse", icon: "🌿" },
        { label: "Recruitee", icon: "👥" }
      ]
    },
    {
      title: "Architectures",
      items: [
        { label: "Microservices", icon: "🧱" },
        { label: "Monolithic", icon: "🏛️" },
        { label: "Event-Driven Architecture", icon: "📡" }
      ]
    },
    {
      title: "Databases",
      items: [
        { label: "MySQL", icon: "🐬" },
        { label: "Elasticsearch", icon: "🔍" },
        { label: "PostgreSQL", icon: "🐘" },
        { label: "Oracle", icon: "🏺" }
      ]
    },
    {
      title: "Tools",
      items: [
        { label: "Git", icon: "🌱" },
        { label: "Postman", icon: "📮" },
        { label: "IntelliJ", icon: "💡" },
        { label: "Eclipse", icon: "🌘" },
        { label: "VS Code", icon: "⌨️" },
        { label: "Swagger/OpenAPI", icon: "📜" },
        { label: "Sentry", icon: "🛰️" }
      ]
    },
    {
      title: "Testing",
      items: [{ label: "JUnit", icon: "✅" }]
    },
    {
      title: "Soft Skills",
      items: [
        { label: "Client Communication", icon: "💬" },
        { label: "Ownership", icon: "🎯" },
        { label: "Problem Solving", icon: "🧠" },
        { label: "Cross-Functional Collaboration", icon: "🤝" }
      ]
    }
  ];

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(group => (
          <motion.div key={group.title} variants={fadeInUp}>
            <Card className="p-4 sm:p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map(item => {
                  const colors = getTechChipColors(item.label);
                  return (
                    <TechChip
                      key={item.label}
                      label={item.label}
                      icon={item.icon}
                      colors={colors}
                    />
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <div className="space-y-6">
      {/* Company 1 – JobTwine (detailed ownership-focused view) */}
      <AnimatedSection>
        <Card className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <BriefcaseIcon />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            JobTwine · Senior Backend Engineer / Tech Lead
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
              <h3 className="text-base font-semibold">Software Engineer - Backend · JobTwine</h3>
            <p className="mt-1 text-xs text-text-mutedLight dark:text-text-mutedDark">
              Jan 2021 – Present · 3.5+ years
            </p>
          </div>
          <Badge>Backend · Integrations · AI · Client-facing</Badge>
        </div>
        <p className="mt-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
          JobTwine is an intelligent recruitment &amp; interviewing platform. I lead backend-heavy
          work across ATS integrations, SSO, interview automation, and AI features — often acting as
          the primary technical owner in client conversations.
        </p>
        <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
          <li>
            • Managed the <strong>backend single-handedly for 1+ years</strong>, owning design,
            delivery, and production health across core services and integrations.
          </li>
          <li>
            • Designed and implemented a <strong>multi-ATS integration platform</strong> (Lever,
            Greenhouse, Recruitee) with clean, extensible abstractions that unlocked{" "}
            <strong>enterprise deals with Brillio and Meesho</strong>.
          </li>
          <li>
            • Acted as <strong>Tech Lead</strong> in client meetings, representing JobTwine&apos;s
            engineering in POCs, architecture deep-dives, and contract-signing technical
            discussions.
          </li>
          <li>
            • Served as <strong>technical owner and primary POC</strong> for key accounts{" "}
            <strong>Brillio</strong> and <strong>Meesho</strong>, translating their business
            workflows into robust, production-grade integrations.
          </li>
          <li>
            • Designed and rolled out <strong>SSO for enterprise clients</strong> using Google
            OAuth, Microsoft OAuth, and customized OIDC-based flows, reducing onboarding friction
            and support overhead.
          </li>
          <li>
            • Independently handled <strong>production incidents end-to-end</strong> — from
            diagnosis and hotfixes to root-cause analysis and preventative hardening.
          </li>
          <li>
            • Coordinated cross-functionally with <strong>Frontend, AI, and Backend</strong> teams
            to deliver client-specific features under tight timelines while keeping architecture
            clean.
          </li>
          <li>
            • Partnered closely with the <strong>operations team</strong> to design and ship
            internal tooling that reduced manual effort and improved visibility into pipelines.
          </li>
          <li>
            • Built an <strong>AI Interview Copilot</strong> that assists interviewers in real time
            with context-aware prompts and structured feedback, improving interview quality and
            consistency.
          </li>
          <li>
            • Designed the <strong>“Try Us Out” OTP-based self-demo platform</strong>, demoed it to{" "}
            <strong>50+ stakeholders</strong>, and helped increase lead conversion by{" "}
            <strong>~20%</strong>.
          </li>
          <li>
            • Automated <strong>Excel-based hiring pipeline reports</strong> for clients, turning a
            manual operations bottleneck into a self-serve, always-accurate export flow.
          </li>
          <li>
            • Integrated modern video platforms like <strong>Daily</strong> and{" "}
            <strong>Dyte</strong> to provide flexible, reliable interview experiences without
            compromising on latency or UX.
          </li>
          <li>
            • Recognized with the company&apos;s <strong>Star Performer Award</strong> by the CEO
            for sustained ownership, client impact, and consistent delivery under pressure.
          </li>
        </ul>
        </Card>
      </AnimatedSection>

      {/* Company 2 – Previous Organization #1 */}
      <AnimatedSection>
  <Card className="p-5 sm:p-6">
    <div className="mb-3 flex items-center gap-2">
      <BriefcaseIcon />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
        BYJU&apos;s
      </span>
    </div>
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <h3 className="text-base font-semibold">Product Manager (Tech)</h3>
        <p className="mt-1 text-xs text-text-mutedLight dark:text-text-mutedDark">
          2018 – 2020 · 2+ years
        </p>
      </div>
      <Badge>Platform Management · Product Delivery · Workflow Optimization</Badge>
    </div>
    <p className="mt-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
      Managed the <strong>NEO tutor platform</strong>, driving <strong>pre-session workflows, lesson preparation</strong>, and <strong>documentation systems</strong> across live classes. Partnered with engineering, design, and QA to deliver features end-to-end, ensuring smooth operations and enhanced user experience.
    </p>
    <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
      <li>
        • Translated tutor and academic requirements into <strong>clear product specifications</strong>, collaborating with cross-functional teams for timely delivery.
      </li>
      <li>
        • Oversaw <strong>live session operations</strong>, monitoring tutor readiness, participant engagement, and session health in real time.
      </li>
      <li>
        • Improved <strong>content workflows and tutor experience</strong>, reducing preparation time and boosting platform adoption.
      </li>
      <li>
        • Coordinated with academics, operations, and tech leadership to <strong>prioritize roadmap items</strong> and enhance overall user experience.
      </li>
    </ul>
  </Card>
</AnimatedSection>



      {/* Company 3 – Previous Organization #2 (concise but strong) */}
      <AnimatedSection>
  <Card className="p-5 sm:p-6">
    <div className="mb-3 flex items-center gap-2">
      <BriefcaseIcon />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
        Tata Consultancy Services
      </span>
    </div>
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <h3 className="text-base font-semibold">Assistant System Engineer</h3>
        <p className="mt-1 text-xs text-text-mutedLight dark:text-text-mutedDark">
          2016 – 2018 · 2 years
        </p>
      </div>
      <Badge>Java · Financial Systems · API Integration</Badge>
    </div>
    <p className="mt-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
      Worked as a <strong>Junior Java Developer</strong> on <strong>Project VIVEK</strong> for State Bank of India (SBI), contributing to <strong>loan processing</strong> and <strong>customer verification systems</strong>. Collaborated with client teams to deliver secure and compliant financial workflows end-to-end.
    </p>
    <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
      <li>
        • Implemented <strong>PAN verification</strong>, <strong>CIBIL score checks</strong>, and <strong>financial eligibility calculations</strong> by integrating secure government APIs.
      </li>
      <li>
        • Collaborated with <strong>on-site client teams</strong> to gather requirements, resolve production issues, and deliver enhancements quickly.
      </li>
      <li>
        • Contributed to the <strong>NPS (National Pension System)</strong> development, implementing secure <strong>OTP authentication workflows</strong> for email and mobile.
      </li>
      <li>
        • Supported backend services, performed <strong>debugging</strong>, and ensured <strong>stability and compliance</strong> of critical financial workflows.
      </li>
    </ul>
  </Card>
</AnimatedSection>

    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Try Us Out — Self Demo Platform",
      problem:
        "Prospects needed a low-friction way to experience JobTwine without long sales cycles or manual setup.",
      built:
        "Designed and implemented an OTP-based self-demo flow that lets prospects explore a safe, preconfigured environment within minutes.",
      architecture:
        "Backend-first flow with secure, short-lived OTPs, scoped demo tenants, and configurable feature flags; integrated with marketing attribution.",
      stack: ["Java", "Spring Boot", "MySQL", "Redis", "OTP service", "React frontend"],
      impact:
        "Demoed to 50+ stakeholders and contributed to a ~20% increase in lead-to-opportunity conversion for inbound interest."
    },
    {
      title: "ATS Integration Platform",
      problem:
        "Each new client brought a different ATS, resulting in fragmented integrations and duplicated logic.",
      built:
        "A unified ATS integration layer with clean domain abstraction, mapping jobs, candidates, stages, and feedback to a consistent internal model.",
      architecture:
        "SOLID-driven modular design with strategy-based connectors per ATS (Lever, Greenhouse, Recruitee), robust retry & dead-letter handling, and observability around syncs.",
      stack: [
        "Java",
        "Spring Boot",
        "REST",
        "Webhooks",
        "MySQL",
        "Message queues",
        "Observability stack"
      ],
      impact:
        "Enabled multi-ATS support that was instrumental in winning and onboarding enterprise clients like Brillio and Meesho."
    },
    {
      title: "AI Interview Feedback Generator",
      problem:
        "Interviewers spent significant time writing structured feedback, resulting in delays and inconsistent quality.",
      built:
        "An AI-powered feedback generator that consumes call transcripts and structured signals to draft concise, structured interview feedback.",
      architecture:
        "Async pipeline: speech-to-text → feature extraction → LLM prompt templating → human-in-the-loop editing; optimized prompts for speed and consistency.",
      stack: ["Deepgram", "LLM APIs", "Java services", "Async workers", "React UI"],
      impact:
        "Delivered feedback drafts within ~1 minute of interview end, substantially improving interviewer efficiency and response times."
    },
    {
      title: "AI Interview Copilot",
      problem:
        "Interview quality varied significantly across interviewers, and maintaining structure in conversations was difficult.",
      built:
        "A real-time copilot that surfaces context-aware suggestions, follow-up questions, and evaluation hints during live interviews.",
      architecture:
        "Streaming architecture consuming live transcript events, maintaining interview context, and serving low-latency AI suggestions via websockets.",
      stack: [
        "WebSockets",
        "LLM APIs",
        "Java backend",
        "React frontend",
        "Observability tooling"
      ],
      impact:
        "Improved interview structure and signal quality, especially for less-experienced interviewers, while keeping cognitive load low."
    }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project as any} index={index} />
      ))}
    </div>
  );
}

function Awards({ onOpenImage }: { onOpenImage: (src: string | null) => void }) {
  return (
    <div className="space-y-5">
      <AnimatedSection>
        <Card className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <AwardIcon />
          <h3 className="text-sm font-semibold">Star Performer &amp; Client Praise</h3>
        </div>
        <p className="mt-3 text-sm text-text-mutedLight dark:text-text-mutedDark">
          I care deeply about the systems I own and the people who rely on them. That has translated
          into recognition from leadership and consistent appreciation from clients and internal
          stakeholders.
        </p>
        <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
          <li>
            • Awarded the <strong>Star Performer Award</strong> by the CEO for end-to-end ownership,
            calm handling of production issues, and impact on strategic accounts.
          </li>
          <li>
            • Regular positive feedback from client teams at <strong>Brillio</strong> and{" "}
            <strong>Meesho</strong> for responsiveness, clarity of communication, and reliable
            delivery.
          </li>
          <li>
            • Trusted to lead demos, onboarding sessions, and pilot rollouts with senior
            stakeholders across product, talent, and technology.
          </li>
        </ul>
      </Card>
      </AnimatedSection>

      <AnimatedSection>
        <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
          Appreciation snapshots
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {["/awards/appreciation-1.png", "/awards/appreciation-2.png"].map(src => (
            <button
              key={src}
              type="button"
              onClick={() => onOpenImage(src)}
              className="group relative overflow-hidden rounded-xl border border-border-light/70 bg-surface-light dark:border-border-dark dark:bg-surface-dark"
            >
              <img
                src={src}
                alt="Client appreciation"
                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-text-mutedLight dark:text-text-mutedDark">
        Screenshots of appreciation messages and recognition received for ownership, delivery quality, and impact.
        </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

function ResumeSection({ onOpen }: { onOpen: () => void }) {
  return (
    <AnimatedSection>
      <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <div className="mb-1 flex items-center gap-2">
          <ResumeIcon />
          <h3 className="text-sm font-semibold">Resume</h3>
        </div>
        <p className="mt-2 text-sm text-text-mutedLight dark:text-text-mutedDark">
          Detailed view of my experience, projects, and technical skills. Available as a PDF and easy to
          share with your team.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600"
        >
          View Resume
        </button>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-full border border-border-light bg-surface-light px-5 py-2 text-sm font-medium text-text-light hover:bg-slate-100 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:hover:bg-slate-800"
        >
          Download PDF
        </a>
      </div>
      </Card>
    </AnimatedSection>
  );
}

function Contact() {
  return (
    <AnimatedSection>
      <Card className="overflow-hidden p-0">
        <div className="bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80 dark:from-slate-800/80 dark:via-slate-800 dark:to-slate-900/80 p-5 sm:p-6">
          <div className="mb-2 flex items-center gap-2">
            <MailIcon />
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Let&apos;s talk</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            I&apos;m open to senior backend roles, staff-track opportunities, and selective consulting /
            fractional ownership work.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-4">
          <SocialIcon brand="email" label="Email" href="mailto:nidhiagrawal.career@gmail.com" icon={<MailIcon />} />
          <SocialIcon brand="linkedin" label="LinkedIn" href="https://www.linkedin.com/in/nidhi-agrawal-b5a73b151/" icon={<LinkedInIcon />} />
          <SocialIcon brand="github" label="GitHub" href="https://github.com/nidhiagrwl" icon={<GithubIcon />} />
          <SocialIcon brand="phone" label="Phone" href="tel:+918770603916" icon={<PhoneIcon />} />
            </div>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
}

// Small inline icons for different cards
function BriefcaseIcon() {
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
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

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

function AwardIcon() {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M8 13.5 7 21l5-2 5 2-1-7.5" />
    </svg>
  );
}

function ResumeIcon() {
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
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

const brandStyles: Record<string, { bg: string; hover: string; darkBg: string; darkHover: string }> = {
  email: { bg: "bg-red-500/10", hover: "hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-600", darkBg: "dark:bg-red-400/10", darkHover: "dark:hover:bg-red-400/20 dark:hover:border-red-400/50 dark:hover:text-red-400" },
  linkedin: { bg: "bg-[#0a66c2]/10", hover: "hover:bg-[#0a66c2]/20 hover:border-[#0a66c2]/50 hover:text-[#0a66c2]", darkBg: "dark:bg-[#0a66c2]/20", darkHover: "dark:hover:bg-[#0a66c2]/30 dark:hover:border-[#0a66c2]/60 dark:hover:text-[#60a5fa]" },
  github: { bg: "bg-slate-700/10", hover: "hover:bg-slate-700/20 hover:border-slate-600 hover:text-slate-800", darkBg: "dark:bg-slate-400/10", darkHover: "dark:hover:bg-slate-400/20 dark:hover:border-slate-400/50 dark:hover:text-slate-300" },
  phone: { bg: "bg-emerald-500/10", hover: "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-600", darkBg: "dark:bg-emerald-400/10", darkHover: "dark:hover:bg-emerald-400/20 dark:hover:border-emerald-400/50 dark:hover:text-emerald-400" }
};

function SocialIcon({
  label,
  href,
  icon,
  brand = "email"
}: {
  label: string;
  href: string;
  icon: JSX.Element;
  brand?: keyof typeof brandStyles;
}) {
  const s = brandStyles[brand] || brandStyles.email;
  return (
    <motion.a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${s.bg} ${s.hover} ${s.darkBg} ${s.darkHover} border-slate-300/80 text-slate-600 dark:border-slate-600 dark:text-slate-400`}
      whileHover={{ scale: 1.15, y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
    </motion.a>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M5 7.5 12 12l7-4.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6h.01" />
      <rect x="4" y="9" width="4" height="11" rx="1" />
      <path d="M10 9h3.5L14 10.5a3.5 3.5 0 0 1 6 2.5V20h-4v-6a1.5 1.5 0 0 0-3 0v6h-3z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-2.2a3.8 3.8 0 0 0-1-3c3 0 6-2 6-5.5a4.3 4.3 0 0 0-.8-2.5 4 4 0 0 0-.1-2.6s-1-.3-2.7 1a9.2 9.2 0 0 0-5 0C9.7 4 8.7 4.2 8.7 4.2a4 4 0 0 0-.1 2.6 4.3 4.3 0 0 0-.8 2.5c0 3.5 3 5.5 6 5.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 3h3l1 4-2 1.5a11 11 0 0 0 5 5L15 12l4 1v3.5A2.5 2.5 0 0 1 16.5 19 14.5 14.5 0 0 1 5 7.5 2.5 2.5 0 0 1 6.5 3z" />
    </svg>
  );
}

