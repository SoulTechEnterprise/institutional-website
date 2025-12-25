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
        <div className="group flex flex-col rounded border border-white/10 border-solid transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/20">
            <div className="relative aspect-video rounded-tl rounded-tr bg-black">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="rounded-tl rounded-tr transition-all duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-2 border-b border-b-white/10 border-solid p-4">
                <h3 className="font-bold text-white text-xl">{title}</h3>
                <span className="text-sm text-white/75">{desc}</span>
            </div>

            <div className="flex items-center justify-between gap-2 p-4">
                <div className="rounded-2xl border border-sky-400 border-solid px-4 py-1.5 font-bold text-sky-400 text-xs uppercase transition-all duration-300 group-hover:bg-sky-400/10">
                    {tag}
                </div>

                <Link
                    href={link}
                    className="flex items-center gap-2 text-white text-xs transition-all duration-300 group-hover:gap-3 group-hover:text-sky-400"
                >
                    Ver mais <MoveRight size={12} />
                </Link>
            </div>
        </div>
    )
}
