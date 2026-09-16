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

## GitHub Pages

O site é estático (`output: "export"`). No repositório [otavioai/Ouvert](https://github.com/otavioai/Ouvert):

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. Faça push da `main`. O workflow `.github/workflows/pages.yml` publica em `out/`.
3. URL do projeto: [https://otavioai.github.io/Ouvert/](https://otavioai.github.io/Ouvert/).

O build no Actions usa `basePath` `/Ouvert` (necessário nesse endereço). Se apontar um **domínio próprio** em Pages, deixe `NEXT_PUBLIC_BASE_PATH` vazio no workflow — senão os assets pedem `/Ouvert/...` e quebram.

`public/.nojekyll` evita que o Jekyll do Pages ignore a pasta `_next`.

## Conteúdo e placeholders

Copy da Home vem dos arquivos de briefing (`eu` em primeira pessoa; preços e entregáveis visíveis).

Ainda **não** há WhatsApp comercial. No rodapé e em Contato o campo aparece como `[WHATSAPP]` e `[TELEFONE]`.

LinkedIn: [linkedin.com/in/luisotavioberti](https://www.linkedin.com/in/luisotavioberti). Instagram: [instagram.com/otavioberti](https://www.instagram.com/otavioberti/). Insights aponta para postagens públicas do LinkedIn e para o perfil no Instagram.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui

Marca: wordmark e selo em `public/brand/` (azul-aço `#3A7A92` e vermelho `#801818` sobre fundo branco).
