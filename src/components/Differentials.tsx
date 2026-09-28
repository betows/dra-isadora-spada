import { Reveal } from "@/components/Reveal";
import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 overflow-hidden bg-stone"
    >
      <div className="mx-auto max-w-[1520px] px-6 py-28 md:px-10 lg:px-16 lg:py-40">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.025em] text-charcoal">
            Por que este consultório não parece os outros
          </h2>
        </Reveal>

        <ol className="mt-24">
          {differentials.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.04} y={16}>
              <li className="grid gap-6 border-t border-charcoal/10 py-12 last:border-b lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-24 lg:py-16">
                <h3 className="font-display text-[clamp(1.85rem,2.8vw,2.6rem)] leading-[1.12] text-charcoal">
                  {item.title}
                </h3>
                <p className="max-w-xl text-[1.05rem] leading-[1.8] text-muted">
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
