import { WhatsAppIcon } from "@/components/Icons";
import { links } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ivory/10 bg-charcoal/96 backdrop-blur-md sm:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory"
      >
        <WhatsAppIcon className="h-4 w-4 text-copper-soft" />
        Agendar avaliação
      </a>
    </div>
  );
}
