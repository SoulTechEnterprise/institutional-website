"use client"

import {
    createContext,
    type ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { type Language, translations } from "./_utils/translations"

const STORAGE_KEY = "app-lang"

type LanguageContextType = {
    lang: Language
    setLang: (lang: Language) => void
    t: (typeof translations)["pt"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

/**
 * O idioma inicial é "pt" — o mesmo declarado em <html lang="pt-BR"> e o do
 * mercado principal. Assim o HTML servido já sai coerente com o atributo de
 * idioma e os buscadores indexam a versão correta; a troca para "en" acontece
 * na hidratação, apenas para quem escolheu ou navega em inglês.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("pt")

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)

        if (saved === "pt" || saved === "en") {
            setLang(saved)
            return
        }

        if (!navigator.language.toLowerCase().startsWith("pt")) {
            setLang("en")
        }
    }, [])

    // Mantém o atributo lang do documento em sincronia com o conteúdo exibido,
    // o que importa para leitores de tela e para a hifenização do navegador.
    useEffect(() => {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
    }, [lang])

    const changeLang = useCallback((newLang: Language) => {
        setLang(newLang)
        localStorage.setItem(STORAGE_KEY, newLang)
    }, [])

    const value = useMemo(
        () => ({ lang, setLang: changeLang, t: translations[lang] }),
        [lang, changeLang]
    )

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context)
        throw new Error(
            "useLanguage deve ser usado dentro de um LanguageProvider"
        )
    return context
}
