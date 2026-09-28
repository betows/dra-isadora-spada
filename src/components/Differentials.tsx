import { Reveal } from "@/components/Reveal";
import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 overflow-hidden bg-stone"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <Reveal className="max-w-3xl">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper">
            03 — Diferenciais
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,4.8vw,4.6rem)] leading-[0.96] tracking-[-0.02em] text-charcoal">
            Por que este consultório não parece os outros
          </h2>
        </Reveal>

        <ol className="mt-20">
          {differentials.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.05} y={18}>
              <li className="grid gap-5 border-t border-charcoal/10 py-10 last:border-b lg:grid-cols-[7rem_minmax(0,0.9fr)_1.15fr] lg:gap-16 lg:py-14">
                <span className="font-display text-3xl text-copper">{item.n}</span>
                <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.1] text-charcoal">
                  {item.title}
                </h3>
                <p className="text-[1.02rem] leading-[1.7] text-muted">
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
