export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Financeiro IA",
    type: "SaaS / FinTech / IA",
    description:
      "Plataforma financeira com IA para cobrança inteligente, recuperação de recebíveis, previsibilidade de caixa e automação operacional.",
    stack: ["Python", "Django", "PostgreSQL", "Redis", "APIs", "IA"],
    github: "https://github.com/carlosalbertoprojetos/ai-erp-platform",
    featured: true,
  },
  {
    title: "FinTrack Flask Platform",
    type: "Finanças / Flask",
    description:
      "Sistema de controle financeiro com extratos, receitas, despesas e interface web.",
    stack: ["Python", "Flask", "Bootstrap", "SQL"],
    github: "https://github.com/carlosalbertoprojetos/fintrack-flask-platform",
    featured: true,
  },
  {
    title: "ShopShow Product Showcase",
    type: "SaaS / Catálogo Digital",
    description:
      "SaaS multi-tenant para criação e compartilhamento de vitrines digitais de produtos.",
    stack: ["FastAPI", "PostgreSQL", "React", "SaaS"],
    github: "https://github.com/carlosalbertoprojetos/shopshow-product-showcase",
    featured: true,
  },
  {
    title: "Chat Commerce",
    type: "SaaS / Vendas Multicanal",
    description:
      "Plataforma para organizar vendas realizadas por múltiplos canais como WhatsApp, Instagram e Facebook.",
    stack: ["Python", "Django", "SaaS", "Automação"],
    github: "https://github.com/carlosalbertoprojetos/chat_commerce",
    featured: true,
  },
  {
    title: "PhysioSono",
    type: "Landing Page",
    description: "Landing page profissional publicada via GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/carlosalbertoprojetos/physiosono",
    demo: "https://carlosalbertoprojetos.github.io/physiosono/",
    featured: false,
  },
  {
    title: "Psicóloga Cássia Martins",
    type: "Landing Page / Django",
    description:
      "Projeto voltado à identidade profissional e presença digital para psicologia.",
    stack: ["Django", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/carlosalbertoprojetos/cassiamartinspsi",
    demo: "https://carlosalbertoprojetos.github.io/psicologacassia/",
    featured: false,
  },
  {
    title: "Pegasus",
    type: "Template Comercial",
    description: "Template ilustrativo criado para apresentação comercial a cliente.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/carlosalbertoprojetos/pegasus",
    demo: "https://carlosalbertoprojetos.github.io/pegasus/",
    featured: false,
  },
];
