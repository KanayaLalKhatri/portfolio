import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-accent">05. What&apos;s Next?</p>
        <h2 className="text-3xl font-bold sm:text-5xl">Let&apos;s build something great.</h2>
        <p className="mx-auto mt-6 max-w-xl text-muted leading-relaxed">
          I&apos;m open to new opportunities, freelance projects, and collaborations.
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded-md border border-accent px-8 py-4 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent">
            <Mail size={18} /> Email
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-accent">
            <Phone size={18} /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FaGithub size={18} /> GitHub
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={18} /> {profile.location}
          </span>
        </div>
      </Reveal>

      <footer className="mt-24 border-t border-border pt-8 font-mono text-xs text-muted">
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </footer>
    </section>
  );
}
