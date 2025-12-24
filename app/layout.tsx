import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Footer from "./components/footer"
import Header from "./components/header"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Soul Tech | Desenvolvimento de Sistemas, Plataformas Digitais e Automações",
    description:
        "Sistemas internos, plataformas digitais e automações sob medida. Tecnologia com alma, foco no negócio e crescimento sustentável...",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${montserrat.variable} antialiased bg-slate-950`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
