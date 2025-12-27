import z from "zod"

export const formScheme = z.object({
    name: z.string().nonempty(),
    email: z.email().nonempty(),
    phone: z.string().min(11).max(11),
})

export type FormScheme = z.infer<typeof formScheme>
