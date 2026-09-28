const items = [
  "Harmonização facial",
  "Botox em Blumenau",
  "Preenchimento",
  "Método LipSense®",
  "Mentoria Ilumme",
  "SynFace",
  "Rostos autênticos",
  "CRO-SC 18650",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="relative max-w-full overflow-hidden border-y border-ivory/10 bg-charcoal py-3.5 text-ivory">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-12 text-[0.68rem] uppercase tracking-[0.28em]"
          >
            {item}
            <span className="text-copper" aria-hidden="true">
              —
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
