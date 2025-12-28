import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "standalone",
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    async headers() {
        return [
            {
                source: "/:all*(svg|jpg|png)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ]
    },
}

export default nextConfig
