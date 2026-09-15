export const site = {
  name: "OUVERT",
  fullName: "OUVERT Estratégias Corporativas",
  person: "Luís Otávio Berti",
  tagline:
    "Deixo os números da sua empresa em condição de serem examinados por um terceiro: banco, comprador, investidor ou auditor.",
  base: "Bento Gonçalves / Serra Gaúcha",
  placeholders: {
    whatsapp: "[WHATSAPP]",
    telefone: "[TELEFONE]",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/luisotavioberti",
    linkedinCompany:
      "https://www.linkedin.com/company/ouvert-estrategias-corporativas",
    instagram: "https://www.instagram.com/otavioberti/",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/a-oferta", label: "A Oferta" },
  { href: "/credencial", label: "Credencial" },
  { href: "/casos", label: "Estudos de caso" },
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

export const insightPosts = [
  {
    title: "Os três sinais antes da recuperação judicial",
    excerpt:
      "A maioria das empresas não entra em crise de um dia para o outro. Entra em crise porque ninguém quis ler os sinais.",
    linkedin:
      "https://www.linkedin.com/posts/luisotavioberti_vamos-falar-sobre-reestrutura%C3%A7%C3%A3o-a-maioria-activity-7472754234942185472-OkYA",
  },
  {
    title: "O teatro das promessas na indústria automotiva",
    excerpt:
      "Falei do caso da Lecar. O problema que eu vejo não é técnico — é o que o número aguenta quando um terceiro confere a promessa.",
    linkedin:
      "https://www.linkedin.com/posts/ouvert-estrategias-corporativas_o-teatro-das-promessas-na-ind%C3%BAstria-automotiva-activity-7455022763150336001-5fMt",
  },
  {
    title: "Quando o lucro do banco estatal cai 60%",
    excerpt:
      "Queda histórica de lucro, inadimplência no agro e ROE pressionado. O que isso muda no exame de crédito de quem pede limite.",
    linkedin:
      "https://www.linkedin.com/posts/ouvert-estrategias-corporativas_o-maior-banco-estatal-do-brasil-perdeu-60-activity-7362109188086362113-nVRB",
  },
  {
    title: "Uma oferta quase irresistível",
    excerpt:
      "Promessas de futuro brilhante com contrato preso ao passado. Escrevi sobre isso — e continuo no mesmo ponto.",
    linkedin:
      "https://www.linkedin.com/posts/ouvert-estrategias-corporativas_o-teatro-das-promessas-na-ind%C3%BAstria-automotiva-activity-7404540166100434944-GbBh",
  },
] as const;

export const insightThemes = [
  "Estoque que não bate com o contábil",
  "Contrato de família sem documento",
  "Margem por produto que ninguém consegue explicar",
  "Provisão trabalhista sem lastro para due diligence",
  "Ausência de data room",
  "Receita consolidada que some as linhas ruins com as boas",
  "Caixa no Excel que não fecha com o banco",
  "Covenant que o comitê vai perguntar — e a empresa não tem resposta",
  "Custo por driver inexistente",
  "Sócio que decide no feeling e o orçamento que não sobrevive a um terceiro",
] as const;
