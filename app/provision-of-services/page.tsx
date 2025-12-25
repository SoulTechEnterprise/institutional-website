import { Cog, Globe, Lightbulb, Palette, Smartphone } from "lucide-react"
import type { ReactNode } from "react"

const services = [
    {
        id: "sistemas-internos",
        icon: <Globe className="size-8" />,
        title: "Sistemas Internos Sob Medida",
        description:
            "Desenvolvimento de sistemas personalizados para organizar processos, centralizar informações e aumentar a eficiência operacional.",
    },
    {
        id: "plataformas-digitais",
        icon: <Smartphone className="size-8" />,
        title: "Plataformas Digitais",
        description:
            "Criação de plataformas web e mobile escaláveis, seguras e preparadas para evolução contínua do produto.",
    },
    {
        id: "automacao-processos",
        icon: <Cog className="size-8" />,
        title: "Automação de Processos",
        description:
            "Automatizamos tarefas manuais e fluxos repetitivos, integrando sistemas e reduzindo gargalos operacionais.",
    },
    {
        id: "ux-ui-design",
        icon: <Palette className="size-8" />,
        title: "UX/UI Design",
        description:
            "Interfaces funcionais e intuitivas, focadas na experiência do usuário e na eficiência do uso diário.",
    },
    {
        id: "consultoria-tecnica",
        icon: <Lightbulb className="size-8" />,
        title: "Consultoria Técnica e Arquitetura",
        description:
            "Diagnóstico de processos, definição de arquitetura de sistemas e apoio estratégico para decisões tecnológicas.",
    },
]

const ServiceCard = ({
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
            <p className="text-slate-500 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
)

const CTACard = () => (
    <div className="group flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-slate-700/50 bg-slate-900/20 p-8 transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-900/30 h-full">
        <h3 className="text-gray-50 text-xl font-bold text-center">
            Tem um projeto específico?
        </h3>
        <button className="bg-sky-600 hover:bg-sky-500 text-gray-50 font-bold py-3 px-8 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-600/20">
            Fale Conosco
        </button>
    </div>
)

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-950 font-montserrat">
            <main className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="max-w-7xl w-full flex flex-col gap-16">
                    <header className="flex flex-col gap-4 w-full max-w-[600px]">
                        <h1 className="text-gray-50 text-4xl md:text-5xl font-black">
                            Nossos Serviços
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Desenvolvemos sistemas internos, plataformas
                            digitais e automações que organizam operações,
                            reduzem custos e permitem decisões mais
                            inteligentes. Atuamos do diagnóstico à evolução
                            contínua.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                        <CTACard />
                    </div>
                </div>
            </main>
        </div>
    )
}
