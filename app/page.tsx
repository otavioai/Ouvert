import { ClientStrip } from "@/components/client-strip";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { AboutBlock } from "@/components/about-block";
import { Diagnostic } from "@/components/diagnostic";
import { HomeHero } from "@/components/home-hero";
import { InsightsTeaser } from "@/components/insights-teaser";
import { OfferCard } from "@/components/offer-card";
import { offers, whyNow } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutBlock />

      <section
        className="border-y border-border bg-muted/50 py-16 sm:py-20"
        aria-labelledby="diagnostico-heading"
      >
        <Container>
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-red uppercase">
            Dois pontos
          </p>
          <h2
            id="diagnostico-heading"
            className="font-heading mt-3 max-w-2xl text-3xl font-normal sm:text-4xl"
          >
            Qual o gatilho. Qual a porta.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A mensagem de abertura é a mesma. A sua resposta define a porta.
          </p>
          <Diagnostic />
        </Container>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="portas-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
              Três portas
            </p>
            <h2
              id="portas-heading"
              className="font-heading mt-3 text-3xl font-normal sm:text-4xl"
            >
              A sua resposta define a porta.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Preço, prazo e entregável em evidência — nada sob consulta.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </Container>
      </section>

      <ClientStrip />

      <section className="py-16 sm:py-20" aria-labelledby="agora-heading">
        <Container>
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-red uppercase">
            Por que agora
          </p>
          <h2
            id="agora-heading"
            className="font-heading mt-3 max-w-2xl text-3xl font-normal sm:text-4xl"
          >
            O exame não espera o número fechar no feeling.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {whyNow.map((item) => (
              <article
                key={item.title}
                className="card-lift border border-border bg-card px-6 py-6"
              >
                <h3 className="font-heading text-2xl font-normal">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <InsightsTeaser />
      <CtaBand />
    </>
  );
}
