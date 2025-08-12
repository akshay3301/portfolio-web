type SectionTitleProps = { label: string; title: string };

export default function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</span>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-100">{title}</h2>
    </div>
  );
} 