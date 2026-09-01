"use client"

import { Boxes, Cog, Handshake, MoveRight, Workflow } from "lucide-react"
import Link from "next/link"
import { ButtonLink } from "./_components/ui/button"
import { FeatureCard, Panel } from "./_components/ui/panel"
import { Reveal } from "./_components/ui/reveal"
import { Eyebrow, Section, SectionHeading } from "./_components/ui/section"
import { site } from "./_utils/site"
import { useLanguage } from "./language-context"
import ProjectCard from "./projects/components/card"

const serviceIcons = [Boxes, Workflow, Cog]

export default function Home() {
    const { t } = useLanguage()
    const { hero, differentials, services, process, cases, cta } = t.home
    const featured = t.projects.card.filter((p) => p.featured).slice(0, 2)

    // O CNPJ mora em site.ts; a tradução guarda só o rótulo e um token.
    const specRows = hero.spec.rows.map((row) => ({
        ...row,
        value: row.value.replace("{cnpj}", site.cnpj),
    }))

    return (
        <>
            {/* ---------------------------------------------------------- Hero */}
            <section className="relative isolate overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <div className="absolute inset-0 bg-blueprint opacity-70 [mask-image:radial-gradient(75%_65%_at_50%_10%,#000,transparent)]" />
                    <div className="absolute inset-x-0 top-0 h-[42rem] bg-aura" />
                    <div className="grain-overlay absolute inset-0 opacity-[0.04] mix-blend-overlay" />
                </div>

                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div className="flex flex-col items-start gap-7">
                        <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-accent text-eyebrow uppercase">
                            <span
                                aria-hidden
                                className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent"
                            />
                            {hero.status}
                        </p>

                        <h1
                            className="animate-rise font-semibold text-balance-heading text-display text-fg"
                            style={{ animationDelay: "80ms" }}
                        >
                            {hero.titleLead}{" "}
                            <span className="text-accent-gradient">
                                {hero.titleAccent}
                            </span>
                        </h1>

                        <div
                            className="flex max-w-xl animate-rise flex-col gap-4"
                            style={{ animationDelay: "160ms" }}
                        >
                            {hero.text.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="text-fg-muted text-lead"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div
                            className="flex w-full animate-rise flex-col gap-3 sm:flex-row sm:items-center"
                            style={{ animationDelay: "240ms" }}
                        >
                            <ButtonLink href="/contact" size="lg">
                                {hero.primary}
                                <MoveRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                />
                            </ButtonLink>
                            <ButtonLink
                                href="/provision-of-services"
                                size="lg"
                                variant="secondary"
                            >
                                {hero.secondary}
                            </ButtonLink>
                        </div>
                    </div>

                    {/* Ficha técnica da empresa: substitui o antigo painel de
                        "métricas" que não exibia nenhuma métrica real. */}
                    <div
                        className="w-full animate-rise"
                        style={{ animationDelay: "320ms" }}
                    >
                        <Panel className="p-1">
                            <div className="rounded-[0.6875rem] border border-line/60 bg-ink/40 p-6 md:p-7">
                                <div className="flex items-center justify-between gap-4 border-line border-b pb-4">
                                    <p className="font-mono text-eyebrow text-fg-faint uppercase">
                                        {hero.spec.label}
                                    </p>
                                    <div
                                        aria-hidden
                                        className="flex items-center gap-1"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-fg-faint/50" />
                                        <span className="h-1 w-1 rounded-full bg-fg-faint/50" />
                                        <span className="h-1 w-1 rounded-full bg-accent" />
                                    </div>
                                </div>

                                <dl className="flex flex-col">
                                    {specRows.map((row) => (
                                        <div
                                            key={row.key}
                                            className="flex flex-col gap-1 border-line border-b py-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                                        >
                                            <dt className="w-28 shrink-0 font-mono text-eyebrow text-fg-faint uppercase">
                                                {row.key}
                                            </dt>
                                            <dd className="text-[0.9375rem] text-fg leading-relaxed">
                                                {row.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Panel>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------ Diferenciais */}
            <Section size="compact">
                <Reveal>
                    <Eyebrow className="mb-8">{differentials.eyebrow}</Eyebrow>
                </Reveal>
                <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
                    {differentials.items.map((item, index) => (
                        <Reveal
                            as="li"
                            key={item.title}
                            delay={index * 80}
                            className="flex flex-col gap-3 bg-ink p-6 md:p-8"
                        >
                            <span className="font-mono text-accent text-eyebrow">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-semibold text-fg text-h3">
                                {item.title}
                            </h3>
                            <p className="text-[0.9375rem] text-fg-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </Reveal>
                    ))}
                </ul>
            </Section>

            {/* ----------------------------------------------------- Serviços */}
            <Section>
                <Reveal>
                    <SectionHeading
                        eyebrow={services.eyebrow}
                        title={services.title}
                        description={services.desc}
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {t.services.cards.slice(0, 3).map((card, index) => (
                        <Reveal key={card.title} delay={index * 80}>
                            <FeatureCard
                                icon={serviceIcons[index]}
                                title={card.title}
                                description={card.desc}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={160}>
                    <Link
                        href="/provision-of-services"
                        className="group mt-8 inline-flex items-center gap-2 font-medium text-accent text-sm transition-colors hover:text-accent-bright"
                    >
                        {services.link}
                        <MoveRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </Reveal>
            </Section>

            {/* ------------------------------------------- Como trabalhamos */}
            <Section className="relative">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 bg-blueprint opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000,transparent)]"
                />
                <Reveal>
                    <SectionHeading
                        eyebrow={process.eyebrow}
                        title={process.title}
                        description={process.desc}
                    />
                </Reveal>

                <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
                    {/* Linha que conecta as etapas no desktop */}
                    <div
                        aria-hidden
                        className="rule-glow absolute top-4 right-0 left-0 hidden h-px md:block"
                    />
                    {process.steps.map((step, index) => (
                        <Reveal
                            as="li"
                            key={step.title}
                            delay={index * 90}
                            className="relative flex flex-col gap-4 md:pr-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-ink font-mono text-accent text-eyebrow">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                    aria-hidden
                                    className="h-px flex-1 bg-line md:hidden"
                                />
                            </div>
                            <h3 className="font-semibold text-fg text-h3">
                                {step.title}
                            </h3>
                            <p className="text-[0.9375rem] text-fg-muted leading-relaxed">
                                {step.desc}
                            </p>
                        </Reveal>
                    ))}
                </ol>
            </Section>

            {/* -------------------------------------------------- Cases */}
            <Section>
                <Reveal>
                    <SectionHeading
                        eyebrow={cases.eyebrow}
                        title={cases.title}
                        description={cases.desc}
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {featured.map((project, index) => (
                        <Reveal key={project.title} delay={index * 90}>
                            <ProjectCard
                                size="feature"
                                src={project.src}
                                title={project.title}
                                desc={project.desc}
                                tag={project.tag}
                                link={project.url}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={160}>
                    <Link
                        href="/projects"
                        className="group mt-8 inline-flex items-center gap-2 font-medium text-accent text-sm transition-colors hover:text-accent-bright"
                    >
                        {cases.link}
                        <MoveRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </Reveal>
            </Section>

            {/* ------------------------------------------------- CTA final */}
            <Section size="compact" className="pb-24 md:pb-32">
                <Reveal>
                    <Panel className="relative overflow-hidden px-6 py-14 text-center md:px-16 md:py-20">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-aura"
                        />
                        <div className="relative flex flex-col items-center gap-6">
                            <Handshake
                                size={26}
                                className="text-accent"
                                strokeWidth={1.5}
                                aria-hidden
                            />
                            <h2 className="max-w-2xl font-semibold text-balance-heading text-fg text-h2">
                                {cta.title}
                            </h2>
                            <p className="max-w-xl text-fg-muted text-lead">
                                {cta.desc}
                            </p>
                            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                <ButtonLink href="/contact" size="lg">
                                    {cta.primary}
                                    <MoveRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                    />
                                </ButtonLink>
                                <ButtonLink
                                    href={site.whatsapp}
                                    external
                                    size="lg"
                                    variant="secondary"
                                >
                                    {cta.secondary}
                                </ButtonLink>
                            </div>
                        </div>
                    </Panel>
                </Reveal>
            </Section>
        </>
    )
}
