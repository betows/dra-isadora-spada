import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-ivory px-6 text-center">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper">
          página não encontrada
        </p>
        <h1 className="mt-5 font-display text-[clamp(5rem,16vw,9rem)] leading-none text-charcoal">
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[1.02rem] leading-[1.7] text-muted">
          Esse caminho não existe. Volte para a harmonização facial em Blumenau
          ou fale com a Dra. Isadora no WhatsApp.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 text-[0.6875rem] font-medium uppercase tracking-[0.22em] bg-charcoal text-ivory transition-colors duration-300 hover:bg-copper"
          >
            Voltar ao início
          </Link>
          <CtaLink href={links.whatsapp} variant="ghost">
            WhatsApp
          </CtaLink>
        </div>
      </div>
    </main>
  );
}
