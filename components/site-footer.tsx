import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16">
        <div className="flex items-start gap-4">
          <BrandLogo
            variant="seal-white"
            className="hidden size-16 shrink-0 sm:block"
          />
          <div>
            <BrandLogo
              variant="wordmark-white"
              className="h-10 w-auto max-w-[14rem]"
            />
            <p className="mt-3 max-w-sm text-sm text-white/65">
              {site.person} · {site.base}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white"
          >
            Instagram
          </a>
          <p className="text-white/55">
            WhatsApp:{" "}
            <span className="font-mono text-white/80">
              {site.placeholders.whatsapp}
            </span>
          </p>
          <Link href="/contato" className="text-white hover:underline">
            Contato
          </Link>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-[11px] tracking-wide text-white/40">
          Imagens de apoio: Unsplash License. Retrato: {site.person}.
        </Container>
      </div>
    </footer>
  );
}
