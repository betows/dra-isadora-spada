import { Reveal } from "@/components/Reveal";
import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section id="diferenciais" className="relative scroll-mt-24 overflow-hidden bg-cream-soft py-20 sm:py-28">
      <div className="gold-rule absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
            03 — Diferenciais
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
            Por que este consultório não parece os outros
          </h2>
        </Reveal>

        <ol className="mt-14 divide-y divide-gold/25 border-y border-gold/25">
          {differentials.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.06} y={16}>
              <li className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <span className="font-display text-3xl text-gold">{item.n}</span>
                <h3 className="font-display text-2xl text-burgundy sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-base">
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
