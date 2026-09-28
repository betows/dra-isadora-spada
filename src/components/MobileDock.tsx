import { links } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-wine p-3 md:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-cream px-4 py-3 text-sm font-extrabold text-wine"
      >
        Agendar no WhatsApp
      </a>
    </div>
  );
}
