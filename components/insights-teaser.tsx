import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { insightPosts, site } from "@/lib/site";

export function InsightsTeaser() {
  const featured = insightPosts.slice(0, 2);

  return (
    <section className="border-t border-border py-16 sm:py-20" aria-labelledby="insights-heading">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
              Insights
            </p>
            <h2
              id="insights-heading"
              className="font-heading mt-3 text-3xl font-normal sm:text-4xl"
            >
              O que reprova quando alguém de fora olha.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm text-brand hover:underline"
          >
            Ver a série
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {featured.map((post) => (
            <a
              key={post.linkedin}
              href={post.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-6 py-8 transition-colors hover:bg-muted/60 card-lift"
            >
              <p className="font-heading text-2xl leading-snug font-normal">
                {post.title}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-5 inline-flex items-center gap-1 text-sm text-brand">
                Ler no LinkedIn
                <ArrowUpRight className="size-3.5" />
              </p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          O mesmo fio sai no{" "}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
