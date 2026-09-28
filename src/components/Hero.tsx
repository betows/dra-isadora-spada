import { CtaLink } from "@/components/CtaLink";
import { doctor, links } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] overflow-hidden lg:hidden">
        <div className="parallax-drift plate plate-silk h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/20 to-ivory" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(46vw,40rem)] overflow-hidden lg:block">
        <div className="parallax-drift plate plate-silk h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-1 flex-col justify-end px-6 pb-28 pt-[44vh] md:px-10 lg:justify-center lg:px-16 lg:pb-24 lg:pt-36">
        <p className="mb-10 text-[0.68rem] uppercase tracking-[0.28em] text-muted lg:mb-14">
          {doctor.city} · {doctor.stateFull}
          <span className="mx-4 hidden h-px w-8 bg-copper align-middle sm:inline-block" />
          <span className="mt-2 block sm:mt-0 sm:inline">{doctor.cro}</span>
        </p>

        <div className="max-w-[44rem]">
          <h1 className="font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.86] tracking-[-0.035em] text-charcoal">
            Harmonização
            <span className="block">facial em</span>
            <span className="block italic">Blumenau</span>
          </h1>

          <p className="mt-10 max-w-md font-display text-[1.65rem] italic leading-snug text-charcoal/75 sm:text-[1.85rem]">
            {doctor.tagline}
          </p>
          <p className="mt-7 max-w-sm text-[1rem] leading-[1.8] text-muted">
            Dra. Isadora Mór Spada — clínica e mentoria no mesmo olhar. Botox,
            preenchimento e o Método LipSense® para quem quer parecer consigo
            mesma.
          </p>

          <div className="mt-12">
            <CtaLink href={links.whatsapp}>Consulta no WhatsApp</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
