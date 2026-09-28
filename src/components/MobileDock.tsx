import { links } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ivory/10 bg-charcoal sm:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory"
      >
        Consulta no WhatsApp
      </a>
    </div>
  );
}
