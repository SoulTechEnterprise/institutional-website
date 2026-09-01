import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Serviços",
    description:
        "Sistemas internos sob medida, plataformas digitais, automação de processos, UX/UI, consultoria técnica e sustentação contínua.",
    alternates: { canonical: "/provision-of-services" },
    openGraph: {
        title: "Serviços | Soul Tech",
        description:
            "Sistemas internos sob medida, plataformas digitais, automação de processos, UX/UI, consultoria técnica e sustentação contínua.",
        url: "/provision-of-services",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
