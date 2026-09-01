import type { Metadata, Viewport } from "next"
import { Archivo, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Footer from "./_components/footer"
import Header from "./_components/header"
import { ogImage, site } from "./_utils/site"
import { LanguageProvider } from "./language-context"

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
})

const plexMono = IBM_Plex_Mono({
    variable: "--font-plex-mono",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
})

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default:
            "Soul Tech | Sistemas sob medida, plataformas digitais e automações",
        template: "%s | Soul Tech",
    },
    description:
        "Desenvolvemos sistemas internos, plataformas digitais e automações sob medida para empresas. Soul Tech, Marília – SP.",
    keywords: [
        "desenvolvimento de sistemas",
        "sistemas internos sob medida",
        "automação de processos",
        "plataformas digitais",
        "software house Marília",
        "Soul Tech",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: site.url,
        siteName: site.name,
        title: "Soul Tech | Sistemas sob medida, plataformas digitais e automações",
        description:
            "Transformamos operações manuais e fragmentadas em sistemas digitais escaláveis, seguros e orientados à decisão.",
        images: [ogImage],
    },
    twitter: {
        card: "summary_large_image",
        title: "Soul Tech | Sistemas sob medida, plataformas digitais e automações",
        description:
            "Transformamos operações manuais e fragmentadas em sistemas digitais escaláveis, seguros e orientados à decisão.",
        images: [ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: { icon: "/logo.webp", apple: "/logo.webp" },
}

export const viewport: Viewport = {
    themeColor: "#05070d",
    colorScheme: "dark",
}

/**
 * JSON.stringify não escapa "<", então uma sequência "</script>" dentro de um
 * valor encerraria a tag e permitiria injeção. Hoje todos os valores são
 * constantes, mas o escape mantém o bloco seguro caso algum campo passe a vir
 * de fora (NEXT_PUBLIC_SITE_URL, um CMS, etc.).
 */
function serializeJsonLd(data: unknown) {
    return JSON.stringify(data).replace(/</g, "\\u003c")
}

/** Dados estruturados: permite que buscadores reconheçam a empresa e o contato. */
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.webp`,
    email: site.email,
    telephone: site.phoneE164,
    // taxID é o campo que o schema.org usa para inscrições fiscais como o CNPJ.
    taxID: site.cnpj,
    description:
        "Empresa de tecnologia focada no desenvolvimento de sistemas internos, plataformas digitais e automações sob medida.",
    address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.street} – ${site.address.district}`,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
    },
    sameAs: [site.social.instagram, site.social.youtube, site.social.github],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${archivo.variable} ${plexMono.variable}`}
        >
            <body className="bg-ink text-fg antialiased">
                {/* Atalho de teclado para pular a navegação */}
                <a
                    href="#conteudo"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-accent-ink focus:text-sm"
                >
                    Pular para o conteúdo
                </a>

                <LanguageProvider>
                    <Header />
                    <main id="conteudo">{children}</main>
                    <Footer />
                </LanguageProvider>

                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático, sem entrada do usuário
                    dangerouslySetInnerHTML={{
                        __html: serializeJsonLd(organizationJsonLd),
                    }}
                />
            </body>
        </html>
    )
}
