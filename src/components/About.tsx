import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { doctor, links } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:px-16 lg:py-36">
        <Reveal>
          <div className="plate plate-marble aspect-[4/5] min-h-[22rem] lg:sticky lg:top-28">
            <div className="absolute inset-x-8 bottom-8 z-10 sm:inset-x-10 sm:bottom-10">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-copper-soft">
                os 2 universos
              </p>
              <p className="mt-3 font-display text-3xl leading-none text-ivory sm:text-4xl">
                Clínica + mentoria
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper-soft">
              01 — Sobre
            </p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] tracking-[-0.02em]">
              Os 2 universos da Isa: clínica e mentoria
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.75] text-ivory/68">
              Esse espaço mistura pacientes, bastidores, gestão e mentoria. São
              dois universos que fazem parte da rotina todos os dias — o
              consultório em {doctor.city} e a formação de quem quer crescer na
              estética com técnica e posicionamento.
            </p>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-[1.75] text-ivory/68">
              Se você se identifica com algum deles, a gente acha que vai
              gostar de estar por aqui.
            </p>
            <p className="mt-10 font-display text-2xl italic">
              {doctor.name}
              <span className="mt-2 block font-sans text-[0.68rem] not-italic uppercase tracking-[0.22em] text-ivory/45">
                {doctor.cro}
              </span>
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-ivory/10 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <article className="bg-charcoal p-8">
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-copper-soft">
                  Universo 01
                </p>
                <h3 className="mt-4 font-display text-3xl">Clínica</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/62">
                  Harmonização facial, botox e preenchimento em Blumenau — com
                  conversa franca, hora marcada e um plano que cabe no seu
                  rosto, não em um filtro.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="bg-charcoal p-8">
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-copper-soft">
                  Universo 02
                </p>
                <h3 className="mt-4 font-display text-3xl">Mentoria</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/62">
                  Mentoria Ilumme, Método LipSense® e SynFace para
                  profissionais que querem técnica, gestão e um discurso tão
                  autêntico quanto o resultado.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-10">
            <CtaLink href={links.whatsapp} tone="dark">
              Seja muito bem-vinda
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
