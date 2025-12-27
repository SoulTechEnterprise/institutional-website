import Image from "next/image"

interface TeamMemberProps {
    name: string
    position: string
    image: string
}

export default function TeamCard({ name, position, image }: TeamMemberProps) {
    return (
        <div className="group flex h-full flex-col gap-4 rounded-xl border border-sky-400/25 bg-slate-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/25">
            <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-[center_30%] grayscale transition-all duration-300 hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base text-white lg:text-lg">
                    {name}
                </h3>
                <p className="font-medium text-sky-400 text-xs uppercase lg:text-sm">
                    {position}
                </p>
            </div>
        </div>
    )
}
