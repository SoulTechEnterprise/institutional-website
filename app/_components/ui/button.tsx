import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/app/_utils/cn"

type Variant = "primary" | "secondary" | "ghost"
type Size = "md" | "lg"

const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"

const variants: Record<Variant, string> = {
    // Único elemento com preenchimento sólido de acento — por isso lê como
    // a ação principal em qualquer tela onde apareça.
    primary:
        "bg-accent text-accent-ink shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-16px_rgba(56,189,248,0.9)] hover:bg-accent-bright hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_10px_28px_-14px_rgba(56,189,248,0.95)]",
    secondary:
        "border border-line-strong bg-white/[0.02] text-fg hover:border-accent/40 hover:bg-accent/[0.07] hover:text-accent-bright",
    ghost: "text-fg-muted hover:text-accent",
}

const sizes: Record<Size, string> = {
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-[0.9375rem]",
}

function classesFor(variant: Variant, size: Size, className?: string) {
    return cn(base, variants[variant], sizes[size], className)
}

export function ButtonLink({
    href,
    children,
    variant = "primary",
    size = "md",
    className,
    external,
}: {
    href: string
    children: ReactNode
    variant?: Variant
    size?: Size
    className?: string
    external?: boolean
}) {
    const classes = classesFor(variant, size, className)

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {children}
            </a>
        )
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    )
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
    return (
        <button className={classesFor(variant, size, className)} {...props}>
            {children}
        </button>
    )
}
