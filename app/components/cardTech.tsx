import type { LucideIcon } from "lucide-react"

export interface CardTechProps {
    icon: LucideIcon
    title: string
}

export default function CardTech({ icon: Icon, title }: CardTechProps) {
    return (
        <div className="flex items-center gap-2 px-8 py-2 rounded-full text-white border border-solid border-sky-400 text-sm font-bold">
            <Icon size={12} />
            {title}
        </div>
    )
}
