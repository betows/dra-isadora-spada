"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/CtaLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { doctor, highlights, links } from "@/lib/site";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[4.25rem] h-[36vh] overflow-hidden lg:hidden">
        <div className="parallax-drift plate plate-silk h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/15 to-ivory" />
      </div>

      <div className="pointer-events-none absolute inset-y-[5.5rem] right-16 hidden w-[min(34rem,38%)] overflow-hidden lg:block">
        <div className="parallax-drift plate plate-silk h-full w-full" />
        {reduced ? null : (
          <div className="absolute inset-0 opacity-60">
            <HeroScene />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-charcoal/40 to-transparent px-8 py-8">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-ivory">
            {doctor.city} · {doctor.cro}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pb-28 pt-[42vh] md:px-10 lg:justify-center lg:px-16 lg:pb-20 lg:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.68rem] uppercase tracking-[0.24em] text-muted lg:mb-12">
          <span>
            {doctor.city} · {doctor.stateFull}
          </span>
          <span className="hidden h-px w-8 bg-copper/70 sm:block" aria-hidden="true" />
          <span>{doctor.cro}</span>
        </div>

        <div className="max-w-[46rem]">
          <h1 className="font-display text-[clamp(3.15rem,9.4vw,7.4rem)] leading-[0.88] tracking-[-0.03em] text-charcoal">
            Harmonização
            <span className="block">facial em</span>
            <span className="block italic">Blumenau</span>
          </h1>

          <div className="mt-8 max-w-lg lg:mt-10">
            <div className="hairline-copper mb-6 w-24" />
            <p className="font-display text-2xl italic leading-snug text-charcoal/80 sm:text-[1.85rem]">
              {doctor.tagline}
            </p>
            <p className="mt-6 max-w-md text-[0.98rem] leading-[1.7] text-muted">
              Dra. Isadora Mór Spada — clínica, pacientes e mentoria no mesmo
              olhar. Botox, preenchimento e o Método LipSense® para quem quer
              parecer consigo mesma, com técnica e verdade.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink href={links.whatsapp}>
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Agendar avaliação
            </CtaLink>
            <CtaLink href={links.instagram} variant="ghost">
              <InstagramIcon className="h-3.5 w-3.5" />
              {doctor.handle}
            </CtaLink>
          </div>
        </div>

        <ul className="mt-16 hidden max-w-[46rem] flex-wrap gap-x-8 gap-y-3 border-t border-charcoal/10 pt-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted lg:flex">
          {highlights.map((item) => (
            <li key={item.label} className="flex items-baseline gap-2">
              <span className="text-charcoal">{item.label}</span>
              <span className="text-copper">·</span>
              <span>{item.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
