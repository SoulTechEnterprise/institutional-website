import type { LucideIcon } from "lucide-react"

export interface CardTechProps {
    icon: LucideIcon
    title: string
}

export default function CardTech({ icon: Icon, title }: CardTechProps) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-sky-400 border-solid px-8 py-2 font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400/10 hover:shadow-lg hover:shadow-sky-400/20">
            <Icon size={12} />
            {title}
        </div>
    )
}
