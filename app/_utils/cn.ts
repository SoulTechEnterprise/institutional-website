/**
 * Concatena classes condicionais. Valores falsy são descartados.
 * Mantido mínimo de propósito: o projeto não usa variantes conflitantes
 * que exigiriam resolução de precedência do Tailwind.
 */
export function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ")
}
