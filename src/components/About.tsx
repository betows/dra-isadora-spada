import { doctor } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Clínica em Blumenau e mentoria
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            O dia a dia da {doctor.shortName} tem dois lados: o consultório em{" "}
            {doctor.city} e a formação de quem trabalha com estética. Pacientes
            e profissionais passam pelo mesmo critério — técnica clara e uma
            conversa antes de qualquer decisão.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Se você quer atendimento ou quer aprender o método, os dois caminhos
            estão aqui.
          </p>
          <p className="mt-8 text-sm text-muted">
            {doctor.name}
            <span className="mt-1 block">{doctor.cro}</span>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-paper p-6">
            <h3 className="font-display text-3xl font-medium text-ink">Clínica</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Harmonização facial, botox e preenchimento em Blumenau. Hora
              marcada, avaliação presencial e um plano que considera a sua
              anatomia e a sua queixa.
            </p>
          </article>
          <article id="mentoria" className="scroll-mt-20 rounded-2xl bg-coral p-6 text-white sm:mt-8">
            <h3 className="font-display text-3xl font-medium">Mentoria</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Mentoria Ilumme, Método LipSense® e SynFace para profissionais
              que querem técnica, gestão e um jeito claro de explicar o que
              fazem.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
