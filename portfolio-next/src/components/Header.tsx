import { withBasePath } from "@/lib/site";

const navItems = [
  ["Sobre", "#about"],
  ["Experiência", "#experience"],
  ["Projetos", "#projects"],
  ["Stack", "#skills"],
  ["Contato", "#contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Principal">
        <a href={withBasePath("/")} className="font-semibold tracking-tight text-white">
          Carlos Alberto
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-cyan-300">
              {label}
            </a>
          ))}
          <a href={withBasePath("/en/")} className="rounded-full border border-white/10 px-3 py-1 hover:border-cyan-300 hover:text-cyan-300">
            EN
          </a>
        </div>
      </nav>
    </header>
  );
}
