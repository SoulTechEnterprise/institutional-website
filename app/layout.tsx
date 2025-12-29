import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Footer from "./_components/footer"
import Header from "./_components/header"
import { LanguageProvider } from "./language-context"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Soul Tech | Desenvolvimento de Sistemas, Plataformas Digitais e Automações",
    description:
        "Sistemas internos, plataformas digitais e automações sob medida. Tecnologia com alma, foco no negócio e crescimento sustentável...",
    icons: {
        icon: "/logo.webp",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${montserrat.variable} bg-slate-950 antialiased`}>
                <LanguageProvider>
                    <Header />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
