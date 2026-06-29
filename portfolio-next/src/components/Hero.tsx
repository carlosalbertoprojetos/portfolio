import { withBasePath } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Senior Full Stack Software Engineer
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Python, APIs, Cloud, DevOps e engenharia de software assistida por IA.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Desenvolvedor Full Stack com mais de 7 anos de experiência construindo, mantendo e evoluindo sistemas web,
            APIs REST, automações, integrações, deploys e soluções orientadas a negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-200">
              Ver projetos
            </a>
            <a href={withBasePath("/Carlos-Alberto-Medeiros.pdf")} target="_blank" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Baixar currículo
            </a>
            <a href="https://www.linkedin.com/in/carlos-alberto-medeiros-29aa6258/" target="_blank" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-400/40 to-blue-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
            <img
              src={withBasePath("/images/carlos-alberto-medeiros.webp")}
              alt="Carlos Alberto Medeiros"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
