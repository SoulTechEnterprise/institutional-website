"use client"

import { Eye, Handshake, Lightbulb, Rocket, Target, Users } from "lucide-react"
import { useLanguage } from "../language-context"
import { Card } from "./components/card"
import TeamCard from "./components/teamCard"

export default function AboutPage() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex max-w-7xl flex-col justify-center gap-8 p-8">
            <header className="flex flex-col gap-4">
                <h1 className="font-black text-4xl text-gray-50">
                    {t.aboutUs.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                        {t.aboutUs.title.split(" ").slice(-2).join(" ")}
                    </span>
                </h1>
                <div className="flex flex-col gap-4 text-base text-sm text-white/75 leading-relaxed">
                    {t.aboutUs.text.map((el) => {
                        return <p key={el}>{el}</p>
                    })}
                </div>
            </header>

            <div className="group w-full rounded-xl border border-sky-400/30 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
                <div className="flex items-start gap-6">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition-colors group-hover:bg-sky-400/20">
                        <Rocket size={16} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-bold text-gray-50 text-xl">
                                {t.aboutUs.enterprise.title}
                            </h3>
                            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-bold text-sky-400 text-xs uppercase tracking-wide">
                                Tec Unimar
                            </span>
                        </div>

                        {t.aboutUs.enterprise.text.map((el) => {
                            return (
                                <p
                                    key={el}
                                    className="text-sm text-white/75 leading-relaxed"
                                >
                                    {el}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>

            <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <h2 className="font-black text-2xl text-white md:text-4xl">
                        {t.aboutUs.pillar.title}
                    </h2>
                    <p className="text-base text-white/75 leading-relaxed">
                        {t.aboutUs.pillar.desc}
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {t.aboutUs.pillar.card.map((el, index) => {
                        const icons = [Target, Eye]

                        return (
                            <Card
                                icon={icons[index]}
                                key={el.title}
                                title={el.title}
                                description={el.description}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <h2 className="font-black text-2xl text-gray-50 md:text-4xl">
                        {t.aboutUs.core.title}
                    </h2>
                    <p className="text-base text-white/75 leading-relaxed">
                        {t.aboutUs.core.desc}
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {t.aboutUs.core.card.map((el, index) => {
                        const icons = [Lightbulb, Handshake, Users]

                        return (
                            <Card
                                icon={icons[index]}
                                key={el.title}
                                title={el.title}
                                description={el.description}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <h2 className="font-black text-2xl text-gray-50 md:text-4xl">
                        {t.aboutUs.team.title}
                    </h2>
                    <p className="text-base text-white/75 leading-relaxed">
                        {t.aboutUs.team.desc}
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {t.aboutUs.team.card.map((el) => {
                        return (
                            <TeamCard
                                key={el.name}
                                name={el.name}
                                position={el.position}
                                image={el.image}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
