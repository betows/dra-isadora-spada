import Link from "next/link";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-cream px-6 text-ink">
      <div className="max-w-md">
        <p className="text-sm font-medium text-fog">Página não encontrada</p>
        <h1 className="mt-3 font-display text-7xl leading-none tracking-[-0.04em]">404</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Esse endereço não existe. Volte para a harmonização facial em Blumenau.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <Link href="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-base font-medium underline underline-offset-4">
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
