import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden bg-wine text-cream">
      <div className="stripe-drift pointer-events-none absolute -inset-[14%] stripes opacity-80" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="rise max-w-xl">
          <h2 className="font-display text-4xl leading-[0.95] sm:text-6xl">Agende uma conversa</h2>
          <p className="mt-4 text-base font-semibold leading-relaxed text-cream">
            Harmonização facial, botox e preenchimento em {doctor.city}/{doctor.state},
            ou mentoria Ilumme. O caminho é o WhatsApp.
          </p>
        </div>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cream px-6 py-3 text-sm font-extrabold text-wine shadow-[0_6px_0_#5e2030]"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
