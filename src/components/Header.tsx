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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="leading-tight">
          <span className="block font-display text-[1.35rem] font-medium tracking-tight text-ink">
            {doctor.shortName}
          </span>
          <span className="text-[0.68rem] text-muted">
            {doctor.city} · {doctor.cro}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-coral"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-coral px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coral-deep"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-ink/10 bg-paper px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-coral px-4 py-3 text-center text-sm font-medium text-white"
            >
              Agendar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
