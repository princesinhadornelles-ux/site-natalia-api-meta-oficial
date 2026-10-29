/**
 * Configuration for WhatsApp rotation and site constants
 */

export const WHATSAPP_POOLS = {
  TESTE: [
    "5519983880841", // ADS 0841
    "5511953738283", // ADS 8283
    "5554920031494", // ADS 1494
    "5518981550717", // ADS 0717
    "5519988741698", // ADS 1698
    "5519987508959", // ADS 8959
    "5519988792084", // ADS 2084
    "5521979358021", // ADS 8021
  ],
  COMPRA: [
    "5519983880841", // ADS 0841
    "5511953738283", // ADS 8283
    "5554920031494", // ADS 1494
    "5518981550717", // ADS 0717
    "5519988741698", // ADS 1698
    "5519987508959", // ADS 8959
    "5519988792084", // ADS 2084
    "5521979358021", // ADS 8021
  ],
  COMPLETO: [
    "5519983880841", // ADS 0841
    "5511953738283", // ADS 8283
    "5554920031494", // ADS 1494
    "5518981550717", // ADS 0717
    "5519988741698", // ADS 1698
    "5519987508959", // ADS 8959
    "5519988792084", // ADS 2084
    "5521979358021", // ADS 8021
  ]
};

/**
 * Modal de pré-atendimento exibido ao clicar em qualquer botão de WhatsApp.
 * - ativo: false => nenhum modal; os botões funcionam como antes.
 * - modelo: 1 => nome + telefone | 2 => somente telefone (no modelo 2, nomeObrigatorio não tem efeito).
 * - nomeObrigatorio / telefoneObrigatorio: true = obrigatório | false = opcional.
 * O nome nunca sai do navegador. O telefone só é enviado ao GestAuto quando preenchido e válido.
 */
export const WHATSAPP_MODAL_CONFIG = {
  ativo: true,
  modelo: 1 as 1 | 2,
  nomeObrigatorio: false,
  telefoneObrigatorio: true,
  titulo: "Vamos começar seu atendimento?",
  subtitulo: "Preencha os dados abaixo para continuar.",
  rotuloNome: "Seu nome",
  placeholderNome: "Digite seu nome",
  rotuloTelefone: "Seu WhatsApp",
  placeholderTelefone: "(DDD) 99999-9999",
  textoBotao: "Falar No Whatsapp - Gerar Teste",
  textoContinuarSemPreencher: "Continuar sem preencher",
  textoFinalidade: "Usamos seu WhatsApp somente para identificar e agilizar o seu atendimento.",
};

export const SITE_CONFIG = {
  name: "66.387.501 NATALIA SILVA DORNELLES",
  email: "princesinhadornelles@gmail.com",
  address: "QUADRA 32, 18, COND CONDOMINIO CENTRO OESTE IV AGUAS LINDAS DE GOIAS – GO, CEP: 72914-218",
  cnpj: "66.387.501/0001-80",
  description: "Filmes My View - O maior portal de recomendações de filmes e séries. Conteúdo 100% legal.",
  regionTitle: "Atendimento em São José dos Campos e Região",
  footerDisclaimer: "Este site não hospeda, transmite ou disponibiliza conteúdos audiovisuais. Apenas publicamos informações e recomendamos plataformas oficiais.",
  copyright: "© 2026 Filmes My View - Portal em conformidade com Google Ads"
};

export type PoolType = keyof typeof WHATSAPP_POOLS;

/**
 * Gets the current active WhatsApp number from a specific pool based on the day.
 */
export function getActiveWhatsApp(pool: PoolType = "TESTE"): string {
  const numbers = WHATSAPP_POOLS[pool];
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const index = dayOfYear % numbers.length;
  return numbers[index];
}

export function getWhatsAppLink(
  message: string = "Olá, gostaria de saber mais sobre o guia Filmes My View.",
  pool: PoolType = "TESTE"
): string {
  const number = getActiveWhatsApp(pool);
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
