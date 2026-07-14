"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let current = "";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const el = section as HTMLElement;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;

        if (marker >= top && marker < bottom) {
          current = link.href;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4 sm:pt-5">
      <nav
        className={cn(
          "relative flex w-full max-w-xl items-center gap-1 overflow-hidden rounded-full border px-1.5 py-1.5 transition-all duration-500 sm:gap-2 sm:px-2 sm:py-2",
          "border-neutral-800/80 bg-neutral-950/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl backdrop-saturate-150",
          scrolled &&
            "border-neutral-700/80 bg-neutral-950/70 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-neutral-800/20 via-transparent to-transparent" />

        <button
          type="button"
          onClick={() => scrollTo("#")}
          className="cursor-pointer relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-700/60 bg-neutral-900/60 text-[11px] font-bold tracking-tight transition-transform hover:scale-105 sm:h-9 sm:w-9 sm:text-xs"
          aria-label="Scroll to top"
        >
          <span className="bg-linear-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            LB
          </span>
        </button>

        <div className="relative z-10 h-4 w-px shrink-0 bg-neutral-700/60 sm:h-5" />

        <div className="relative z-10 flex flex-1 items-center justify-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              isActive={activeSection === link.href}
              onClick={() => scrollTo(link.href)}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer relative rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm",
        isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300",
      )}
    >
      {isActive && (
        <motion.span
          layoutId="navbar-active"
          className="absolute inset-0 rounded-full bg-neutral-800/80 ring-1 ring-neutral-700/50"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}
