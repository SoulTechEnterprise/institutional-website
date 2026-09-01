import Image from "next/image"

interface TeamMemberProps {
    name: string
    position: string
    image: string
}

/**
 * As fotos do time têm fundos e enquadramentos distintos entre si. O
 * tratamento uniforme — recorte quadrado, dessaturação e véu escuro em
 * gradiente — é o que faz os três retratos lerem como um conjunto.
 */
export default function TeamCard({ name, position, image }: TeamMemberProps) {
    return (
        <figure className="group relative overflow-hidden rounded-xl border border-line bg-ink-panel transition-all duration-500 hover:border-line-strong">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={`Retrato de ${name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-[center_25%] contrast-[1.05] grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                {/* Véu que unifica os fundos e garante contraste para a legenda */}
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-accent/10 mix-blend-color transition-opacity duration-700 group-hover:opacity-0"
                />
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                <span className="font-mono text-accent text-eyebrow uppercase">
                    {position}
                </span>
                <span className="font-semibold text-fg text-h3">{name}</span>
            </figcaption>
        </figure>
    )
}
