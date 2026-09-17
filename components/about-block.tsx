import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { photos, site } from "@/lib/site";

export function AboutBlock() {
  return (
    <section className="bg-background py-16 sm:py-24" aria-labelledby="sobre-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand-red uppercase">
              — Sobre
            </p>
            <h2
              id="sobre-heading"
              className="font-heading mt-3 text-3xl leading-tight font-normal sm:text-5xl"
            >
              Experiência do outro lado da mesa,{" "}
              <span className="text-brand">dezessete vezes.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              Não apresento só currículo. Mostro o que já preparei do lado de
              quem analisa — e o que deixo pronto do seu lado. Base na Serra
              Gaúcha, vertical em alimentos e bebidas.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={photos.portraitClose}
                alt={site.person}
                width={72}
                height={72}
                className="size-[4.5rem] rounded-full object-cover object-[center_20%] grayscale"
              />
              <div>
                <p className="font-medium">{site.person}</p>
                <p className="text-sm tracking-wide text-slate-blue uppercase">
                  {site.fullName}
                </p>
              </div>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/credencial" />}
              className="mt-8 h-11 rounded-full px-5 text-sm"
            >
              Credencial
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -top-6 -right-4 hidden h-full w-[88%] border border-border sm:block"
            />
            <div className="relative overflow-hidden bg-ink shadow-[0_30px_80px_rgb(11_21_32_/_0.18)]">
              <Image
                src={photos.portrait}
                alt={`${site.person}, foto em preto e branco`}
                width={832}
                height={1248}
                className="aspect-[4/5] w-full object-cover object-top grayscale"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
