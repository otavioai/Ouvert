# OUVERT Estratégias Corporativas

Site institucional de **Luís Otávio Berti** — OUVERT Estratégias Corporativas. Página inicial em português, mobile-first, para inbound no LinkedIn (médio porte em alimentos e bebidas / vinícolas da Serra Gaúcha).

Nesta versão a Home segue o recorte editorial de consultoria (diagnóstico em duas perguntas, clientes nomeados, insights). A Oferta, Credencial, Estudos de caso, Insights e Contato estão no ar.

## Rodar localmente

Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:4317](http://localhost:4317).

Outros comandos:

```bash
npm run build    # export estático em out/
npm run start    # servir out/ na porta 4317
npm run lint
```

## Área logada (`/admin`)

Edite textos, fotos e fontes sem mexer no código:

1. Abra [http://localhost:4317/admin](http://localhost:4317/admin) (ou `/admin` no domínio).
2. Entre com a senha inicial `ouvert2026` (troque o hash em `content/admin.json` depois).
3. Para **publicar** no ar, informe um Personal Access Token do GitHub com permissão `repo` no repositório [otavioai/Ouvert](https://github.com/otavioai/Ouvert).
4. Ajuste as abas **Textos**, **Fotos**, **Fontes** ou **Contato** e clique em **Publicar no GitHub**.

O publish grava `content/site.json` (e uploads em `public/photos/`) via GitHub Contents API. O Actions reconstrói o site estático em alguns minutos.

Conteúdo editável vive em `content/site.json`. O site lê esse arquivo em build (`lib/site.ts`).

## GitHub Pages + domínio

Produção: [https://www.ouvertestrategias.com.br/](https://www.ouvertestrategias.com.br/). O site é estático (`output: "export"`), sem `basePath`.

No repositório [otavioai/Ouvert](https://github.com/otavioai/Ouvert):

1. **Settings → Pages → Source:** GitHub Actions.
2. **Custom domain:** `www.ouvertestrategias.com.br` (o arquivo `public/CNAME` já leva isso no deploy).
3. Depois que o DNS resolver, marque **Enforce HTTPS**.

DNS no registrador do `.com.br`:

| Tipo | Nome | Valor |
| --- | --- | --- |
| CNAME | `www` | `otavioai.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Os registros A no apex (`ouvertestrategias.com.br`) mandam o domínio nu para o Pages; o CNAME `www` é o canônico.

`public/.nojekyll` evita que o Jekyll do Pages ignore a pasta `_next`.

## Contato

- Telefone / WhatsApp: [11 97236 3032](https://wa.me/5511972363032)
- LinkedIn: [linkedin.com/in/luisotavioberti](https://www.linkedin.com/in/luisotavioberti)
- Instagram: [instagram.com/ouvert.consult](https://www.instagram.com/ouvert.consult/)
- Base: Bento Gonçalves / Serra Gaúcha

Copy da Home vem dos arquivos de briefing (`eu` em primeira pessoa; preços e entregáveis visíveis).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui

Marca: wordmark e selo em `public/brand/` (azul-aço `#3A7A92` e vermelho `#801818` sobre fundo branco).
