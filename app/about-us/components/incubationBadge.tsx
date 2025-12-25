import { Rocket } from "lucide-react"

export default function IncubationBadge() {
    return (
        <div className="group w-full rounded-xl border border-sky-400/30 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="flex items-start gap-6">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition-colors group-hover:bg-sky-400/20">
                    <Rocket className="size-9" />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-gray-50 text-xl">
                            Incubação e Ecossistema de Inovação
                        </h3>
                        <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-bold text-sky-400 text-xs uppercase tracking-wide">
                            Tec Unimar
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        A Soul Tech é uma startup incubada no{" "}
                        <span className="font-semibold text-sky-400">
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
