"use client"

import { Eye, Handshake, Lightbulb, Rocket, Target, Users } from "lucide-react"
import { useLanguage } from "../language-context"
import { Card } from "./components/card"
import TeamCard from "./components/teamCard"

export default function AboutPage() {
    const { t } = useLanguage()

    return (
        <main className="m-auto flex max-w-7xl flex-col justify-center gap-8 p-4 lg:p-8">
            <header className="flex flex-col gap-4">
                <h1 className="font-black text-2xl text-white md:text-4xl">
                    {t.aboutUs.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                        {t.aboutUs.title.split(" ").slice(-2).join(" ")}
                    </span>
                </h1>
                <div className="flex flex-col gap-4 text-sm text-white/75 leading-relaxed lg:text-base">
                    {t.aboutUs.text.map((el) => {
                        return <p key={el}>{el}</p>
                    })}
                </div>
            </header>

            <div className="flex items-start gap-4 rounded border border-sky-400/50 border-solid p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/25 lg:p-8">
                <div className="hidden items-center justify-center rounded-full bg-sky-400/25 p-4 text-sky-400 transition-colors group-hover:bg-sky-400/50 lg:flex">
                    <Rocket size={16} />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <h3 className="font-bold text-white text-xl">
                            {t.aboutUs.enterprise.title}
                        </h3>
                        <span className="w-full rounded-full border border-sky-400/25 bg-sky-400/25 px-4 py-2 text-center font-bold text-sky-400 text-sm uppercase lg:w-auto">
                            Tec Unimar
                        </span>
                    </div>

                    {t.aboutUs.enterprise.text.map((el) => {
                        return (
                            <p
                                key={el}
                                className="text-sm text-white/75 lg:text-base"
                            >
                                {el}
                            </p>
                        )
                    })}
                </div>
            </div>

            <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <h2 className="font-black text-2xl text-white md:text-4xl">
                        {t.aboutUs.pillar.title}
                    </h2>
                    <p className="text-sm text-white/75 lg:text-base">
                        {t.aboutUs.pillar.desc}
                    </p>
                </header>
                <div className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
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
                    <h2 className="font-black text-2xl text-white md:text-4xl">
                        {t.aboutUs.core.title}
                    </h2>
                    <p className="text-sm text-white/75 lg:text-base">
                        {t.aboutUs.core.desc}
                    </p>
                </header>
                <div className="grid grid-cols-1 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1">
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
                    <h2 className="font-black text-2xl text-white md:text-4xl">
                        {t.aboutUs.team.title}
                    </h2>
                    <p className="text-sm text-white/75 lg:text-base">
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
