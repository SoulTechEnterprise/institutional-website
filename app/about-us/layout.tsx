import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Sobre",
    description:
        "Empresa de tecnologia em Marília – SP. Conheça os pilares, os valores e o time por trás das soluções da Soul Tech.",
    alternates: { canonical: "/about-us" },
    openGraph: {
        title: "Sobre | Soul Tech",
        description:
            "Empresa de tecnologia em Marília – SP. Conheça os pilares, os valores e o time por trás das soluções da Soul Tech.",
        url: "/about-us",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
