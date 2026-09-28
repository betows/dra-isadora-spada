import { CtaLink } from "@/components/CtaLink";
import { PlateParallax, Reveal } from "@/components/Reveal";
import { doctor, links } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-charcoal text-ivory">
      <div className="relative mx-auto max-w-[1520px] px-6 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] lg:block">
          <PlateParallax className="h-full">
            <div className="plate plate-dusk h-[118%] w-full -translate-y-[8%]" />
          </PlateParallax>
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-charcoal to-transparent" />
        </div>

        <Reveal className="relative max-w-3xl">
          <h2 className="font-display text-[clamp(2.8rem,5.6vw,5.6rem)] leading-[0.9] tracking-[-0.03em]">
            Uma conversa sobre o seu rosto — ou a sua carreira
          </h2>
          <p className="mt-10 max-w-md text-[1.05rem] leading-[1.8] text-ivory/62">
            Harmonização facial, botox e preenchimento em {doctor.city}/
            {doctor.state}, ou mentoria Ilumme. O primeiro passo é uma consulta
            no WhatsApp.
          </p>
          <div className="mt-12">
            <CtaLink href={links.whatsapp} tone="dark">
              Consulta no WhatsApp
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
