"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import { site } from "@/app/_utils/site"
import { Panel } from "./panel"

type Section = { title: string; content: readonly string[] }

/**
 * Os Termos de Uso já trazem a numeração no próprio título ("1. Termos"),
 * enquanto a Política de Privacidade não. Removendo o prefixo aqui, a
 * numeração fica a cargo do layout e as duas páginas ficam consistentes.
 */
function stripLeadingNumber(title: string) {
    return title.replace(/^\d+\.\s*/, "")
}

/**
 * Transforma as menções a "SoulTech" em links para o site, preservando o
 * texto em volta. A versão anterior duplicava o nome e engolia a palavra
 * seguinte nas frases em inglês; aqui a substituição é feita em uma única
 * passada sobre o texto original.
 */
function linkifyBrand(text: string, keyPrefix: string): ReactNode[] {
    const pattern = /SoulTech/g
    const nodes: ReactNode[] = []
    let lastIndex = 0
    let match: RegExpExecArray | null = pattern.exec(text)

    while (match !== null) {
        nodes.push(text.slice(lastIndex, match.index))
        nodes.push(
            <a
                key={`${keyPrefix}-${match.index}`}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
                SoulTech
            </a>
        )
        lastIndex = match.index + match[0].length
        match = pattern.exec(text)
    }

    nodes.push(text.slice(lastIndex))
    return nodes
}

/**
 * Layout compartilhado por Política de Privacidade e Termos de Uso: medida de
 * leitura estreita, numeração das seções e o mesmo ritmo tipográfico do resto
 * do site.
 */
export function LegalPage({
    title,
    lastUpdate,
    contact,
    sections,
    backLabel,
}: {
    title: string
    lastUpdate: string
    contact: string
    sections: readonly Section[]
    backLabel: string
}) {
    return (
        <>
            <section className="relative isolate overflow-hidden border-line border-b">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <div className="absolute inset-0 bg-blueprint opacity-50 [mask-image:radial-gradient(70%_70%_at_30%_0%,#000,transparent)]" />
                    <div className="absolute inset-x-0 top-0 h-72 bg-aura" />
                </div>

                <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 pt-28 pb-14 md:px-8 md:pt-36">
                    <Link
                        href="/"
                        className="group inline-flex w-fit items-center gap-2 text-fg-muted text-sm transition-colors hover:text-accent"
                    >
                        <ArrowLeft
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-x-0.5"
                        />
                        {backLabel}
                    </Link>
                    <h1 className="font-semibold text-fg text-h1">{title}</h1>
                    <p className="font-mono text-eyebrow text-fg-faint uppercase">
                        {lastUpdate}
                    </p>
                </div>
            </section>

            <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-16 md:px-8 md:py-20">
                {sections.map((section, index) => (
                    <section
                        key={section.title}
                        className="flex flex-col gap-4"
                    >
                        <h2 className="flex items-baseline gap-3 font-semibold text-fg text-h3">
                            <span className="font-mono text-accent text-eyebrow">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {stripLeadingNumber(section.title)}
                        </h2>
                        <div className="flex flex-col gap-3.5">
                            {section.content.map((paragraph, pIndex) => (
                                <p
                                    key={paragraph.slice(0, 60)}
                                    className="text-[0.9375rem] text-fg-muted leading-[1.75]"
                                >
                                    {linkifyBrand(
                                        paragraph,
                                        `s${index}-p${pIndex}`
                                    )}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}

                <Panel className="p-6">
                    <p className="text-[0.9375rem] text-fg-muted leading-relaxed">
                        {contact}
                    </p>
                </Panel>
            </div>
        </>
    )
}
