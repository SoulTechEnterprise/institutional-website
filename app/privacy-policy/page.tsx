"use client"

import { LegalPage } from "../_components/ui/legal-page"
import { useLanguage } from "../language-context"

export default function PrivacyPolicy() {
    const { t } = useLanguage()

    return (
        <LegalPage
            title={t.privacyPolicy.title}
            lastUpdate={t.privacyPolicy.lastUpdate}
            contact={t.privacyPolicy.contact}
            sections={t.privacyPolicy.sections}
            backLabel={t.nav.back}
        />
    )
}
