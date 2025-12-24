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
import Card from "./components/card"
import CardTech from "./components/cardTech"

export default function Home() {
    return (
        <main className="grid grid-cols-2 items-center gap-8 p-8 w-screen h-screen justify-between max-w-7xl m-auto">
            <section className="flex flex-col gap-8 justify-center items-start">
                <div className="flex gap-2 items-center py-2 px-4 border border-solid border-sky-400 rounded-full uppercase text-xs text-sky-400 font-bold">
                    <div className="w-2 h-2 bg-sky-400 rounded-full" />
                    Disponível para Novos Projetos
                </div>

                <h2 className="text-white text-5xl font-black font-montserrat">
                    Construindo o <br />{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                        Futuro Digital
                    </span>
                </h2>
                <div className="flex flex-col gap-4">
                    <p className="text-white">
                        Transformamos processos complexos em sistemas digitais
                        escaláveis, seguros e orientados à decisão.
                    </p>
                    <p className="text-white">
                        A Soul Tech desenvolve soluções sob medida para
                        sustentar o crescimento do seu negócio.
                    </p>
                </div>
                <div className="flex gap-4">
                    <CardTech icon={Code} title="React" />
                    <CardTech icon={FileBraces} title="Python" />
                    <CardTech icon={Braces} title="C#" />
                </div>
                <Link
                    className="flex gap-2 text-black rounded bg-sky-400 px-4 py-2 font-bold text-sm items-center"
                    href="/contact"
                >
                    Iniciar um Projeto
                    <MoveRight />
                </Link>
            </section>

            <section className="flex flex-col gap-8 border border-solid border-sky-400 rounded-2xl p-8">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-xl">
                            Métricas
                        </h3>
                        <p className="text-white/75">
                            Dados atualizados com frequência
                        </p>
                    </div>
                    <div className="rounded-full border border-solid border-sky-400 text-sky-400 p-2">
                        <ChartNoAxesColumnIncreasing size={12} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Card
                        icon={Rocket}
                        title="Projetos em Desenvolvimento"
                        desc="Soluções próprias e sob medida em evolução contínua"
                    />
                    <Card
                        icon={Smile}
                        title="Foco em Escala e Performance"
                        desc="Arquiteturas pensadas para crescer com o negócio"
                    />
                    <Card
                        icon={Zap}
                        title="Relacionamento de Longo Prazo"
                        desc="Parcerias técnicas contínuas com clientes"
                    />
                </div>
            </section>
        </main>
    )
}
