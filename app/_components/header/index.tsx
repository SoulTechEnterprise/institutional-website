"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/app/language-context"

export default function Header() {
    const pathname = usePathname()
    const { t } = useLanguage()

    return (
        <>
            <header className="fixed top-0 left-1/2 z-10 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between gap-2 bg-slate-950 px-4 py-2 md:gap-4 md:px-8 md:py-4">
                <div className="flex shrink-0 items-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="Soul Tech Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    <h1 className="hidden whitespace-nowrap font-bold font-montserrat text-white md:block md:text-base">
                        Soul Tech
                    </h1>
                </div>
                <nav className="flex gap-2 text-xs md:gap-4 md:text-sm">
                    {t.header.map((el) => {
                        return (
                            <Link
                                key={el.title}
                                href={el.href}
                                className={
                                    pathname === el.href
                                        ? "whitespace-nowrap font-medium font-medium text-white text-white"
                                        : "whitespace-nowrap text-white/75 text-white/75 transition-colors transition-colors hover:text-white hover:text-white"
                                }
                            >
                                {el.title}
                            </Link>
                        )
                    })}
                </nav>
            </header>

            <div className="h-16 w-screen lg:h-20" />
        </>
    )
}
