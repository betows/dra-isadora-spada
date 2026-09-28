import { doctor, links } from "@/lib/site";
import { PlanDemo, Wave } from "@/components/PlanDemo";

const facts = ["CRO-SC 18650", "Blumenau, SC", "LipSense®", "Mentoria Ilumme", "SynFace"];

export function Hero() {
  return (
    <section id="topo" className="rounded-[32px] border-2 border-ink bg-cream px-5 py-8 sm:rounded-[40px] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <p className="flex items-center gap-3 text-base font-medium text-ink">
            <Wave />
            <span>
              {doctor.name}
              <span className="mt-0.5 block text-sm font-medium text-fog">
                {doctor.cro} · {doctor.city}/{doctor.state}
              </span>
            </span>
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.65rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.6rem] lg:leading-[1.02]">
            Harmonização facial em{" "}
            <span className="relative inline-block">
              Blumenau
              <svg viewBox="0 0 140 10" className="absolute -bottom-1 left-0 h-2.5 w-full" aria-hidden="true">
                <path
                  className="squiggle"
                  d="M2 6C22 2 38 8 58 5s36-4 52 0 22 3 26 1"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
            Botox, preenchimento e o Método LipSense® no consultório. Mentoria Ilumme e SynFace para quem atende. O plano sai da avaliação, não de um cardápio.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar avaliação
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Ver procedimentos
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {facts.map((fact) => (
              <li key={fact} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-medium text-ink">
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <PlanDemo />
      </div>
    </section>
  );
}
