"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectShowcase from "./ProjectShowcase";
import ProjectModal from "./ProjectModal";
import { Phone } from "./AppScreens";
import { projects, type Project } from "@/data/resume";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Featured Projects" />

      {/* Featured — glowing showcase bands with readable details */}
      <div className="space-y-10">
        {featured.map((p, i) => (
          <ProjectShowcase
            key={p.name}
            project={p}
            flip={i % 2 === 1}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      {/* Other projects */}
      <h3 className="mb-2 mt-20 text-center font-mono text-sm text-muted">
        More Apps I&apos;ve Built
      </h3>
      <p className="mb-10 text-center text-xs text-muted/70">
        Tap any app to view details
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <AppCard key={p.name} project={p} index={i} onOpen={() => setActive(p)} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function AppCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [from, to] = project.colors;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      className="project-card group flex flex-col rounded-2xl border border-border bg-card text-left"
    >
      {/* glowing phone preview */}
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden rounded-t-2xl"
        style={{ background: `radial-gradient(120% 100% at 50% 0%, ${from}33, transparent 60%), #0c0e16` }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: `${from}40` }}
        />
        <div className="relative translate-y-6 transition-transform duration-300 group-hover:-translate-y-0 group-hover:scale-[1.03]">
          <Phone project={project} variant={0} size="sm" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs" style={{ color: from }}>
          {project.category}
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Details <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
