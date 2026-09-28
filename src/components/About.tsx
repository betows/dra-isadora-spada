import { Parallax, Reveal } from "@/components/Reveal";
import { doctor } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="relative bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
            01 — Sobre
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
            Os 2 universos da Isa: clínica e mentoria
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Parallax>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-cream p-8 sm:p-10">
              <p className="font-script text-3xl text-terracotta">seja muito bem-vinda</p>
              <p className="mt-6 text-base leading-relaxed text-ink/75">
                Esse espaço mistura pacientes, bastidores, gestão e mentoria. São
                dois universos que fazem parte da rotina todos os dias — o
                consultório em {doctor.city} e a formação de quem quer crescer na
                estética com técnica e posicionamento.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Se você se identifica com algum deles, a gente acha que vai
                gostar de estar por aqui.
              </p>
              <p className="mt-8 font-display text-xl italic text-burgundy">
                {doctor.name}
                <span className="mt-1 block font-sans text-sm not-italic tracking-[0.16em] text-burgundy/55">
                  {doctor.cro}
                </span>
              </p>
            </div>
          </Parallax>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.08} className="sm:mt-8">
              <article className="flex h-full flex-col justify-between rounded-[1.5rem] border border-burgundy/10 bg-burgundy p-7 text-cream-soft">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                    Universo 01
                  </p>
                  <h3 className="mt-3 font-display text-3xl">Clínica</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream-soft/80">
                    Harmonização facial, botox e preenchimento em Blumenau — com
                    conversa franca, hora marcada e um plano que cabe no seu
                    rosto, não em um filtro.
                  </p>
                </div>
                <p className="mt-8 font-script text-2xl text-gold-bright">
                  pacientes &amp; bastidores
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="flex h-full flex-col justify-between rounded-[1.5rem] border border-gold/35 bg-cream p-7">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-terracotta">
                    Universo 02
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-burgundy">
                    Mentoria
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    Mentoria Ilumme, Método LipSense® e SynFace para
                    profissionais que querem técnica, gestão e um discurso tão
                    autêntico quanto o resultado.
                  </p>
                </div>
                <p className="mt-8 font-script text-2xl text-terracotta">
                  Ilumme · LipSense®
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
