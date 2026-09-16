import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clients, photos } from "@/lib/site";

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
      <PageBanner
        eyebrow="Estudos de caso"
        title="O que reprovava. O que foi feito. O que ficou examinável."
        image={photos.vineyard}
      >
        Casos em alimentos e bebidas — com ênfase em vinícolas da Serra Gaúcha.
        Cada um segue a mesma estrutura: situação → o que reprovava → o que foi
        feito → resultado.
      </PageBanner>

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

      <CtaBand />
    </>
  );
}
