import { doctor } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:py-24">
        <div className="rise">
          <h2 className="font-display text-4xl leading-[0.95] text-wine sm:text-6xl">
            Clínica em Blumenau e mentoria
          </h2>
          <p className="mt-5 max-w-lg text-base font-semibold leading-relaxed text-ink/80">
            O dia da {doctor.shortName} tem o consultório em {doctor.city} e a
            formação de quem trabalha com estética. Paciente e profissional
            passam pela mesma regra: conversa antes, técnica clara, nada de
            pacote genérico.
          </p>
          <p className="mt-6 text-sm font-bold text-muted">
            {doctor.name}
            <span className="mt-1 block">{doctor.cro}</span>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rise rounded-[1.4rem] bg-stripe/70 p-6">
            <h3 className="font-display text-3xl text-wine">Clínica</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-ink/80">
              Harmonização facial, botox e preenchimento em Blumenau. Hora
              marcada e um plano feito em cima da sua anatomia e da sua queixa.
            </p>
          </article>
          <article id="mentoria" className="rise scroll-mt-24 rounded-[1.4rem] bg-wine p-6 text-cream sm:translate-y-8">
            <h3 className="font-display text-3xl">Mentoria</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-cream/90">
              Mentoria Ilumme, Método LipSense® e SynFace para quem quer
              técnica, gestão e um jeito claro de explicar o trabalho.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
