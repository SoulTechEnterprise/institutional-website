"use client"

import { useLanguage } from "../language-context"
import Card from "./components/card"

export default function Projects() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex max-w-7xl flex-col gap-8 p-4 md:p-8">
            <section className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl text-white md:text-4xl">
                    {t.project.title}
                </h1>
                <p className="max-w-2xl text-sm text-white/75">
                    {t.project.desc}
                </p>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {t.project.card.map((el) => {
                    return (
                        <Card
                            key={el.title}
                            src={el.src}
                            alt={el.title}
                            title={el.title}
                            desc={el.desc}
                            tag={el.tag}
                            link={el.url}
                        />
                    )
                })}
            </section>
        </main>
    )
}
