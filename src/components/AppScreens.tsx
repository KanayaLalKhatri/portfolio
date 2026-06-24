import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Project } from "@/data/resume";

/* ───────────────────────────────────────────────────────────
   A single phone (frame + screen). Shows a real screenshot if
   project.shots[variant] / project.image is set, otherwise a
   themed mock app screen. Three variants give visual variety
   in the angled trio (like the MolaHub hero).
   ─────────────────────────────────────────────────────────── */

type Size = "lg" | "md" | "sm";

const widths: Record<Size, string> = {
  lg: "w-[210px]",
  md: "w-[160px]",
  sm: "w-[150px]",
};

export function Phone({
  project,
  variant = 0,
  size = "lg",
  className = "",
}: {
  project: Project;
  variant?: 0 | 1 | 2;
  size?: Size;
  className?: string;
}) {
  const shot = project.shots?.[variant] ?? (variant === 0 ? project.image : undefined);

  return (
    <div
      className={`relative ${widths[size]} aspect-[9/19] rounded-[2rem] border-[5px] border-[#15171f] bg-[#0d0f17] p-1 shadow-2xl ${className}`}
    >
      <div className="absolute left-1/2 top-1.5 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-[#15171f]" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
        {shot ? (
          <Image src={asset(shot)} alt={`${project.name} screen`} fill className="object-cover" sizes="210px" />
        ) : (
          <MockVariant project={project} variant={variant} />
        )}
      </div>
    </div>
  );
}

function Logo({ project, size = 28 }: { project: Project; size?: number }) {
  if (!project.logo) {
    return <span className="text-xl">{project.screenIcon}</span>;
  }
  return (
    <Image
      src={asset(project.logo)}
      alt=""
      width={size}
      height={size}
      className="rounded-[8px] bg-white object-cover"
      style={{ width: size, height: size }}
    />
  );
}

function MockVariant({ project, variant }: { project: Project; variant: 0 | 1 | 2 }) {
  const [from, to] = project.colors;

  /* Variant 0 — "home / welcome" (center phone) */
  if (variant === 0) {
    return (
      <div className="flex h-full w-full flex-col bg-[#0f1118]">
        <div className="px-3 pb-4 pt-6 text-white" style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}>
          <div className="flex items-center justify-between text-[8px] opacity-80">
            <span>9:41</span>
            <span>▪▪▪</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Logo project={project} size={26} />
            <div>
              <p className="text-[11px] font-bold leading-none">{project.name}</p>
              <p className="text-[8px] opacity-90">{project.screenLabel}</p>
            </div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2 p-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-end rounded-lg p-2"
              style={{ background: i % 3 === 0 ? `linear-gradient(135deg, ${from}, ${to})` : "rgba(255,255,255,0.05)" }}
            >
              <span className="h-4 w-4 rounded-full" style={{ background: i % 3 === 0 ? "rgba(255,255,255,.7)" : from }} />
              <span className="mt-2 block h-1 w-3/4 rounded bg-white/30" />
              <span className="mt-1 block h-1 w-1/2 rounded bg-white/15" />
            </div>
          ))}
        </div>
        <BottomNav from={from} />
      </div>
    );
  }

  /* Variant 1 — "list / recipients" (left phone) */
  if (variant === 1) {
    return (
      <div className="flex h-full w-full flex-col bg-[#0f1118] text-white">
        <div className="px-3 pb-3 pt-6">
          <p className="text-center text-[11px] font-bold">{project.screenLabel}</p>
        </div>
        <div className="flex-1 space-y-2 px-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 p-1.5">
              <span className="h-6 w-6 rounded-full" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
              <div className="flex-1 space-y-1">
                <span className="block h-1.5 rounded bg-white/25" style={{ width: `${80 - i * 8}%` }} />
                <span className="block h-1 w-1/3 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
        <BottomNav from={from} />
      </div>
    );
  }

  /* Variant 2 — "detail / receipt" (right phone) */
  return (
    <div className="flex h-full w-full flex-col bg-[#0f1118] text-white">
      <div className="px-3 pb-3 pt-6">
        <div className="flex items-center gap-2">
          <Logo project={project} size={22} />
          <span className="text-[10px] font-semibold">{project.name}</span>
        </div>
      </div>
      <div className="flex-1 px-2.5">
        <div className="rounded-xl p-3" style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}>
          <span className="block h-1.5 w-1/2 rounded bg-white/50" />
          <span className="mt-2 block h-2.5 w-3/4 rounded bg-white/70" />
          <div className="mt-3 ml-auto h-10 w-10 rounded bg-white/80" />
        </div>
        <div className="mt-3 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex justify-between">
              <span className="block h-1.5 w-1/3 rounded bg-white/15" />
              <span className="block h-1.5 w-1/4 rounded bg-white/25" />
            </div>
          ))}
        </div>
      </div>
      <BottomNav from={from} />
    </div>
  );
}

function BottomNav({ from }: { from: string }) {
  return (
    <div className="flex items-center justify-around border-t border-white/5 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-3 w-3 rounded" style={{ background: i === 0 ? from : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   Three angled phones with a glow — the MolaHub-style hero.
   ─────────────────────────────────────────────────────────── */
export function PhoneTrio({ project }: { project: Project }) {
  const [from] = project.colors;
  return (
    <div className="relative flex h-[360px] items-center justify-center sm:h-[440px]">
      {/* glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}66, transparent 70%)` }}
      />
      {/* left */}
      <div className="absolute left-1/2 z-10 -translate-x-[115%] translate-y-6 rotate-[-14deg] opacity-90 sm:-translate-x-[120%]">
        <Phone project={project} variant={1} size="md" />
      </div>
      {/* right */}
      <div className="absolute left-1/2 z-10 translate-x-[15%] translate-y-6 rotate-[14deg] opacity-90 sm:translate-x-[20%]">
        <Phone project={project} variant={2} size="md" />
      </div>
      {/* center */}
      <div className="relative z-20">
        <Phone project={project} variant={0} size="lg" />
      </div>
    </div>
  );
}
