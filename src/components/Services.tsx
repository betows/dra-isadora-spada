import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1520px] px-6 py-28 md:px-10 lg:px-16 lg:py-40">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <div>
            <p className="font-display text-xl italic text-muted">
              Experiências, não pacotes
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.025em] text-charcoal">
              Harmonização, botox, preenchimento e mentoria
            </h2>
          </div>
          <p className="max-w-md text-[1.05rem] leading-[1.8] text-muted">
            Procedimentos orofaciais em Blumenau e formação para quem atende.
            Tudo parte da mesma pergunta: o que é autêntico para este rosto —
            ou para esta carreira?
          </p>
        </Reveal>

        <div className="mt-24">
          {services.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <article
                id={item.id === "mentoria" ? "mentoria" : undefined}
                className={`grid gap-8 border-t border-charcoal/10 py-14 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24 lg:py-20 ${
                  item.id === "mentoria" ? "scroll-mt-24" : ""
                } ${index === services.length - 1 ? "border-b" : ""}`}
              >
                <h3 className="font-display text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.05] text-charcoal">
                  {item.featured ? `${item.title} em Blumenau` : item.title}
                </h3>
                <div className="max-w-xl">
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-muted">
                    {item.city}
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-[1.8] text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
