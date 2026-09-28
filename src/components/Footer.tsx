import { doctor, links, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-paper pb-24 pt-12 sm:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-medium text-ink">{doctor.name}</p>
          <p className="mt-2 text-sm text-muted">
            {doctor.city}, {doctor.stateFull} · {doctor.cro}
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-ink/70" aria-label="Rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-coral">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-coral"
          >
            WhatsApp
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-coral"
          >
            {doctor.handle}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-ink/10 px-5 pt-5 sm:px-8">
        <p className="max-w-3xl text-xs leading-relaxed text-muted">
          Resultados variam de acordo com anatomia, indicação e cuidados. Conteúdo
          informativo — não substitui avaliação presencial e não garante resultado
          específico. {doctor.name}, {doctor.cro}, {doctor.city}/{doctor.state}.
        </p>
        <p className="mt-2 text-xs text-muted/80">
          © {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
