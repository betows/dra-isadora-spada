import { CtaLink } from "@/components/CtaLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-charcoal text-ivory">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block">
          <div className="plate plate-dusk h-full" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal to-transparent" />
        </div>

        <Reveal className="relative max-w-3xl">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper-soft">
            05 — Próximo passo
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,5.4vw,5.4rem)] leading-[0.92] tracking-[-0.03em]">
            Vamos conversar sobre o seu rosto — ou a sua carreira
          </h2>
          <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.7] text-ivory/64">
            Avaliação de harmonização facial, botox e preenchimento em{" "}
            {doctor.city}/{doctor.state}, ou mentoria Ilumme. O primeiro passo é
            uma mensagem no WhatsApp.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={links.whatsapp} tone="dark">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Falar no WhatsApp
            </CtaLink>
            <CtaLink href={links.instagram} variant="ghost" tone="dark">
              <InstagramIcon className="h-3.5 w-3.5" />
              Seguir no Instagram
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
