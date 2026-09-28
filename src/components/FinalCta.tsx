import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-20 bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Agende uma conversa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Avaliação de harmonização facial, botox e preenchimento em{" "}
            {doctor.city}/{doctor.state}, ou mentoria Ilumme. O primeiro passo é
            uma mensagem no WhatsApp.
          </p>
        </div>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-deep"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
