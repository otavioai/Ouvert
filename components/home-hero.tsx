import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { heroFeatures, homeCopy, site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <p className="rise text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
          {site.name}
        </p>
        <h1 className="rise rise-delay-1 font-heading mt-5 max-w-4xl text-[2.35rem] leading-[1.12] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
          {homeCopy.heroTitle}
        </h1>
        <p className="rise rise-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {homeCopy.heroLead}
        </p>
        <div className="rise rise-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            nativeButton={false}
            variant="appointment"
            render={<Link href="/contato" />}
            className="h-12 px-7 text-sm font-medium tracking-wide"
          >
            Agendar conversa
          </Button>
          <Link
            href="/a-oferta"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Ver as três portas
          </Link>
        </div>
      </Container>

      <div className="border-t border-border bg-muted/40">
        <Container className="py-0">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {heroFeatures.map((item, index) => (
              <li
                key={item.title}
                className={`border-border px-0 py-8 sm:px-6 lg:px-8 ${
                  index > 0 ? "border-t sm:border-t-0 lg:border-l" : ""
                } ${index === 1 ? "sm:border-l" : ""} ${
                  index === 2 ? "sm:border-t lg:border-t-0" : ""
                } ${index === 3 ? "sm:border-t sm:border-l lg:border-t-0" : ""}`}
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-brand-red uppercase">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
