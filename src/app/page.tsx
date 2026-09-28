import { About } from "@/components/About";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Methods } from "@/components/Methods";
import { MobileDock } from "@/components/MobileDock";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Methods />
        <About />
        <Services />
        <Differentials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
