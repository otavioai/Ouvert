import type { Metadata } from "next";

import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Diagnostic } from "@/components/diagnostic";
import { OfferCard } from "@/components/offer-card";
import { PageBanner } from "@/components/page-banner";
import { offers, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "A Oferta",
};

export default function OfertaPage() {
  return (
    <>
      <PageBanner
        eyebrow="A Oferta"
        title="Deixo os números da sua empresa em condição de serem examinados por um terceiro."
        image={photos.ledger}
      >
        Já participei desse exame dezessete vezes, do outro lado da mesa. Na
        conversa com quem vai conferir, eu já sentei do lado de quem está sendo
        examinado — e isso muda o que priorizo e o que entrego.
      </PageBanner>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Qual o gatilho. Qual a porta.
          </h2>
          <Diagnostic />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <p className="text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
            Três portas
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A mensagem de abertura é a mesma.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <div key={offer.id} id={offer.id}>
                <OfferCard offer={offer} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
