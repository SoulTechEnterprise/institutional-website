"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../language-context"

export default function TermsOfService() {
    const { t } = useLanguage()

    const renderTextWithSpecificLinks = (text: string) => {
        const patterns = [/(site )(SoulTech)/gi, /(SoulTech)( website)/gi]

        let result: (string | React.ReactElement)[] = [text]

        patterns.forEach((pattern) => {
            const newResult: (string | React.ReactElement)[] = []
            result.forEach((part) => {
                if (typeof part === "string") {
                    const matches = [...part.matchAll(pattern)]
                    if (matches.length > 0) {
                        let lastIndex = 0
                        matches.forEach((match) => {
                            const matchStart = match.index ?? 0
                            newResult.push(
                                part.substring(lastIndex, matchStart)
                            )
                            const uniqueKey = `${part.substring(matchStart, matchStart + 20)}-${matchStart}`
                            newResult.push(
                                <span key={uniqueKey}>
                                    {match[1]}
                                    <a
                                        href="https://soultech.agency/"
                                        className="text-sky-400 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SoulTech
                                    </a>
                                    {match[3] || ""}
                                </span>
                            )
                            lastIndex = matchStart + match[0].length
                        })
                        newResult.push(part.substring(lastIndex))
                    } else {
                        newResult.push(part)
                    }
                } else {
                    newResult.push(part)
                }
            })
            result = newResult
        })

        return result
    }

    return (
        <main className="m-auto flex min-h-screen max-w-4xl flex-col gap-8 p-4 lg:p-8">
            <Link
                href="/"
                className="flex items-center gap-2 text-sky-400 text-sm hover:underline"
            >
                <ArrowLeft size={16} />
                Voltar para o início
            </Link>

            <header className="flex flex-col gap-4">
                <h1 className="font-black text-2xl text-white md:text-4xl">
                    {t.termsOfUse.title}
                </h1>
                <p className="text-sm text-white/50">
                    {t.termsOfUse.lastUpdate}
                </p>
            </header>

            <div className="flex flex-col gap-6 text-sm text-white/75 lg:text-base">
                {t.termsOfUse.sections.map((section, sectionIndex) => (
                    <section
                        key={section.title}
                        className="flex flex-col gap-3"
                    >
                        <h2 className="font-bold text-lg text-white">
                            {section.title}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {section.content.map(
                                (paragraph, paragraphIndex) => (
                                    <p key={paragraph.substring(0, 50)}>
                                        {sectionIndex === 0 &&
                                        paragraphIndex === 0
                                            ? renderTextWithSpecificLinks(
                                                  paragraph
                                              )
                                            : paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>
                ))}
            </div>

            <footer className="border-white/10 border-t pt-6 text-center text-sm text-white/50">
                {t.termsOfUse.contact}
            </footer>
        </main>
    )
}
