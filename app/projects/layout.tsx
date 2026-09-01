import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Projetos",
    description:
        "Plataformas, sistemas e produtos digitais desenvolvidos pela Soul Tech para clientes e para o portfólio próprio.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projetos | Soul Tech",
        description:
            "Plataformas, sistemas e produtos digitais desenvolvidos pela Soul Tech para clientes e para o portfólio próprio.",
        url: "/projects",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
