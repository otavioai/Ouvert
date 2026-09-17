import { ClientStrip } from "@/components/client-strip";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { AboutBlock } from "@/components/about-block";
import { Diagnostic } from "@/components/diagnostic";
import { HomeHero } from "@/components/home-hero";
import { InsightsTeaser } from "@/components/insights-teaser";
import { OfferCard } from "@/components/offer-card";
import { homeCopy, offers, whyNow } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutBlock />

      <section
        className="border-y border-border bg-muted/40 py-20 sm:py-24"
        aria-labelledby="diagnostico-heading"
      >
        <Container>
          <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
          <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
            {homeCopy.diagnosticEyebrow}
          </p>
          <h2
            id="diagnostico-heading"
            className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {homeCopy.diagnosticTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {homeCopy.diagnosticLead}
          </p>
          <Diagnostic />
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="portas-heading">
        <Container>
          <div className="max-w-2xl">
            <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
            <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
              {homeCopy.offersEyebrow}
            </p>
            <h2
              id="portas-heading"
              className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {homeCopy.offersTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{homeCopy.offersLead}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </Container>
      </section>

      <ClientStrip />

      <section className="py-20 sm:py-24" aria-labelledby="agora-heading">
        <Container>
          <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
          <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
            Por que agora
          </p>
          <h2
            id="agora-heading"
            className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {homeCopy.whyNowTitle}
          </h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {whyNow.map((item) => (
              <article key={item.title} className="bg-background px-6 py-8">
                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
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
