import { doctor } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-28 rounded-[32px] border-2 border-ink bg-cream px-5 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <div className="rise">
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            Clínica em Blumenau e mentoria
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink">
            O dia da {doctor.shortName} tem o consultório em {doctor.city} e a formação de quem trabalha com estética. Paciente e profissional passam pela mesma regra: conversa antes, técnica clara.
          </p>
          <p className="mt-6 text-base font-medium text-muted">
            {doctor.name}
            <span className="mt-1 block">{doctor.cro}</span>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rise rounded-[32px] border-2 border-ink bg-lavender p-6">
            <h3 className="font-display text-3xl leading-none text-ink">Clínica</h3>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Harmonização facial, botox e preenchimento em Blumenau. Hora marcada e um plano feito em cima da sua anatomia e da sua queixa.
            </p>
          </article>
          <article id="mentoria" className="rise scroll-mt-28 rounded-[32px] border-2 border-ink bg-forest p-6 text-cream">
            <h3 className="font-display text-3xl leading-none">Mentoria</h3>
            <p className="mt-3 text-base leading-relaxed text-cream">
              Mentoria Ilumme, Método LipSense® e SynFace para quem quer técnica, gestão e um jeito claro de explicar o trabalho.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
