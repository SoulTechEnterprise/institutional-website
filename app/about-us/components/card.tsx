import type { LucideIcon } from "lucide-react"

interface CardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function Card({ title, description, icon: Icon }: CardProps) {
    return (
        <div className="group flex h-full gap-4 rounded-xl border border-sky-400/50 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="self-center rounded-full bg-sky-400/10 p-4 text-sky-400 group-hover:bg-sky-400/20">
                <Icon size={24} />
            </div>
            <div className="flex flex-col gap-4 pt-1">
                <h3 className="font-bold text-gray-50 text-xl">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
