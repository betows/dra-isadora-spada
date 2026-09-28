"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 rounded-[32px] border-2 border-ink bg-cream px-5 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="rise lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            Dúvidas sobre harmonização facial em Blumenau
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Botox, preenchimento e Mentoria Ilumme. A indicação sai da consulta presencial.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="rounded-[24px] border-2 border-ink">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-medium leading-snug text-ink sm:text-lg">{item.q}</span>
                    <span className="mt-0.5 font-display text-2xl leading-none text-ink" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <p className="px-4 pb-5 text-base leading-relaxed text-ink sm:px-5">{item.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
