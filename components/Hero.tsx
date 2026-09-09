"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-bg pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* subtle blueprint grid motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      <motion.div
        className="container-page relative"
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
      >
        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          className="font-mono text-[13px] text-accent"
        >
          ~/hello
        </motion.p>

        <motion.h1
          variants={shouldReduceMotion ? undefined : item}
          className="mt-5 max-w-3xl font-display text-4xl sm:text-6xl font-medium tracking-tight text-ink text-balance"
        >
          Prajwal Neupane
        </motion.h1>

        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          className="mt-3 font-display text-xl sm:text-2xl text-ink-muted"
        >
          Full-Stack Web Developer
        </motion.p>

        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-muted"
        >
          I build production-ready web applications with the MERN stack and
          Next.js — focused on scalable database architecture, secure
          authentication, and clean, responsive engineering.
        </motion.p>

        <motion.div
          variants={shouldReduceMotion ? undefined : item}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div
          variants={shouldReduceMotion ? undefined : item}
          className="mt-12 flex items-center gap-5"
        >
          <SocialLink href={profile.links.github} label="GitHub">
            <FaGithub size={17} />
          </SocialLink>
          <SocialLink href={profile.links.linkedin} label="LinkedIn">
            <FaLinkedin size={17} />
          </SocialLink>
          <SocialLink href={`mailto:${profile.email}`} label="Email">
            <Mail size={17} />
          </SocialLink>
          <a
            href={profile.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
          >
            prajwalneupane.vercel.app
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
