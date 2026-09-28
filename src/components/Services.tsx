import { Reveal } from "@/components/Reveal";
import { links, services } from "@/lib/site";

export function Services() {
  const featured = services.find((item) => item.featured);
  const rest = services.filter((item) => !item.featured);

  return (
    <section id="servicos" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
            02 — Serviços
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
            Harmonização, botox, preenchimento e mentoria
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            Procedimentos orofaciais em Blumenau e formação para quem atende.
            Tudo parte da mesma pergunta: o que é autêntico para este rosto —
            ou para esta carreira?
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured ? (
            <Reveal className="lg:row-span-2">
              <article className="relative flex h-full min-h-[28rem] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-gold/35 bg-[linear-gradient(165deg,#6e2c3a_0%,#8a3a3a_48%,#c45a3a_100%)] p-8 text-cream-soft sm:p-10">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-bright">
                    {featured.kicker} · {featured.city}
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                    {featured.title} em Blumenau
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-soft/85 sm:text-base">
                    {featured.description}
                  </p>
                </div>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {featured.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-cream-soft/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="pointer-events-none absolute -bottom-8 -right-4 font-script text-[7rem] leading-none text-cream-soft/10">
                  Bnu
                </p>
              </article>
            </Reveal>
          ) : null}

          {rest.map((item, index) => (
            <Reveal
              key={item.id}
              delay={0.08 * (index + 1)}
              className={item.id === "mentoria" ? "lg:col-span-2" : undefined}
            >
              <article
                id={item.id === "mentoria" ? "mentoria" : undefined}
                className={
                  item.id === "mentoria"
                    ? "flex h-full w-full scroll-mt-24 flex-col justify-between rounded-[1.6rem] border border-burgundy/10 bg-cream-soft p-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
                    : "flex h-full flex-col justify-between rounded-[1.6rem] border border-burgundy/10 bg-cream-soft p-7"
                }
              >
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-terracotta">
                    {item.kicker} · {item.city}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-burgundy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-nude/35 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-burgundy"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-gold/50 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-burgundy transition-colors hover:bg-gold/15"
          >
            Tirar dúvida no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
