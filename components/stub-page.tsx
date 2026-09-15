import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function StubPage({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  return (
    <section className="flex flex-1 flex-col justify-center py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
          Página em preparação
        </p>
        <h1 className="font-heading mt-4 text-4xl leading-tight font-normal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <Button
          nativeButton={false}
          render={<Link href="/" />}
          className="mt-10 h-11 px-5 text-sm"
        >
          Voltar para Home
        </Button>
      </Container>
    </section>
  );
}
