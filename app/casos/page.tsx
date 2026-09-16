import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estudos de caso",
};

const reservedCases = [
  {
    title: "Grupo de vinícolas preparando M&A",
    note: "Caso âncora — fatos reais ainda em validação. Não publico números nem resultado até isso estar fechado.",
  },
  {
    title: "Alimentos e bebidas · Serra Gaúcha",
    note: "Slot reservado. Mesma estrutura: situação → o que reprovava → o que foi feito → resultado.",
  },
];

export default function CasosPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Estudos de caso
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-tight font-normal sm:text-5xl">
            O que reprovava. O que foi feito. O que ficou examinável.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Casos em alimentos e bebidas — com ênfase em vinícolas da Serra
            Gaúcha. Cada um segue a mesma estrutura: situação → o que reprovava
            → o que foi feito → resultado.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Clientes
          </p>
          <h2 className="font-heading mt-3 text-3xl font-normal">Quem eu atendi</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {clients.map((client) => (
              <li key={client.url}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col border border-border px-6 py-7 hover:border-brand/50"
                >
                  <p className="font-heading text-3xl font-normal">{client.name}</p>
                  <p className="mt-2 text-sm text-slate-blue">{client.sector}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {client.note}
                  </p>
                  <p className="mt-6 inline-flex items-center gap-1 text-sm text-brand">
                    {client.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <ArrowUpRight className="size-3.5" />
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-3xl font-normal">Em preparação</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Os próximos estudos seguem a grade situação → o que reprovava → o
            que foi feito → resultado. Só publico quando os fatos estiverem
            validados.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {reservedCases.map((item) => (
              <Card key={item.title} className="h-full gap-0 py-0">
                <CardHeader className="gap-3 px-6 py-6">
                  <CardTitle className="font-heading text-xl leading-snug font-normal">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {item.note}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 text-sm text-muted-foreground">
                  Situação · O que reprovava · O que foi feito · Resultado
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            Se o seu caso parece com o âncora — comprador à vista, números ainda
            não examináveis —, a porta é a{" "}
            <strong className="font-medium">Sala de exame</strong> (R$ 35.000 a
            60.000 · 4 a 8 semanas).
          </p>
          <p className="mt-4 text-muted-foreground">
            Me diga se o assunto é comprador, orçamento de 2027 ou banco. Eu já
            sei qual porta abrir.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/contato" />}
              className="h-11 px-5 text-sm"
            >
              Agendar conversa
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="/" />}
              className="h-11 px-5 text-sm"
            >
              Voltar para Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
