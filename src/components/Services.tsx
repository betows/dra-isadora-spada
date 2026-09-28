import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Harmonização, botox, preenchimento e mentoria
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Atendimento orofacial em Blumenau e formação para quem já atende.
            A indicação sai da consulta, não de um pacote pronto.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((item) => (
            <article key={item.id} className="grid gap-3 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10 sm:py-8">
              <h3 className="font-display text-2xl font-medium text-ink sm:text-[1.7rem]">
                {item.featured ? `${item.title} em Blumenau` : item.title}
              </h3>
              <div>
                <p className="text-sm font-medium text-coral">{item.city}</p>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/75">
                  {item.description}
                </p>
                <p className="mt-3 text-sm text-muted">{item.points.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
