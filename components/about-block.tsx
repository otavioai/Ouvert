import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { homeCopy, photos, site } from "@/lib/site";

export function AboutBlock() {
  return (
    <section className="bg-background py-20 sm:py-28" aria-labelledby="sobre-heading">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="h-0.5 w-10 bg-brand-red" aria-hidden />
            <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-brand-red uppercase">
              Sobre
            </p>
            <h2
              id="sobre-heading"
              className="font-heading mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-[2.75rem]"
            >
              {homeCopy.aboutTitle}{" "}
              <span className="text-brand-red">{homeCopy.aboutTitleAccent}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {homeCopy.aboutText}
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-semibold text-foreground">{site.person}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.fullName} · {site.base}
              </p>
            </div>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="/credencial" />}
              className="mt-8 h-11 px-5 text-sm font-medium"
            >
              Credencial
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src={photos.portrait}
              alt={`${site.person}, foto em preto e branco`}
              width={832}
              height={1248}
              className="aspect-[4/5] w-full object-cover object-top grayscale"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
