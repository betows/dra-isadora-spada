import Link from "next/link";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-paper px-6 text-center">
      <div>
        <p className="text-sm font-medium text-coral">Página não encontrada</p>
        <h1 className="mt-3 font-display text-7xl font-medium text-ink">404</h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-ink/75">
          Esse endereço não existe. Volte para a página de harmonização facial
          em Blumenau ou fale no WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md bg-coral px-5 py-3 text-sm font-semibold text-white"
          >
            Voltar ao início
          </Link>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink underline decoration-coral/50 underline-offset-4"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
