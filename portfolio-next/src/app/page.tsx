import { About } from "@/components/About";
import { AiEngineering } from "@/components/AiEngineering";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AiEngineering />
      <Contact />
      <Footer />
    </main>
  );
}
