import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="h-scroll scroll-mt-20 bg-stripe/40">
      <div className="h-pin">
        <div className="mx-auto w-full max-w-6xl px-5 pt-14 sm:px-8 lg:hidden">
          <h2 className="font-display text-4xl leading-none text-wine">
            Harmonização, botox, preenchimento e mentoria
          </h2>
        </div>
        <div className="h-track grid gap-4 px-5 py-8 sm:px-8 lg:py-0">
          <article className="hidden w-[34vw] shrink-0 flex-col justify-end lg:flex">
            <h2 className="font-display text-5xl leading-[0.95] text-wine xl:text-6xl">
              Harmonização, botox, preenchimento e mentoria
            </h2>
            <p className="mt-4 max-w-sm text-sm font-semibold text-ink/75">
              Quatro caminhos no consultório em Blumenau. O plano sai da avaliação, não de um cardápio fechado.
            </p>
          </article>
          {services.map((item) => (
            <article
              key={item.id}
              className="flex w-full shrink-0 flex-col justify-between rounded-[1.6rem] bg-wine p-6 text-cream shadow-[0_10px_0_#5e2030] lg:h-[68vh] lg:w-[46vw] lg:p-10"
            >
              <p className="text-sm font-extrabold text-pink">{item.city}</p>
              <div>
                <h3 className="font-display text-4xl leading-none sm:text-5xl">
                  {item.featured ? `${item.title} em Blumenau` : item.title}
                </h3>
                <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-cream/90">
                  {item.description}
                </p>
                <p className="mt-4 text-sm font-bold text-cream/70">{item.points.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
        <div
          className="services-meter pointer-events-none absolute bottom-8 left-[6vw] hidden h-1.5 w-36 rounded-full bg-pink lg:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
