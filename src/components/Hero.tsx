import { doctor, links } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-16">
        <div>
          <p className="text-sm font-medium text-coral">
            {doctor.city}, {doctor.state} · {doctor.cro}
          </p>
          <h1 className="mt-3 max-w-xl font-display text-[2.7rem] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl">
            Harmonização facial em Blumenau
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
            A {doctor.name} faz botox, preenchimento e harmonização facial em
            Blumenau. O plano sai da avaliação do seu rosto — com hora marcada
            pelo WhatsApp.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-deep"
            >
              Agendar avaliação
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline decoration-coral/50 underline-offset-4 hover:text-coral"
            >
              {doctor.handle}
            </a>
          </div>
        </div>

        <aside className="rounded-2xl bg-blush p-6 sm:p-8">
          <p className="font-display text-2xl font-medium text-ink">
            No consultório
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
            <li>
              <span className="block font-semibold text-ink">Harmonização facial</span>
              Proporção, luz e movimento do rosto inteiro.
            </li>
            <li>
              <span className="block font-semibold text-ink">Botox</span>
              Rugas de expressão, terço superior e sorriso gengival.
            </li>
            <li>
              <span className="block font-semibold text-ink">Preenchimento · LipSense®</span>
              Lábios, malar, mento e olheiras com ácido hialurônico.
            </li>
            <li>
              <span className="block font-semibold text-ink">Mentoria Ilumme</span>
              LipSense® e SynFace para profissionais da estética.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
