import type { NextConfig } from "next"

/**
 * Política de segurança de conteúdo.
 *
 * O site é totalmente estático e não carrega nenhum recurso de terceiros: as
 * fontes são auto-hospedadas pelo next/font e as imagens vêm de /public. A
 * única saída de rede em runtime é o POST do formulário de contato para o
 * Formspree — por isso ele aparece em connect-src e form-action, e nada mais.
 *
 * 'unsafe-inline' em script-src é exigido pelo bootstrap de hidratação do
 * Next. Eliminá-lo pediria nonce por requisição, o que forçaria renderização
 * dinâmica e tiraria todas as páginas do pré-render estático — troca ruim para
 * um site institucional sem conteúdo gerado por usuário.
 */
const contentSecurityPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://formspree.io",
    "form-action 'self' https://formspree.io",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
    { key: "Content-Security-Policy", value: contentSecurityPolicy },
    // Impede que o navegador "adivinhe" o tipo de um arquivo servido.
    { key: "X-Content-Type-Options", value: "nosniff" },
    // Redundante com frame-ancestors, mantido para navegadores antigos.
    { key: "X-Frame-Options", value: "DENY" },
    // Não vaza o caminho completo da página de origem para outros domínios.
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    // O site não usa nenhuma dessas APIs.
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
]

const nextConfig: NextConfig = {
    output: "standalone",
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
            {
                source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ]
    },
}

export default nextConfig
