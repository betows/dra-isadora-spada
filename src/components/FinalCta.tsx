import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-28 rounded-[32px] bg-ink px-5 py-14 text-cream sm:rounded-[48px] sm:px-10 sm:py-16 lg:px-14">
      <div className="rise flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">Agende uma conversa</h2>
          <p className="mt-4 text-lg leading-relaxed text-cream">
            Harmonização facial, botox e preenchimento em {doctor.city}/{doctor.state}, ou mentoria Ilumme. O caminho é o WhatsApp.
          </p>
        </div>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
