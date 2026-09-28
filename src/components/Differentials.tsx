import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-28 rounded-[32px] border-2 border-ink bg-cream px-5 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14">
      <h2 className="rise max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        Como é o atendimento
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {differentials.map((item) => (
          <article key={item.n} className="rise rounded-[32px] border-2 border-ink p-6 sm:p-7">
            <p className="inline-flex rounded-full bg-forest px-3 py-1 text-sm font-medium text-cream">{item.n}</p>
            <h3 className="mt-4 font-display text-3xl leading-[1.1] tracking-[-0.02em] text-ink">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
