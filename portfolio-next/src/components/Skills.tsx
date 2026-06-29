import { skillGroups } from "@/data/skills";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="bg-slate-900/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias organizadas por domínio de atuação."
          description="A stack é apresentada por contexto de uso, não como lista genérica. O objetivo é mostrar onde cada tecnologia contribui no ciclo de engenharia."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
