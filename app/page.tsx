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

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, ease: "easeOut" }
};

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
      className="border-b border-border-light/70 bg-gradient-to-b from-bg-light to-transparent py-16 dark:border-border-dark/60 dark:from-bg-dark/40 sm:py-20"
    >
      <Container>
        <motion.div
          className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div>
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
              <button
                type="button"
                onClick={onViewResume}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-subtle hover:bg-emerald-600"
              >
                View Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border-light bg-surface-light px-6 py-2.5 text-sm font-medium text-text-light hover:bg-slate-100 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-text-mutedLight dark:text-text-mutedDark">
              <span>Backend-heavy · Java / Spring · Integrations · AI features</span>
              <span className="hidden h-1 w-1 align-middle rounded-full bg-text-mutedLight sm:inline-block" />
              <span>Client-facing · Owns ambiguity · Leads cross-functional work</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-text-mutedLight dark:text-text-mutedDark">
              <span className="font-medium text-text-mutedLight dark:text-text-mutedDark">
                Let&apos;s connect
              </span>
              <div className="flex gap-3">
                <SocialIcon
                  label="Email"
                  href="mailto:your.email@example.com"
                  icon={<MailIcon />}
                />
                <SocialIcon
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/nidhi-agrawal"
                  icon={<LinkedInIcon />}
                />
                <SocialIcon
                  label="GitHub"
                  href="https://github.com/yourusername"
                  icon={<GithubIcon />}
                />
                <SocialIcon
                  label="Phone"
                  href="tel:+91XXXXXXXXXX"
                  icon={<PhoneIcon />}
                />
              </div>
            </div>
          </div>
          <motion.div
            className="md:justify-self-end"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
          >
            <div className="flex flex-col items-center gap-5">
              <div className="relative">
                <div className="rounded-full bg-gradient-to-tr from-accent to-emerald-500 p-[3px]">
                  <img
                    src="/profile.jpeg"
                    alt="Portrait of Nidhi Agrawal"
                    className="h-32 w-32 rounded-full border border-border-light bg-surface-light object-cover transition-transform duration-300 ease-out hover:scale-[1.03] dark:border-border-dark dark:bg-surface-dark sm:h-40 sm:w-40"
                  />
                </div>
              </div>
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
                      Backend &amp; integrations
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Current</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">
                      Senior Engineer @ JobTwine
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-mutedLight dark:text-text-mutedDark">Strength</dt>
                    <dd className="font-medium text-text-light dark:text-text-dark">
                      Ownership &amp; client leadership
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
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={fadeInUp.transition}
    >
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
    </motion.div>
  );
}

