"use client"

import Link from "next/link"
import { useLanguage } from "@/app/language-context"

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="flex flex-col items-center justify-center gap-2 border-t border-t-white/10 border-solid p-4 text-white/50 text-xs">
            <p>{t.footer.title}</p>
            <div className="flex gap-2">
                {t.footer.text.map((el) => {
                    return (
                        <Link
                            className="underline underline-offset-4"
                            href={el.href}
                            key={el.href}
                        >
                            {el.title}
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}
