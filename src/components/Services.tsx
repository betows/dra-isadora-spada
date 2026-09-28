import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-28 rounded-[32px] bg-ink px-5 py-12 text-cream sm:rounded-[48px] sm:px-10 sm:py-16 lg:px-14">
      <div className="rise max-w-3xl">
        <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          Harmonização, botox, preenchimento e mentoria
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream">
          Quatro caminhos no consultório em Blumenau. O que entra no plano depende da avaliação.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((item) => (
          <article key={item.id} className="rise flex flex-col rounded-[32px] bg-cream p-6 text-ink sm:p-8">
            <p className="text-sm font-medium text-forest">{item.city}</p>
            <h3 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.03em]">
              {item.featured ? `${item.title} em Blumenau` : item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink">{item.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.points.map((point) => (
                <li key={point} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-medium">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
