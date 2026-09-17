import Link from "next/link";
import Image from "next/image";
import { Calculator, FolderSearch, Grape, Landmark } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { heroFeatures, photos, site } from "@/lib/site";

const featureIcons = [FolderSearch, Calculator, Landmark, Grape] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={photos.hero}
        alt="Cave de barris — vertical de vinhos e Serra Gaúcha"
        fill
        priority
        className="hero-kenburns object-cover object-center"
        sizes="100vw"
      />
      {/* Matiz marca: ink + azul-aço + leve vermelho OUVERT */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(105deg,rgb(11_21_32_/_0.92)_0%,rgb(11_21_32_/_0.72)_42%,rgb(58_122_146_/_0.45)_72%,rgb(128_24_24_/_0.28)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(11_21_32_/_0.82)_0%,transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgb(58_122_146_/_0.35),transparent_65%)]"
      />

      <Container className="relative pt-28 pb-28 sm:pt-36 sm:pb-36 lg:pt-40 lg:pb-40">
        <p className="rise text-[12px] font-medium tracking-[0.22em] text-white/70 uppercase">
          {site.person} · {site.fullName}
        </p>
        <h1 className="rise rise-delay-1 font-heading mt-5 max-w-3xl text-[2.15rem] leading-[1.12] font-normal tracking-tight sm:text-5xl lg:text-[3.4rem]">
          Deixo os números da sua empresa em condição de serem examinados por um
          terceiro: banco, comprador, investidor ou auditor.
        </h1>
        <p className="rise rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Já participei desse exame dezessete vezes, do outro lado da mesa — e
          construí do zero finanças, risco e governança em empresas que
          precisavam estar prontas para quem analisa.
        </p>
        <div className="rise rise-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            nativeButton={false}
            variant="on-dark"
            render={<Link href="/contato" />}
            className="h-12 whitespace-normal px-6 text-sm tracking-wide sm:whitespace-nowrap"
          >
            Agendar conversa
          </Button>
          <Button
            nativeButton={false}
            variant="appointment"
            render={<Link href="/a-oferta" />}
            className="h-12 whitespace-normal px-6 text-sm tracking-wide sm:whitespace-nowrap"
          >
            Ver as três portas
          </Button>
        </div>
      </Container>

      <Container className="relative pb-10 sm:pb-12">
        <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <li
                key={item.title}
                className="bg-ink/70 px-5 py-6 backdrop-blur-sm transition-colors hover:bg-ink/85"
              >
                <Icon className="size-6 text-white" strokeWidth={1.4} />
                <p className="mt-4 text-[11px] font-medium tracking-[0.18em] text-white uppercase">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
