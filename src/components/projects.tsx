"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const INITIAL_VISIBLE_COUNT = 6;

const featuredProjects = [
  {
    title: "Travel Agency",
    image: "/travel-agency.png",
    live: "https://travel-agency-9b9s.vercel.app",
    github: "https://github.com/lbarbaqadze/Travel-Agency",
    type: "Full Stack",
    description:
      "Travel platform — dynamic frontend, REST API, and database-backed booking flow across the full stack.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Personal Trainer",
    image: "/personal-trainer.png",
    live: "https://www.gym-weighlifting.com/en",
    type: "Freelance",
    description:
      "Client-ordered fitness landing page — modern layout, responsive design, and polished UI built to convert visitors into leads.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Apple Inspiration",
    image: "/apple-inspiration.png",
    live: "https://apple-inspiration.vercel.app",
    github: "https://github.com/lbarbaqadze/Apple-Inspiration",
    type: "Frontend",
    description:
      "Apple-inspired product experience — clean typography, smooth interactions, and pixel-focused interface design.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Zustand"],
  },
  {
    title: "Habit Tracker",
    image: "/habit-tracker.png",
    live: "https://habit-tracker-coral-xi.vercel.app",
    github: "https://github.com/lbarbaqadze/Habit-Tracker",
    type: "Frontend",
    description:
      "habit and to-do tracker. Mark daily habits, build streaks, manage to-dos, and review progress all stored locally in your browser.",
    tech: ["React.js", "Next.js", "Zustand", "Tailwind CSS"],
  },
];

const boilerplates = [
  {
    title: "Express 2Auth API",
    href: "https://github.com/lbarbaqadze/Express-2Auth-Api",
    description:
      "Secure auth API with email/OTP verification, Google OAuth, JWT + refresh token rotation, httpOnly cookies, ForgotPassword, ChangePassword",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "Joi"],
  },
  {
    title: "MVC Structure",
    href: "https://github.com/lbarbaqadze/MVC_Structure",
    description:
      "Express MVC boilerplate with Joi validation, global error handling, catchAsync wrapper, and prepared statements.",
    tech: ["Node.js", "Express.js", "MySQL", "MVC", "Joi"],
  },
  {
    title: "Express Feature-Based",
    href: "https://github.com/lbarbaqadze/Express-Feature-Based",
    description:
      "Modular feature-based architecture with a services layer, DB health-check on boot, and centralized error handling.",
    tech: ["Node.js", "Express.js", "MySQL", "Joi"],
  },  
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const typeStyles: Record<string, string> = {
  Freelance: "border-neutral-600/60 bg-neutral-800/50 text-neutral-300",
  "Full Stack": "border-white/20 bg-white/10 text-white",
  Frontend: "border-neutral-700/80 bg-neutral-900/60 text-neutral-300",
};

function ViewMoreButton({
  expanded,
  hiddenCount,
  onClick,
}: {
  expanded: boolean;
  hiddenCount: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-10 flex justify-center"
    >
      <button
        type="button"
        onClick={onClick}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
      >
        {expanded ? "Show less" : `View more (${hiddenCount})`}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </motion.div>
  );
}

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllBoilerplates, setShowAllBoilerplates] = useState(false);

  const hasMoreProjects = featuredProjects.length > INITIAL_VISIBLE_COUNT;
  const visibleProjects = showAllProjects
    ? featuredProjects
    : featuredProjects.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenProjectsCount = featuredProjects.length - INITIAL_VISIBLE_COUNT;

  const hasMoreBoilerplates = boilerplates.length > INITIAL_VISIBLE_COUNT;
  const visibleBoilerplates = showAllBoilerplates
    ? boilerplates
    : boilerplates.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenBoilerplatesCount =
    boilerplates.length - INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-25 xl:px-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-[min(1520px,94vw)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center lg:mb-10 lg:text-left"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
            Projects
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-500 sm:text-lg lg:mx-0">
            Client projects and products, from freelance builds to full-stack
            applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, i) => (
              <motion.article
                key={`${project.title}-${i}`}
                layout
                custom={i * 0.08}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/40 backdrop-blur-sm transition-colors hover:border-neutral-700"
              >
              <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-800/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} live demo`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase ${typeStyles[project.type]}`}
                  >
                    {project.type}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-transform hover:scale-105 sm:text-sm"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {"github" in project && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white sm:text-sm"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {hasMoreProjects && (
          <ViewMoreButton
            expanded={showAllProjects}
            hiddenCount={hiddenProjectsCount}
            onClick={() => setShowAllProjects((prev) => !prev)}
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 mb-8 text-center lg:mt-14 lg:mb-10 lg:text-left"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
            Open Source
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Backend Architecture - Boilerplates
          </h2>          
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleBoilerplates.map((project, i) => (
              <motion.a
                key={`${project.title}-${i}`}
                layout
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i * 0.08}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-6 backdrop-blur-sm transition-colors hover:border-neutral-600"
              >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/60">
                  <GitHubIcon className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-white" />
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-800/60 px-2.5 py-1 text-xs text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {hasMoreBoilerplates && (
          <ViewMoreButton
            expanded={showAllBoilerplates}
            hiddenCount={hiddenBoilerplatesCount}
            onClick={() => setShowAllBoilerplates((prev) => !prev)}
          />
        )}
      </div>
    </section>
  );
}
