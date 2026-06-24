import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, education, awards } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About Me" />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-muted leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm text-accent">Education</h3>
              {education.map((e) => (
                <div key={e.school} className="text-sm">
                  <p className="font-semibold text-foreground">{e.degree}</p>
                  <p className="text-muted">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm text-accent">Awards</h3>
              {awards.map((a) => (
                <p key={a} className="text-sm text-muted">
                  {a}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
