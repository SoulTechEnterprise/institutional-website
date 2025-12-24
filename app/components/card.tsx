import type { LucideIcon } from "lucide-react"

export interface CardProps {
    title: string
    desc: string
    icon: LucideIcon
}

export default function Card({ icon: Icon, title, desc }: CardProps) {
    return (
        <div className="flex gap-4 rounded-2xl border border-solid border-sky-400 p-4">
            <div className="rounded-full text-sky-400 border border-solid border-sky-400 p-4">
                <Icon size={24} />
            </div>
            <div className="flex flex-col">
                <h2 className="text-white text-2xl font-black">{title}</h2>
                <p className="text-white text-sm">{desc}</p>
            </div>
        </div>
    )
}
