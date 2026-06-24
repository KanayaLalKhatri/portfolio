import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}.</span>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
        <span className="ml-2 h-px flex-1 bg-border" />
      </div>
    </Reveal>
  );
}
