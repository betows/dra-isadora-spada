"use client";

import { useState } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { doctor, links, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-burgundy/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#topo" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-burgundy text-[0.7rem] font-medium tracking-[0.18em] text-cream-soft">
            IS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-burgundy sm:text-xl">
              {doctor.shortName}
            </span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.22em] text-burgundy/55 sm:block">
              {doctor.cro} · {doctor.city}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-burgundy/70 transition-colors hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Dra. Isadora"
            className="grid h-10 w-10 place-items-center rounded-full text-burgundy transition-colors hover:bg-nude/40 hover:text-terracotta"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream-soft transition-colors hover:bg-burgundy sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-burgundy/15 text-burgundy lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-burgundy/10 bg-cream-soft px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-burgundy"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-sm font-semibold text-cream-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
