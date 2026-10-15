"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { profile } from "@/data/resume";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="glow-bg relative flex min-h-screen items-center px-6 pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p variants={item} className="mb-5 font-mono text-sm text-accent">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 text-3xl font-bold text-muted sm:text-5xl lg:text-6xl"
        >
          I build <span className="gradient-text">mobile experiences</span>.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-accent" /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail size={16} className="text-accent" /> {profile.email}
          </span>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 flex flex-wrap gap-8 border-t border-border pt-8"
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
