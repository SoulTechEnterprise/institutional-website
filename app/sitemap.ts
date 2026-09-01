import type { MetadataRoute } from "next"
import { site } from "./_utils/site"

const routes = [
    { path: "/", priority: 1 },
    { path: "/provision-of-services", priority: 0.9 },
    { path: "/projects", priority: 0.8 },
    { path: "/about-us", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-service", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return routes.map(({ path, priority }) => ({
        url: `${site.url}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority,
    }))
}
