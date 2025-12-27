import type { LucideIcon } from "lucide-react"

export interface CardProps {
    title: string
    desc: string
    icon: LucideIcon
}

export default function Card({ icon: Icon, title, desc }: CardProps) {
    return (
        <div className="group flex items-center gap-4 rounded border border-sky-400/50 border-solid p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/75 hover:shadow-lg hover:shadow-sky-400/25">
            <div className="hidden rounded-full border border-sky-400/50 border-solid p-4 text-sky-400 transition-colors group-hover:bg-sky-400/25 lg:flex">
                <Icon size={24} />
            </div>
            <div className="flex flex-col text-center lg:text-left">
                <h2 className="font-black text-sm text-white lg:text-base">
                    {title}
                </h2>
                <p className="text-center text-sm text-white/75 lg:text-left lg:text-base">
                    {desc}
                </p>
            </div>
        </div>
    )
}
