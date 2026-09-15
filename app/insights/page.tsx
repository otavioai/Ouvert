import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { insightPosts, insightThemes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Insights
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-tight font-normal sm:text-5xl">
            O que reprova uma empresa quando alguém de fora olha.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Série curta, em primeira pessoa, sobre o que eu vi reprovar — e o
            que deixa a empresa em condição de exame. Não é opinião genérica de
            gestão. É o checklist mental de quem já sentou do lado do comprador,
            do banco e do auditor dezessete vezes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              nativeButton={false}
              render={
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-11 px-5 text-sm"
            >
              Postagens no LinkedIn
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-11 px-5 text-sm"
            >
              Postagens no Instagram
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Também publico na{" "}
            <a
              href={site.social.linkedinCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              página da empresa no LinkedIn
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="posts-heading">
        <Container>
          <h2
            id="posts-heading"
            className="font-heading text-3xl font-normal sm:text-4xl"
          >
            Postagens recentes
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Cada texto sai no LinkedIn. O Instagram leva ao mesmo fio, no
            perfil.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {insightPosts.map((post) => (
              <Card key={post.linkedin} className="h-full gap-0 py-0">
                <CardHeader className="gap-3 px-6 py-6">
                  <CardTitle className="font-heading text-xl leading-snug font-normal">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-3 border-t border-border bg-transparent px-6 py-4">
                  <a
                    href={post.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline"
                  >
                    Ler no LinkedIn
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand hover:underline"
                  >
                    Ver no Instagram
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-3xl font-normal">
            O que vem no calendário
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Temas que eu publico um por ciclo — achado anônimo, o que foi feito,
            entregável concreto.
          </p>
          <ol className="mt-8 columns-1 gap-x-12 sm:columns-2">
            {insightThemes.map((theme, index) => (
              <li
                key={theme}
                className="mb-3 break-inside-avoid text-[15px] leading-relaxed"
              >
                <span className="mr-2 font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {theme}
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/contato" />}
              className="h-11 px-5 text-sm"
            >
              Quero a conversa de 45 minutos
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
