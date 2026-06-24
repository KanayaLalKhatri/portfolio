import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04" title="Skills & Technologies" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-accent/5 px-3 py-1.5 text-sm text-foreground ring-1 ring-inset ring-border transition-colors hover:ring-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
