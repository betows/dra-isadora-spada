"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
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
          ? "border-b border-charcoal/10 bg-ivory/88 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:h-[5rem] lg:px-16">
        <a href="#topo" className="group flex items-center gap-3.5">
          <span className="grid h-9 w-9 place-items-center border border-charcoal/15 text-[0.62rem] font-medium tracking-[0.22em] text-charcoal transition-colors group-hover:border-copper group-hover:text-copper">
            IS
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-tight text-charcoal">
              {doctor.shortName}
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.24em] text-muted lg:block">
              {doctor.cro} · {doctor.city}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all hover:after:w-full"
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
            className="grid h-10 w-10 place-items-center text-charcoal transition-colors hover:text-copper"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <CtaLink href={links.whatsapp} className="hidden sm:inline-flex">
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </CtaLink>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-charcoal/15 text-charcoal lg:hidden"
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
          className="flex min-h-[calc(100svh-4.25rem)] flex-col justify-between bg-ivory px-6 pb-28 pt-8 lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-4 font-display text-4xl text-charcoal"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <CtaLink href={links.whatsapp} className="w-full">
            <WhatsAppIcon className="h-4 w-4" />
            Agendar no WhatsApp
          </CtaLink>
        </div>
      ) : null}
    </header>
  );
}
