export function Contact() {
  return (
    <section id="contact" className="bg-cyan-300 px-6 py-24 text-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Vamos conversar sobre tecnologia, produto e engenharia.
        </h2>
        <p className="mt-6 text-lg leading-8">
          Aberto a oportunidades como Software Engineer, Full Stack Developer, Backend Developer, Python Developer e posições relacionadas a automação, cloud e IA aplicada.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:carlosmedeiroscode@gmail.com" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
            Enviar e-mail
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
  );
}
