"use client"

import { CtaPanel } from "../_components/ui/cta-panel"
import { PageHero } from "../_components/ui/page-hero"
import { Reveal } from "../_components/ui/reveal"
import { Section, SectionHeading } from "../_components/ui/section"
import { useLanguage } from "../language-context"
import Card from "./components/card"

export default function Projects() {
    const { t } = useLanguage()
    const { projects } = t

    // Separar cases de projetos de estudo evita que trabalho de cliente e
    // exercício de curso disputem o mesmo peso visual na mesma grade.
    const cases = projects.card.filter((project) => project.featured)
    const lab = projects.card.filter((project) => !project.featured)

    return (
        <>
            <PageHero
                eyebrow={projects.eyebrow}
                title={projects.title}
                description={projects.desc}
            />

            <Section>
                <Reveal>
                    <SectionHeading
                        title={projects.featuredTitle}
                        description={projects.featuredDesc}
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {cases.map((project, index) => (
                        <Reveal key={project.title} delay={(index % 2) * 90}>
                            <Card
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
            </Section>

            <Section size="compact">
                <Reveal>
                    <SectionHeading
                        title={projects.labTitle}
                        description={projects.labDesc}
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {lab.map((project, index) => (
                        <Reveal key={project.title} delay={(index % 4) * 70}>
                            <Card
                                src={project.src}
                                title={project.title}
                                desc={project.desc}
                                tag={project.tag}
                                link={project.url}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <CtaPanel
                title={t.home.cta.title}
                description={t.home.cta.desc}
                button={t.home.cta.primary}
            />
        </>
    )
}
