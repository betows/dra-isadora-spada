"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-16 lg:py-36">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper">
            04 — FAQ
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] tracking-[-0.02em] text-charcoal">
            Harmonização facial, botox e mentoria em Blumenau
          </h2>
          <p className="mt-7 max-w-md text-[1.02rem] leading-[1.7] text-muted">
            Respostas diretas para quem pesquisa harmonização facial em
            Blumenau, botox, preenchimento e a Mentoria Ilumme. Avaliação
            presencial define indicação — nada aqui substitui consulta.
          </p>
        </Reveal>

        <div className="border-t border-charcoal/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.q} delay={index * 0.025} y={12}>
                <div className="border-b border-charcoal/10">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-8 py-6 text-left lg:py-7"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="font-display text-[1.35rem] leading-snug text-charcoal sm:text-[1.6rem]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 grid h-7 w-7 shrink-0 place-items-center border border-charcoal/15 font-display text-lg leading-none text-copper"
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-[0.98rem] leading-[1.7] text-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
