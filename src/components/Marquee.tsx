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
    <div className="relative max-w-full overflow-hidden border-y border-gold/25 bg-burgundy py-3 text-cream-soft">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[0.72rem] uppercase tracking-[0.28em]"
          >
            {item}
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
