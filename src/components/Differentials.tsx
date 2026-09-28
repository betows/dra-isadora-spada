import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-blush">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          Como é o atendimento
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2">
          {differentials.map((item) => (
            <li key={item.n}>
              <h3 className="font-display text-2xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
