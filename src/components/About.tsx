import { PlateParallax, Reveal } from "@/components/Reveal";
import { doctor } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[1520px] items-center gap-20 px-6 py-28 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28 lg:px-16 lg:py-40">
        <Reveal>
          <PlateParallax className="aspect-[4/5] min-h-[24rem]">
            <div className="plate plate-marble h-[118%] w-full -translate-y-[8%]" />
          </PlateParallax>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper-soft">
              Sobre
            </p>
            <h2 className="mt-8 max-w-xl font-display text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.025em]">
              Os 2 universos da Isa: clínica e mentoria
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-10 max-w-lg text-[1.05rem] leading-[1.8] text-ivory/68">
              Esse espaço mistura pacientes, bastidores, gestão e mentoria. São
              dois universos que fazem parte da rotina todos os dias — o
              consultório em {doctor.city} e a formação de quem quer crescer na
              estética com técnica e posicionamento.
            </p>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.8] text-ivory/68">
              Se você se identifica com algum deles, a gente acha que vai
              gostar de estar por aqui.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid max-w-xl gap-12 sm:grid-cols-2">
              <div>
                <p className="font-display text-3xl italic">Clínica</p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-ivory/58">
                  Harmonização facial, botox e preenchimento em Blumenau — com
                  conversa franca, hora marcada e um plano que cabe no seu
                  rosto, não em um filtro.
                </p>
              </div>
              <div>
                <p className="font-display text-3xl italic">Mentoria</p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-ivory/58">
                  Ilumme, LipSense® e SynFace para profissionais que querem
                  técnica, gestão e verdade no consultório.
                </p>
              </div>
            </div>
            <p className="mt-16 font-display text-2xl italic">
              {doctor.name}
              <span className="mt-2 block font-sans text-[0.68rem] not-italic uppercase tracking-[0.22em] text-ivory/40">
                {doctor.cro}
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
