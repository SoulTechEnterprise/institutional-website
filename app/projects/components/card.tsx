"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Panel } from "@/app/_components/ui/panel"
import { cn } from "@/app/_utils/cn"
import { useLanguage } from "@/app/language-context"

export interface CardProps {
    /** Ausente quando ainda não há captura do projeto — ver ProjectCover. */
    src?: string
    title: string
    desc: string
    tag: string
    link: string
    /** Cases ocupam duas colunas e mostram a imagem maior que os do laboratório. */
    size?: "feature" | "compact"
}

/**
 * Capa usada nos projetos sem captura de tela — repositórios privados, sites
 * já fora do ar ou entregas que ainda não foram fotografadas. Repete a malha
 * técnica e o halo do resto do site para que o card leia como uma peça
 * intencional, e não como uma imagem que falhou ao carregar.
 */
function ProjectCover() {
    return (
        <div className="relative flex h-full w-full items-center justify-center bg-ink-panel">
            <div
                aria-hidden
                className="absolute inset-0 bg-blueprint opacity-70 [mask-image:radial-gradient(70%_70%_at_50%_45%,#000,transparent)]"
            />
            <div aria-hidden className="absolute inset-0 bg-aura" />
            <Image
                src="/logo.webp"
                alt=""
                width={56}
                height={56}
                aria-hidden
                className="relative h-14 w-14 object-contain opacity-25 grayscale transition-opacity duration-500 group-hover:opacity-40"
            />
        </div>
    )
}

export default function Card({
    src,
    title,
    desc,
    tag,
    link,
    size = "compact",
}: CardProps) {
    const { t } = useLanguage()
    const feature = size === "feature"

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
        >
            <Panel interactive className="flex h-full flex-col">
                <div
                    className={cn(
                        "relative overflow-hidden border-line border-b bg-ink-panel",
                        feature ? "aspect-[16/10]" : "aspect-[16/11]"
                    )}
                >
                    {src ? (
                        <>
                            <Image
                                src={src}
                                alt={`Prévia da interface do projeto ${title}`}
                                fill
                                sizes={
                                    feature
                                        ? "(max-width: 768px) 100vw, 50vw"
                                        : "(max-width: 768px) 100vw, 33vw"
                                }
                                // object-cover + object-top preserva a proporção
                                // original e mostra o topo da tela, que é a
                                // parte reconhecível.
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                            />
                        </>
                    ) : (
                        <ProjectCover />
                    )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                    <span className="font-mono text-accent text-eyebrow uppercase">
                        {tag}
                    </span>
                    <h3
                        className={cn(
                            "font-semibold text-fg",
                            feature ? "text-h2" : "text-h3"
                        )}
                    >
                        {title}
                    </h3>
                    <p
                        className={cn(
                            "flex-1 text-fg-muted leading-relaxed",
                            feature ? "text-[0.9375rem]" : "text-sm"
                        )}
                    >
                        {desc}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-medium text-fg-muted text-sm transition-colors group-hover:text-accent">
                        {t.projects.button}
                        <ArrowUpRight
                            size={15}
                            className="-translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
                            aria-hidden
                        />
                    </span>
                </div>
            </Panel>
        </a>
    )
}
