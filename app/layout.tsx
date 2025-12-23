import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
})

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
            <body
                className={`${montserrat.variable} ${roboto.variable} antialiased bg-slate-950`}
            >
                {children}
            </body>
        </html>
    )
}
