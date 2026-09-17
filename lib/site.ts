import raw from "@/content/site.json";

export type SiteContent = typeof raw;

export const content = raw as SiteContent;

export const site = content.site;
export const headerCta = content.headerCta;
export const photos = content.photos;
export const heroFeatures = content.heroFeatures;
export const offers = content.offers;
export const whyNow = content.whyNow;
export const clients = content.clients;
export const homeCopy = content.home;
export const fonts = content.fonts;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/a-oferta", label: "A Oferta" },
  { href: "/credencial", label: "Credencial" },
  { href: "/casos", label: "Estudos de caso" },
  { href: "/insights", label: "Insights" },
  { href: "/contato", label: "Contato" },
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
