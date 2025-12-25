import { Rocket } from "lucide-react"

export default function IncubationBadge() {
    return (
        <div className="group w-full rounded-xl border border-sky-400/30 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="flex items-start gap-6">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 transition-colors">
                    <Rocket className="size-9" />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-gray-50 text-xl font-bold">
                            Incubação e Ecossistema de Inovação
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-bold uppercase tracking-wide border border-sky-400/30">
                            Tec Unimar
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        A Soul Tech é uma startup incubada no{" "}
                        <span className="text-sky-400 font-semibold">
                            Tec Unimar
                        </span>
                        , o ecossistema de inovação da Universidade de Marília
                        (UNIMAR).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        A incubação proporciona acesso a ambiente de inovação,
                        apoio institucional, orientação estratégica e conexão
                        com o ecossistema empreendedor, fortalecendo a estrutura
                        da empresa e acelerando a evolução contínua das soluções
                        desenvolvidas.
                    </p>
                </div>
            </div>
        </div>
    )
}
