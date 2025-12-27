import type { LucideIcon } from "lucide-react"

export interface CardProps {
    title: string
    desc: string
    icon: LucideIcon
}

export default function Card({ icon: Icon, title, desc }: CardProps) {
    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-sky-400/50 border-solid p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="rounded-full border border-sky-400/50 border-solid p-4 text-sky-400 transition-colors group-hover:bg-sky-400/20">
                <Icon size={24} />
            </div>
            <div className="flex flex-col">
                <h2 className="font-black text-white text-xl">{title}</h2>
                <p className="text-sm text-white">{desc}</p>
            </div>
        </div>
    )
}
