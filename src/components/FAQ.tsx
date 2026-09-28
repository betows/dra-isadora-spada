"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Dúvidas sobre harmonização facial em Blumenau
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Respostas objetivas sobre botox, preenchimento e a Mentoria Ilumme.
            A avaliação presencial é o que define a indicação.
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-medium text-ink sm:text-lg">{item.q}</span>
                    <span aria-hidden="true" className="text-coral">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-4 pr-8 text-sm leading-relaxed text-ink/75 sm:text-base">
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
