"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/site";

export function MobileDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 md:hidden">
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary pointer-events-auto"
      >
        Agendar no WhatsApp
      </a>
    </div>
  );
}
