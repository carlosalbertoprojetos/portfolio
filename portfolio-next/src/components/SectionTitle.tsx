type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
