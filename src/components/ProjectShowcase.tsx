"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PhoneTrio } from "./AppScreens";
import { asset } from "@/lib/asset";
import type { Project } from "@/data/resume";

/**
 * Featured project band: a glowing angled phone-trio on one side and a
 * fully readable details panel (name, description, highlights, tags) on
 * the other. Sides alternate per row.
 */
export default function ProjectShowcase({
  project,
  flip,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  onOpen: () => void;
}) {
  const [from, to] = project.colors;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-3xl border border-border"
      style={{
        background: `radial-gradient(110% 120% at ${flip ? "85%" : "15%"} 0%, ${from}1f, transparent 55%), #0c0e16`,
      }}
    >
      <div className="grid items-center gap-4 lg:grid-cols-2">
        {/* Phones */}
        <div
          className={`relative flex justify-center px-4 py-8 ${flip ? "lg:order-2" : ""}`}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(60% 60% at 50% 45%, ${from}26, transparent 70%)` }}
          />
          <button
            type="button"
            onClick={onOpen}
            aria-label={`View ${project.name}`}
            className="relative w-full transition-transform duration-300 hover:scale-[1.02]"
          >
            {project.banner ? (
              <Image
                src={asset(project.banner)}
                alt={`${project.name} showcase`}
                width={1280}
                height={720}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            ) : (
              <PhoneTrio project={project} />
            )}
          </button>
        </div>

        {/* Details */}
        <div className={`px-7 pb-10 pt-2 lg:px-10 lg:py-10 ${flip ? "lg:order-1" : ""}`}>
          <span
            className="inline-block rounded-full px-3 py-1 font-mono text-[11px] font-medium text-white"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            {project.category}
          </span>

          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h3>
          {project.period && (
            <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <Check size={16} className="mt-0.5 shrink-0" style={{ color: from }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={onOpen}
            className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            View Details <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
