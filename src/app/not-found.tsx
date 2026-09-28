import Link from "next/link";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-6 text-center">
      <div>
        <p className="font-script text-4xl text-terracotta">página não encontrada</p>
        <h1 className="mt-4 font-display text-5xl text-burgundy">404</h1>
        <p className="mt-4 max-w-md text-ink/70">
          Esse caminho não existe. Volte para a harmonização facial em Blumenau
          ou fale com a Dra. Isadora no WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-cream-soft"
          >
            Voltar ao início
          </Link>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold px-5 py-3 text-sm font-semibold text-burgundy"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
