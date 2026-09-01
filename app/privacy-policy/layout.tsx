import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ogImage } from "../_utils/site"

export const metadata: Metadata = {
    title: "Política de Privacidade",
    description:
        "Como a Soul Tech coleta, usa e protege os dados pessoais de quem acessa o site.",
    alternates: { canonical: "/privacy-policy" },
    openGraph: {
        title: "Política de Privacidade | Soul Tech",
        description:
            "Como a Soul Tech coleta, usa e protege os dados pessoais de quem acessa o site.",
        url: "/privacy-policy",
        images: [ogImage],
    },
}

export default function Layout({ children }: { children: ReactNode }) {
    return children
}
