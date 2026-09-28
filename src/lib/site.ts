export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dra-isadora-spada.vercel.app";

export const doctor = {
  name: "Dra. Isadora Mór Spada",
  shortName: "Dra. Isadora",
  handle: "@draisadoraspada",
  cro: "CRO-SC 18650",
  city: "Blumenau",
  state: "SC",
  stateFull: "Santa Catarina",
  neighborhoodHint: "Bnu",
  tagline: "uma doc autêntica pra rostos autênticos",
  specialty: "Harmonização facial",
} as const;

export const links = {
  whatsapp: "https://wa.me/message/JO4Z2TQT4S2VK1",
  instagram: "https://www.instagram.com/draisadoraspada/",
} as const;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#faq", label: "FAQ" },
] as const;

export const highlights = [
  { label: "LipSense®", hint: "método" },
  { label: "Ilumme", hint: "mentoria" },
  { label: "SynFace", hint: "protocolo" },
  { label: "Clínica", hint: "Bnu" },
  { label: "Botox", hint: "expressão" },
  { label: "Lábios", hint: "preenchimento" },
] as const;

export const services = [
  {
    id: "harmonizacao",
    kicker: "01",
    title: "Harmonização facial",
    city: "Blumenau",
    description:
      "Planejamento do rosto inteiro — proporção, luz e movimento — para realçar o que já é seu, sem máscara de procedimento.",
    points: ["Avaliação orofacial", "Plano sob medida", "Resultado natural"],
    featured: true,
  },
  {
    id: "botox",
    kicker: "02",
    title: "Botox em Blumenau",
    city: "Toxina botulínica",
    description:
      "Suaviza rugas de expressão e previne marcas, com dose e pontos pensados para o seu gesto — não para um filtro.",
    points: ["Terço superior", "Sorriso gengival", "Prevenção"],
    featured: false,
  },
  {
    id: "preenchimento",
    kicker: "03",
    title: "Preenchimento",
    city: "Ácido hialurônico",
    description:
      "Lábios, malar, mento e contornos com técnica precisa. Inclui o Método LipSense® para lábios com identidade.",
    points: ["Lábios LipSense®", "Malar e mento", "Olheiras"],
    featured: false,
  },
  {
    id: "mentoria",
    kicker: "04",
    title: "Mentoria Ilumme",
    city: "LipSense® · SynFace",
    description:
      "Formação e posicionamento para profissionais da estética que querem técnica, gestão e verdade no consultório.",
    points: ["Método LipSense®", "SynFace", "Posicionamento"],
    featured: false,
  },
] as const;

export const differentials = [
  {
    n: "01",
    title: "Rostos autênticos, não copiados",
    text: "Protocolo clínico que parte da sua anatomia e da sua história. Harmonia, não padronização.",
  },
  {
    n: "02",
    title: "Método LipSense®",
    text: "Leitura própria para lábios: volume, borda e movimento com assinatura — sem o “lábio de catálogo”.",
  },
  {
    n: "03",
    title: "Os 2 universos da Isa",
    text: "Clínica em Blumenau e mentoria Ilumme no mesmo olhar: pacientes no consultório, profissionais em formação.",
  },
  {
    n: "04",
    title: "Presença local, CRO-SC 18650",
    text: "Atendimento humanizado em Blumenau/SC, com hora marcada e conversa franca antes de qualquer procedimento.",
  },
] as const;

export const faqs = [
  {
    q: "Onde fazer harmonização facial em Blumenau?",
    a: "A Dra. Isadora Mór Spada (CRO-SC 18650) realiza harmonização facial em Blumenau, Santa Catarina. A avaliação é individual, com hora marcada pelo WhatsApp — o plano considera anatomia, queixa e o que faz sentido para o seu rosto, não um pacote genérico.",
  },
  {
    q: "A Dra. Isadora aplica botox em Blumenau?",
    a: "Sim. A toxina botulínica (botox) é um dos procedimentos da clínica, usada para suavizar rugas de expressão, equilibrar o terço superior e, quando indicado, sorriso gengival. Indicação, dose e pontos saem da avaliação presencial.",
  },
  {
    q: "Qual a diferença entre botox e preenchimento?",
    a: "O botox relaxa músculos responsáveis por rugas dinâmicas. O preenchimento com ácido hialurônico devolve ou redistribui volume (lábios, malar, mento, olheiras). Na harmonização facial em Blumenau, os dois podem se complementar — nunca de forma automática.",
  },
  {
    q: "O que é o Método LipSense®?",
    a: "É o método criado pela Dra. Isadora para lábios com identidade: leitura de proporção, borda e movimento, para um resultado que conversa com o restante do rosto. Disponível no consultório e ensinado na Mentoria Ilumme.",
  },
  {
    q: "A Mentoria Ilumme é para pacientes ou para profissionais?",
    a: "A Mentoria Ilumme é voltada a profissionais da estética que querem técnica (incluindo LipSense® e SynFace), gestão e posicionamento. Pacientes de harmonização, botox e preenchimento são atendidos na clínica, em Blumenau.",
  },
  {
    q: "Quanto custa harmonização facial, botox ou preenchimento em Blumenau?",
    a: "Valores dependem do plano, da quantidade de produto e da indicação clínica. Não trabalhamos com tabela fechada sem avaliação. O caminho é uma conversa no WhatsApp e, se fizer sentido, uma consulta presencial.",
  },
  {
    q: "Harmonização facial dói? É segura?",
    a: "Conforto e segurança começam na avaliação, no material e na técnica. Pode haver desconforto pontual e inchaço esperado nos primeiros dias. Resultados variam; nenhum procedimento estético deve ser prometido como “definitivo” ou isento de risco. A Dra. Isadora explica indicações e cuidados antes de qualquer conduta.",
  },
  {
    q: "Como agendar uma avaliação em Blumenau?",
    a: "Pelo WhatsApp da clínica. Atendimento com hora marcada em Blumenau/SC. Enquanto isso, o Instagram @draisadoraspada mostra os dois universos — clínica e mentoria — com transparência de bastidor.",
  },
] as const;

export const seo = {
  title: "Harmonização Facial em Blumenau | Dra. Isadora Mór Spada",
  description:
    "Harmonização facial, botox e preenchimento em Blumenau/SC com a Dra. Isadora Mór Spada (CRO-SC 18650). Método LipSense®, Mentoria Ilumme e SynFace. Uma doc autêntica pra rostos autênticos.",
  keywords: [
    "harmonização facial Blumenau",
    "botox Blumenau",
    "preenchimento Blumenau",
    "preenchimento labial Blumenau",
    "harmonização orofacial Blumenau",
    "Dra. Isadora Spada",
    "Método LipSense",
    "Mentoria Ilumme",
    "SynFace",
    "estética facial Blumenau",
    "CRO-SC 18650",
  ],
} as const;
