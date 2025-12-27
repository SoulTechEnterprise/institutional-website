"use client"

import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { type Language, translations } from "./_utils/translations"

type LanguageContextType = {
    lang: Language
    setLang: (lang: Language) => void
    t: (typeof translations)["pt"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("app-lang") as Language

        if (savedLang) {
            setLang(savedLang)
            return
        }

        const browserLang = navigator.language.toLowerCase()
        console.log("Idioma detectado:", browserLang)

        if (browserLang.startsWith("pt")) {
            setLang("pt")
        }
    }, [])

    const changeLang = (newLang: Language) => {
        setLang(newLang)
        localStorage.setItem("app-lang", newLang)
    }

    return (
        <LanguageContext.Provider
            value={{ lang, setLang: changeLang, t: translations[lang] }}
        >
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
