import nextra from "nextra";

export const config = nextra({
    theme:       "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
})({
    output:       "standalone",
    basePath:     "/viv",
    experimental: {
        turbo:      {},
        turbotrace: {},
    },
    images:       {
        unoptimized:    true,
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
});

export default config;
