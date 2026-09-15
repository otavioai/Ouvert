import Link from "next/link";

import { Container } from "@/components/container";
import { OfferCard } from "@/components/offer-card";
import { Button } from "@/components/ui/button";
import { offers, site, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgb(58_122_146_/_0.08),transparent_55%)]"
        />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <p className="text-[12px] font-medium tracking-[0.22em] text-slate-blue uppercase">
            {site.person} · {site.fullName}
          </p>
          <h1 className="font-heading mt-6 max-w-4xl text-[2.05rem] leading-[1.15] font-normal tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
            Deixo os números da sua empresa em condição de serem examinados por
            um terceiro:{" "}
            <span className="text-brand">
              banco, comprador, investidor ou auditor.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Já passei por esse exame dezessete vezes, do outro lado da mesa — e
            construí do zero finanças, risco e governança em empresas que
            precisavam sobreviver a quem confere.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<Link href="/contato" />}
              className="h-12 px-6 text-sm tracking-wide"
            >
              Agendar conversa de 45 minutos (sem custo)
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="/casos" />}
              className="h-12 px-6 text-sm tracking-wide"
            >
              Estudos de caso
            </Button>
          </div>
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
              A mensagem de abertura é a mesma. A sua resposta define a porta.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted py-12 sm:py-16">
        <Container>
          <p className="font-heading mx-auto max-w-3xl text-center text-2xl leading-snug font-normal text-foreground sm:text-[1.85rem]">
            Atendi cerca de cinco empresas de alimentos e bebidas e estou
            preparando um grupo de vinícolas para M&amp;A.
          </p>
        </Container>
      </section>

      <section
        className="py-16 sm:py-20"
        aria-labelledby="numeros-heading"
      >
        <Container>
          <h2
            id="numeros-heading"
            className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase"
          >
            Números em evidência
          </h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="border-t border-brand/30 pt-5">
                <p className="font-heading text-3xl text-brand sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contato"
        className="border-t border-border bg-muted/60 py-16 sm:py-24"
      >
        <Container className="max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-normal sm:text-5xl">
            Conversa de 45 minutos, sem custo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já
            sei qual porta abrir.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contato" />}
            className="mt-10 h-12 px-7 text-sm tracking-wide"
          >
            Agendar conversa
          </Button>
        </Container>
      </section>
    </>
  );
}
