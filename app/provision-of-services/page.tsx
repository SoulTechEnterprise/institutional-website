"use client"

import {
    Boxes,
    Compass,
    LayoutGrid,
    Palette,
    RefreshCw,
    Workflow,
} from "lucide-react"
import { CtaPanel } from "../_components/ui/cta-panel"
import { PageHero } from "../_components/ui/page-hero"
import { FeatureCard } from "../_components/ui/panel"
import { Reveal } from "../_components/ui/reveal"
import { Section } from "../_components/ui/section"
import { useLanguage } from "../language-context"

const icons = [Boxes, LayoutGrid, Workflow, Palette, Compass, RefreshCw]

export default function ServicesPage() {
    const { t } = useLanguage()
    const { services } = t

    return (
        <>
            <PageHero
                eyebrow={services.eyebrow}
                title={services.title}
                description={services.desc}
            />

            <Section>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.cards.map((card, index) => (
                        <Reveal key={card.title} delay={(index % 3) * 80}>
                            <FeatureCard
                                icon={icons[index]}
                                title={card.title}
                                description={card.desc}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <CtaPanel
                title={services.cta.title}
                description={services.cta.desc}
                button={services.cta.button}
            />
        </>
    )
}
