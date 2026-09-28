import { WhatsAppIcon } from "@/components/Icons";
import { links } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3.5 text-sm font-semibold text-cream-soft shadow-[0_16px_40px_-16px_rgba(196,90,58,0.8)]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}
