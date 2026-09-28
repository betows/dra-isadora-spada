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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 border-ink bg-cream py-2 pl-4 pr-2 sm:pl-5">
        <a href="#topo" className="font-display text-[1.65rem] leading-none tracking-[-0.03em] text-ink">
          {doctor.shortName}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-base font-medium text-ink">
              {item.label}
            </a>
          ))}
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Agendar
          </a>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="menu-mobile"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-[28px] border-2 border-ink bg-cream p-4 md:hidden"
          aria-label="Menu mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-lg font-medium text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2"
          >
            Agendar no WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
