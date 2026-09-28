import { links } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper p-3 md:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-md bg-coral px-4 py-3 text-sm font-semibold text-white"
      >
        Agendar no WhatsApp
      </a>
    </div>
  );
}
