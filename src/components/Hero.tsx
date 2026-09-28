import { doctor, links } from "@/lib/site";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <path
        fill="#E7A3B8"
        d="M32 2l7.2 18.4L59 22.2 42.6 34.2 48.4 54 32 43.4 15.6 54l5.8-19.8L5 22.2l19.8-1.8L32 2z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-wine text-cream">
      <div className="stripe-drift pointer-events-none absolute -inset-[12%] stripes opacity-95" />
      <Star className="star-a pointer-events-none absolute left-[6%] top-[18%] h-10 w-10 sm:h-14 sm:w-14" />
      <Star className="star-b pointer-events-none absolute right-[8%] top-[12%] h-8 w-8 rotate-12 sm:h-12 sm:w-12" />
      <Star className="star-c pointer-events-none absolute bottom-[16%] right-[18%] h-7 w-7 -rotate-6 sm:h-10 sm:w-10" />

      <div className="hero-shift relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-24 pt-14 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="sticker -rotate-2 text-sm">{doctor.handle}</p>
          <h1 className="mt-5 max-w-xl font-display text-[2.7rem] leading-[0.95] text-cream drop-shadow-[0_6px_0_rgba(94,32,48,0.25)] sm:text-6xl">
            Harmonização facial em Blumenau
          </h1>
          <p className="mt-5 max-w-lg text-base font-semibold leading-relaxed text-cream sm:text-lg">
            {doctor.name}, {doctor.cro}. Botox, preenchimento e o Método LipSense®
            no consultório em {doctor.city}. Mentoria Ilumme e SynFace para quem atende.
          </p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-cream px-6 py-3 text-sm font-extrabold text-wine shadow-[0_6px_0_#5e2030] transition-transform hover:-translate-y-0.5"
          >
            Agendar avaliação
          </a>
        </div>

        <aside className="rise rounded-[1.6rem] bg-cream p-6 text-ink shadow-[0_14px_0_rgba(94,32,48,0.25)] sm:p-7">
          <p className="font-display text-3xl text-wine">No consultório</p>
          <ul className="mt-4 space-y-3 text-sm font-semibold leading-relaxed">
            <li>Harmonização facial — rosto inteiro, com plano depois da avaliação.</li>
            <li>Botox — expressão, terço superior e sorriso gengival.</li>
            <li>Preenchimento e LipSense® — lábios, malar, mento e olheiras.</li>
            <li>Mentoria Ilumme — LipSense® e SynFace para profissionais.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
