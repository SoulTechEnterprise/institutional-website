"use client"

import { Menu, MoveRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/app/_utils/cn"
import { useLanguage } from "@/app/language-context"
import { ButtonLink } from "../ui/button"
import { LanguageSwitch } from "./language-switch"

export default function Header() {
    const pathname = usePathname()
    const { t } = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    // O header só ganha fundo e traço depois que a página sai do topo,
    // para que o hero apareça sem uma faixa cortando a composição.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Fecha o menu ao navegar. A dependência é o próprio gatilho: o efeito
    // existe para reagir à mudança de rota.
    // biome-ignore lint/correctness/useExhaustiveDependencies: pathname é o gatilho
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    // Impede a rolagem do documento enquanto o painel mobile estiver aberto.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [menuOpen])

    useEffect(() => {
        if (!menuOpen) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [menuOpen])

    return (
        <>
            <header
                className={cn(
                    "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
                    scrolled || menuOpen
                        ? "border-line border-b bg-ink/85 backdrop-blur-xl"
                        : "border-transparent border-b"
                )}
            >
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-2.5"
                        aria-label="Soul Tech — início"
                    >
                        <Image
                            src="/logo.webp"
                            alt=""
                            width={36}
                            height={36}
                            priority
                            className="h-9 w-9 object-contain"
                        />
                        <span className="font-semibold text-[0.9375rem] text-fg tracking-tight">
                            Soul Tech
                        </span>
                    </Link>

                    <nav
                        aria-label={t.footer.navLabel}
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {t.nav.links.map((link) => {
                            const active = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                        "relative rounded-md px-3 py-2 text-sm transition-colors duration-200",
                                        active
                                            ? "text-fg"
                                            : "text-fg-muted hover:text-fg"
                                    )}
                                >
                                    {link.title}
                                    {active ? (
                                        <span
                                            aria-hidden
                                            className="absolute bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 bg-accent"
                                        />
                                    ) : null}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-3">
                        <LanguageSwitch />

                        {/* O wrapper faz o ocultar: `hidden` no próprio botão
                            perderia para o `inline-flex` da variante base. */}
                        <div className="hidden lg:block">
                            <ButtonLink href="/contact">
                                {t.nav.cta}
                                <MoveRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                                />
                            </ButtonLink>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-expanded={menuOpen}
                            aria-controls="menu-mobile"
                            aria-label={
                                menuOpen ? t.nav.closeMenu : t.nav.openMenu
                            }
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-fg transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Painel de navegação mobile */}
            <div
                id="menu-mobile"
                hidden={!menuOpen}
                className="fixed inset-0 top-16 z-30 flex flex-col bg-ink lg:hidden"
            >
                <nav className="flex flex-col gap-1 px-5 pt-6">
                    {t.nav.links.map((link, index) => {
                        const active = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ animationDelay: `${index * 45}ms` }}
                                className={cn(
                                    "flex items-center justify-between border-line border-b py-4 font-medium text-h3 transition-colors",
                                    menuOpen && "animate-rise",
                                    active ? "text-accent" : "text-fg"
                                )}
                            >
                                {link.title}
                                <MoveRight
                                    size={18}
                                    className="text-fg-faint"
                                    aria-hidden
                                />
                            </Link>
                        )
                    })}
                </nav>

                <div className="px-5 py-8">
                    <ButtonLink href="/contact" size="lg" className="w-full">
                        {t.nav.cta}
                        <MoveRight size={16} />
                    </ButtonLink>
                </div>
            </div>
        </>
    )
}
