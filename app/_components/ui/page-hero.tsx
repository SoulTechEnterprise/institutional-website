import type { ReactNode } from "react"
import { Eyebrow } from "./section"

/**
 * Abertura padrão das páginas internas. Repete a atmosfera do hero da home
 * (malha técnica + halo) em escala menor, para que a navegação entre rotas
 * pareça o mesmo site e não uma coleção de telas soltas.
 */
export function PageHero({
    eyebrow,
    title,
    description,
    aside,
}: {
    eyebrow: string
    title: string
    description: ReactNode
    aside?: ReactNode
}) {
    return (
        <section className="relative isolate overflow-hidden border-line border-b">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-blueprint opacity-60 [mask-image:radial-gradient(80%_70%_at_30%_0%,#000,transparent)]" />
                <div className="absolute inset-x-0 top-0 h-96 bg-aura" />
            </div>

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-20 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex max-w-3xl flex-col gap-5">
                    <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>
                    <h1
                        className="animate-rise font-semibold text-balance-heading text-fg text-h1"
                        style={{ animationDelay: "80ms" }}
                    >
                        {title}
                    </h1>
                    <p
                        className="max-w-2xl animate-rise text-fg-muted text-lead"
                        style={{ animationDelay: "160ms" }}
                    >
                        {description}
                    </p>
                </div>
                {aside ? (
                    <div
                        className="shrink-0 animate-rise"
                        style={{ animationDelay: "240ms" }}
                    >
                        {aside}
                    </div>
                ) : null}
            </div>
        </section>
    )
}
