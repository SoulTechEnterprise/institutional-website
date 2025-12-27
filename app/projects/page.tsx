"use client"

import { useLanguage } from "../language-context"
import Card from "./components/card"

export default function Projects() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-8 p-4 md:p-8">
            <section className="flex flex-col gap-2">
                <h1 className="font-black text-2xl text-white md:text-4xl">
                    {t.project.title}
                </h1>
                <p className="max-w-2xl text-sm text-white/75">
                    {t.project.desc}
                </p>
            </section>

            <section className="grid grid-cols-1 grid-rows-7 gap-4 lg:grid-cols-3 lg:grid-rows-3">
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
