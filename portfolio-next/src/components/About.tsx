import { SectionTitle } from "./SectionTitle";

const principles = [
  "Entender o problema de negócio antes de escolher a tecnologia.",
  "Construir APIs, módulos e automações fáceis de evoluir.",
  "Cuidar do ciclo completo: código, deploy, produção, manutenção e melhoria contínua.",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Sobre"
        title="Não atuo apenas escrevendo código. Atuo no ciclo completo da solução."
        description="Minha experiência envolve desenvolvimento, manutenção, sustentação, deploy, integração, automação, banco de dados, performance e evolução contínua de sistemas utilizados em ambiente real."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <article key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
