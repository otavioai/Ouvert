import type { ReactNode } from "react";

import { Container } from "@/components/container";

export function PageBanner({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="border-b border-border bg-background">
      <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
        <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
          {eyebrow}
        </p>
        <h1 className="font-heading mt-4 max-w-3xl text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
