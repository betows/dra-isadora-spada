"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
            04 — FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
            Harmonização facial, botox e mentoria em Blumenau
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Respostas diretas para quem pesquisa harmonização facial em
            Blumenau, botox, preenchimento e a Mentoria Ilumme. Avaliação
            presencial define indicação — nada aqui substitui consulta.
          </p>
        </Reveal>

        <div className="divide-y divide-burgundy/10 border-y border-burgundy/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.q} delay={index * 0.03} y={12}>
                <div>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="font-display text-xl text-burgundy sm:text-2xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/50 font-display text-lg text-terracotta"
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                  </h3>
                  {isOpen ? (
                    <p className="pb-5 pr-12 text-sm leading-relaxed text-ink/70 sm:text-base">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
