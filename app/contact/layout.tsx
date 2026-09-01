import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Contato",
    description:
        "Fale com a Soul Tech sobre o seu projeto. Retornamos com um diagnóstico inicial e os próximos passos.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contato | Soul Tech",
        description:
            "Fale com a Soul Tech sobre o seu projeto. Retornamos com um diagnóstico inicial e os próximos passos.",
        url: "/contact",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
