import Image from "next/image"

interface TeamMemberProps {
    name: string
    position: string
    image: string
}

export default function TeamCard({ name, position, image }: TeamMemberProps) {
    return (
        <div className="group flex flex-col gap-4 rounded-xl border border-sky-400/30 bg-slate-900/40 p-6 transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20 h-full">
            <div className="w-full aspect-square rounded-lg bg-slate-800 overflow-hidden relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-gray-50 text-lg font-bold">{name}</h3>
                <p className="text-sky-400 text-sm font-medium uppercase tracking-wide">
                    {position}
                </p>
            </div>
        </div>
    )
}
