import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 p-4 items-center justify-center text-white/50 text-xs border-t border-solid border-t-white/10">
            <p>@ 2026 Todos os direitos reservador para Soul Tech</p>
            <div className="flex gap-2">
                <Link className="underline underline-offset-4" href="#">
                    Políticas de Privacidade
                </Link>
                <Link className="underline underline-offset-4" href="#">
                    Termos de Uso
                </Link>
            </div>
        </footer>
    )
}
