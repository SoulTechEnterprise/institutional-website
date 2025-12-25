import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-2 border-t border-t-white/10 border-solid p-4 text-white/50 text-xs">
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
