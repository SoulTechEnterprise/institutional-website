"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import {
    Clock,
    Github,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    SendHorizonal,
    Youtube,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { Button } from "../_components/ui/button"
import { PageHero } from "../_components/ui/page-hero"
import { IconBadge, Panel } from "../_components/ui/panel"
import { Section } from "../_components/ui/section"
import { cn } from "../_utils/cn"
import { addressLine, site } from "../_utils/site"
import { useLanguage } from "../language-context"
import { buildFormScheme, type FormScheme } from "./form"

const inputClasses =
    "w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-[0.9375rem] text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-accent/50 focus:bg-white/[0.04] aria-[invalid=true]:border-red-500/60"

/** Rótulo, campo e mensagem de erro com a ligação de acessibilidade correta. */
function Field({
    id,
    label,
    error,
    children,
}: {
    id: string
    label: string
    error?: string
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="font-medium text-fg text-sm">
                {label}
            </label>
            {children}
            {error ? (
                <p id={`${id}-erro`} className="text-red-400 text-xs">
                    {error}
                </p>
            ) : null}
        </div>
    )
}

export default function Contact() {
    const { t } = useLanguage()
    const { contact } = t
    const f = contact.form

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    const schema = useMemo(() => buildFormScheme(f), [f])

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormScheme>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            consent: false as unknown as true,
        },
    })

    const handleForm = async (data: FormScheme) => {
        try {
            await axios.post(site.formEndpoint, data)
            reset()
            setStatus("success")
            // Dá tempo de ler a confirmação antes de sair para o WhatsApp.
            setTimeout(() => {
                window.open(site.whatsapp, "_blank", "noopener,noreferrer")
            }, 1200)
        } catch {
            setStatus("error")
        }
    }

    const socials = [
        {
            href: site.whatsapp,
            icon: MessageCircle,
            label: "WhatsApp",
        },
        { href: site.social.instagram, icon: Instagram, label: "Instagram" },
        { href: site.social.youtube, icon: Youtube, label: "YouTube" },
        { href: site.social.github, icon: Github, label: "GitHub" },
    ]

    const directItems = [
        {
            icon: Mail,
            label: contact.direct.email,
            value: site.email,
            href: `mailto:${site.email}`,
        },
        {
            icon: Phone,
            label: contact.direct.phone,
            value: site.phoneDisplay,
            href: site.whatsapp,
        },
        {
            icon: MapPin,
            label: contact.direct.address,
            value: addressLine,
        },
        {
            icon: Clock,
            label: contact.direct.hours,
            value: contact.direct.hoursValue,
        },
    ]

    return (
        <>
            <PageHero
                eyebrow={contact.eyebrow}
                title={contact.title}
                description={contact.desc}
            />

            <Section className="pb-24 md:pb-32">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <Panel className="p-6 md:p-8">
                        <h2 className="font-semibold text-fg text-h3">
                            {f.title}
                        </h2>

                        <form
                            onSubmit={handleSubmit(handleForm)}
                            noValidate
                            className="mt-6 flex flex-col gap-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field
                                    id="name"
                                    label={f.name}
                                    error={errors.name?.message}
                                >
                                    <input
                                        id="name"
                                        className={inputClasses}
                                        placeholder={f.namePlaceholder}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={
                                            errors.name
                                                ? "name-erro"
                                                : undefined
                                        }
                                        {...register("name")}
                                    />
                                </Field>

                                <Field
                                    id="email"
                                    label={f.email}
                                    error={errors.email?.message}
                                >
                                    <input
                                        id="email"
                                        type="email"
                                        className={inputClasses}
                                        placeholder={f.emailPlaceholder}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={
                                            errors.email
                                                ? "email-erro"
                                                : undefined
                                        }
                                        {...register("email")}
                                    />
                                </Field>
                            </div>

                            <Field
                                id="phone"
                                label={f.phone}
                                error={errors.phone?.message}
                            >
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <IMaskInput
                                            id="phone"
                                            mask="(00) 00000-0000"
                                            value={value}
                                            unmask
                                            onAccept={(val) =>
                                                onChange(String(val))
                                            }
                                            placeholder="(00) 00000-0000"
                                            inputMode="tel"
                                            className={inputClasses}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={
                                                errors.phone
                                                    ? "phone-erro"
                                                    : undefined
                                            }
                                        />
                                    )}
                                />
                            </Field>

                            <Field
                                id="message"
                                label={f.message}
                                error={errors.message?.message}
                            >
                                <textarea
                                    id="message"
                                    rows={5}
                                    className={cn(inputClasses, "resize-y")}
                                    placeholder={f.messagePlaceholder}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={
                                        errors.message
                                            ? "message-erro"
                                            : undefined
                                    }
                                    {...register("message")}
                                />
                            </Field>

                            <div className="flex flex-col gap-2">
                                <label className="flex cursor-pointer items-start gap-3 text-fg-muted text-sm leading-relaxed">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#38bdf8]"
                                        aria-invalid={!!errors.consent}
                                        {...register("consent")}
                                    />
                                    <span>
                                        {f.consent}{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-accent underline underline-offset-4"
                                        >
                                            {t.footer.links[0].title}
                                        </Link>
                                        .
                                    </span>
                                </label>
                                {errors.consent ? (
                                    <p className="text-red-400 text-xs">
                                        {errors.consent.message}
                                    </p>
                                ) : null}
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="mt-1 w-full sm:w-auto sm:self-start"
                            >
                                {isSubmitting ? f.sending : f.button}
                                <SendHorizonal size={16} aria-hidden />
                            </Button>

                            {/* Região viva: leitores de tela anunciam o desfecho */}
                            <output
                                aria-live="polite"
                                className={cn(
                                    "text-sm",
                                    status === "success" && "text-accent",
                                    status === "error" && "text-red-400"
                                )}
                            >
                                {status === "success" && f.success}
                                {status === "error" && f.error}
                            </output>
                        </form>
                    </Panel>

                    <div className="flex flex-col gap-6">
                        <Panel className="p-6 md:p-8">
                            <h2 className="font-semibold text-fg text-h3">
                                {contact.direct.title}
                            </h2>

                            <ul className="mt-6 flex flex-col gap-5">
                                {directItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className="group flex items-start gap-4"
                                    >
                                        <IconBadge icon={item.icon} />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-mono text-eyebrow text-fg-faint uppercase">
                                                {item.label}
                                            </span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={
                                                        item.href.startsWith(
                                                            "http"
                                                        )
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel="noopener noreferrer"
                                                    className="text-[0.9375rem] text-fg transition-colors hover:text-accent"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-[0.9375rem] text-fg">
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Panel>

                        <Panel className="p-6 md:p-8">
                            <h2 className="font-mono text-eyebrow text-fg-faint uppercase">
                                {contact.direct.social}
                            </h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {socials.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-fg-muted text-sm transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                                    >
                                        <Icon size={15} strokeWidth={1.75} />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </Panel>
                    </div>
                </div>
            </Section>
        </>
    )
}
