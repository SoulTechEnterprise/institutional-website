"use client"

import {
    type ReactNode,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react"
import { cn } from "@/app/_utils/cn"

// useLayoutEffect não existe no servidor; no cliente ele é o que evita o
// piscar, já que roda antes da pintura.
const useIsomorphicLayoutEffect =
    typeof window === "undefined" ? useEffect : useLayoutEffect

/**
 * Revela o conteúdo quando ele entra na viewport.
 *
 * O estado inicial é *visível*: sem JavaScript, com a hidratação falhando ou
 * em um leitor que ignore o observer, o conteúdo aparece normalmente. Só
 * depois da montagem os blocos que estão abaixo da dobra são escondidos para
 * então animar na rolagem — o inverso deixaria a página em branco quando algo
 * desse errado.
 *
 * `delay` escalona itens de uma mesma grade; múltiplos de 60ms a 90ms tornam
 * a cascata perceptível sem atrasar a leitura.
 */
export function Reveal({
    children,
    delay = 0,
    className,
    as: Tag = "div",
}: {
    children: ReactNode
    delay?: number
    className?: string
    as?: "div" | "li" | "section"
}) {
    const ref = useRef<HTMLElement>(null)
    const [hidden, setHidden] = useState(false)

    useIsomorphicLayoutEffect(() => {
        const node = ref.current
        if (!node || typeof IntersectionObserver === "undefined") return

        // Já dentro da viewport na carga: mantém visível e não anima.
        if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return

        setHidden(true)

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                setHidden(false)
                observer.disconnect()
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <Tag
            // biome-ignore lint/suspicious/noExplicitAny: ref polimórfico sobre um conjunto fechado de tags
            ref={ref as any}
            data-hidden={hidden}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "data-[hidden=true]:translate-y-6 data-[hidden=true]:opacity-0",
                className
            )}
        >
            {children}
        </Tag>
    )
}
