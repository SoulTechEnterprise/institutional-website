import type { LucideIcon } from "lucide-react"

export interface CardTechProps {
    icon: LucideIcon
    title: string
}

export default function CardTech({ icon: Icon, title }: CardTechProps) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-full border border-sky-400/50 border-solid px-4 py-2 font-bold text-white text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400/25 hover:shadow-lg hover:shadow-sky-400/25 lg:px-8 lg:text-sm">
            <Icon size={12} />
            {title}
        </div>
    )
}
