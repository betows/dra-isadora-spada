"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-stripe/35">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div className="rise lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-4xl leading-[0.95] text-wine sm:text-5xl">
            Dúvidas sobre harmonização facial em Blumenau
          </h2>
          <p className="mt-4 text-base font-semibold leading-relaxed text-ink/75">
            Botox, preenchimento e Mentoria Ilumme. A indicação sai da consulta presencial.
          </p>
        </div>
        <div className="divide-y divide-wine/15">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-extrabold text-ink sm:text-lg">{item.q}</span>
                    <span className="font-display text-xl text-wine">{isOpen ? "–" : "+"}</span>
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-4 text-sm font-semibold leading-relaxed text-ink/75 sm:text-base">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
