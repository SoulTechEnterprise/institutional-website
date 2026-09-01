import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Termos de Uso",
    description: "Condições de uso do site da Soul Tech.",
    alternates: { canonical: "/terms-of-service" },
    openGraph: {
        title: "Termos de Uso | Soul Tech",
        description: "Condições de uso do site da Soul Tech.",
        url: "/terms-of-service",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
