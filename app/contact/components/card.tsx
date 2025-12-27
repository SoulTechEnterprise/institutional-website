import type { LucideIcon } from "lucide-react"

interface CardProps {
    icon: LucideIcon
    title: string
    content: string
}

export default function Card({ icon: Icon, title, content }: CardProps) {
    return (
        <div className="flex gap-4">
            <div className="rounded-full border border-sky-400/50 border-solid p-4 text-white">
                <Icon size={24} />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="font-bold text-white">{title}</h3>
                <span className="text-sm text-white/75">{content}</span>
            </div>
        </div>
    )
}
