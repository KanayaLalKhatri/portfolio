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
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { profile } from "@/data/resume";
import { asset } from "@/lib/asset";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Mouse-parallax for the photo
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const px = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const py = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const rot = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  // Scroll-driven 3D animation for the photo
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sp = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const scrollScale = useTransform(sp, [0, 1], [1, 1.18]);
  const scrollY = useTransform(sp, [0, 1], [0, -80]);
  const scrollRotX = useTransform(sp, [0, 1], [0, 14]);
  const scrollRotY = useTransform(sp, [0, 1], [0, -10]);
  const scrollOpacity = useTransform(sp, [0, 0.85, 1], [1, 1, 0.4]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="glow-bg relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
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
            className="mt-3 text-2xl font-bold text-muted sm:text-4xl lg:text-5xl"
          >
            I build <span className="gradient-text">mobile experiences</span>.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
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

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-first mx-auto w-full max-w-sm lg:order-none lg:max-w-none"
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
            style={{ background: "radial-gradient(60% 55% at 60% 40%, rgba(100,255,218,0.18), rgba(124,131,255,0.14), transparent 70%)" }}
          />

          {/* outer: scroll-driven 3D motion */}
          <motion.div
            style={{
              scale: scrollScale,
              y: scrollY,
              rotateX: scrollRotX,
              rotateY: scrollRotY,
              opacity: scrollOpacity,
              transformPerspective: 1000,
            }}
          >
            {/* inner: mouse parallax */}
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
              {/* blend photo edges into the dark hero */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-background/15" />
            </motion.div>
          </motion.div>

          {/* animated sparkle accent */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6], rotate: [0, 90, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-4 text-accent"
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c.6 6 4.4 11 12 12-7.6 1-11.4 6-12 12-.6-6-4.4-11-12-12 7.6-1 11.4-6 12-12z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

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
