import { InstagramIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { doctor, links, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-cream pb-24 pt-10 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:justify-between">
        <div>
          <p className="font-display text-2xl text-burgundy">{doctor.name}</p>
          <p className="mt-2 font-script text-2xl text-terracotta">{doctor.tagline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink/65">
            <PinIcon className="h-4 w-4 text-terracotta" />
            {doctor.city}, {doctor.stateFull} · {doctor.cro}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-burgundy/75" aria-label="Rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-terracotta">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-burgundy hover:text-terracotta"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-burgundy hover:text-terracotta"
          >
            <InstagramIcon className="h-4 w-4" />
            {doctor.handle}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-burgundy/10 px-5 pt-6 sm:px-8">
        <p className="max-w-3xl text-[0.72rem] leading-relaxed text-ink/50">
          Resultados variam de acordo com anatomia, indicação e cuidados. Conteúdo
          informativo — não substitui avaliação presencial e não garante
          resultado específico. {doctor.name}, {doctor.cro}, {doctor.city}/
          {doctor.state}.
        </p>
        <p className="mt-3 text-[0.72rem] text-ink/40">
          © {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
