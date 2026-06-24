"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Phone } from "./AppScreens";
import type { Project } from "@/data/resume";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} />
            </button>

            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* phone */}
              <div
                className="flex justify-center rounded-2xl py-6"
                style={{
                  background: `radial-gradient(110% 90% at 50% 0%, ${project.colors[0]}26, transparent 60%)`,
                }}
              >
                <Phone project={project} variant={0} size="lg" />
              </div>

              {/* details */}
              <div>
                <p className="font-mono text-xs text-accent">{project.category}</p>
                <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
                  {project.name}
                </h3>
                {project.period && (
                  <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
                )}

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <h4 className="mt-6 font-mono text-xs text-accent">Highlights</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 font-mono text-xs text-accent">Built with</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
