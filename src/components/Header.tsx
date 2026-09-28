"use client";

import { useEffect, useState } from "react";
import { doctor, links, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1520px] items-center justify-between px-6 md:px-10 lg:h-[5.25rem] lg:px-16">
        <a href="#topo" className="leading-none">
          <span className="block font-display text-[1.45rem] tracking-tight text-charcoal">
            {doctor.shortName}
          </span>
          <span className="mt-1 hidden text-[0.6rem] uppercase tracking-[0.26em] text-muted lg:block">
            {doctor.city} · {doctor.cro}
          </span>
        </a>

        <nav className="hidden items-center gap-11 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.68rem] font-medium uppercase tracking-[0.24em] text-muted transition-colors hover:text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-charcoal after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative hidden text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-charcoal sm:inline"
          >
            Consulta
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-between bg-ivory px-6 pb-28 pt-10 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-5 font-display text-4xl text-charcoal"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-charcoal px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ivory"
          >
            Consulta no WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  );
}
