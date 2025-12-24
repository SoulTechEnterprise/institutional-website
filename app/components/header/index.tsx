"use client"

import Image from "next/image"
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
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="Soul Tech Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                <h1 className="font-montserrat text-white font-bold">
                    Soul Tech
                </h1>
            </div>
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
