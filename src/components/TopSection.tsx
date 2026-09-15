"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { profile, education, awards } from "@/data/resume";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Photo({
  px,
  py,
  rot,
  scale,
  rotY,
  opacity,
}: {
  px: import("framer-motion").MotionValue<number>;
  py: import("framer-motion").MotionValue<number>;
  rot: import("framer-motion").MotionValue<number>;
  scale: import("framer-motion").MotionValue<number>;
  rotY: import("framer-motion").MotionValue<number>;
  opacity: import("framer-motion").MotionValue<number>;
}) {
  return (
    <div className="relative w-full max-w-sm">
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{ background: "radial-gradient(60% 55% at 60% 40%, rgba(100,255,218,0.18), rgba(124,131,255,0.14), transparent 70%)" }}
      />
      <motion.div style={{ scale, rotateY: rotY, opacity, transformPerspective: 1000 }}>
        <motion.div
          style={{ x: px, y: py, rotateZ: rot }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={asset("/profile.png")}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-background/15" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6], rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-4 text-accent"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c.6 6 4.4 11 12 12-7.6 1-11.4 6-12 12-.6-6-4.4-11-12-12 7.6-1 11.4-6 12-12z" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function TopSection() {
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const px = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const py = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const rot = useTransform(sx, [-0.5, 0.5], [-3, 3]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  // Scroll-driven 3D + fade while the photo is pinned
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sp = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const scale = useTransform(sp, [0, 1], [1, 1.08]);
  const rotY = useTransform(sp, [0, 1], [0, -12]);
  const opacity = useTransform(sp, [0, 0.72, 1], [1, 1, 0]);

  return (
    <section ref={ref} onMouseMove={onMove} className="glow-bg relative">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* LEFT: scrolling content */}
        <div>
          {/* Hero text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex min-h-screen flex-col justify-center py-28 lg:py-0"
          >
            <motion.p variants={item} className="mb-5 font-mono text-sm text-accent">
              Hi, my name is
            </motion.p>
            <motion.h1 variants={item} className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </motion.h1>
            <motion.h2 variants={item} className="mt-3 text-2xl font-bold text-muted sm:text-4xl lg:text-5xl">
              I build <span className="gradient-text">mobile experiences</span>.
            </motion.h2>
            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
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
              <a href="#projects" className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                View My Work
              </a>
              <a href="#contact" className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent">
                Get In Touch
              </a>
            </motion.div>
            <motion.div variants={item} className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo on mobile (sticky version is desktop-only) */}
          <div className="mb-16 flex justify-center lg:hidden">
            <Photo px={px} py={py} rot={rot} scale={scale} rotY={rotY} opacity={opacity} />
          </div>

          {/* About */}
          <div id="about" className="py-20 lg:py-28">
            <SectionHeading index="01" title="About Me" />
            <Reveal>
              <div className="space-y-4 leading-relaxed text-muted">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                    <p key={a} className="text-sm text-muted">{a}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* RIGHT: sticky photo (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <Photo px={px} py={py} rot={rot} scale={scale} rotY={rotY} opacity={opacity} />
          </div>
        </div>
      </div>
    </section>
  );
}
