import { projects } from "@/data/projects";
import { withBasePath } from "@/lib/site";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Stack", "#skills"],
  ["Contact", "#contact"],
];

const metrics = [
  ["+7", "years of experience"],
  ["Python", "backend and automation"],
  ["DevOps", "deploy, CI/CD and production"],
  ["AI", "augmented engineering"],
];

const principles = [
  "Understand the business problem before choosing the technology.",
  "Build APIs, modules and automations that are easy to evolve.",
  "Take care of the full cycle: code, deployment, production, maintenance and continuous improvement.",
];

const experienceBlocks = [
  {
    title: "Backend Development",
    items: [
      "REST APIs with Python, Django, FastAPI and Flask",
      "Integrations with external services and third-party APIs",
      "Data modeling and evolution of business features",
    ],
  },
  {
    title: "DevOps and Production",
    items: [
      "Application deployment and release routines",
      "Maintenance of development, staging and production environments",
      "CI/CD, Git, Bitbucket, Azure DevOps and delivery pipelines",
    ],
  },
  {
    title: "Support, Reliability and Performance",
    items: [
      "Incident analysis and bug fixing in real systems",
      "Log analysis, troubleshooting and operational support",
      "SQL optimization, cache strategies and Redis usage",
    ],
  },
  {
    title: "Automation and Quality",
    items: [
      "Python scripts for repetitive operational tasks",
      "Browser automation with Selenium and Robot Framework",
      "Validation of critical flows and test automation support",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "Django", "FastAPI", "Flask", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "SQL", "Data Modeling", "Performance"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "CI/CD", "Azure DevOps", "Git", "Bitbucket", "AWS"],
  },
  {
    title: "Automation & QA",
    items: ["Selenium", "Robot Framework", "Python Scripts", "Web Automation", "Testing"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Bootstrap"],
  },
  {
    title: "AI Engineering",
    items: ["AI-assisted PRDs", "Architecture", "Refactoring", "Code Review", "Documentation"],
  },
];

const aiItems = [
  "Technical PRD generation and refinement",
  "Architecture planning and module decomposition",
  "AI-assisted refactoring and code review",
  "Test generation, documentation and validation checklists",
  "IDE-based AI workflows to accelerate engineering cycles without skipping technical review",
];

const projectTranslations: Record<string, { type: string; description: string }> = {
  "Financeiro IA": {
    type: "SaaS / FinTech / AI",
    description:
      "AI-powered financial platform for intelligent collections, receivables recovery, cash-flow predictability and operational automation.",
  },
  "FinTrack Flask Platform": {
    type: "Finance / Flask",
    description:
      "Financial control system with statements, income, expenses and a web interface.",
  },
  "ShopShow Product Showcase": {
    type: "SaaS / Digital Catalog",
    description:
      "Multi-tenant SaaS for creating and sharing digital product showcases.",
  },
  "Chat Commerce": {
    type: "SaaS / Multi-channel Sales",
    description:
      "Platform designed to organize sales made through channels such as WhatsApp, Instagram and Facebook.",
  },
  "PhysioSono": {
    type: "Landing Page",
    description: "Professional landing page published with GitHub Pages.",
  },
  "Psicóloga Cássia Martins": {
    type: "Landing Page / Django",
    description: "Project focused on professional identity and digital presence for psychology services.",
  },
  "Pegasus": {
    type: "Commercial Template",
    description: "Illustrative template created for a commercial client presentation.",
  },
};

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function EnglishPage() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
          <a href={withBasePath("/en/")} className="font-semibold tracking-tight text-white">
            Carlos Alberto
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-cyan-300">
                {label}
              </a>
            ))}
            <a
              href={withBasePath("/")}
              className="rounded-full border border-white/10 px-3 py-1 hover:border-cyan-300 hover:text-cyan-300"
            >
              PT
            </a>
          </div>
        </nav>
      </header>

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
              Python, APIs, Cloud, DevOps and AI-augmented software engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Full Stack Developer with 7+ years of experience building, maintaining and evolving web systems, REST APIs,
              automations, integrations, deployments and business-oriented software solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-200">
                View projects
              </a>
              <a href={withBasePath("/Carlos-Alberto-Medeiros.pdf")} target="_blank" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Download resume
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

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="About"
          title="I do not work only by writing code. I work across the full solution lifecycle."
          description="My experience includes development, maintenance, support, deployment, integrations, automation, databases, performance and continuous improvement of systems used in real environments."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-slate-900/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Experience"
            title="INTIP — Inteligência em Internet"
            description="Software Engineer | 2019 — Present. Work across backend, DevOps, production support, infrastructure routines, automation, integrations and continuous system evolution."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {experienceBlocks.map((block) => (
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

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Projects"
          title="Projects that demonstrate engineering, product thinking and architecture."
          description="The strongest projects are presented as engineering evidence: problem, solution, stack, architecture decisions and business value."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => {
            const translated = projectTranslations[project.title] ?? project;
            return (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{translated.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{translated.description}</p>
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
            );
          })}
        </div>
        <h3 className="mt-14 text-xl font-semibold text-white">Other published projects</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((project) => {
            const translated = projectTranslations[project.title] ?? project;
            return (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{translated.description}</p>
                <div className="mt-4 flex gap-3 text-sm font-semibold">
                  {project.github ? <a className="text-cyan-300" href={project.github} target="_blank">GitHub</a> : null}
                  {project.demo ? <a className="text-cyan-300" href={project.demo} target="_blank">Demo</a> : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="bg-slate-900/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Stack"
            title="Technologies organized by area of work."
            description="The stack is presented by usage context, not as a generic list. The goal is to show where each technology contributes in the engineering cycle."
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="AI-Augmented Engineering"
          title="I use AI as an engineering tool, not as a superficial shortcut."
          description="AI supports planning, architecture, documentation, tests and review. Technical responsibility remains human: validate, simplify, test and keep architectural consistency."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {aiItems.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-cyan-300 px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Let’s talk about technology, product and engineering.
          </h2>
          <p className="mt-6 text-lg leading-8">
            Open to opportunities as Software Engineer, Full Stack Developer, Backend Developer, Python Developer and roles related to automation, cloud and applied AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:carlosmedeiroscode@gmail.com" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
              Send email
            </a>
            <a href="https://wa.me/5531986766866" target="_blank" className="rounded-full border border-slate-950 px-6 py-3 font-semibold">
              WhatsApp
            </a>
            <a href="https://github.com/carlosalbertoprojetos" target="_blank" className="rounded-full border border-slate-950 px-6 py-3 font-semibold">
              GitHub
            </a>
            <a href="https://medium.com/@carlosalbertoprojetos" target="_blank" className="rounded-full border border-slate-950 px-6 py-3 font-semibold">
              Medium
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Carlos Alberto Medeiros — Senior Full Stack Software Engineer
      </footer>
    </main>
  );
}
