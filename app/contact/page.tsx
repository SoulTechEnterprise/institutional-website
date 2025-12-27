"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { House, Mail, Phone, SendHorizonal } from "lucide-react"
import { redirect } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { useLanguage } from "../language-context"
import Card from "./components/card"
import { type FormScheme, formScheme } from "./form"

export default function Contact() {
    const { t } = useLanguage()

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<FormScheme>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    const handleForm = async (data: FormScheme) => {
        reset()
        redirect("https://wa.me/14997559851")
    }

    return (
        <main className="m-auto flex max-w-7xl flex-col gap-8 p-4 md:p-8">
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-3xl text-white md:text-4xl">
                    {t.contact.left_side.title}
                </h2>
                <p className="text-sm text-white/75">
                    {t.contact.left_side.desc}
                </p>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <form
                    onSubmit={handleSubmit(handleForm)}
                    className="flex flex-col justify-center gap-8"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            className="self-start font-bold text-sm text-white"
                            htmlFor="name"
                        >
                            {t.contact.left_side.field.name}
                        </label>
                        <input
                            className="rounded border border-sky-400/50 border-solid px-4 py-2 text-white/75 outline-none placeholder:text-sm placeholder:text-white/50"
                            id="name"
                            placeholder="Jonh Doe"
                            {...register("name")}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="self-start font-bold text-sm text-white"
                            htmlFor="email"
                        >
                            {t.contact.left_side.field.email}
                        </label>
                        <input
                            className="rounded border border-sky-400/50 border-solid px-4 py-2 text-white/75 outline-none placeholder:text-sm placeholder:text-white/50"
                            id="email"
                            placeholder="jonhdoe@example.com"
                            {...register("email")}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="self-start font-bold text-sm text-white"
                            htmlFor="phone"
                        >
                            {t.contact.left_side.field.phone}
                        </label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <IMaskInput
                                    mask="(00) 00000-0000"
                                    value={value}
                                    unmask={true}
                                    onAccept={(val) => onChange(val)}
                                    placeholder="(00) 00000-0000"
                                    className="rounded border border-sky-400/50 border-solid px-4 py-2 text-white/75 outline-none placeholder:text-sm placeholder:text-white/50"
                                />
                            )}
                        />
                    </div>

                    <button
                        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-sky-400 px-4 py-2 font-bold text-sm text-white"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {t.contact.left_side.field.button}{" "}
                        <SendHorizonal size={12} />
                    </button>
                </form>

                <div className="flex flex-col gap-8 rounded border border-sky-400/50 border-solid p-8">
                    <h2 className="font-bold text-2xl text-white">
                        {t.contact.right_side.title}
                    </h2>

                    <div className="flex flex-col gap-4">
                        <Card
                            icon={Mail}
                            title={t.contact.right_side.field.email}
                            content="soultech215@gmail.com"
                        />

                        <Card
                            icon={Phone}
                            title={t.contact.right_side.field.phone}
                            content="(14) 99755-9851"
                        />

                        <Card
                            icon={House}
                            title={t.contact.right_side.field.address}
                            content="R. Pedro Alpino, 401 – Jardim Araxa | Marília – SP"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
