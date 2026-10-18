/**
 * Configuration for WhatsApp rotation and site constants
 */

export const WHATSAPP_POOLS = {
  TESTE: [
    "5519983880841", // Número 1
    "5519988582346", // Número 2
    "5519988932787", // Número 3
    "5518981550717", // Número 4
    "5519988741698", // Número 5
    "5519987508959", // Número 6
    "5519988792084", // Número 7
    "5521979358021", // Número 8
    "5519987741165", // Número 9
    "5582956357635", // Número 10
  ],
  COMPRA: [
    "5519983880841", // Número 1
    "5519988582346", // Número 2
    "5519988932787", // Número 3
    "5518981550717", // Número 4
    "5519988741698", // Número 5
    "5519987508959", // Número 6
    "5519988792084", // Número 7
    "5521979358021", // Número 8
    "5519987741165", // Número 9
    "5582956357635", // Número 10
  ],
  COMPLETO: [
    "5519983880841", // Número 1
    "5519988582346", // Número 2
    "5519988932787", // Número 3
    "5518981550717", // Número 4
    "5519988741698", // Número 5
    "5519987508959", // Número 6
    "5519988792084", // Número 7
    "5521979358021", // Número 8
    "5519987741165", // Número 9
    "5582956357635", // Número 10
  ]
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
