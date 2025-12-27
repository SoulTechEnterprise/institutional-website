import type { LucideIcon } from "lucide-react"

export interface CardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function Card({ icon: Icon, title, description }: CardProps) {
    return (
        <div className="group flex h-full flex-col gap-4 rounded-xl border border-sky-400/50 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="flex items-center justify-center rounded-xl text-sky-400 transition-colors group-hover:bg-sky-400/20">
                <Icon size={14} />
            </div>
            <div className="flex flex-col gap-4 pt-1">
                <h3 className="font-bold text-white text-xl">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
