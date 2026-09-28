import Link from "next/link";
import { links } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-wine px-6 text-center text-cream">
      <div>
        <p className="sticker text-sm">ops</p>
        <h1 className="mt-4 font-display text-7xl">404</h1>
        <p className="mx-auto mt-4 max-w-sm font-semibold">
          Esse endereço não existe. Volte para a harmonização facial em Blumenau.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Link href="/" className="rounded-full bg-cream px-5 py-3 text-sm font-extrabold text-wine">
            Voltar ao início
          </Link>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline">
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
