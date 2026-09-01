import { z } from "zod"
import type { Translation } from "../_utils/translations"

type Messages = Translation["contact"]["form"]

/**
 * O schema é montado com as mensagens do idioma ativo, para que os erros
 * apareçam traduzidos — antes a validação existia mas nada era exibido.
 */
export function buildFormScheme(m: Messages) {
    return z.object({
        name: z.string().trim().min(2, m.required),
        email: z.email(m.invalidEmail),
        // O IMaskInput entrega o valor sem máscara: 10 dígitos (fixo) ou 11 (celular).
        phone: z.string().regex(/^\d{10,11}$/, m.invalidPhone),
        message: z.string().trim().min(20, m.shortMessage),
        consent: z.literal(true, { message: m.consentRequired }),
    })
}

export type FormScheme = z.infer<ReturnType<typeof buildFormScheme>>
