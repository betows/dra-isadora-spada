import { Reveal } from "@/components/Reveal";

const methods = [
  {
    name: "LipSense®",
    text: "Uma leitura de lábios — volume, borda e movimento — sem o gesto de catálogo.",
  },
  {
    name: "Ilumme",
    text: "Mentoria para quem atende: técnica, gestão e um discurso tão autêntico quanto o resultado.",
  },
  {
    name: "SynFace",
    text: "O rosto inteiro como experiência — proporção, luz e anatomia de cada pessoa.",
  },
] as const;

export function Methods() {
  return (
    <section aria-label="Métodos e protocolos" className="bg-ivory">
      <div className="mx-auto max-w-[1520px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-16 border-t border-charcoal/10 pt-16 md:grid-cols-3 md:gap-20">
          {methods.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <p className="font-display text-[clamp(2rem,3.2vw,2.85rem)] italic leading-none text-charcoal">
                {item.name}
              </p>
              <p className="mt-6 max-w-xs text-[0.98rem] leading-[1.75] text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
