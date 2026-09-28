"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto grid max-w-[1520px] gap-20 px-6 py-28 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-28 lg:px-16 lg:py-40">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-[clamp(2.6rem,4.8vw,4.6rem)] leading-[0.94] tracking-[-0.025em] text-charcoal">
            Harmonização facial, botox e mentoria em Blumenau
          </h2>
          <p className="mt-8 max-w-md text-[1.05rem] leading-[1.8] text-muted">
            Respostas para quem pesquisa em Blumenau. Avaliação presencial
            define indicação — nada aqui substitui consulta.
          </p>
        </Reveal>

        <div className="border-t border-charcoal/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-charcoal/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-8 py-7 text-left"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="font-display text-[1.35rem] leading-snug text-charcoal sm:text-[1.55rem]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 font-display text-xl leading-none text-muted"
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
                    <p className="pb-7 pr-10 text-[1rem] leading-[1.8] text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
