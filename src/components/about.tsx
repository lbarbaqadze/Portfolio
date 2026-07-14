"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "JS (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    label: "Backend",
    subtitle: "Currently learning",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    label: "Databases",
    subtitle: "Working with",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
] as const;

const alsoSkills = [
  "GitHub",
  "Vercel",
  "REST APIs",
  "JWT Auth",
  "MVC Structure",
  "Joi Validation",
  "Agile/Scrum",
  "AWS Deployment",
  "Postman Testing",
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 lg:-mt-12 lg:py-15 lg:px-12 xl:px-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[min(1520px,94vw)] items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase"
          >
            About
          </motion.span>

          <motion.h2
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-3 text-base text-neutral-500 sm:text-lg"
          >
            Building from interface toward full stack.
          </motion.p>

          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-8 space-y-4 text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            <p>
              I have front-end experience with React, Next.js, and
              TypeScript. building responsive, polished interfaces with Tailwind
              CSS and modern tooling.
            </p>
            <p>
              I&apos;m growing toward software engineering in the broader sense 
              not only building interfaces, but learning how products are structured, 
              maintained, and deployed end to end.             
            </p>
          </motion.div>

          <motion.a
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            href="/Lasha_Barbakadze_CV.pdf"
            download="Lasha_Barbakadze_CV.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Download CV
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-3 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 lg:justify-start">
                    <p className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
                      {group.label}
                    </p>
                    {"subtitle" in group && group.subtitle && (
                      <span className="text-[11px] text-neutral-600">
                        · {group.subtitle}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-800 bg-neutral-900/50 px-3.5 py-1.5 text-sm text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-neutral-800/80 pt-6">
              <p className="text-center text-xs font-medium tracking-wider text-neutral-500 uppercase lg:text-left">
                Also
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                {alsoSkills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-800/60 px-3 py-1 text-xs text-neutral-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
