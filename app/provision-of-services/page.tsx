"use client"

import {
    Cog,
    Globe,
    Lightbulb,
    MoveRight,
    Palette,
    Smartphone,
} from "lucide-react"
import Link from "next/link"
import Card from "../_components/card"
import { useLanguage } from "../language-context"

export default function ServicesPage() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-8 p-4 lg:p-8">
            <header className="flex flex-col gap-4">
                <h1 className="font-black text-2xl text-white md:text-4xl">
                    {t.profision_of_services.title}
                </h1>
                <p className="text-sm text-white/75 lg:text-base">
                    {t.profision_of_services.desc}
                </p>
            </header>

            <div className="grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
                {t.profision_of_services.cards.map((el, index) => {
                    const icons = [
                        Globe,
                        Smartphone,
                        Cog,
                        Palette,
                        Lightbulb,
                        Cog,
                    ]

                    return el.type ? (
                        <Card
                            key={el.title}
                            title={el.title}
                            desc={el.desc}
                            icon={icons[index]}
                        />
                    ) : (
                        <div
                            key={el.title}
                            className="group flex aspect-video h-full flex-col items-center justify-center gap-4 rounded border border-sky-400/50 border-dashed bg-sky-400/0 p-8 transition-all duration-300 hover:border-sky-400/75 hover:bg-sky-400/25 lg:gap-8"
                        >
                            <h3 className="text-center font-black text-sm text-white lg:text-base">
                                {el.title}
                            </h3>
                            <Link
                                className="flex w-full items-center justify-center gap-2 rounded bg-sky-400 px-4 py-2 font-bold text-black text-sm lg:w-auto"
                                href="/contact"
                            >
                                {el.desc}
                                <MoveRight />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
