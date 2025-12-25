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
        <header className="m-auto flex w-screen max-w-7xl items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="Soul Tech Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                <h1 className="font-bold font-montserrat text-white">
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
                                ? "font-medium text-white"
                                : "text-white/75 transition-colors hover:text-white"
                        }
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}
