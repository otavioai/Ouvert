export const site = {
  name: "OUVERT",
  fullName: "OUVERT Estratégias Corporativas",
  url: "https://www.ouvertestrategias.com.br",
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
  label: "Agendar conversa",
} as const;

export const photos = {
  hero: "/photos/hero-cave.jpg",
  bottles: "/photos/hero-bottles.jpg",
  vineyard: "/photos/vineyard.jpg",
  wine: "/photos/wine-glass.jpg",
  ledger: "/photos/ledger.jpg",
  portrait: "/portraits/otavio-seated.jpg",
  portraitClose: "/portraits/otavio-close.jpg",
} as const;

export const heroFeatures = [
  {
    title: "Due diligence",
    text: "17 exames consecutivos, ao lado de quem analisa.",
  },
  {
    title: "Controles",
    text: "R$ 1,5 bi de exposição trabalhista estruturada (Safra).",
  },
  {
    title: "Governança",
    text: "Finanças e risco construídos do zero em cinco unidades.",
  },
  {
    title: "A&B / Serra",
    text: "Histórico real em alimentos, bebidas e vinícolas.",
  },
] as const;

export const offers = [
  {
    id: "sala-de-exame",
    eyebrow: "Porta principal",
    title: "Sala de exame",
    forWho:
      "Para quem vai a M&A, entrada de sócio ou investidor, sucessão ou primeira auditoria.",
    price: "R$ 35.000 a 60.000",
    term: "4 a 8 semanas",
    deliverableNoun: "Sala de exame organizada",
    deliverable:
      "Sala de exame organizada — levantamento dos pontos sensíveis, reconstrução auditável, data room e ensaio das perguntas do comprador.",
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
      "A maioria das empresas não entra em crise de um dia para o outro. Os sinais costumam aparecer antes — e dá para lê-los a tempo.",
    linkedin:
      "https://www.linkedin.com/posts/luisotavioberti_vamos-falar-sobre-reestrutura%C3%A7%C3%A3o-a-maioria-activity-7472754234942185472-OkYA",
  },
  {
    title: "O teatro das promessas na indústria automotiva",
    excerpt:
      "Falei do caso da Lecar. O ponto que me interessa não é só o técnico — é o que o número sustenta quando um terceiro confere a promessa.",
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
  "Estoque que não fecha com o contábil",
  "Contrato de família ainda sem documento",
  "Margem por produto difícil de explicar",
  "Provisão trabalhista sem lastro para due diligence",
  "Ausência de data room",
  "Receita consolidada que mistura linhas boas e ruins",
  "Caixa no Excel que não fecha com o banco",
  "Covenant que o comitê vai perguntar — e a resposta ainda não está pronta",
  "Custo por driver inexistente",
  "Sócio que decide na intuição e orçamento que não sustenta um terceiro",
] as const;

export const industries = [
  "Alimentos e bebidas",
  "Vinícolas",
  "Serra Gaúcha",
  "M&A e sucessão",
  "Crédito e covenant",
] as const;

export const clients = [
  {
    name: "Vallontano",
    sector: "Vinhos nobres · Vale dos Vinhedos",
    url: "https://vallontano.com.br/",
    note: "Vinícola em Bento Gonçalves. Atendi no vertical de alimentos e bebidas.",
  },
  {
    name: "Panamby Capital",
    sector: "Gestão de recursos",
    url: "https://www.panambycapital.com.br/",
    note: "Transformação regulatória: montei o instrumento de controle onde ainda não havia estrutura para quem ia conferir.",
  },
] as const;

export const triggers = [
  {
    id: "exame",
    label: "Comprador, sócio, investidor, sucessão ou auditoria",
    offerId: "sala-de-exame",
  },
  {
    id: "orcamento",
    label: "Orçamento 2027 ou diagnóstico financeiro",
    offerId: "orcamento-2027",
  },
  {
    id: "banco",
    label: "Banco, limite, capital de giro ou covenant",
    offerId: "dossie-banco",
  },
] as const;

export const whyNow = [
  {
    title: "Comprador à vista",
    text: "M&A, sócio ou investidor pedem detalhe além da aproximação. A sala de exame deixa o processo mais seguro para os dois lados.",
  },
  {
    title: "Janela de 2027",
    text: "Quem fecha orçamento entre setembro e novembro precisa de receita por linha, custo por driver e caixa mês a mês — aprovável pelos sócios.",
  },
  {
    title: "Banco na mesa",
    text: "Renovação de limite, capital de giro ou covenant: o comitê pergunta no formato dele. Eu deixo o dossiê nesse formato.",
  },
  {
    title: "Primeira auditoria",
    text: "Sucessão ou primeira conferência externa. O padrão é o mesmo: o que precisa de ajuste, o que fica auditável, o ensaio das perguntas.",
  },
] as const;
