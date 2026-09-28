const words = [
  "Harmonização facial",
  "Botox",
  "LipSense®",
  "Ilumme",
  "SynFace",
  "Blumenau",
  "CRO-SC 18650",
];

export function Marquee() {
  const loop = [...words, ...words];

  return (
    <div className="overflow-hidden bg-wine py-4 text-cream" aria-hidden="true">
      <div className="scroll-marquee flex w-max gap-8">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="font-display text-2xl whitespace-nowrap sm:text-3xl">
            {word}
            <span className="mx-8 text-pink">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
