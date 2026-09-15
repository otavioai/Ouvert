export const site = {
  name: "OUVERT",
  fullName: "OUVERT Estratégias",
  person: "Luís Otávio Berti",
  tagline:
    "Deixo os números da sua empresa em condição de serem examinados por um terceiro: banco, comprador, investidor ou auditor.",
  base: "Bento Gonçalves / Serra Gaúcha",
  placeholders: {
    whatsapp: "[WHATSAPP]",
    linkedin: "[LINKEDIN]",
    telefone: "[TELEFONE]",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/a-oferta", label: "A Oferta" },
  { href: "/credencial", label: "Credencial" },
  { href: "/casos", label: "Casos" },
  { href: "/insights", label: "Insights" },
  { href: "/contato", label: "Contato" },
] as const;

export const headerCta = {
  href: "/contato",
  label: "Conversa de 45 min",
} as const;

export const offers = [
  {
    id: "sala-de-exame",
    eyebrow: "Porta principal",
    title: "Sala de exame",
    forWho:
      "Para quem vai a M&A, entrada de sócio ou investidor, sucessão ou primeira auditoria.",
    price: "R$ 35.000 a 60.000",
    term: "4 a 8 semanas",
    deliverableNoun: "Sala de exame arrumada",
    deliverable:
      "Sala de exame arrumada — levantamento do que reprova, reconstrução auditável, data room e ensaio das perguntas do comprador.",
    featured: true,
  },
  {
    id: "orcamento-2027",
    eyebrow: "Janela setembro–novembro",
    title: "Orçamento 2027",
    subtitle: "Diagnóstico Financeiro Express",
    forWho: "Para quem fecha orçamento entre setembro e novembro.",
    price: "R$ 12.000 a 18.000",
    term: "15 dias",
    note: "Raio-X para vinícolas: R$ 4.500 a 6.000",
    deliverableNoun: "Orçamento aprovável",
    deliverable:
      "Orçamento aprovável — receita por linha, custos por driver, caixa mês a mês, três cenários, painel e apresentação aos sócios.",
    featured: false,
  },
  {
    id: "dossie-banco",
    eyebrow: "Crédito e covenant",
    title: "Dossiê para o banco",
    forWho: "Para quem renova limite, busca capital de giro ou responde a covenant.",
    price: "R$ 12.000 a 18.000",
    term: "15 dias",
    deliverableNoun: "Dossiê de crédito",
    deliverable:
      "Dossiê de crédito — projeções em formato de comitê, análise de endividamento e roteiro de negociação.",
    featured: false,
  },
] as const;

export const stats = [
  {
    value: "17",
    label: "due diligences consecutivas aprovadas",
  },
  {
    value: "R$ 1,5 bi",
    label: "de exposição trabalhista estruturada em controles (Safra)",
  },
  {
    value: "Cinco",
    label: "unidades de negócio no histórico de construção de finanças, risco e governança",
  },
  {
    value: "A&B / Serra",
    label: "histórico real em alimentos e bebidas, com ligação à Serra Gaúcha",
  },
] as const;
