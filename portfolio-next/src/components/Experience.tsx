import { SectionTitle } from "./SectionTitle";

const blocks = [
  {
    title: "Desenvolvimento Backend",
    items: [
      "APIs REST com Python, Django, FastAPI e Flask",
      "Integrações com serviços externos",
      "Modelagem e evolução de funcionalidades",
      "Refatoração e melhoria de sistemas existentes",
    ],
  },
  {
    title: "DevOps e Produção",
    items: [
      "Deploy de aplicações e publicação de novas versões",
      "Manutenção de ambientes e suporte a sistemas no servidor",
      "CI/CD, Git, Bitbucket, Azure DevOps e pipelines",
      "Troubleshooting em ambientes de produção e homologação",
    ],
  },
  {
    title: "Sustentação e Performance",
    items: [
      "Correção de incidentes e bugs em sistemas reais",
      "Análise de logs, falhas e gargalos",
      "Otimização com SQL, cache e Redis",
      "Manutenção corretiva, evolutiva e melhoria contínua",
    ],
  },
  {
    title: "Automação e Qualidade",
    items: [
      "Scripts e automações com Python",
      "Selenium e Robot Framework",
      "Validação de fluxos críticos",
      "Automação de tarefas repetitivas e processos operacionais",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-slate-900/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experiência"
          title="INTIP — Inteligência em Internet"
          description="Software Engineer desde 2019, com atuação em backend, DevOps, sustentação, automação, banco de dados, deploy e evolução de sistemas corporativos."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">{block.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
