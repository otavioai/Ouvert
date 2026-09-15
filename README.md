# OUVERT Estratégias Corporativas

Site institucional de **Luís Otávio Berti** — OUVERT Estratégias Corporativas. Página inicial em português, mobile-first, para inbound no LinkedIn (médio porte em alimentos e bebidas / vinícolas da Serra Gaúcha).

Nesta versão a **Home** está completa. As demais rotas (A Oferta, Credencial, Casos, Insights, Contato) existem como páginas-placeholder com a navegação funcionando.

## Rodar localmente

Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:4317](http://localhost:4317).

Outros comandos:

```bash
npm run build    # produção
npm run start    # servir o build (use a mesma porta do next start, ou --port)
npm run lint
```

## Conteúdo e placeholders

Copy da Home vem dos arquivos de briefing (`eu` em primeira pessoa; preços e entregáveis visíveis).

Ainda **não** há URLs reais de contato. No rodapé e em Contato os campos aparecem assim, de propósito:

- `[WHATSAPP]`
- `[LINKEDIN]`
- `[TELEFONE]`

O CTA «Baixar o caso da vinícola» fica desabilitado até o PDF existir.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui

Marca: wordmark e selo em `public/brand/` (azul-aço `#3A7A92` e vermelho `#801818` sobre fundo branco).
