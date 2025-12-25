import type { LucideIcon } from "lucide-react"

export interface CardProps {
    title: string
    desc: string
    icon: LucideIcon
}

export default function Card({ icon: Icon, title, desc }: CardProps) {
    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-solid border-sky-400 p-4 transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="rounded-full text-sky-400 border border-solid border-sky-400 p-4 group-hover:bg-sky-400/20 transition-colors">
                <Icon size={24} />
            </div>
            <div className="flex flex-col">
                <h2 className="text-white text-xl font-black">{title}</h2>
                <p className="text-white text-sm">{desc}</p>
            </div>
        </div>
    )
}
