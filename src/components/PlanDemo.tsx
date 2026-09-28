const steps = [
  "Rosto inteiro, antes de escolher um ponto.",
  "Botox só na expressão que incomoda.",
  "Lábios com o Método LipSense®, se fizer sentido.",
  "Nada de pacote fechado antes da consulta.",
];

export function PlanDemo() {
  return (
    <article className="rounded-[32px] border-2 border-ink bg-ink p-4 text-cream sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Da conversa ao plano</p>
        <span className="rounded-full bg-forest px-3 py-1 text-sm font-medium">Blumenau</span>
      </div>

      <div className="mt-4 rounded-[24px] bg-cream p-4 text-ink sm:p-5">
        <p className="text-sm font-medium text-fog">Na avaliação</p>
        <p className="mt-2 text-base leading-relaxed sm:text-lg">
          “Quero <span className="mark">botox</span> e preenchimento no lábio. Vi um resultado e não sei o que combina com o meu rosto.”
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fog">Exemplo de organização. Não é um caso clínico.</p>
      </div>

      <ol className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3 rounded-2xl border border-cream/20 px-3 py-3">
            <span className="font-display text-2xl leading-none text-lavender">{index + 1}</span>
            <span className="text-base leading-snug text-cream">{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function Wave() {
  return (
    <span
      className="inline-flex h-8 items-end gap-1 rounded-full border-2 border-ink bg-cream px-2.5 pb-1.5"
      aria-hidden="true"
    >
      <span className="wave-bar" />
      <span className="wave-bar" />
      <span className="wave-bar" />
      <span className="wave-bar" />
      <span className="wave-bar" />
    </span>
  );
}
