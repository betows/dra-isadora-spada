import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { doctor, links, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ivory pb-28 pt-16 sm:pb-12 sm:pt-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[1.4fr_0.7fr_0.8fr] lg:px-16">
        <div>
          <p className="font-display text-3xl leading-none text-charcoal">
            {doctor.name}
          </p>
          <p className="mt-4 max-w-sm font-display text-xl italic text-charcoal/70">
            {doctor.tagline}
          </p>
          <p className="mt-6 text-[0.8rem] uppercase tracking-[0.18em] text-muted">
            {doctor.city}, {doctor.stateFull} · {doctor.cro}
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Rodapé">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[0.8rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-copper"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[0.8rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-copper"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            {doctor.handle}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1440px] border-t border-charcoal/10 px-6 pt-6 md:px-10 lg:px-16">
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
