import { projects } from "@/data/projects";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos que demonstram engenharia, produto e arquitetura."
        description="Seleção de projetos com foco em backend, SaaS, automação, dados, sistemas financeiros, APIs e plataformas orientadas a negócio."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.type}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-sm font-semibold">
              {project.github ? <a className="text-cyan-300 hover:text-cyan-200" href={project.github} target="_blank">GitHub</a> : null}
              {project.demo ? <a className="text-cyan-300 hover:text-cyan-200" href={project.demo} target="_blank">Demo</a> : null}
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-14 text-xl font-semibold text-white">Outros projetos publicados</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {others.map((project) => (
          <article key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="font-semibold text-white">{project.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{project.description}</p>
            <div className="mt-4 flex gap-3 text-sm font-semibold">
              {project.github ? <a className="text-cyan-300" href={project.github} target="_blank">GitHub</a> : null}
              {project.demo ? <a className="text-cyan-300" href={project.demo} target="_blank">Demo</a> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
