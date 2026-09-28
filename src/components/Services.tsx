import { CtaLink } from "@/components/CtaLink";
import { ArrowIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { links, services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper">
              02 — Serviços
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.8vw,4.6rem)] leading-[0.96] tracking-[-0.02em] text-charcoal">
              Harmonização, botox, preenchimento e mentoria
            </h2>
          </div>
          <p className="max-w-md text-[1.02rem] leading-[1.7] text-muted">
            Procedimentos orofaciais em Blumenau e formação para quem atende.
            Tudo parte da mesma pergunta: o que é autêntico para este rosto —
            ou para esta carreira?
          </p>
        </Reveal>

        <div className="mt-20 border-t border-charcoal/10">
          {services.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <article
                id={item.id === "mentoria" ? "mentoria" : undefined}
                className={`group grid gap-6 border-b border-charcoal/10 py-10 lg:grid-cols-[6.5rem_1fr_1.15fr] lg:items-start lg:gap-12 lg:py-14 ${
                  item.id === "mentoria" ? "scroll-mt-24" : ""
                }`}
              >
                <p className="font-display text-2xl text-copper transition-colors group-hover:text-charcoal">
                  {item.kicker}
                </p>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                    {item.city}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.85rem,3vw,2.75rem)] leading-[1.05] text-charcoal">
                    {item.featured ? `${item.title} em Blumenau` : item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-[0.98rem] leading-[1.7] text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-charcoal/70">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-px w-4 bg-copper" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <CtaLink href={links.whatsapp} variant="ghost">
            Tirar dúvida no WhatsApp
            <ArrowIcon className="h-3.5 w-3.5" />
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
