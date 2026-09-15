import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
        <div className="flex items-start gap-4">
          <BrandLogo variant="seal" className="hidden size-16 shrink-0 sm:block" />
          <div>
            <BrandLogo
              variant="wordmark"
              className="h-10 w-auto max-w-[14rem]"
            />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {site.person} · {site.base}
            </p>
            <p className="mt-4 text-sm tracking-wide text-slate-blue">
              17 DD · R$ 1,5 bi · A&amp;B / Serra
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <p className="text-muted-foreground">
            LinkedIn:{" "}
            <span className="font-mono text-brand">{site.placeholders.linkedin}</span>
          </p>
          <p className="text-muted-foreground">
            WhatsApp:{" "}
            <span className="font-mono text-brand">{site.placeholders.whatsapp}</span>
          </p>
          <Link
            href="/contato"
            className="mt-1 text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            Contato
          </Link>
        </div>
      </Container>
    </footer>
  );
}
