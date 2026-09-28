import { doctor, links, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-1 pb-4 pt-8 sm:px-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[-0.03em] text-ink">{doctor.name}</p>
          <p className="mt-2 text-base text-muted">
            {doctor.city}, {doctor.stateFull}
            <span className="mt-1 block">{doctor.cro}</span>
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-base font-medium" aria-label="Rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="w-fit underline decoration-transparent underline-offset-4 hover:decoration-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-base font-medium">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="w-fit underline-offset-4 hover:underline">
            WhatsApp
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="w-fit underline-offset-4 hover:underline">
            {doctor.handle}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t-2 border-ink/15 px-4 pt-5">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          Resultados variam de acordo com anatomia, indicação e cuidados. Conteúdo informativo — não substitui avaliação presencial. {doctor.name}, {doctor.cro}, {doctor.city}/{doctor.state}.
        </p>
        <p className="mt-2 text-sm text-muted">© {new Date().getFullYear()} {doctor.name}.</p>
      </div>
    </footer>
  );
}
