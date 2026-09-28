"use client";

import { useEffect, useState } from "react";
import { doctor, links, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-wine/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="font-display text-xl leading-none text-cream">
          {doctor.shortName}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-cream/80 hover:text-cream">
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-wine"
          >
            Agendar
          </a>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="menu-mobile" className="flex flex-col gap-4 px-5 py-6 md:hidden" aria-label="Menu mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-4 py-3 text-center text-sm font-bold text-wine"
          >
            Agendar no WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
