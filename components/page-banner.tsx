import Image from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { photos } from "@/lib/site";

export function PageBanner({
  eyebrow,
  title,
  children,
  image = photos.vineyard,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-50"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_21_32_/_0.88),rgb(11_21_32_/_0.55))]"
      />
      <Container className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
        <p className="text-[11px] font-medium tracking-[0.22em] text-white/70 uppercase">
          {eyebrow}
        </p>
        <h1 className="font-heading mt-4 max-w-3xl text-4xl leading-tight font-normal sm:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
