import { doctor, links, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ivory pb-28 pt-20 sm:pb-14 sm:pt-24">
      <div className="mx-auto grid max-w-[1520px] gap-16 px-6 md:px-10 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:px-16">
        <div>
          <p className="font-display text-[2rem] leading-none text-charcoal">
            {doctor.name}
          </p>
          <p className="mt-5 max-w-sm font-display text-xl italic text-charcoal/65">
            {doctor.tagline}
          </p>
          <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-muted">
            {doctor.city}, {doctor.stateFull} · {doctor.cro}
          </p>
        </div>

        <nav className="flex flex-col gap-3.5" aria-label="Rodapé">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3.5">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-copper"
          >
            WhatsApp
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-charcoal"
          >
            {doctor.handle}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1520px] border-t border-charcoal/10 px-6 pt-7 md:px-10 lg:px-16">
        <p className="max-w-3xl text-[0.72rem] leading-relaxed text-muted">
          Resultados variam de acordo com anatomia, indicação e cuidados. Conteúdo
          informativo — não substitui avaliação presencial e não garante
          resultado específico. {doctor.name}, {doctor.cro}, {doctor.city}/
          {doctor.state}.
        </p>
        <p className="mt-3 text-[0.72rem] text-muted/70">
          © {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
