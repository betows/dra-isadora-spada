import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-paper px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="rise font-display text-4xl leading-none text-wine sm:text-6xl">
          Como é o atendimento
        </h2>
        <div className="mt-8">
          {differentials.map((item, index) => (
            <article
              key={item.n}
              style={{ top: `calc(6rem + ${index} * 14px)`, zIndex: index + 1 }}
              className={`stack-card sticky rounded-[1.4rem] border border-wine/10 bg-cream p-6 shadow-[0_8px_0_#e8cfc9] sm:p-8 ${
                index === differentials.length - 1 ? "mb-4" : "mb-[20vh] sm:mb-[36vh]"
              }`}
            >
              <p className="text-sm font-extrabold text-wine">{item.n}</p>
              <h3 className="mt-2 font-display text-3xl leading-none text-ink">{item.title}</h3>
              <p className="mt-3 text-base font-semibold leading-relaxed text-ink/75">{item.text}</p>
            </article>
          ))}
          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}
