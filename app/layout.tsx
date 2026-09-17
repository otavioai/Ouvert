import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteShell } from "@/components/site-shell";
import { googleFontsHref } from "@/lib/fonts";
import { fonts, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${site.fullName} — ${site.person}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  robots: {
    index: true,
    follow: true,
  },
};

const fontsLink = googleFontsHref(fonts.display, fonts.sans);
const useGeistSans = fonts.sans === "Geist";

const htmlStyle = {
  "--font-display": `"${fonts.display}", Georgia, serif`,
  ...(useGeistSans
    ? {}
    : { "--font-sans": `"${fonts.sans}", system-ui, sans-serif` }),
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${useGeistSans ? geistSans.variable : ""} ${geistMono.variable} h-full antialiased`}
      style={htmlStyle}
    >
      <head>
        {fontsLink ? (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link href={fontsLink} rel="stylesheet" />
          </>
        ) : null}
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Ir para o conteúdo
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
