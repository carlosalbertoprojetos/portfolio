const metrics = [
  ["+7", "anos de experiência"],
  ["Python", "backend e automação"],
  ["DevOps", "deploy, CI/CD e produção"],
  ["IA", "engenharia assistida"],
];

export function Metrics() {
  return (
    <section className="border-y border-white/10 bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
        {metrics.map(([value, label]) => (
          <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <strong className="block text-3xl text-cyan-300">{value}</strong>
            <span className="mt-2 block text-sm text-slate-300">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
