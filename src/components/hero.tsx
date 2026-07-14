"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/lbarbaqadze",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lasha-barbakadze-b7319a2b3/",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:barbaqadzelasha45@gmail.com",
    icon: Mail,
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center px-5 pt-32 pb-12 sm:px-8 sm:pt-28 lg:px-12 lg:pt-24 xl:px-16">
      <div className="relative z-10 mx-auto grid w-full max-w-[min(1520px,94vw)] items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl leading-[1.06] font-bold tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            Lasha
            <br />
            <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
              Barbakadze
            </span>
          </motion.h1>

          <motion.p
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl lg:mx-0"
          >
            I build digital products that are{" "}
            <span className="text-neutral-200">fast</span>,{" "}
            <span className="text-neutral-200">clean</span>, and{" "}
            <span className="text-neutral-200">a pleasure to use</span>.
          </motion.p>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg lg:mx-0"
          >
            Software Engineer — from structure and code to deployment. React.js, Next.js, Node.js, Express & NestJS.
          </motion.p>

          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-600 hover:text-white"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <HeroAnimation />
      </div>
    </section>
  );
}
