"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Inicial" },
        { href: "/provision-of-services", label: "Serviços" },
        { href: "/about-us", label: "Sobre Nós" },
        { href: "/projects", label: "Projetos" },
        { href: "/contact", label: "Contato" },
    ]

    return (
        <header className="w-screen py-4 px-8 flex items-center m-auto justify-between max-w-7xl">
            <h1 className="font-montserrat text-white font-bold">Soul Tech</h1>
            <nav className="flex gap-4 text-sm">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            pathname === link.href
                                ? "text-white font-medium"
                                : "text-white/75 hover:text-white transition-colors"
                        }
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}
