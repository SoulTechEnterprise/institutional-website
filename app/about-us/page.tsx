"use client"

import {
    BadgeCheck,
    Eye,
    Handshake,
    Lightbulb,
    Target,
    Users,
} from "lucide-react"
import { CtaPanel } from "../_components/ui/cta-panel"
import { PageHero } from "../_components/ui/page-hero"
import { FeatureCard, IconBadge, Panel } from "../_components/ui/panel"
import { Reveal } from "../_components/ui/reveal"
import { Section, SectionHeading } from "../_components/ui/section"
import { addressLine, site } from "../_utils/site"
import { useLanguage } from "../language-context"
import TeamCard from "./components/teamCard"

const pillarIcons = [Target, Eye]
const coreIcons = [Lightbulb, Handshake, Users]

export default function AboutPage() {
    const { t } = useLanguage()
    const { about } = t
    const [intro, ...rest] = about.text

    // CNPJ e endereço vivem em site.ts; a tradução guarda rótulos e tokens.
    const companyRows = about.company.rows.map((row) => ({
        ...row,
        value: row.value
            .replace("{cnpj}", site.cnpj)
            .replace("{address}", addressLine),
    }))

    return (
        <>
            <PageHero
                eyebrow={about.eyebrow}
                title={about.title}
                description={intro}
            />

            {/* Texto institucional ao lado da ficha da empresa */}
            <Section>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                    <Reveal className="flex flex-col gap-4">
                        {rest.map((paragraph) => (
                            <p
                                key={paragraph}
                                className="text-fg-muted text-lead"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </Reveal>

                    <Reveal delay={100}>
                        <Panel className="group h-full p-6 md:p-8">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-wrap items-center gap-4">
                                    <IconBadge icon={BadgeCheck} />
                                    <h2 className="font-semibold text-fg text-h3">
                                        {about.company.title}
                                    </h2>
                                    <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-accent text-eyebrow uppercase">
                                        {about.company.badge}
                                    </span>
                                </div>

                                <p className="text-[0.9375rem] text-fg-muted leading-relaxed">
                                    {about.company.desc}
                                </p>

                                <dl className="flex flex-col">
                                    {companyRows.map((row) => (
                                        <div
                                            key={row.key}
                                            className="flex flex-col gap-1 border-line border-b py-3.5 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                                        >
                                            <dt className="w-32 shrink-0 font-mono text-eyebrow text-fg-faint uppercase">
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
                    </Reveal>
                </div>
            </Section>

            {/* Pilares */}
            <Section size="compact">
                <Reveal>
                    <SectionHeading
                        eyebrow={about.pillar.eyebrow}
                        title={about.pillar.title}
                        description={about.pillar.desc}
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {about.pillar.card.map((card, index) => (
                        <Reveal key={card.title} delay={index * 80}>
                            <FeatureCard
                                icon={pillarIcons[index]}
                                title={card.title}
                                description={card.description}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Valores */}
            <Section size="compact">
                <Reveal>
                    <SectionHeading
                        eyebrow={about.core.eyebrow}
                        title={about.core.title}
                        description={about.core.desc}
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {about.core.card.map((card, index) => (
                        <Reveal key={card.title} delay={index * 80}>
                            <FeatureCard
                                icon={coreIcons[index]}
                                title={card.title}
                                description={card.description}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Time */}
            <Section size="compact">
                <Reveal>
                    <SectionHeading
                        eyebrow={about.team.eyebrow}
                        title={about.team.title}
                        description={about.team.desc}
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {about.team.card.map((member, index) => (
                        <Reveal key={member.name} delay={index * 80}>
                            <TeamCard
                                name={member.name}
                                position={member.position}
                                image={member.image}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <CtaPanel
                title={about.cta.title}
                description={about.cta.desc}
                button={about.cta.button}
            />
        </>
    )
}
