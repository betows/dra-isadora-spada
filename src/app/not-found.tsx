import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-ivory px-6 text-center">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted">
          página não encontrada
        </p>
        <h1 className="mt-6 font-display text-[clamp(5.5rem,18vw,9.5rem)] leading-none text-charcoal">
          404
        </h1>
        <p className="mx-auto mt-8 max-w-md text-[1.05rem] leading-[1.8] text-muted">
          Esse caminho não existe. Volte para a harmonização facial em Blumenau
          ou fale com a Dra. Isadora.
        </p>
        <div className="mt-12">
          <CtaLink href={links.whatsapp}>Consulta no WhatsApp</CtaLink>
          <div className="mt-5">
            <Link
              href="/"
              className="text-[0.68rem] uppercase tracking-[0.22em] text-muted underline-offset-4 hover:text-charcoal hover:underline"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
