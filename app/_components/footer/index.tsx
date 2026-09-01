"use client"

import { Github, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { addressLine, site } from "@/app/_utils/site"
import { useLanguage } from "@/app/language-context"

const socials = [
    { href: site.social.instagram, icon: Instagram, label: "Instagram" },
    { href: site.social.youtube, icon: Youtube, label: "YouTube" },
    { href: site.social.github, icon: Github, label: "GitHub" },
]

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="relative mt-8 border-line border-t bg-ink-raised">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.6fr_1fr_1.3fr] md:gap-12 md:px-8 md:py-16">
                <div className="flex flex-col gap-5">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image
                            src="/logo.webp"
                            alt=""
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                        <span className="font-semibold text-fg tracking-tight">
                            Soul Tech
                        </span>
                    </Link>

                    <p className="max-w-sm text-[0.9375rem] text-fg-muted leading-relaxed">
                        {t.footer.tagline}
                    </p>

                    <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-eyebrow text-fg-faint uppercase">
                        <span
                            aria-hidden
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        {t.footer.cnpjLabel} {site.cnpj}
                    </p>

                    <div className="flex items-center gap-2">
                        {socials.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                            >
                                <Icon size={16} strokeWidth={1.75} />
                            </a>
                        ))}
                    </div>
                </div>

                <nav
                    aria-label={t.footer.navLabel}
                    className="flex flex-col gap-4"
                >
                    <h2 className="font-mono text-eyebrow text-fg-faint uppercase">
                        {t.footer.navLabel}
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                        {t.nav.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-[0.9375rem] text-fg-muted transition-colors hover:text-accent"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-col gap-4">
                    <h2 className="font-mono text-eyebrow text-fg-faint uppercase">
                        {t.footer.contactLabel}
                    </h2>
                    <ul className="flex flex-col gap-3 text-[0.9375rem] text-fg-muted">
                        <li>
                            <a
                                href={`mailto:${site.email}`}
                                className="inline-flex items-start gap-2.5 transition-colors hover:text-accent"
                            >
                                <Mail
                                    size={16}
                                    className="mt-0.5 shrink-0 text-fg-faint"
                                    aria-hidden
                                />
                                {site.email}
                            </a>
                        </li>
                        <li>
                            <a
                                href={site.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-start gap-2.5 transition-colors hover:text-accent"
                            >
                                <Phone
                                    size={16}
                                    className="mt-0.5 shrink-0 text-fg-faint"
                                    aria-hidden
                                />
                                {site.phoneDisplay}
                            </a>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <MapPin
                                size={16}
                                className="mt-0.5 shrink-0 text-fg-faint"
                                aria-hidden
                            />
                            <address className="not-italic">
                                {addressLine}
                            </address>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-line border-t">
                <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-3 px-5 py-5 text-fg-faint text-xs md:flex-row md:px-8">
                    <p>{t.footer.rights}</p>
                    <ul className="flex items-center gap-5">
                        {t.footer.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-accent"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
