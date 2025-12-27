"use client"

import { Cog, Globe, Lightbulb, Palette, Smartphone } from "lucide-react"
import Card from "../_components/card"
import { useLanguage } from "../language-context"

export default function ServicesPage() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex max-w-7xl flex-col justify-center gap-8 p-8">
            <header className="flex flex-col gap-4">
                <h1 className="font-black text-4xl text-white">
                    {t.profision_of_services.title}
                </h1>
                <p className="text-sm text-white/75 leading-relaxed">
                    {t.profision_of_services.desc}
                </p>
            </header>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                            className="group flex h-full flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-700/50 border-dashed bg-slate-900/20 p-8 transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-900/30"
                        >
                            <h3 className="text-center font-bold text-white text-xl">
                                {el.title}
                            </h3>
                            <button className="rounded-full bg-sky-600 px-8 py-3 font-bold text-sm text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:scale-105 hover:bg-sky-500">
                                {el.desc}
                            </button>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
