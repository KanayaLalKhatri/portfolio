import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" title="Where I've Worked" />

      <div className="relative ml-3 border-l border-border pl-8">
        {experience.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05}>
            <div className="relative mb-12 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{exp.period}</span>
              </div>
              {exp.location && (
                <p className="mt-1 text-sm text-muted">{exp.location}</p>
              )}
              <ul className="mt-4 space-y-2">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 text-accent">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
