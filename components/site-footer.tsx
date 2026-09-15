import Link from "next/link";

import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
        <div>
          <p className="font-heading text-lg tracking-[0.32em]">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {site.person} · {site.base}
          </p>
          <p className="mt-4 text-sm tracking-wide text-slate-blue">
            17 DD · R$ 1,5 bi · A&amp;B / Serra
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <p className="text-muted-foreground">
            LinkedIn:{" "}
            <span className="font-mono text-gold">{site.placeholders.linkedin}</span>
          </p>
          <p className="text-muted-foreground">
            WhatsApp:{" "}
            <span className="font-mono text-gold">{site.placeholders.whatsapp}</span>
          </p>
          <Link
            href="/contato"
            className="mt-1 text-foreground underline-offset-4 hover:text-gold hover:underline"
          >
            Contato
          </Link>
        </div>
      </Container>
    </footer>
  );
}
