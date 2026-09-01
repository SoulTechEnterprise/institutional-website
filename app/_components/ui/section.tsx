import type { ReactNode } from "react"
import { cn } from "@/app/_utils/cn"

/**
 * Envelope padrão de seção: define a largura máxima, o respiro vertical
 * e o alinhamento com a grade do site. Todo conteúdo de página passa por aqui
 * para que o ritmo vertical seja o mesmo em todas as rotas.
 */
export function Section({
    children,
    className,
    id,
    size = "default",
}: {
    children: ReactNode
    className?: string
    id?: string
    size?: "default" | "compact" | "flush"
}) {
    const padding = {
        default: "py-16 md:py-24",
        compact: "py-12 md:py-16",
        flush: "py-0",
    }[size]

    return (
        <section
            id={id}
            className={cn(
                "mx-auto w-full max-w-6xl px-5 md:px-8",
                padding,
                className
            )}
        >
            {children}
        </section>
    )
}

/**
 * Rótulo curto em monoespaçada que antecede os títulos. É a peça que dá
 * o tom "documento técnico" e ancora a hierarquia antes do H2.
 */
export function Eyebrow({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p
            className={cn(
                "flex items-center gap-2.5 font-mono text-accent text-eyebrow uppercase",
                className
            )}
        >
            <span aria-hidden className="inline-block h-px w-6 bg-accent/60" />
            {children}
        </p>
    )
}

/**
 * Cabeçalho de seção: eyebrow + título + descrição, com a medida de leitura
 * já limitada para não produzir linhas longas demais.
 */
export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "start",
    as: Tag = "h2",
}: {
    eyebrow?: string
    title: ReactNode
    description?: ReactNode
    align?: "start" | "center"
    as?: "h1" | "h2"
}) {
    return (
        <header
            className={cn(
                "flex flex-col gap-4",
                align === "center" && "items-center text-center"
            )}
        >
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <Tag
                className={cn(
                    "font-semibold text-balance-heading text-fg",
                    Tag === "h1" ? "text-h1" : "text-h2"
                )}
            >
                {title}
            </Tag>
            {description ? (
                <p
                    className={cn(
                        "max-w-2xl text-fg-muted text-lead",
                        align === "center" && "mx-auto"
                    )}
                >
                    {description}
                </p>
            ) : null}
        </header>
    )
}
