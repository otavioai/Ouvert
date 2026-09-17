import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { insightPosts, insightThemes, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Insights"
        title="O que fica frágil quando alguém de fora olha."
        image={photos.ledger}
      >
        Série curta, em primeira pessoa, sobre o que vi precisar de ajuste — e
        o que deixa a empresa em condição de exame. Sem opinião genérica de
        gestão.
      </PageBanner>

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
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
