"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Loader2, Mail, Send } from "lucide-react";

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

const contactLinks = [
  {
    label: "Email",
    value: "barbaqadzelasha45@gmail.com",
    href: "mailto:barbaqadzelasha45@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "lasha-barbakadze",
    href: "https://www.linkedin.com/in/lasha-barbakadze-b7319a2b3/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "lbarbaqadze",
    href: "https://github.com/lbarbaqadze",
    icon: GitHubIcon,
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const inputClassName =
  "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-600";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-25 xl:px-16"
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
            Contact
          </motion.span>

          <motion.h2
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s work together
          </motion.h2>

          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-4 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            Have a project in mind or want to connect? Send a message — it goes
            straight to my inbox.
          </motion.p>

          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-6 w-full max-w-md space-y-3"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-neutral-800/80 bg-neutral-950/40 px-4 py-3 transition-colors hover:border-neutral-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400">
                  <link.icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-neutral-500">{link.label}</p>
                  <p className="text-sm text-neutral-200">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me about your project..."
                  className={`${inputClassName} resize-none`}
                />
              </div>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-400">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
