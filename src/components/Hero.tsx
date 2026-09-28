"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { InstagramIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { HeroFallback } from "@/components/HeroScene";
import { doctor, highlights, links } from "@/lib/site";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden paper-grid pt-24 sm:pt-28"
    >
      <p className="pointer-events-none absolute top-28 hidden font-display text-[11vw] font-semibold leading-none tracking-tight text-burgundy/[0.045] lg:left-0 lg:block">
        ISADORA
      </p>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-20 lg:pt-10">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-burgundy/65">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream-soft px-3 py-1">
              <PinIcon className="h-3.5 w-3.5 text-terracotta" />
              {doctor.city} · {doctor.stateFull}
            </span>
            <span>{doctor.cro}</span>
          </div>

          <h1 className="max-w-xl font-display text-[2.65rem] font-semibold leading-[0.95] tracking-tight text-burgundy sm:text-6xl lg:text-[4.35rem]">
            Harmonização facial em{" "}
            <em className="italic text-terracotta">Blumenau</em>
          </h1>

          <p className="mt-5 font-script text-[2rem] leading-none text-terracotta sm:text-[2.6rem]">
            {doctor.tagline}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
            Dra. Isadora Mór Spada — clínica, pacientes e mentoria no mesmo
            olhar. Botox, preenchimento e o Método LipSense® para quem quer
            parecer consigo mesma, com técnica e verdade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold tracking-wide text-cream-soft transition-colors hover:bg-burgundy"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar avaliação
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-burgundy/20 bg-cream-soft px-6 py-3.5 text-sm font-semibold tracking-wide text-burgundy transition-colors hover:border-gold hover:text-terracotta"
            >
              <InstagramIcon className="h-4 w-4" />
              {doctor.handle}
            </a>
          </div>

          <ul className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-5">
            {highlights.map((item) => (
              <li key={item.label} className="flex shrink-0 flex-col items-center gap-2">
                <span className="story-ring grid h-16 w-16 place-items-center rounded-full p-[2px]">
                  <span className="grid h-full w-full place-items-center rounded-full bg-cream text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-burgundy">
                    {item.hint}
                  </span>
                </span>
                <span className="text-[0.68rem] font-medium tracking-wide text-burgundy/80">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <p className="absolute -left-10 top-1/3 hidden origin-center -rotate-90 font-display text-[0.7rem] uppercase tracking-[0.45em] text-gold lg:block">
            os 2 universos
          </p>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[46%_54%_42%_58%/40%_38%_62%_60%] border border-gold/45 bg-cream-soft shadow-[0_50px_90px_-48px_rgba(110,44,58,0.45)]">
            {reduced ? <HeroFallback /> : <HeroScene />}
            <div className="pointer-events-none absolute inset-x-8 bottom-10 text-center">
              <p className="font-script text-3xl text-burgundy">Isa</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-burgundy/60">
                clínica + mentoria
              </p>
            </div>
          </div>
          <div className="absolute -right-3 top-8 hidden rounded-full border border-gold/40 bg-cream px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-burgundy sm:block">
            LipSense®
          </div>
          <div className="absolute -bottom-3 left-6 hidden rounded-full bg-burgundy px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-cream-soft sm:block">
            Blumenau / Bnu
          </div>
        </div>
      </div>
    </section>
  );
}
