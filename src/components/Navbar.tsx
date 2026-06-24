"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-bold gradient-text">
          KL<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-accent md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-accent" />
            <span className="block h-0.5 w-6 bg-accent" />
            <span className="block h-0.5 w-4 bg-accent" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border bg-background/95 px-6 py-6 md:hidden">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-muted hover:text-accent"
              >
                <span className="text-accent">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </motion.header>
  );
}
