import { SectionTitle } from "./SectionTitle";

const aiItems = [
  "Geração e refinamento de PRDs técnicos",
  "Planejamento de arquitetura e decomposição de módulos",
  "Refatoração assistida e revisão de código",
  "Criação de testes, documentação e checklists de validação",
  "Uso de IA no IDE para acelerar ciclos de engenharia sem abrir mão de revisão técnica",
];

export function AiEngineering() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="AI-Augmented Engineering"
        title="Uso IA como ferramenta de engenharia, não como atalho superficial."
        description="A IA entra como apoio para planejamento, arquitetura, documentação, testes e revisão. A responsabilidade técnica continua humana: validar, simplificar, testar e manter coerência arquitetural."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {aiItems.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
