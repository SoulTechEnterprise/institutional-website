import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/app/_utils/cn"

/**
 * Superfície elevada padrão. Substitui a antiga caixa contornada de acento:
 * a separação vem da camada (fundo levemente mais claro que a página) e de um
 * traço neutro, deixando o azul livre para marcar ação e destaque.
 */
export function Panel({
    children,
    className,
    interactive = false,
}: {
    children: ReactNode
    className?: string
    interactive?: boolean
}) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-white/[0.035] to-white/[0.012]",
                interactive &&
                    "group transition-all duration-500 hover:-translate-y-0.5 hover:border-line-strong hover:from-white/[0.06] hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]",
                className
            )}
        >
            {children}
        </div>
    )
}

/**
 * Suporte de ícone. Fica no topo do card — nunca centralizado verticalmente —
 * para que os títulos de uma mesma linha da grade se alinhem entre si.
 */
export function IconBadge({
    icon: Icon,
    className,
}: {
    icon: LucideIcon
    className?: string
}) {
    return (
        <span
            className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-white/[0.03] text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-bright",
                className
            )}
        >
            <Icon size={18} strokeWidth={1.75} aria-hidden />
        </span>
    )
}

/**
 * Card de conteúdo com ícone, título e descrição — o formato usado em
 * Serviços, Valores e Pilares. Layout em coluna com altura total para que
 * todos os cards da grade fechem na mesma linha de base.
 */
export function FeatureCard({
    icon,
    title,
    description,
    footer,
}: {
    icon: LucideIcon
    title: string
    description: string
    footer?: ReactNode
}) {
    return (
        <Panel interactive className="flex h-full flex-col gap-5 p-6 md:p-7">
            <IconBadge icon={icon} />
            <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="font-semibold text-balance-heading text-fg text-h3">
                    {title}
                </h3>
                <p className="text-[0.9375rem] text-fg-muted leading-relaxed">
                    {description}
                </p>
            </div>
            {footer}
        </Panel>
    )
}
