import { Eye, Handshake, Lightbulb, Target, Users } from "lucide-react"
import type { ReactNode } from "react"
import IncubationBadge from "./components/incubationBadge"
import TeamCard from "./components/teamCard"

const pillars = [
    {
        id: "mission",
        icon: <Target className="size-8" />,
        title: "Missão",
        description:
            "Desenvolver soluções digitais que organizam processos, reduzem a complexidade operacional e sustentam o crescimento das empresas.",
    },
    {
        id: "vision",
        icon: <Eye className="size-8" />,
        title: "Visão",
        description:
            "Ser referência no desenvolvimento de sistemas sob medida e produtos digitais escaláveis, construindo parcerias de longo prazo baseadas em resultado.",
    },
]

const values = [
    {
        id: "innovation",
        icon: <Lightbulb className="size-8" />,
        title: "Inovação com Propósito",
        description:
            "Tecnologia aplicada para resolver problemas reais de negócio.",
    },
    {
        id: "transparency",
        icon: <Handshake className="size-8" />,
        title: "Transparência e Confiança",
        description:
            "Comunicação clara, processos bem definidos e relacionamento próximo.",
    },
    {
        id: "user-focus",
        icon: <Users className="size-8" />,
        title: "Foco no Usuário e no Negócio",
        description: "Soluções pensadas para quem usa e para quem decide.",
    },
]

const team = [
    {
        id: "joao",
        name: "João Vitor",
        position: "Sócio & Desenvolvedor Front-end",
        image: "/joao.png",
    },
    {
        id: "luan",
        name: "Luan Dias",
        position: "Sócio & Desenvolvedor Full Stack",
        image: "/luan.jpg",
    },
    {
        id: "ian",
        name: "Ian Jabriel",
        position: "Sócio & Desenvolvedor Back-end",
        image: "/ian.jpeg",
    },
]

const FeatureCard = ({
    icon,
    title,
    description,
}: {
    icon: ReactNode
    title: string
    description: string
}) => (
    <div className="group flex flex-col gap-4 rounded-xl border border-sky-400/30 bg-slate-900/40 p-8 transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20 h-full">
        <div className="flex size-14 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 transition-colors">
            {icon}
        </div>
        <div className="flex flex-col gap-3 pt-1">
            <h3 className="text-gray-50 text-xl font-bold">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
)

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 font-montserrat">
            <main className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="max-w-7xl w-full flex flex-col gap-20">
                    <header className="flex flex-col gap-6 max-w-[700px]">
                        <h1 className="text-gray-50 text-4xl md:text-5xl font-black">
                            Sobre a{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                                Soul Tech
                            </span>
                        </h1>
                        <div className="flex flex-col gap-4 text-slate-400 text-base leading-relaxed">
                            <p>
                                A Soul Tech é uma startup de tecnologia focada
                                no desenvolvimento de sistemas internos,
                                plataformas digitais e automações sob medida.
                            </p>
                            <p>
                                Atuamos na transformação de operações manuais e
                                fragmentadas em soluções digitais escaláveis,
                                seguras e orientadas à decisão.
                            </p>
                            <p className="font-medium text-slate-300">
                                Trabalhamos a partir do entendimento profundo do
                                negócio, aplicando mentalidade de produto em
                                cada solução desenvolvida.
                            </p>
                        </div>
                    </header>

                    <IncubationBadge />

                    <section className="flex flex-col gap-8">
                        <header className="flex flex-col gap-3">
                            <h2 className="text-gray-50 text-3xl md:text-4xl font-black">
                                Pilares Estratégicos
                            </h2>
                            <p className="text-slate-400 text-base leading-relaxed">
                                Impulsionados por um compromisso com a inovação
                                e o design centrado no ser humano.
                            </p>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pillars.map((pillar) => (
                                <FeatureCard key={pillar.id} {...pillar} />
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col gap-8">
                        <header className="flex flex-col gap-3">
                            <h2 className="text-gray-50 text-3xl md:text-4xl font-black">
                                Valores
                            </h2>
                            <p className="text-slate-400 text-base leading-relaxed">
                                Os princípios que guiam cada uma de nossas
                                decisões.
                            </p>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value) => <FeatureCard key={value.id} {...value} />)}
                        </div>
                    </section>

                    <section className="flex flex-col gap-8">
                        <header className="flex flex-col gap-3">
                            <h2 className="text-gray-50 text-3xl md:text-4xl font-black">
                                Conheça o Time
                            </h2>
                            <p className="text-slate-400 text-base leading-relaxed">
                                As pessoas por trás das soluções que
                                desenvolvemos.
                            </p>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {team.map(({ id, ...props }) => <TeamCard key={id} {...props} />)}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