function Skills() {
  const groups = [
    {
      title: "Programming Languages",
      items: ["Java 8/17/21", "Kotlin"]
    },
    {
      title: "Frameworks",
      items: ["Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Spring Security"]
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (S3, SQS, SNS, CloudFront, Rekognition)",
        "GCP (SSO, Calendar)",
        "Docker",
        "Maven"
      ]
    },
    {
      title: "Integrations",
      items: [
        "Google Meet",
        "Google Calendar",
        "Microsoft Teams",
        "Microsoft Graph API",
        "Zoom",
        "Dyte",
        "Daily.co"
      ]
    },
    {
      title: "ATS Integrations",
      items: ["Lever", "Greenhouse", "Recruitee"]
    },
    {
      title: "Architectures",
      items: ["Microservices", "Monolithic", "Event-Driven Architecture"]
    },
    {
      title: "Databases",
      items: ["MySQL", "Elasticsearch", "PostgreSQL", "Oracle"]
    },
    {
      title: "Tools",
      items: ["Git", "Postman", "IntelliJ", "Eclipse", "VS Code", "Swagger/OpenAPI", "Sentry"]
    },
    {
      title: "Testing",
      items: ["JUnit"]
    },
    {
      title: "Soft Skills",
      items: ["Client Communication", "Ownership", "Problem Solving", "Cross-Functional Collaboration"]
    }
  ];

  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={fadeInUp.transition}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(group => (
          <Card key={group.title} className="p-4 sm:p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map(item => (
                <span
                  key={item}
                  className="rounded-full border border-border-light bg-surface-light px-3 py-1 text-xs text-text-mutedLight transition hover:border-accent hover:bg-accent-soft hover:text-text-light dark:border-border-dark dark:bg-surface-dark dark:text-text-mutedDark dark:hover:border-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <div className="space-y-6">
      {/* Company 1 – JobTwine (detailed ownership-focused view) */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={fadeInUp.transition}
      >
        <Card className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <BriefcaseIcon />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            JobTwine · Senior Backend Engineer / Tech Lead
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
              <h3 className="text-base font-semibold">Senior Backend Engineer / Tech Lead · JobTwine</h3>
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
      </motion.div>

      {/* Company 2 – Previous Organization #1 */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...fadeInUp.transition, delay: 0.05 }}
      >
        <Card className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <BriefcaseIcon />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            Previous Organization #1
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold">Backend Engineer · Previous Organization #1</h3>
              <p className="mt-1 text-xs text-text-mutedLight dark:text-text-mutedDark">
                2018 – 2020 · 2+ years
              </p>
            </div>
            <Badge>APIs · Databases · System Design</Badge>
          </div>
          <p className="mt-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
            Joined as a backend engineer responsible for designing and scaling core APIs, working
            closely with product and frontend teams to keep delivery predictable and systems stable
            in production.
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
            <li>
              • Designed and implemented RESTful APIs for core product workflows, focusing on clear
              contracts, versioning, and observability from day one.
            </li>
            <li>
              • Led database schema design for new modules, including indexing strategy and migration
              plans that avoided downtime during high-traffic periods.
            </li>
            <li>
              • Introduced structured logging and basic alerting on key endpoints, which shortened
              the feedback loop for production issues.
            </li>
            <li>
              • Collaborated closely with frontend, QA, and product to break down ambiguous
              requirements into deliverables that were easy to test and release.
            </li>
            <li>
              • Participated in on-call rotations and incident reviews, contributing fixes and
              follow-up improvements to reduce repeat incidents.
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* Company 3 – Previous Organization #2 (concise but strong) */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...fadeInUp.transition, delay: 0.05 }}
      >
        <Card className="p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2">
            <BriefcaseIcon />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
              Previous Organization #2
            </span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold">Software Engineer · Previous Organization #2</h3>
              <p className="mt-1 text-xs text-text-mutedLight dark:text-text-mutedDark">
                2016 – 2018 · 2 years
              </p>
            </div>
            <Badge>Foundations · Production Readiness</Badge>
          </div>
          <p className="mt-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
            Early-career role focused on building reliable backend services, learning how production
            systems behave under real usage, and developing a bias towards simplicity and clarity in
            design.
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-text-mutedLight dark:text-text-mutedDark">
            <li>
              • Implemented features across the backend stack, from controllers to data access,
              under close code review, building strong engineering fundamentals.
            </li>
            <li>
              • Helped debug and fix production defects, gaining hands-on experience in tracing,
              logging, and safe rollouts.
            </li>
            <li>
              • Contributed to internal documentation and onboarding materials, making it easier for
              new engineers to understand the system.
            </li>
          </ul>
        </Card>
      </motion.div>
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
      stack: "Java · Spring Boot · MySQL · Redis · OTP service · React frontend",
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
      stack: "Java · Spring Boot · REST · Webhooks · MySQL · Message queues · Observability stack",
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
      stack: "Deepgram · LLM APIs · Java services · Async workers · React UI",
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
      stack: "WebSockets · LLM APIs · Java backend · React frontend · Observability tooling",
      impact:
        "Improved interview structure and signal quality, especially for less-experienced interviewers, while keeping cognitive load low."
    }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...fadeInUp.transition, delay: index * 0.04 }}
        >
          <Card className="flex flex-col p-5 sm:p-6">
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
          <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
            {project.stack}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-mutedLight dark:text-text-mutedDark">
            Business impact
          </p>
          <p className="mt-1 text-sm text-text-mutedLight dark:text-text-mutedDark">
            {project.impact}
          </p>
        </Card>
        </motion.div>
      ))}
    </div>
  );
}

function Awards({ onOpenImage }: { onOpenImage: (src: string | null) => void }) {
  return (
    <div className="space-y-5">
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
          Replace these placeholders with actual screenshots from email, Slack, or internal tools.
        </p>
      </div>
    </div>
  );
}

function ResumeSection({ onOpen }: { onOpen: () => void }) {
  return (
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
  );
}

function Contact() {
  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-2 flex items-center gap-2">
        <MailIcon />
        <h3 className="text-sm font-semibold">Let&apos;s talk</h3>
      </div>
      <p className="text-sm text-text-mutedLight dark:text-text-mutedDark">
        I&apos;m open to senior backend roles, staff-track opportunities, and selective consulting /
        fractional ownership work.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-3">
          <SocialIcon
            label="Email"
            href="mailto:your.email@example.com"
            icon={<MailIcon />}
          />
          <SocialIcon
            label="LinkedIn"
            href="https://www.linkedin.com/in/nidhi-agrawal"
            icon={<LinkedInIcon />}
          />
          <SocialIcon
            label="GitHub"
            href="https://github.com/yourusername"
            icon={<GithubIcon />}
          />
          <SocialIcon
            label="Phone"
            href="tel:+91XXXXXXXXXX"
            icon={<PhoneIcon />}
          />
        </div>
      </div>
    </Card>
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

// Simple inline icons to avoid extra dependencies
function SocialIcon({
  label,
  href,
  icon
}: {
  label: string;
  href: string;
  icon: JSX.Element;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-text-mutedLight transition hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-mutedDark dark:hover:border-accent"
    >
      {icon}
    </a>
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

