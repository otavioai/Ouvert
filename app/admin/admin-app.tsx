"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  clearAdminSession,
  getGithubToken,
  isAdminLoggedIn,
  setAdminSession,
  setGithubToken,
  verifyAdminPassword,
} from "@/lib/admin-auth";
import { FONT_OPTIONS, SANS_FONT_IDS } from "@/lib/fonts";
import { publishSiteContent, uploadPublicImage } from "@/lib/github-publish";
import { content as initialContent, type SiteContent } from "@/lib/site";

type Tab = "textos" | "fotos" | "fontes" | "contato";

export function AdminApp() {
  const [ready, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [tab, setTab] = useState<Tab>("textos");
  const [draft, setDraft] = useState<SiteContent>(
    structuredClone(initialContent) as SiteContent
  );

  useEffect(() => {
    setLoggedIn(isAdminLoggedIn());
    setToken(getGithubToken());
    setReady(true);
  }, []);

  const photoEntries = useMemo(
    () =>
      Object.entries(draft.photos) as [
        keyof SiteContent["photos"],
        string,
      ][],
    [draft.photos]
  );

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");
    const ok = await verifyAdminPassword(password);
    if (!ok) {
      setError("Senha incorreta.");
      return;
    }
    setAdminSession(token.trim() || undefined);
    setLoggedIn(true);
    setPassword("");
  }

  function logout() {
    clearAdminSession();
    setLoggedIn(false);
    setStatus("");
  }

  async function handlePublish() {
    setBusy(true);
    setError("");
    setStatus("");
    try {
      const gh = token.trim() || getGithubToken();
      if (!gh) {
        throw new Error(
          "Informe um token GitHub (repo) para publicar no repositório."
        );
      }
      setGithubToken(gh);
      await publishSiteContent(draft, gh);
      setStatus(
        "Publicado. O GitHub Actions vai reconstruir o site em alguns minutos."
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao publicar.");
    } finally {
      setBusy(false);
    }
  }

  async function handlePhotoUpload(
    key: keyof SiteContent["photos"],
    file: File | null
  ) {
    if (!file) return;
    setBusy(true);
    setError("");
    setStatus("");
    try {
      const gh = token.trim() || getGithubToken();
      if (!gh) throw new Error("Token GitHub necessário para enviar foto.");
      setGithubToken(gh);
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const relative = `public/photos/admin-${key}-${Date.now()}-${safeName}`;
      const publicPath = await uploadPublicImage(
        draft.github,
        gh,
        relative,
        file
      );
      setDraft((prev) => ({
        ...prev,
        photos: { ...prev.photos, [key]: publicPath },
      }));
      setStatus(`Foto ${key} enviada: ${publicPath}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha no upload.");
    } finally {
      setBusy(false);
    }
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Carregando…
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-16">
        <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
          Área logada
        </p>
        <h1 className="font-heading mt-3 text-3xl">Admin OUVERT</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Edite textos, fotos e fontes. Para gravar no ar, use um token GitHub
          com permissão repo.
        </p>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <label className="block text-sm">
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              required
            />
          </label>
          <label className="block text-sm">
            Token GitHub (obrigatório para publicar)
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-xs"
              placeholder="ghp_…"
            />
          </label>
          {error ? <p className="text-sm text-brand-red">{error}</p> : null}
          <Button type="submit" className="h-11 w-full rounded-sm">
            Entrar
          </Button>
        </form>
        <Link
          href="/"
          className="mt-6 text-center text-sm text-brand hover:underline"
        >
          Voltar ao site
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Admin
          </p>
          <h1 className="font-heading mt-2 text-3xl">Conteúdo do site</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-sm border border-border px-4 text-sm"
          >
            Ver site
          </Link>
          <button
            type="button"
            onClick={logout}
            className="inline-flex h-10 items-center rounded-sm border border-border px-4 text-sm"
          >
            Sair
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={handlePublish}
            className="inline-flex h-10 items-center rounded-sm bg-brand-red px-4 text-sm text-white disabled:opacity-60"
          >
            {busy ? "Publicando…" : "Publicar no GitHub"}
          </button>
        </div>
      </div>

      <label className="mt-6 block max-w-xl text-sm">
        Token GitHub
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-xs"
          placeholder="ghp_…"
        />
      </label>

      {error ? <p className="mt-4 text-sm text-brand-red">{error}</p> : null}
      {status ? <p className="mt-4 text-sm text-brand">{status}</p> : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {(
          [
            ["textos", "Textos"],
            ["fotos", "Fotos"],
            ["fontes", "Fontes"],
            ["contato", "Contato"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-sm px-4 py-2 text-sm ${
              tab === id
                ? "bg-ink text-white"
                : "border border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6 rounded-lg border border-border bg-background p-6">
        {tab === "textos" ? (
          <>
            <Field
              label="Título do hero"
              value={draft.home.heroTitle}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, heroTitle: v } })
              }
              multiline
            />
            <Field
              label="Lead do hero"
              value={draft.home.heroLead}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, heroLead: v } })
              }
              multiline
            />
            <Field
              label="Título Sobre"
              value={draft.home.aboutTitle}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, aboutTitle: v } })
              }
            />
            <Field
              label="Destaque Sobre"
              value={draft.home.aboutTitleAccent}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  home: { ...draft.home, aboutTitleAccent: v },
                })
              }
            />
            <Field
              label="Texto Sobre"
              value={draft.home.aboutText}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, aboutText: v } })
              }
              multiline
            />
            <Field
              label="Título CTA"
              value={draft.home.ctaTitle}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, ctaTitle: v } })
              }
            />
            <Field
              label="Lead CTA"
              value={draft.home.ctaLead}
              onChange={(v) =>
                setDraft({ ...draft, home: { ...draft.home, ctaLead: v } })
              }
              multiline
            />
            {draft.offers.map((offer, index) => (
              <div key={offer.id} className="border-t border-border pt-5">
                <p className="text-sm font-medium">{offer.title}</p>
                <Field
                  label="Preço"
                  value={offer.price}
                  onChange={(v) => {
                    const offers = [...draft.offers];
                    offers[index] = { ...offer, price: v };
                    setDraft({ ...draft, offers });
                  }}
                />
                <Field
                  label="Para quem"
                  value={offer.forWho}
                  onChange={(v) => {
                    const offers = [...draft.offers];
                    offers[index] = { ...offer, forWho: v };
                    setDraft({ ...draft, offers });
                  }}
                  multiline
                />
                <Field
                  label="Entregável"
                  value={offer.deliverable}
                  onChange={(v) => {
                    const offers = [...draft.offers];
                    offers[index] = { ...offer, deliverable: v };
                    setDraft({ ...draft, offers });
                  }}
                  multiline
                />
              </div>
            ))}
          </>
        ) : null}

        {tab === "fotos" ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {photoEntries.map(([key, src]) => (
              <div key={key} className="space-y-3">
                <p className="text-sm font-medium capitalize">{key}</p>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
                  <Image
                    src={src}
                    alt={key}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                <Field
                  label="Caminho / URL"
                  value={src}
                  onChange={(v) =>
                    setDraft({
                      ...draft,
                      photos: { ...draft.photos, [key]: v },
                    })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  disabled={busy}
                  onChange={(e) =>
                    handlePhotoUpload(key, e.target.files?.[0] || null)
                  }
                />
              </div>
            ))}
          </div>
        ) : null}

        {tab === "fontes" ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              Fonte de título
              <select
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                value={draft.fonts.display}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    fonts: { ...draft.fonts, display: e.target.value },
                  })
                }
              >
                {FONT_OPTIONS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              Fonte de corpo
              <select
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                value={draft.fonts.sans}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    fonts: { ...draft.fonts, sans: e.target.value },
                  })
                }
              >
                {FONT_OPTIONS.filter((f) =>
                  (SANS_FONT_IDS as readonly string[]).includes(f.id)
                ).map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>
            <p className="text-sm text-muted-foreground sm:col-span-2">
              Preferência do site: sem serifa (IBM Plex Sans). Serifas ficam
              disponíveis só no título. Depois de publicar, o build aplica as
              fontes no site público.
            </p>
          </div>
        ) : null}

        {tab === "contato" ? (
          <>
            <Field
              label="Pessoa"
              value={draft.site.person}
              onChange={(v) =>
                setDraft({ ...draft, site: { ...draft.site, person: v } })
              }
            />
            <Field
              label="Base"
              value={draft.site.base}
              onChange={(v) =>
                setDraft({ ...draft, site: { ...draft.site, base: v } })
              }
            />
            <Field
              label="Telefone (exibição)"
              value={draft.site.contact.telefone}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    contact: { ...draft.site.contact, telefone: v },
                  },
                })
              }
            />
            <Field
              label="Telefone (link tel:)"
              value={draft.site.contact.telefoneHref}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    contact: { ...draft.site.contact, telefoneHref: v },
                  },
                })
              }
            />
            <Field
              label="WhatsApp (exibição)"
              value={draft.site.contact.whatsapp}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    contact: { ...draft.site.contact, whatsapp: v },
                  },
                })
              }
            />
            <Field
              label="WhatsApp (link wa.me)"
              value={draft.site.contact.whatsappHref}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    contact: { ...draft.site.contact, whatsappHref: v },
                  },
                })
              }
            />
            <Field
              label="LinkedIn URL"
              value={draft.site.social.linkedin}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    social: { ...draft.site.social, linkedin: v },
                  },
                })
              }
            />
            <Field
              label="Instagram URL"
              value={draft.site.social.instagram}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  site: {
                    ...draft.site,
                    social: { ...draft.site.social, instagram: v },
                  },
                })
              }
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  const className =
    "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm";
  return (
    <label className="block text-sm">
      {label}
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${className} min-h-24`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={className}
        />
      )}
    </label>
  );
}
