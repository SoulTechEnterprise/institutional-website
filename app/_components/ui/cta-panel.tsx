"use client"

import { MoveRight } from "lucide-react"
import { ButtonLink } from "./button"
import { Panel } from "./panel"
import { Section } from "./section"

/**
 * Bloco de conversão reaproveitado no fim das páginas internas. Centralizar
 * aqui evita que cada página invente um CTA com espaçamento e tom diferentes.
 */
export function CtaPanel({
    title,
    description,
    button,
    href = "/contact",
}: {
    title: string
    description: string
    button: string
    href?: string
}) {
    return (
        <Section size="compact" className="pb-24 md:pb-32">
            <Panel className="relative overflow-hidden px-6 py-12 text-center md:px-16 md:py-16">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-aura"
                />
                <div className="relative flex flex-col items-center gap-5">
                    <h2 className="max-w-2xl font-semibold text-balance-heading text-fg text-h2">
                        {title}
                    </h2>
                    <p className="max-w-xl text-fg-muted text-lead">
                        {description}
                    </p>
                    <ButtonLink href={href} size="lg" className="mt-2">
                        {button}
                        <MoveRight
                            size={17}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                    </ButtonLink>
                </div>
            </Panel>
        </Section>
    )
}
