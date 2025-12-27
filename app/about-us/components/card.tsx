import type { LucideIcon } from "lucide-react"

interface CardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function Card({ title, description, icon: Icon }: CardProps) {
    return (
        <div className="group flex gap-4 rounded-xl border border-sky-400/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/20 lg:p-8">
            <div className="hidden self-center rounded-full bg-sky-400/10 p-4 text-sky-400 group-hover:bg-sky-400/20 lg:flex">
                <Icon size={24} />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
                <h3 className="font-bold text-base text-white lg:text-xl">
                    {title}
                </h3>
                <p className="text-sm text-white/75 lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}
