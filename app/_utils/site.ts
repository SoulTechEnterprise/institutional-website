/**
 * Fonte única de verdade para os dados institucionais que apareciam
 * duplicados entre páginas, footer e metadados.
 *
 * NEXT_PUBLIC_SITE_URL precisa ser definida no ambiente de produção — é a base
 * das URLs canônicas, do sitemap e das imagens de Open Graph.
 */
export const site = {
    name: "Soul Tech",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soultech.agency",
    cnpj: "66.696.570/0001-76",
    email: "soultech215@gmail.com",
    phoneDisplay: "(14) 99755-9851",
    phoneE164: "+5514997559851",
    whatsapp: "https://wa.me/5514997559851",
    address: {
        street: "R. Luiz Carlos Zanella Lima, 135",
        district: "Jardim Edisom da Silva Lima",
        city: "Marília",
        state: "SP",
        postalCode: "17512-802",
        country: "BR",
    },
    social: {
        instagram: "https://www.instagram.com/soultech_en/",
        youtube: "https://www.youtube.com/@SoulTech-En",
        github: "https://github.com/SoulTechEnterprise",
    },
    /** Endpoint do Formspree que recebe o formulário de contato. */
    formEndpoint: "https://formspree.io/f/xaqwrboo",
} as const

/**
 * Imagem de compartilhamento (Open Graph / Twitter). Gerada em 1200x630 a
 * partir do mesmo sistema visual do site; ver public/og.png.
 */
export const ogImage = {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "Soul Tech — software sob medida para operações que precisam escalar",
} as const

/** Endereço em uma linha, usado no rodapé, na página de contato e no schema. */
export const addressLine = `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}, ${site.address.postalCode}`
