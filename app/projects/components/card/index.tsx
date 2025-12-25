import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface CardProps {
    src: string
    alt: string
    title: string
    desc: string
    tag: string
    link: string
}

export default function Card({ src, alt, title, desc, tag, link }: CardProps) {
    return (
        <div className="group flex flex-col border border-solid border-white/10 rounded transition-all duration-300 hover:border-sky-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="relative rounded-tl rounded-tr bg-black aspect-video">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="rounded-tl rounded-tr transition-all duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-2 p-4 border-b border-solid border-b-white/10">
                <h3 className="text-white font-bold text-xl">{title}</h3>
                <span className="text-white/75 text-sm">{desc}</span>
            </div>

            <div className="flex p-4 gap-2 items-center justify-between">
                <div className="px-4 py-1.5 border border-solid border-sky-400 rounded-2xl text-sky-400 font-bold text-xs uppercase transition-all duration-300 group-hover:bg-sky-400/10">
                    {tag}
                </div>

                <Link
                    href={link}
                    className="flex items-center gap-2 text-white text-xs transition-all duration-300 group-hover:text-sky-400 group-hover:gap-3"
                >
                    Ver mais <MoveRight size={12} />
                </Link>
            </div>
        </div>
    )
}
