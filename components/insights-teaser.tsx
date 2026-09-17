import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { insightPosts, site } from "@/lib/site";

export function InsightsTeaser() {
  const featured = insightPosts.slice(0, 2);

  return (
    <section
      className="border-t border-border bg-muted/40 py-20 sm:py-24"
      aria-labelledby="insights-heading"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
            <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
              Insights
            </p>
            <h2
              id="insights-heading"
              className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              O que fica frágil quando alguém de fora olha.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:underline"
          >
            Ver a série
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
          {featured.map((post) => (
            <a
              key={post.linkedin}
              href={post.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background px-6 py-8 transition-colors hover:bg-muted/60"
            >
              <p className="font-heading text-2xl leading-snug font-semibold tracking-tight">
                {post.title}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-red">
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
            className="font-medium text-brand-red hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
