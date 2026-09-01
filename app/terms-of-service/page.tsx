"use client"

import { LegalPage } from "../_components/ui/legal-page"
import { useLanguage } from "../language-context"

export default function TermsOfService() {
    const { t } = useLanguage()

    return (
        <LegalPage
            title={t.termsOfUse.title}
            lastUpdate={t.termsOfUse.lastUpdate}
            contact={t.termsOfUse.contact}
            sections={t.termsOfUse.sections}
            backLabel={t.nav.back}
        />
    )
}
