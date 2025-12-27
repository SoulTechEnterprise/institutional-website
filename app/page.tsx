"use client"

import {
    Braces,
    ChartNoAxesColumnIncreasing,
    Code,
    FileBraces,
    MoveRight,
    Rocket,
    Smile,
    Zap,
} from "lucide-react"
import Link from "next/link"
import Card from "./_components/card"
import CardTech from "./_components/cardTech"
import { useLanguage } from "./language-context"

export default function Home() {
    const { t } = useLanguage()

    return (
        <main className="m-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center justify-between gap-8 p-4 md:p-8 lg:grid-cols-2">
            <section className="flex flex-col items-start justify-center gap-8">
                <div className="flex items-center gap-2 rounded-full border border-sky-400/50 border-solid px-4 py-2 font-bold text-sky-400 text-xs uppercase">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    {t.home.left_side.header}
                </div>

                <h2 className="font-black font-montserrat text-3xl text-white md:text-4xl lg:text-5xl">
                    {t.home.left_side.title.split(" ").slice(0, -2).join(" ")}
                    <br />{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                        {t.home.left_side.title.split(" ").slice(-2).join(" ")}
                    </span>
                </h2>
                <div className="flex flex-col gap-4">
                    {t.home.left_side.text.map((el) => {
                        return (
                            <p key={el} className="text-white">
                                {el}
                            </p>
                        )
                    })}
                </div>
                <div className="flex flex-wrap gap-4">
                    <CardTech icon={Code} title="React" />
                    <CardTech icon={FileBraces} title="Python" />
                    <CardTech icon={Braces} title="C#" />
                </div>
                <Link
                    className="flex items-center gap-2 rounded bg-sky-400 px-4 py-2 font-bold text-black text-sm"
                    href="/contact"
                >
                    {t.home.left_side.button}
                    <MoveRight />
                </Link>
            </section>

            <section className="flex flex-col gap-8 rounded-2xl border border-sky-400/50 border-solid p-8">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white text-xl">
                            {t.home.right_side.title}
                        </h3>
                        <p className="text-white/75">
                            {t.home.right_side.subTitle}
                        </p>
                    </div>
                    <div className="rounded-full border border-sky-400 border-solid p-2 text-sky-400">
                        <ChartNoAxesColumnIncreasing size={12} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {t.home.right_side.cards.map((el, index) => {
                        const icons = [Rocket, Smile, Zap]

                        return (
                            <Card
                                key={el.title}
                                icon={icons[index]}
                                title={el.title}
                                desc={el.desc}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
