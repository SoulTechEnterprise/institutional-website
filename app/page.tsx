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
        <main className="m-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center justify-between gap-8 p-4 md:p-8 lg:grid-cols-2">
            <section className="flex flex-col items-start justify-center gap-8">
                <div className="flex items-center gap-2 rounded-full border border-sky-400 border-solid px-4 py-2 font-bold text-sky-400 text-xs uppercase">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    Disponível para Novos Projetos
                </div>

                <h2 className="font-black font-montserrat text-3xl text-white md:text-4xl lg:text-5xl">
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
                <div className="flex flex-wrap gap-4">
                    <CardTech icon={Code} title="React" />
                    <CardTech icon={FileBraces} title="Python" />
                    <CardTech icon={Braces} title="C#" />
                </div>
                <Link
                    className="flex items-center gap-2 rounded bg-sky-400 px-4 py-2 font-bold text-black text-sm"
                    href="/contact"
                >
                    Iniciar um Projeto
                    <MoveRight />
                </Link>
            </section>

            <section className="flex flex-col gap-8 rounded-2xl border border-sky-400 border-solid p-8">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white text-xl">
                            Métricas
                        </h3>
                        <p className="text-white/75">
                            Dados atualizados com frequência
                        </p>
                    </div>
                    <div className="rounded-full border border-sky-400 border-solid p-2 text-sky-400">
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
