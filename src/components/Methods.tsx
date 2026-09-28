import { Reveal } from "@/components/Reveal";

const methods = [
  {
    name: "LipSense®",
    role: "Método",
    text: "Leitura de lábios com identidade — volume, borda e movimento, sem o lábio de catálogo.",
  },
  {
    name: "Ilumme",
    role: "Mentoria",
    text: "Formação e posicionamento para quem atende: técnica, gestão e verdade no consultório.",
  },
  {
    name: "SynFace",
    role: "Protocolo",
    text: "Planejamento de rosto inteiro — proporção, luz e gesto — a partir da anatomia de cada pessoa.",
  },
] as const;

export function Methods() {
  return (
    <section aria-label="Métodos e protocolos" className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
        {methods.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <article className="border-t border-charcoal/10 px-6 py-14 md:border-r md:px-10 md:py-16 last:md:border-r-0 lg:px-16">
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-copper">
                {item.role}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,3.4vw,3.15rem)] italic leading-none text-charcoal">
                {item.name}
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
