import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-cream-soft px-5 pb-8 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-burgundy px-6 py-14 text-cream-soft sm:px-12 sm:py-16">
          <p className="pointer-events-none absolute -right-6 top-8 hidden font-script text-[8rem] leading-none text-cream-soft/5 sm:block">
            autêntica
          </p>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold-bright">
            05 — Próximo passo
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Vamos conversar sobre o seu rosto — ou a sua carreira
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream-soft/80 sm:text-base">
            Avaliação de harmonização facial, botox e preenchimento em{" "}
            {doctor.city}/{doctor.state}, ou mentoria Ilumme. O primeiro passo é
            uma mensagem no WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-burgundy transition-colors hover:bg-gold-bright"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-soft/25 px-6 py-3.5 text-sm font-semibold text-cream-soft transition-colors hover:border-gold hover:text-gold-bright"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
