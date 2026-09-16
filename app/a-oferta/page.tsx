import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { Diagnostic } from "@/components/diagnostic";
import { OfferCard } from "@/components/offer-card";
import { Button } from "@/components/ui/button";
import { offers } from "@/lib/site";

export const metadata: Metadata = {
  title: "A Oferta",
};

export default function OfertaPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            A Oferta
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-tight font-normal sm:text-5xl">
            Deixo os números da sua empresa em condição de serem examinados por
            um terceiro: banco, comprador, investidor ou auditor.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Já passei por esse exame dezessete vezes, do outro lado da mesa. Na
            conversa com quem vai conferir, eu sou a única pessoa que já sentou
            do lado de quem está sendo examinado. Essa assimetria muda o que
            preparo, o que priorizo e o que entrego.
          </p>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-3xl font-normal sm:text-4xl">
            Qual o gatilho. Qual a porta.
          </h2>
          <Diagnostic />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Três portas
          </p>
          <h2 className="font-heading mt-3 text-3xl font-normal sm:text-4xl">
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

      <section className="border-t border-border bg-muted py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já
            sei qual porta abrir.
          </p>
          <p className="mt-4 text-muted-foreground">
            Conversa de 45 minutos, sem custo.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contato" />}
            className="mt-10 h-11 px-5 text-sm"
          >
            Agendar conversa
          </Button>
        </Container>
      </section>
    </>
  );
}
