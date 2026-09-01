"use client"

import { cn } from "@/app/_utils/cn"
import type { Language } from "@/app/_utils/translations"
import { useLanguage } from "@/app/language-context"

const options: { value: Language; label: string; full: string }[] = [
    { value: "pt", label: "PT", full: "Português" },
    { value: "en", label: "EN", full: "English" },
]

/**
 * Seletor de idioma. O site já tinha as duas traduções, mas nenhum controle
 * na interface — este componente é o que torna o inglês alcançável.
 */
export function LanguageSwitch() {
    const { lang, setLang, t } = useLanguage()

    return (
        <fieldset className="flex items-center rounded-lg border border-line p-0.5">
            <legend className="sr-only">{t.nav.language}</legend>
            {options.map((option) => {
                const active = lang === option.value
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => setLang(option.value)}
                        aria-pressed={active}
                        title={option.full}
                        className={cn(
                            "rounded-[0.3125rem] px-2 py-1 font-mono text-[0.6875rem] tracking-wider transition-colors duration-200",
                            active
                                ? "bg-white/[0.08] text-accent"
                                : "text-fg-faint hover:text-fg"
                        )}
                    >
                        {option.label}
                    </button>
                )
            })}
        </fieldset>
    )
}
